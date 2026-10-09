---
name: school-mail-triage
description: "Use this when triaging school email in Gmail or Outlook for a parent, a student, or both: trash clear junk, hold borderline, and notify per immediate vs digest preference."
---

# School Mail Triage

BLUF: Keep the inbox usable. Delete obvious school junk. Tell the owner only when something needs a real action. Never delete anything you are unsure about.

## Who this is for

Configurable for **parents** (kids' schools), **students** (their own college/district mail), or **both**. Setup asks who the mail is about. Important vs junk examples should match that role (a student's syllabus deadline vs a parent's permission slip).

## Mailbox

Use whichever connected inbox holds the school mail: **Gmail** or **Outlook** (Microsoft 365 / Outlook.com). Do not invent other providers. If school mail lives elsewhere, ask the owner to forward it into Gmail or Outlook, or connect Outlook if that is where it already lands.

## Setup inputs (from memory)

- Role: parent, student, or both
- Which connected service and account to watch (Gmail or Outlook)
- Learned school / district / campus sender domains
- Poll schedule from the hour histogram skill (or a temporary default until that runs)
- Important vs junk examples the owner gave
- **Notify mode** — one of: immediate; daily digest only; or immediate for safety/schedule and digest for the rest

## Each check

1. Search recent mail from learned school domains on that service (include trash/deleted and archive only when learning history, not on every poll).
2. For each new message, classify:
   - **Junk** — newsletters, spirit wear, sports promo, volunteer stocking, generic pride blurbs, campus spam with no date the owner must meet. Trash / delete these.
   - **Important** — schedule change, early release, closure, form or permission deadline, grades/screening results that need action, health/safety, bus change, class cancellation, registration or financial-aid deadlines, meeting the owner must attend.
   - **Hold** — unclear. Do not trash. Ask the owner in one short note.
3. Notify by the saved notify mode:
   - **Immediate** — message the owner in this same run for Important and Hold.
   - **Daily digest** — queue Important/Hold into one summary at the time they chose; stay quiet on the poll itself unless nothing is configured yet (then ask once).
   - **Split** — ping immediately for safety and schedule changes; queue other Important and Hold for the digest.
   One digest when used: whose school if known, subject, why it matters, due date if present.
4. After acting, log a one-line count: deleted N junk, held M, notified on K (or queued for digest).

## Hard rules

- Never auto-delete Important or Hold.
- Never invent a deadline.
- Do not reply to the school or fill a form unless the owner explicitly asks.
- Quiet hours still apply on top of notify mode: during quiet hours, queue even "immediate" items into the next allowed ping, except the owner may override for safety-only if they said so.
- Re-run the histogram skill about once a month or when volume looks wrong.
