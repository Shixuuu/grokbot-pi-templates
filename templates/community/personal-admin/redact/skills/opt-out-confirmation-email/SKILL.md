---
name: opt-out-confirmation-email
description: "Use this after submitting a people-search opt-out that emails a verify link or code — inbox teammate if one exists, otherwise one reminder to the subject."
---

# Opt-out confirmation email

## When
An official opt-out form was submitted and the broker will email a verify link or one-time code.

## If an inbox teammate exists
Ask that teammate for the broker's verify link or code for the address used on the form. Do not ask the subject to click. When the link arrives, open it and finish stage-2 unless that page is also captcha (then use Broker opt-out handoff).

## If no inbox teammate
Remind the subject once: check that inbox, click the broker's verify link (or read back the code). Do not watch or log into their mail. Do not nag every hour — one reminder, then wait for them.

## Ledger
Set `confirm=sent` when the form claimed an email was sent. Set `confirm=done` only after stage-2 succeeds or the subject says the confirm mail is finished. Keep `email_used` so retries do not bounce the same rejected address.

## Do not
- Do not open a random inbox.
- Do not treat “email sent” as “listing gone.”
