---
id: getting-started-login-and-setup
title: Log in and set your working facility
module: getting-started
audience: [clinician, intake, admin, billing, bd]
type: quickstart
estimated_minutes: 2
last_reviewed: 2026-11-11
app_route: /login
related:
  - getting-started-welcome
  - getting-started-your-dashboard
  - admin-user-management
tags: [onboarding, login, facility]
---

# Log in and set your working facility

Every Medipyxis session starts with two choices: _who am I_ and _which facility am I working in_. This page gets both right.

## Steps

1. **Go to `https://app.medipyxis.com/login`.**
2. **Enter your email and password.** If this is your first sign-in, set your password first with the link in your welcome email. If you no longer have it, click **Forgot Password?** on the login page.
3. **Click Sign In Securely.** You land on the **Dashboard**.
4. **Check the top-right corner.** Your profile button shows your name, your email, and your role and current facility.
5. **Switch facility (if you have access to more than one).** Click your profile button, then **Switch Facility**, and pick the facility. Facility pages now open for that facility — the URL changes from `/facility/{old-uuid}/...` to `/facility/{new-uuid}/...`.

## Result

You see the **Welcome Back** banner with your name, and the sidebar shows the modules you have permission to use. The green **On Duty** and **HIPAA** badges appear in the banner.

## What you should see in the header

| Element | Where | What it does |
|---|---|---|
| **Medipyxis logo** | Top-left | Click to return to your dashboard |
| **Quick jump** | Top bar | Press `⌘K` / `Ctrl+K` to jump to a page by name |
| **Notifications bell** | Top-right | Shows your notifications with an unread count |
| **Profile button** | Far top-right | Your name, email, role and facility; open it for **Switch Facility**, **Settings** and **Sign Out** |

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| "Invalid email or password" | Typo, or the wrong password | Click **Forgot Password?** on the login page |
| **Switch Facility** is greyed out | You have access to only one facility | Ask your practice admin to add the facility to your account in **HR & Compliance → Facility Users** |
| Sidebar is missing items | Your role doesn't have access | An admin opens **Administrator → Organization Role Config** and adjusts your role's features |
| Signed out unexpectedly | 30 minutes without activity | Sign in again; see [Security settings](/admin/security-and-compliance/) |

## Related

- [Your dashboard](/getting-started/your-dashboard/)
- [Admin: invite a user](/admin/user-management/)
