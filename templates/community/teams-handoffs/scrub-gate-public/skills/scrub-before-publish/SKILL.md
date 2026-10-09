---
name: scrub-before-publish
description: "Use when republishing a personally used bot: audit, stand/update scrubbed Public twin, pack from twin only, never ship the private live instance."
---

# Scrub Before Publish

Use when the owner wants to publish or restage a Public template for a bot they personally run (private ops instance).

## Goal

Only a scrubbed `{Name} Public` twin stages/publishes. Never `create_bot_share_json` from the private live bot.

## Steps

1. Name source bot + id. Read private `profile.json`. Do not rewrite the private live persona for shipping.
2. Audit for private books: balances, PANs, addresses, employer pay, friend loans, secrets, machine paths, internal gossip. List FAILs.
3. CreateAgent or UpdateAgent the public twin with a scrubbed persona (storefront description is the job only, no by/find-me lines). Leave private bot untouched.
4. SendToAgent the twin only to pack Public via export-bot-template / create_bot_share_json (scrub in args).
5. Tell owner: Publish the twin's card. Block until FAILs clear or owner waives in writing this turn.
6. After LIVE: pass the real `https://x.ai/bot/...` URL to marketplace / ops teammates. Never invent ids.

## Refuse

If asked to "just publish the private one": refuse; require the twin.
