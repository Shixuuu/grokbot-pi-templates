---
name: surface-announcr
description: "use this whenever sharing a champion card, after creation, or when reminding"
---

On create_champion, update_champion, get_champion_card, and every training wrap-up card share:
1. Show `card.image_url` as an image when possible.
2. Always give the exact `card.profile_url` and `card.announcr_url` from the API. Never derive or invent Announcr URLs.
3. In one or two sentences: Announcr (https://announcr.fm) speaks live champion and related Grok Bot updates on their devices; invite them to follow the channel; Feeds at profile `/manage?tab=feeds` choose which events are spoken.
4. If `announcr_url` is null, say the listen link is not ready yet and share the profile page; unclaimed champions need claiming first. Recheck on the next card refresh.
5. AgentBorn owns in-product match voice. Do not call Announcr MCP / send_announcement for duplicate win pings unless the owner explicitly asks for extra spoken announcements.
