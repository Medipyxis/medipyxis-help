#!/usr/bin/env node
// MEDA-379: bot verification of Help Center factual claims.
//
// Every claim in verification/claims/*.json is checked against the product as
// shipped: a pinned medipyxis-core release tag (code) and GitHub PR metadata.
// A claim is CONFIRMED only when every one of its checks passes here. Human
// review does not confirm a claim.
//
// Usage:
//   node verification/verify.mjs --core ../medipyxis-core [--ref v1.1.345] [--out report.md] [--strict]
//
// --ref defaults to the latest published (non-prerelease) medipyxis-core
// release, which is what production runs. --strict exits 1 when any live
// claim is not confirmed.

import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opt = (name, dflt) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : dflt;
};
const core = opt("core", join(here, "..", "..", "medipyxis-core"));
const strict = args.includes("--strict");
const coreRepo = "Medipyxis/medipyxis-core";

function sh(cmd, argv, { allowFail = false } = {}) {
  try {
    return execFileSync(cmd, argv, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024, stdio: ["ignore", "pipe", "pipe"] });
  } catch (e) {
    if (allowFail) return e.stdout?.toString() ?? "";
    throw e;
  }
}

function latestRelease() {
  const json = sh("gh", ["release", "view", "--repo", coreRepo, "--json", "tagName,isPrerelease,publishedAt"]);
  const r = JSON.parse(json);
  if (r.isPrerelease) throw new Error(`latest release ${r.tagName} is a prerelease`);
  return r;
}

const release = opt("ref") ? { tagName: opt("ref"), publishedAt: "(pinned by --ref)" } : latestRelease();
const ref = release.tagName;
sh("git", ["-C", core, "fetch", "--quiet", "origin", "tag", ref, "--no-tags"], { allowFail: true });
const refSha = sh("git", ["-C", core, "rev-parse", "--short", `${ref}^{commit}`]).trim();

const prCache = new Map();
function pr(n) {
  if (!prCache.has(n)) {
    const out = sh("gh", ["pr", "view", String(n), "--repo", coreRepo, "--json", "number,title,state,mergedAt,baseRefName"]);
    prCache.set(n, JSON.parse(out));
  }
  return prCache.get(n);
}

// Each check returns { pass, detail }. A check passes when the product
// matches what the Help Center text says.
const CHECKS = {
  grep(c) {
    const at = c.ref || ref;
    // A misspelt path would make an "absent" check pass vacuously.
    for (const p of c.paths || []) {
      if (!sh("git", ["-C", core, "ls-tree", "--name-only", at, "--", p.replace(/\/$/, "")], { allowFail: true }).trim()) {
        return { pass: false, detail: `path ${p} does not exist at ${at}` };
      }
    }
    const argv = ["-C", core, "grep", "-n", "-I"];
    argv.push(c.fixed ? "-F" : "-E");
    if (c.ignoreCase) argv.push("-i");
    argv.push("-e", c.pattern, at, "--", ...(c.paths || ["."]));
    const hits = sh("git", argv, { allowFail: true })
      .split("\n")
      .filter(Boolean)
      .filter((l) => !(c.excludeTests && /(__tests__|\.test\.|\.spec\.|\/cypress\/)/.test(l)));
    const n = hits.length;
    let pass;
    if (c.expect === "present") pass = n > 0;
    else if (c.expect === "absent") pass = n === 0;
    else if (typeof c.expect === "object" && c.expect.count !== undefined) pass = n === c.expect.count;
    else if (typeof c.expect === "object" && c.expect.min !== undefined) pass = n >= c.expect.min;
    else throw new Error(`grep check needs expect: ${JSON.stringify(c)}`);
    const sample = hits.slice(0, 3).map((h) => h.replace(`${at}:`, "")).join("\n      ");
    return { pass, detail: `git grep ${c.fixed ? "-F " : ""}${JSON.stringify(c.pattern)} @${at} -- ${(c.paths || ["."]).join(" ")} → ${n} hit(s), expected ${JSON.stringify(c.expect)}${sample ? `\n      ${sample}` : ""}` };
  },
  file(c) {
    const at = c.ref || ref;
    const found = sh("git", ["-C", core, "ls-tree", "--name-only", at, "--", c.path], { allowFail: true }).trim() !== "";
    const pass = c.expect === "absent" ? !found : found;
    return { pass, detail: `${c.path} ${found ? "exists" : "does not exist"} @${at}, expected ${c.expect}` };
  },
  pr(c) {
    const p = pr(c.number);
    const merged = p.state === "MERGED";
    let pass = merged;
    // Only the matched part of a title is printed: PR titles can carry names.
    const m = c.titleMatch ? p.title.match(new RegExp(c.titleMatch, "i")) : null;
    let why = `#${p.number} ${p.state}${p.mergedAt ? ` ${p.mergedAt.slice(0, 10)}` : ""}${m ? ` title matches "${m[0]}"` : ""}`;
    if (merged && c.mergedFrom && p.mergedAt.slice(0, 10) < c.mergedFrom) { pass = false; why += ` (before ${c.mergedFrom})`; }
    if (merged && c.mergedTo && p.mergedAt.slice(0, 10) > c.mergedTo) { pass = false; why += ` (after ${c.mergedTo})`; }
    if (merged && c.titleMatch && !m) { pass = false; why += ` (title "${p.title}" does not match /${c.titleMatch}/)`; }
    return { pass, detail: why };
  },
};

