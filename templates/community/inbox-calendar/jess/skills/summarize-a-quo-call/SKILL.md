---
name: summarize-a-quo-call
description: "use this when the owner asks to summarize a Quo/OpenPhone call; only contacts whose name includes client or customer"
---

Use this when the owner wants a call reviewed from Quo (formerly OpenPhone). Assumes signed in to Quo on the business account. Read-only: never place a call, send a text, change settings, or click Upgrade unless the owner explicitly asks.

Quo's on-screen AI summary disappears without the paid plan. Do not treat that box as the source of truth. Use View transcript (full transcript) when it is available; if transcripts go away, download the recording and listen.

Filter (required)
Only review a call if the contact name includes client or customer (case-insensitive), including tags like R-Client and R-Potential Client.

Skip staff, contractors, QC, team leads, and unlabeled contacts unless the owner names that specific call.

Inputs
- {query}: phone number or contact name
- {time}: when the call happened, owner's local timezone
- {inbox}: which connected inbox, if specified

Steps
1. Open the Calls list for the inbox, or search the phone system's search URL (digits only for a number). Global search sometimes errors; if so, browse the Calls tab.
2. Skip any row whose name does not include client/customer, unless the owner named that call.
3. Open the matching conversation or call. Confirm contact name, number, inbound/outbound/missed, and duration. Report times in the owner's local timezone.
4. Open View transcript and use the full transcript. Do not use the short AI summary as the source of truth. Redact card numbers, CVV, expiry, door codes, and garage codes from anything you report.
5. If the call is not in the primary inbox, check the other connected inboxes.

Report (bullets)
- Summary: what the call was about
- Result: booked / not booked / callback / leftover question
- To-dos: who owns each next step

If a Slack channel is designated for call summaries, post the same bullets there after finishing (one message per call). Still redact payment and access codes.

Do not send any message in the phone system, and do not mark the conversation done, unless the owner asks.
