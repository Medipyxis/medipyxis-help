---
id: admin-notifications
title: Notification settings and channels
module: admin
audience: [admin, clinician, bd_rep, biller, intake]
roles: [admin, superadmin, bd_rep, bd_manager]
type: reference
estimated_minutes: 5
last_reviewed: 2026-08-28
app_route: /settings/notifications
related:
  - admin-user-management
  - admin-index
tags: [notifications, alerts, settings, email, sms]
---

Medipyxis notifies you when something needs your attention — a new BD activity flag, a claim status change, a referral update. This page explains which channels are live, how each user manages their preferences, and what happens when a channel is not yet launched.

## Channels at a glance

| Channel | Status | What it does |
|---|---|---|
| **In-app** | Live | Notification bell in the top nav. Every event that matches a recipient rule appears here. |
| **Email** | Live | Detailed alert to the user's registered email address. |
| **SMS** | Coming soon | Text messages for time-sensitive alerts. Backend is built and tested — not yet launched. |
| **Push** | Coming soon | Mobile push through the Medipyxis app. |

The in-app bell always fires when a notification is generated for you, regardless of which channels you choose for delivery. Turning off email or muting SMS does not silence the bell — it silences the outbound delivery.

## Where users manage preferences

Every user can open their own preferences at:

- `/settings/notifications` — global
- `/facility/{facility_uuid}/settings/notifications` — same page, scoped to the current facility

Admins cannot set preferences on behalf of another user. Direct users to the page above or send them a deep link from an alert.

## BD Rep alert channel

Today the preference surface controls one event family: **BD Rep alerts** (activity flags, missed check-ins, follow-up escalations for Business Development reps and managers). Users choose one of four methods:

| Method | Delivery |
|---|---|
| **Email Alerts** | In-app bell + email |
| **SMS Text Messages** | In-app bell + SMS (falls back to email until SMS launches) |
| **All Channels** | In-app bell + email + SMS (falls back to email-only until SMS launches) |
| **Pause Alerts** | In-app bell only — outbound delivery is muted |

Other event families (billing, referral, clinical) use system defaults today. A per-event preference surface for those families is on the roadmap.

## What happens before SMS launches

If a user picks **SMS Text Messages** or **All Channels** while SMS is still in the coming-soon state:

- The preference is saved as chosen.
- Delivery falls back to email so the alert still reaches the user.
- The settings page shows a banner explaining the fallback: "Your saved choice was SMS, which needs text messaging. We've kept that on file and you'll receive these alerts by email in the meantime."
- When SMS launches, the user's saved preference activates automatically — no action needed.

This is deliberate. Offering a channel the backend suppresses would be a broken promise, so the UI marks SMS and All Channels as pending and delivers on the closest working channel.

## In-app notification bell

Every generated notification lands in the bell in the top-right of the app, whether or not the user has email or SMS enabled. The bell shows:

- Unread count
- Title, message body, and timestamp
- Deep link back to the record that triggered the notification (referral, claim, BD activity)
- Dismiss button

Dismissing a notification hides it from the bell list but preserves the audit record — every notification is logged in `party_notifications` with recipient, event key, dispatch time, and read/dismissed timestamps.

## Event families reference

For admins and integrators tracking what generates a notification today:

| Event family | Trigger examples | Where it appears |
|---|---|---|
| `bd_rep_alert_preferences` | BD rep missed check-in, activity threshold breached | Bell + user-chosen channel |
| `referral.*` | New referral, status change, missing insurance | Bell + email (system default) |
| `billing.*` | Denied claim, ERA posted, work-queue task assigned | Bell + email (system default) |
| `clinical.*` | Signed note needs addendum, LCD guardrail alert | Bell + email (system default) |

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| User is not receiving email alerts | Registered email is missing or wrong | Update the email in **Admin → User Management** and ask the user to save preferences again |
| User asks why SMS never arrived | SMS channel is not yet launched | Point them to the banner on their settings page — email is the fallback |
| Bell shows nothing but the user expects alerts | Recipient rules did not include them for this event | Confirm the user's role has the required grant in **Role Config** |
| Duplicate BD alerts in the bell | Multiple facilities generated the same event | Dismiss any one of them — the other duplicates in the same event family are marked read together |

## Related admin tasks

- Assign roles that carry notification grants — **[Role Config](./role-config.md)**
- Verify each user's email address is correct — **[User Management](./user-management.md)**