function runClaim(claim) {
  const results = (claim.checks || []).map((c) => {
    const fn = CHECKS[c.type];
    if (!fn) throw new Error(`unknown check type ${c.type} in ${claim.id}`);
    return { ...fn(c), note: c.note };
  });
  const allPass = results.length > 0 && results.every((r) => r.pass);
  let verdict;
  if (claim.status === "removed") {
    // The old article stated this; the checks encode the old statement. It was
    // removed because the product contradicts it, so the checks must fail.
    verdict = results.length > 0 && !allPass ? "REMOVED: confirmed false" : results.length === 0 ? "REMOVED: no check" : "REMOVED BUT CHECKS PASS";
  } else if (results.length === 0) verdict = "NOT CONFIRMED: no automated check";
  else if (!allPass) verdict = "NOT CONFIRMED: check failed";
  // A merged PR with a matching title shows the change was made, not that it
  // is in the release under test. Such claims are reported separately.
  else verdict = (claim.checks || []).every((c) => c.type === "pr") ? "PR EVIDENCE ONLY" : "CONFIRMED";
  return { ...claim, results, verdict };
}

const files = readdirSync(join(here, "claims")).filter((f) => f.endsWith(".json")).sort();
const articles = files.map((f) => JSON.parse(readFileSync(join(here, "claims", f), "utf8")));

const lines = [];
let notConfirmed = 0;
let confirmed = 0;
let prOnly = 0;
lines.push(`# Help Center claim verification report`, ``);
lines.push(`- Product under test: \`${coreRepo}\` release **${ref}** (\`${refSha}\`), published ${release.publishedAt}`);
lines.push(`- Run at: ${new Date().toISOString()}`);
lines.push(`- Runner: \`node verification/verify.mjs\` (MEDA-379). A claim counts as confirmed only when every check below passes.`, ``);

for (const a of articles) {
  const rows = a.claims.map(runClaim);
  const c = rows.filter((r) => r.verdict === "CONFIRMED").length;
  const live = rows.filter((r) => r.status !== "removed");
  const pe = live.filter((r) => r.verdict === "PR EVIDENCE ONLY").length;
  const nc = live.filter((r) => r.verdict !== "CONFIRMED" && r.verdict !== "PR EVIDENCE ONLY").length;
  confirmed += c;
  prOnly += pe;
  notConfirmed += nc;
  lines.push(`## ${a.title}`, ``, `Source: \`${a.source}\` — ${a.url}`, ``);
  lines.push(`Live claims: ${live.length} · confirmed ${c} · PR evidence only ${pe} · not confirmed ${nc} · removed ${rows.length - live.length}`, ``);
  for (const r of rows) {
    lines.push(`### ${r.id} — ${r.verdict}`, ``, `> ${r.claim}`, ``);
    if (r.reason) lines.push(`${r.reason}`, ``);
    for (const x of r.results) lines.push(`- ${x.pass ? "PASS" : "FAIL"} ${x.detail}${x.note ? `  \n  _${x.note}_` : ""}`);
    lines.push(``);
  }
}
lines.splice(4, 0, `- Totals: ${confirmed} confirmed by a product check, ${prOnly} supported by PR metadata only (not proof the change is in ${ref}), ${notConfirmed} not confirmed`);

const report = lines.join("\n");
const out = opt("out");
if (out) writeFileSync(out, report);
else process.stdout.write(report + "\n");
console.error(`${ref}: ${confirmed} confirmed, ${prOnly} PR evidence only, ${notConfirmed} not confirmed`);
if (strict && notConfirmed + prOnly > 0) process.exit(1);
