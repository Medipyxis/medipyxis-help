---
id: more-fax-overview
title: More (Fax) overview
module: more-fax
audience: [intake, admin]
roles: [referral_coordinator, clinician, admin]
type: how-to
estimated_minutes: 4
last_reviewed: 2026-11-11
app_route: /facility/{facility_uuid}/more
related:
  - more-fax-send-fax
  - referral-intake-fax-queue-review
tags: [fax, outbound, inbound, review-queue]
---

# More (Fax) overview

The **Fax Center** item in the sidebar is where you send faxes and work with the faxes your clinic receives. The page opens with counts of **Total Faxes**, **Successful**, **Failed** and **Pending**, and four tiles.

![Fax Review Queue with incoming fax rows](../../assets/more-fax/review-queue.png)

_Fax Review Queue — incoming faxes awaiting review._

## Four tiles

| Tile | Purpose |
|---|---|
| **Outgoing Fax Logs** | Send a fax with **New Fax**, and see the faxes your clinic has sent with their delivery status. See [Compose and send an outbound fax](/modules/more-fax/send-fax/). |
| **Received Fax Logs** | The inbox for every incoming fax. Assign a fax to a patient, file it to the patient's chart, or attach it to one of the patient's orders. See [File a received fax to a patient chart](/modules/more-fax/file-to-chart/). |
| **Fax Review Queue** | Incoming faxes that Medipyxis has read automatically, waiting for a person to turn them into new patients. See [Review the Fax Review Queue](/modules/referral-intake/fax-queue-review/). |
| **Fax Settings** | Your fax cover page: logo, Practice Name, Tagline, Accent Color, Return Fax Number, Return Phone Number and Facility Address. |

Fax Center is shown to the roles that have it turned on in **Administrator → Organization Role Config**.

## How incoming faxes are handled

Every fax your clinic receives is listed in **Received Fax Logs**. It is also added to the **Fax Review Queue**, where Medipyxis reads it and fills in the patient details it finds.

Medipyxis never creates a patient from a fax on its own. A person opens each fax in the Fax Review Queue, with the document on one side and the extracted fields on the other, and clicks **Approve & Create Patient**, **Save Changes** or **Reject**.

## Outgoing Fax Logs

The columns are Status, Patient, Receiving Fax, File Name, Document Type, Sent At, Created At, Sent By and Actions.

- Search by patient name or file name, filter by status (Sent, Pending, Failed, Sending, Draft, Cancelled) and by date (Today, This Week, This Month).
- **Export** downloads the filtered list as a CSV file, up to 5,000 rows.
- A failed fax can be retried up to 3 times. A pending or draft fax can be cancelled.
- Each row has an audit history, and a sent fax can be downloaded.

## Related

Auto-rendered from `related:` in frontmatter.
