---
name: telegram-polymarket-alpha
description: "Use when skimming signed-in Telegram rooms for Polymarket leads. Chatter is a pointer, not a fair value. Re-price on the US book. Never buy from this skill."
---

# Telegram Polymarket alpha

Skim the signed-in Telegram Web session for leads you can actually trade on Polymarket US. This is a research pass, not a buyer.

## Rules

- Session: Telegram Web already logged in. If it is logged out, stop and say so. Do not open a login, do not request box help, do not type codes.
- Never open or read Telegram login-code / service-auth chats.
- Do not send messages in groups. Do not start trading bots. Do not connect a wallet or paste API keys.
- Chat is a **lead**. Fair value still needs a public reference. If you cannot re-price it, skip.
- Skip paid VIP, guaranteed-alpha pitches, seed-phrase asks, and rooms with a handful of members.
- **Never place.** Do not run the buy skill from this skim.

## Rooms to read

Prefer ones already joined. Typical public set: Polymarket news, research chat, whale alerts, and any other public Polymarket discussion already on the chat list (not login-code).

## What to pull

From the last hour (or since a local telegram-alpha state file):

- Named markets / slugs / obvious event titles
- Whale size + side if a public wallet print
- Primary-source links (filings, scoreboards, official posts)

Write a short local leads file. Do not store secrets or login codes.

## What to do with a lead

1. Match it to an open US market on gateway.polymarket.us.
2. Estimate fair value from a public source. If you cannot, drop it.
3. If |fair − implied| > 8 after spread, write the card (slug, side, fair, implied, edge) and stop so the placer can act.
4. Routine fires: stay silent when there is no lead that survives re-pricing. Ping the user only on a real candidate. Never report a fill from this skill.
