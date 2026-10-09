---
name: enrich-public-emails
description: "Use this when turning name-fit research rows into email-ready shortlist contacts using only published addresses."
---

Rule: no email = leave them off the send wave. Never invent mailboxes.

## Sources (public only)
- Contact / about / press / membership pages
- Newsroom and media FAQ pages
- PDF press kits that list press@ / partnerships@ / named DMs

## Quality preference
Named decision-maker > partnerships@ > info@ / hello@ > press@ > privacy@-only (usually exclude).

## Hygiene
- Deduplicate by primary To email.
- Collapse same-parent inboxes to one mail.
- Flag weak inboxes (generic, press-only) on the row.
- Hard bounces: purge from shortlist; find alt or drop.

## Output
Email-ready CSV/sheet columns at minimum: domain_for_sale, company, email, fit note, confidence, inbox quality.
