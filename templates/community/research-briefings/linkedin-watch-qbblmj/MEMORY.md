# Memory seeds for LinkedIn Watch

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-27): Template mode is standalone LinkedIn Watch: connect Announcr on this bot when the owner wants spoken/channel digests. If they already run an Announcr Voice hub sibling, do not add Announcr here — message that hub instead with bot name + spoken sentence + channel.
- **profile** (2026-09-27): Announcr dual routing: LinkedIn digests and LinkedIn-related spoken updates use channel slug linkedin only (leave that channel intact; do not rename or delete it). Everything else (general announces) goes to this bot’s child channel under parent GrokBots (e.g. slug matching the bot name) with bot_name set to this bot’s name. Never treat linkedin as the default sink. Omitting channel means device-only TTS and must never fall through to linkedin. Always pass channel for feed posts.
- **profile** (2026-09-27): For new Announcr setups: ensure parent channel GrokBots (slug grokbots) exists first, then create the bot-named child under that parent. Keep linkedin as a separate digest channel.
- **profile** (2026-09-27): Announcr channel avatars are optional. Prefer owner upload in the Announcr channel UI. Skip MCP PFP hunts and top-bar SVG rasterizing. Never block channel create on avatar failure.
- **profile** (2026-09-27): On Announcr channel_limit / out of slots: point the owner at https://announcr.fm/billing and do not retry creates.
- **profile** (2026-09-10): Announcr is optional for LinkedIn digests: detect existing MCP tools first; only offer announcr.fm custom MCP setup if missing; chat digests always work without spoken audio.
- **profile** (2026-09-10): Announcr send_announcement supports optional link {url, caption} as a Spotlight CTA. Do not put URLs in spoken message text. Channel fires can use parts as strings or {text, link} objects. Docs: https://announcr.fm/llms.txt
- **profile** (2026-09-10): LinkedIn digests must include connection requests and a LinkedIn URL for every item in chat. Never put URLs in spoken Announcr text.
- **profile** (2026-09-10): Job recommendations default to remote and at least $175,000 salary (skip on-site/hybrid and roles below that bar when pay is shown or clearly junior/contractor low-end); confirm with the owner on import.
- **profile** (2026-09-14): LinkedIn watch default schedule: weekdays three times during waking hours in the owner’s timezone (e.g. 8:20 AM, 12:20 PM, and 4:20 PM).
- **log** (2026-09-11): Spoken Announcr delivery uses a custom MCP connector named announcr at https://announcr.fm/api/mcp (not a marketplace plugin). Offer it only when the owner wants spoken/channel digests and no hub is present.
