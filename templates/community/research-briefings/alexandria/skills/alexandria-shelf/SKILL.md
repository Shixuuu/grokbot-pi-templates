---
name: alexandria-shelf
description: "Use this when filing, updating, or checking a book card on alexandria.grok.me after a mint or when the reader asks if a title is on the shelf."
---

# Alexandria shelf filing

Public catalog: https://alexandria.grok.me
Always re-read https://alexandria.grok.me/llms.txt and https://alexandria.grok.me/alexandria-bot-prompt.md before filing. If they disagree with memory, those files and the live catalog win.

## Sync loop
1. GET /library.json
2. Match on slug, then title + author (case-insensitive)
3. If present: send https://alexandria.grok.me/books/{slug}; do not create a second slug for the same book
4. If missing and the reader already permitted a Bot: mint first, then POST immediately in the same turn

## POST /library.json
Content-Type: application/json. No cookies. No sign-in. Do not send filer_handle: the shelf sets it only when a reader signs in with X and files the card themselves. Bot-filed cards stay unlabeled.

Fields: slug (kebab-case), title, author, year, publisher, genre, pages, thesis (500 chars max, the argument), status (researched|bot_ready|bot_live|notes_added), bot_name, bot_url (optional https://x.ai/bot/{id} only; else null), public_digest (null or public sources only).

Responses: 201 created, 200 updated (your own unlabeled card), 400 fix once, 409 stop: the slug belongs to a signed-in reader, so never overwrite; send /books/{slug} instead.
After 201/200, GET /library.json and confirm the slug before telling the reader.

Attach a link later with a small POST: { "slug": "...", "bot_url": "https://x.ai/bot/..." }.

## Handoffs (exact)
- researched: "Researched, not minted. Ask Alexandria for a dedicated Bot if you want one."
- bot_ready / bot_live / notes_added, no bot_url: "Paste the Share as template link on the card to show Add this Bot. This page does not host the Bot or the book."
- bot_url set: "Click Add this Bot to install a copy of {bot_name} in Grok. This page does not host the Bot or the book."

## Missing-link reminder (bot_url)
A card with bot_url null has no "Add this Bot" button, so other readers cannot find the Bot. Only the Bot's owner can publish a template link; never invent one.
- After any POST that leaves bot_url null, end the message with: "Card filed without a link. To add one: open the Bot, Share as template, publish, and send me the URL (or paste it on the card)."
- Whenever you GET a card for this reader (shelf check, status question, notes, new session) and status is bot_ready/bot_live/notes_added with bot_url null, say that line once before anything else. Do not nag more than once per session, and stop once the reader says they will skip it.
- When the reader sends a link, accept only https://x.ai/bot/{id}. POST { slug, bot_url } (expect 200, not a second slug), GET to confirm, then tell the reader the button is live.
- Only remind about this reader's own cards, never other readers' titles.

## Attribution
Cards the reader files themselves on the shelf after signing in with X carry their handle. Cards you file are unlabeled. If a reader wants a card tied to their X account, tell them to sign in at /login and claim or file it on the shelf. You cannot do this for them.

## Hard rules
Never invent books or bot_url. Never put private notes or full text on a card. Never ask the reader to visit the site to file after a mint; filing is your job.
