---
id: getting-started-login-and-setup
title: Log in and set your working facility
module: getting-started
audience: [clinician, intake, admin, billing, bd]
type: quickstart
estimated_minutes: 2
last_reviewed: 2026-04-24
app_route: /login
related:
  - getting-started-welcome
  - getting-started-your-dashboard
  - admin-user-management
tags: [onboarding, login, facility]
---

# Log in and set your working facility

Every Medipyxis session starts with two choices: *who am I* and *which facility am I working in*. This page gets both right.

## Steps

1. **Go to `https://app.medipyxis.com/login`.** Your practice admin may have a vanity subdomain — if so, use the one they gave you; it works the same way.
2. **Enter your email and password.** If this is your first login, click **First time? Set password** and check your email for the magic link. Passwords must be 12+ characters with one number and one symbol.
3. **Click Sign in.** You land on the **Dashboard**.
4. **Check the top-left header.** The text next to the Medipyxis logo shows your current **Organization**. Below it, your profile card on the top-right shows your role and current **Facility** (for example, "Admin • Premiere Wound Care").
5. **Switch facility (if you have access to more than one).** Click the **Organization Selector** in the top-left and pick the facility you want. Every sidebar link now scopes to that facility — the URL changes from `/facility/{old-uuid}/...` to `/facility/{new-uuid}/...`.

## Result

You see the Welcome Back banner with your name, and the sidebar reflects the modules you have permission to use. The green **On Duty** pill and **HIPAA** badge confirm your session is active and compliant.

<Note>
Facility is "sticky" — Medipyxis remembers the last facility you used and takes you there on next login.
</Note>

## What you should see in the header

| Element | Where | What it does |
|---|---|---|
| **Medipyxis logo** | Top-left | Click to return to your dashboard |
| **Organization Selector** | Top-left, next to logo | Switch facility/organization |
| **Quick Jump** | Top-center | Press `⌘K` / `Ctrl+K` to search anything |
| **Notifications bell** | Top-right | Shows urgent action items with badge count |
| **Profile menu** | Far top-right | Your name, role, facility — click to edit profile or sign out |

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| "Invalid credentials" | Typo, or password has expired | Click **Forgot password** on the login page |
| No facilities listed in selector | Your admin hasn't assigned you yet | Ask your practice admin to open **HR & Compliance → Facility Users** and add you |
| Sidebar is missing items | Your role doesn't have access | Admin opens **Administrator → Organization Role Config** and adjusts your role's features |
| Page redirects in a loop | Stale session cookie | Clear cookies for `app.medipyxis.com` and sign in again |

## Related

- [Your dashboard](./your-dashboard.md)
- [Admin: invite a user](../admin/user-management.md)
