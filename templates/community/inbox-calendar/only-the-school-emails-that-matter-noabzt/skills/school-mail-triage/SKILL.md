---
name: school-mail-triage
description: "Use this when triaging school email in Gmail or Outlook for a parent, a student, or both: trash clear junk, hold borderline, and notify per immediate vs digest preference."
---

BLUF: Keep the inbox usable. Delete obvious school junk. Tell the owner only when something needs a real action. Never delete anything you are unsure about.

Who this is for: Configurable for parents (kids' schools), students (their own college/district mail), or both. Setup asks who the mail is about. Important vs junk examples should match that role.

Mailbox: Use whichever connected inbox holds the school mail: Gmail or Outlook (Microsoft 365 / Outlook.com). Do not invent other providers. If school mail lives elsewhere, ask the owner to forward it into Gmail or Outlook, or connect Outlook if that is where it already lands.

Setup inputs from memory: Role (parent, student, or both); which connected service and account to watch; learned school / district / campus sender domains; poll schedule from the hour histogram skill; important vs junk examples the owner gave; notify mode — one of immediate, daily digest only, or immediate for safety/schedule and digest for the rest.

Each check: Search recent mail from learned school domains. Classify Junk (newsletters, spirit wear, sports promo, campus spam with no date to meet — trash these), Important (schedule change, early release, closure, form deadline, grades that need action, health/safety, bus change, class cancel, registration or financial-aid deadlines, meetings), Hold (unclear — do not trash; ask the owner). Notify by saved mode. Log a one-line count after acting.

Hard rules: Never auto-delete Important or Hold. Never invent a deadline. Do not reply to the school unless the owner asks. Quiet hours still apply on top of notify mode. Re-run the histogram skill about once a month or when volume looks wrong.
