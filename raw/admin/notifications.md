---
id: admin-notifications
title: Notification settings and channels
module: admin
audience: [admin, clinician, bd_rep, biller, intake]
roles: [admin, superadmin, bd_rep, bd_manager]
type: reference
estimated_minutes: 5
last_reviewed: 2026-11-11
app_route: /settings/notifications
related:
  - admin-user-management
  - admin-index
tags: [notifications, alerts, settings, email, sms]
---

Medipyxis notifies you when something needs your attention. This page explains which channels are live, where each person sets their own preferences, and how the notification bell works.

## Channels at a glance

| Channel | Status | What it does |
|---|---|---|
| **In-app** | Live | The notification bell in the top bar. |
| **Email** | Live | An alert to the person's email address. |
| **SMS** | Live | A text message to the person's phone. |
| **Push** | Coming soon | Mobile push notifications. Not available yet. |

Every alert also appears in the notification bell, whatever delivery method a person chooses.

## Where people set their preferences

Each person sets their own preferences. Open the profile menu (top right), click **Settings**, and use **Alert Method** under **Notification Preferences**, or click **More notification settings** to open the full **Notification Settings** page (`/settings/notifications`).

The **Notification Settings** page has three parts:

- **How we reach you** — the default for alerts outside the app, BD Rep alerts included.
- **By notification type** — change one type without touching the default. Types are grouped, for example Clinical, Billing, HR, Inventory, Messages, Onboarding, Operations and Referrals. Types you have not changed follow your default.
- **Recent alerts** — what was sent to you and how.

## Delivery methods

In **How we reach you**, choose one of four methods and click **Save Preferences**:

| Method | Delivery |
|---|---|
| **Email Alerts** | Alerts delivered to your inbox |
| **SMS Text Messages** | Alerts sent to your phone |
| **All Channels** | Email and SMS together |
| **Pause Alerts** | No email or text, except critical alerts (where email is allowed) and any type you changed separately. The bell still shows everything. |

Clinical alerts cannot be hidden from the bell.

## In-app notification bell

The bell is in the top bar. It shows a badge with your unread count, and opening it lists your notifications. Click a notification to open it, use **Mark all read** to clear the count, or open the full notifications page from the bell.

## Troubleshooting

| Symptom | Likely cause | What to do |
|---|---|---|
| Someone is not receiving email alerts | Their method is Pause Alerts, or their email address is wrong | Ask them to check **Notification Settings**; fix the address in **HR & Compliance → Facility Users** |
| Someone wants alerts for one type only | — | Set their default to **Pause Alerts** and turn that type on under **By notification type** |
| Someone is not getting an alert they expect | They may not be a recipient of that alert, or cannot open that feature | Check their role's features in [Organization Role Config](/admin/role-config/) |

## Related admin tasks

- Choose which features each role can open — **[Role Config](/admin/role-config/)**
- Check each person's email address — **[User Management](/admin/user-management/)**
