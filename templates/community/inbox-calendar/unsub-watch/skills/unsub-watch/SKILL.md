---
name: unsub-watch
description: "Use this when auditing a Gmail inbox for marketing lists or newsletters, running the daily unsubscribe check, or acting on the owner's unsubscribe picks."
---

# Unsub Watch

## Never touch
Banks, cards, insurance, utilities, government, schools, youth sports, medical, employers, airlines and hotels, shipping and order updates, 2FA and security mail, paid-product billing, and any domain the owner emailed in the last 365 days. Never cancel a paid product. Never delete mail.

## Classify each sender
- KEEP: on the owner's keep list. Skip it.
- AUTO: on the owner's approved list. Unsubscribe without asking.
- ASK: any first-seen marketing, newsletter, survey, or recruiting sender. Wait for the owner.

## Unsubscribe order
1. RFC 8058 one-click: when List-Unsubscribe has an https URL and List-Unsubscribe-Post is set, POST `List-Unsubscribe=One-Click`. A 2xx response counts as success.
2. Otherwise use the https List-Unsubscribe or footer link on the sender's own domain or its email provider. Submit a simple confirm form if there's no login, and check that the page confirms.
3. Stop and mark FAILED if it needs a login, password, CAPTCHA, or a manage-plan or cancel page, or if no link exists.
Never send mailto or "please remove me" emails. For shared platforms like an applicant-tracking system, unsubscribe only that one company's list. Do at most 20 senders per run.

## Telling the owner
Keep it short, with no stats or essays.
- After unsubscribes, send one line naming what was unsubscribed.
- Mention a failure in one line, with a fallback offer: a Gmail label-and-archive, never delete.
- When there are ASK senders, send a multi-select question widget instead of asking for typed replies. Give each sender an option with the sender name as the label and the email address plus a short note as the description (for example "Job-match alerts" or "Recruiter outreach, no unsubscribe link"). Use values like `unsub <domain>`. End with a "Keep all" option, and use a second widget past 6 options. Anything not picked stays ASK. Don't re-ask senders that are already pending.
- When the owner picks, act on the picked senders, move them to AUTO, and confirm in one line. Move senders the owner says to keep onto the keep list.

## State
Keep the keep list, approved list, pending ASK list, log, and last-run time in a workspace folder so each run only scans new mail since the last run.
