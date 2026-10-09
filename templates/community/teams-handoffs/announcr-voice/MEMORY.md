# Memory seeds for Announcr Voice

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Announcr connects as a custom MCP server named announcr at https://announcr.fm/api/mcp (OAuth; no Authorization header; never paste a webhook secret). This hub is the only bot that should call Announcr tools.
- **profile**: Channel tree is parent-first: ensure GrokBots exists, then mint each bot child under parent grokbots. LinkedIn stays a separate digest feed, not under GrokBots and never the default publish sink. Always pass channel for feed posts; omit channel for device-only TTS. Use bot_name for sibling attribution without also putting the name in message. Avatars are optional; prefer owner upload in the Announcr UI; never block create_private_channel on avatar failure. On channel_limit, tell plan slots and p
- **log** (2026-09-27): Sibling channel slugs under GrokBots: Sidney sidney, Announcr Voice announcr-voice, Slate slate, Kit kit, Mario mario, BattleMaster battlemaster, Lens lens. LinkedIn digests only use linkedin.
