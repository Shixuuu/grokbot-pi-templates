---
name: scrubbed-public-bot-clone
description: "Use when publishing or restaging any Public Grok Bot template: require a scrubbed Public twin first; never export from a live private-ops instance."
---

# Scrubbed public bot clone (before publish)

Use this whenever the OWNER is about to **Publish / restage / update** a Public Grok Bot template.

## Hard gate

1. **Never** call `create_bot_share_json` / export-bot-template from a live ops instance that holds private books, balances, addresses, employer pay, intimate chat memory, host paths, or personal emails.
2. First create or reuse a **scrubbed Public twin** (separate agent), then export **only from that twin**.
3. Before export, self-check the twin: profile description + memories + skills + routines must pass the deny-list below.
4. After publish, compare the live `https://x.ai/bot/<shareId>` page blurb. If any deny-list hit appears, unpublish/restage from a cleaner twin immediately.

## Deny-list (never in Public pack)

- Full or last-4 account numbers, PANs, routing, SSN, VIN
- Street addresses, unit numbers, landlord names
- Employer names + net pay amounts as standing facts
- Live balances, APRs tied to named real accounts, friend-loan amounts with names
- Personal email handles as secrets, phone numbers, member numbers
- Host paths like home profile dirs, vault dirs, secret filenames
- Intimate chat logs, casefiles, bank session cookies

## Allow-list (OK)

- Generic workflow copy, consent-first rails, output shapes
- Placeholder examples (`...XXXX`, `$N`, `DATE`)
- Skills that teach process without owner numbers

## Twin naming

Prefer `BotName Public`. Keep the live ops bot private; only the twin is ever exported.

## After export

Marketplace teammates may use the new share id. Do not re-point export to the dirty live agent later.
