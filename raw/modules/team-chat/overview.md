---
id: team-chat-overview
title: Team Chat overview
module: team-chat
audience: [clinician, intake, admin, billing, bd]
roles: [np, md, nurse, intake_coordinator, practice_admin, super_admin, biller, bd_rep, bd_manager]
type: how-to
estimated_minutes: 3
last_reviewed: 2026-04-24
app_route: /facility/{facility_uuid}/team-chat
related:
  - referral-intake-overview
tags: [team-chat, messaging, collaboration, communication]
---

# Team Chat overview

Team Chat is Medipyxis's internal messaging surface for real-time communication across your facility — separate from the patient-context **Chat** tab in Referral Intake.

![Team Chat main view showing Conversations and Team tabs](../../assets/team-chat/main.png)

*Team Chat — Conversations tab on left, thread view on right.*

## Two tabs

| Tab | Purpose |
|---|---|
| **Conversations** | Direct and group message threads with individuals or custom groups. Use for focused, ad-hoc conversations. |
| **Team** | Pre-built channels organized by role or department (e.g., #clinical, #billing, #intake). Messages here are visible to all members of the channel. |

Click a conversation or channel in the left rail to open the thread view on the right.

## Sending a message

1. **Click** the conversation or team channel where you want to post.
2. **Type your message** in the input field at the bottom of the thread.
3. **@mention a colleague** by typing `@` followed by their name — they receive a notification badge in the app and, if configured, an email alert.
4. **Attach a file** by clicking the paperclip icon next to the message input. Supported types: PDF, images (PNG, JPG), and common document formats. Files are stored within Medipyxis — do not attach PHI-containing documents through personal email or external services.
5. **Press Enter** (or click **Send**) to post.

## Starting a new conversation

6. **Click the + icon** at the top of the Conversations tab.
7. **Search for or select** one or more teammates.
8. **Type your first message** and press Enter. The thread opens immediately and appears in both participants' Conversations lists.

## Difference from Referral Intake Chat

The **Chat** tab inside a Referral Intake detail panel is scoped to that specific referral record — messages there appear in the referral's audit history and are visible to anyone with access to that referral. Team Chat is a general-purpose messaging tool with no patient-record linkage.

<Warning>
Do not include patient names, dates of birth, or other protected health information in Team Chat messages. Use the Referral Intake Chat tab for patient-specific communication so it stays in the audit trail.
</Warning>

## Related

Auto-rendered from `related:` in frontmatter.
