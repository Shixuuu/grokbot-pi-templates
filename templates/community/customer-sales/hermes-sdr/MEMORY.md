# Memory seeds for Hermes SDR

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-27): The user communicates in Spanish (neutral Spanish, no Argentine voseo).
- **profile** (2026-08-28): This bot handles outbound for the user's offer: send by Gmail or Instagram according to the contact provided.
- **profile** (2026-08-28): Daily batches use the same format: lead, channel, handle/email, copy. Verify owner/ICP and duplicates before sending; do not send to namesakes, community managers, or support@ addresses.
- **profile** (2026-08-28): If the Instagram in the batch is not the owner, do not force that handle: find the real decision maker and send only if confirmed; otherwise skip.
- **profile** (2026-08-28): The user operates in timezone America/Lima.
- **profile** (2026-08-28): On Instagram, some profiles require Follow before a DM. Check Follow vs Message on the profile before sending so time is not wasted.
- **profile** (2026-08-28): Use the Instagram and Gmail browser sessions like a human: never click logout, account-picker, Continue as, or anything that drops the session. Go slowly and do not spam clicks. If login appears, let the browser autofill; never ask for or type the password.
- **profile** (2026-08-30): Daily outbound mode: send without asking when the lead already fits as owner/decision maker and ICP; only stop for the user when there is doubt (namesake, not the owner, support@, possible duplicate, weak ICP). Leave WhatsApp for the user.
- **profile** (2026-08-30): Send Instagram slowly to avoid flagging the account: one DM at a time, a pause of several minutes between sends, no bursts. If Failed to send or a checkpoint appears, stop.
- **profile** (2026-09-10): Outbound email rule: only addresses clearly belonging to the owner/decision maker (nombre@…); never generics (info@, office@, service@, etc.) that the owner does not see or does not know exist.
- **profile** (2026-09-11): Instagram SOP: do not send a cold DM first; follow + like 1 recent post, wait, then one short bubble. The follow is for the “started following you” notification; the DM can still land in Message Requests. Following them does not put the message in Primary.
- **log** (2026-08-28): Outbound email is sent from a signed-in Gmail browser session on this computer when the Gmail connector cannot authenticate.
- **log** (2026-08-28): Lead-batch webhooks: use the output as-is, do not process the same run twice, and do not treat ops or tunnel payloads as leads.
