---
name: linkedin-digest-onboarding
description: "use this when a LinkedIn Watch bot is first imported or needs to re-run setup and onboarding; Announcr is optional"
---

# LinkedIn digest onboarding

Use this on first run after import. Ask **one question at a time** (widget when choices help). As soon as they hand you real work, drop the questionnaire and help.

## Template mode (one line)
**This template is standalone LinkedIn Watch:** when the owner wants spoken/channel digests, connect Announcr on **this** bot (custom MCP). If they already run an Announcr Voice hub as a sibling, do **not** add Announcr here — message that hub instead with bot name + spoken sentence + channel.

## Goal
Stand up a browser-based LinkedIn watch that delivers digests in chat. Spoken Announcr delivery is **optional** — nice if available, never required. Chat digests always work without Announcr.

## Announcr (optional — check first, do not force)

1. **Mode check.** Standalone (this published template): detect Announcr MCP on this bot; offer custom MCP `announcr` at `https://announcr.fm/api/mcp` only if missing and they want spoken/channel. Hub-sibling: if Announcr Voice (or similar) already exists, skip adding Announcr here and route publishes by messaging the hub.
2. **When calling announce tools** (this bot or via hub): always pass `bot_name` (this bot’s name) and an **explicit `channel` for any feed post**.
3. **Dual routing (required):**
   - **LinkedIn digests / LinkedIn-related spoken updates** → channel slug `linkedin` only. Leave the LinkedIn channel intact — do **not** rename or delete it.
   - **Everything else (general announces)** → this bot’s child channel under GrokBots (e.g. name/slug matching the bot) with `bot_name` set to this bot’s name.
   - Never treat `linkedin` as the default sink for non-LinkedIn announces.
4. **Omitting channel = device-only TTS.** If you omit `channel`, publish must stay device-only — it must **never** fall through to `linkedin` or the bot child. Dual-path when useful: channel cards with per-item `{text, link}` on the right channel, plus a short device-only ping. Docs: https://announcr.fm/llms.txt
5. **Channel hierarchy for new setups.** Ensure parent `GrokBots` / slug `grokbots` exists first, then a child named for this bot under that parent (`parent: grokbots` when MCP supports it). Keep `linkedin` as its own channel for digests (separate from the bot feed).
6. **Avatars are optional.** Prefer the owner uploading a PFP in the Announcr channel UI. Skip MCP PFP hunts and top-bar SVG rasterizing. Never block channel create on avatar failure (`avatar_error` is fine; channel still works).
7. **Channel limit.** If create/mint hits `channel_limit` / out of slots: point them at https://announcr.fm/billing — do not retry creates.
8. **If Announcr missing:** say LinkedIn digests still work in chat. Offer (do not require) spoken alerts via Yes / No. If Yes on standalone: add custom MCP. If Yes and they have a hub: point them at hub. Never make Announcr mandatory. Never ask for webhook secrets.

## LinkedIn connect
LinkedIn has no connector. Open LinkedIn in the box browser; if not signed in, hand the desktop for login once. Required for the watch to work.

## Onboarding questions (in order)
1. **What should I watch for?** Topics and/or people (e.g. voice AI, workflow, founders you talk to).
2. **What surfaces?** Default all: feed, DMs/replies, connection requests, profile/post views, jobs. Let them trim.
3. **Job filters?** Remote-only? Minimum salary? Other must-haves?
4. **How often?** Default weekdays three times during waking hours in their timezone (e.g. morning / midday / late afternoon). Confirm or adjust.
5. **How should I sound?** Proactive vs on-demand; short vs detailed digests.
6. **Spoken digests?** Only if Announcr/hub was missing — Yes (standalone MCP or hub) / No (chat only). Skip if Announcr or hub was already available.

## After answers
1. Save preferences to profile memory (Announcr on or chat-only; LinkedIn → `linkedin`; general → this bot’s child under GrokBots).
2. If Announcr is on: ensure `linkedin` exists (leave intact) and the bot child under GrokBots exists. Do not mint unrelated traffic onto `linkedin`. Avatars optional — don’t block on them.
3. Enable/update the LinkedIn weekday routine: chat always; Announcr with explicit channel `linkedin` for digests + optional device ping.
4. Run one first scan; deliver chat digest always. If Announcr is on, also dual-path. If nothing new, say the watch is live and when it next runs.

## Delivery rules (always)
- Chat: every item gets a LinkedIn URL. Baseline; works without Announcr.
- Announcr: no URLs in spoken text; links on CTAs / per-part `{text, link}`; LinkedIn digests → `linkedin` only; general → bot child under GrokBots; omit channel for device-only only; always pass channel for feed posts.
- Stay quiet when nothing changed.
- Never post, comment, react, accept invites, or send LinkedIn messages unless they explicitly ask.
