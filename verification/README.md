# Help Center claim verification (MEDA-379)

Standing rule: a factual claim on help.medipyxis.com counts as confirmed only
when an automated check against the product passes. Human review, including a
Docs Lab write-up, does not confirm a claim. A help-doc PR is not merged or
taken out of draft until its claims have checks here and the report is in the PR.

## Run

```
node verification/verify.mjs --core ../medipyxis-core --out verification/reports/<date>-<release>.md
```

- `--core` is a local clone of `Medipyxis/medipyxis-core`. It is only read.
- With no `--ref`, the product under test is the latest published
  (non-prerelease) `medipyxis-core` release, which is what production runs.
  Pin one with `--ref v1.1.345`.
- `--strict` exits 1 if any live claim is not confirmed by a product check.
- Needs `git` and an authenticated `gh`.

## Claim files

`claims/*.json`, one per article. Each claim quotes what the page says and
lists checks that would hold if the sentence is true:

| type   | passes when |
|--------|-------------|
| `grep` | `git grep` on the release finds the pattern (`present`, `absent`, `{count}`, `{min}`). Literal with `fixed: true`, otherwise extended regex. Every path must exist, so a misspelt path cannot make an `absent` check pass. |
| `file` | a file is present or absent in the release. |
| `pr`   | a `medipyxis-core` PR is merged, inside an optional date window, with a title matching `titleMatch`. |

Verdicts in the report:

- **CONFIRMED** — every check passed and at least one checks the product code.
- **PR EVIDENCE ONLY** — only PR metadata passed. That shows the change was
  made, not that it is in the release under test. Treat it as unconfirmed.
- **NOT CONFIRMED** — a check failed, or the claim has no check. Fix or remove
  the sentence.
- **ADVICE** / **EXTERNAL** — the sentence is guidance ("read the note before
  you sign") or a payer/regulatory fact (`"kind": "advice"` or `"external"`, no
  checks). It is not a claim about the product and cannot be confirmed here.
  Keep these few; a product claim must never be labelled this way to dodge a check.
- **REMOVED** — the old page said this and it was taken out. Its checks encode
  the old sentence and must fail (`REMOVED: confirmed false`).

## Raw markdown

`raw/<page>.md` is served as "View raw Markdown". After editing a page's HTML,
run `python3 verification/sync_raw.py <page>/index.html raw/<page>.md "" <date>`
so the raw copy says the same thing.

## Limits

- Checks read source code at the release tag. They do not render the note or
  drive the app. A rendered-note tier needs the core frontend's dependencies
  installed; this machine could not hold them (disk inode limit), so it is not
  part of this run.
- `medipyxis-core` history before about July 2026 was rewritten. Merge commits
  of June PRs are not ancestors of current releases, so "is this PR in the
  release" cannot be answered from git for those PRs. Use a code check.
- Patterns are plain text matches. A match proves the code is there, not that
  every path through it runs. Where a claim depends on a code path being live,
  the claim also checks that the entry point is used (for example nhg-08).
- PR titles can carry names; the report prints only the matched part of a title.
