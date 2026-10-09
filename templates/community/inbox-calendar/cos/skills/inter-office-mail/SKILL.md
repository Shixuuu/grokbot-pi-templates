---
name: inter-office-mail
description: "Use when sorting or routing specialist bot inboxes (Inter Office Mail). Never send from those addresses."
---

Specialist bots keep dedicated inboxes. Call this system Inter Office Mail. Treat each inbox like a manila envelope: durable, persistent, office-internal.

Rules:
1. CoS sorts inbound and routes it to the lane that owns it.
2. No bot sends, replies, or auto-replies from these addresses.
3. The user writes any outbound that looks like them.
4. Do not enable apex Email Routing as a workaround; keep the existing mail host on the apex.
5. One public front door for team mail. Specialist addresses stay for that lane only.
6. Plus-addresses land in the same inbox when subaddressing is on.
7. A clerk may board receipts to the durable intake folder. The clerk does not send mail and does not get the inbox status token.
8. Visual mail is in-scope when attachments persist. Until then, IOM may be text-only.

How to sort:
1. Read the front-door inbox status. Never print the status token.
2. If the receipt has attachments, look at them before routing.
3. Identify the lane: career, site, content, sports, property, home/admin, pipeline, or CoS-only.
4. Route by pinging that specialist with the ask and constraints. Do not dump the user's unfiltered words.
5. Board durable items on the personal board via a cloud coding agent. Never clone that repo onto the Grok Bot VM.
6. Leave a fingerprint only on the user's personal or workspace artifacts.

Never: reply from a bot inbox; message teachers or parents from the bot address; confirm the user's dates, rates, or commitments in suggested copy; put inbox tokens or webhook keys in git or chat.
