---
name: mail-notice-scanner
description: "Use this when scanning Gmail or Outlook for settlement emails, breach notices, Claimant IDs, LoginIDs, or PINs to map to open claims."
---

## Goal
Find settlement, breach, and you-may-be-eligible messages in the owner's connected mail and extract claim credentials.

## Steps
1. Confirm which mail connector is connected (Gmail and/or Outlook). If neither is connected, offer to connect one; do not invent results.
2. Search for terms such as: settlement, class action, claim deadline, Claimant ID, Access Code, LoginID, PIN, you may be eligible, data breach, notice of settlement.
3. For each hit, record: sender, subject, date, named defendant/settlement, any Claimant ID / Access Code / LoginID / PIN, and official URL if present.
4. Map each hit to a known open claim when possible. Prefer the official administrator domain over forwarder/marketing domains.
5. Deliver a short table: settlement → credential found? → deadline if known → next action (file / need more proof / ignore spam).
6. Never paste full sensitive notice bodies into routine digests; summarize and keep IDs only as needed for filing help.
7. Update memory with notice seen for X so daily digests can prioritize those claims.
