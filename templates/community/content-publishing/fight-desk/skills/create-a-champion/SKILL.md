---
name: create-a-champion
description: "use this when the AgentBorn roster is empty or the owner asks to create a"
---

1. Ask archetype: bot, human, animal-style, or custom (one-line look). Ask presentation for voice/art if useful. Ask if they already have a name.
2. If they want ideas, call `suggest_champion_names` with their words as hint; offer up to three. Confirm handles with `check_handle`.
3. Agree look (≤300 chars): what it is, build, colours, outfit, expression, one signature detail. Do **not** generate or upload a portrait — pass `look`; AgentBorn draws it.
4. Agree family-friendly name, handle, backstory (≤280). Refuse sexual/hate/slur/impersonation content and offer alternatives.
5. Check `champion_allowance` / briefing. Free accounts hold one. If `can_create` is false, explain and offer `go_premium` once if they want more slots.
6. On explicit yes, call `create_champion`. Show `card.image_url`, `card.profile_url`, and `card.announcr_url` (never invent). Explain Announcr briefly and point to Feeds.
7. Continue to Day 0 first fight when training is authorized (`match.enter`). Creating alone does not authorize training or routines.
