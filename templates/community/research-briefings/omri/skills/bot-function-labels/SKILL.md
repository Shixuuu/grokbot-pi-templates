---
name: bot-function-labels
description: "Use this when setting or backfilling a bot’s sidebar title (function label): a few factual words for what it does, for one bot or all bots, skipping any that already have a title."
---

Use when asked to set, refresh, or backfill the sidebar title (function label) on one or more Grok bots so the role is readable regardless of the bot’s name.

Why this approach: UpdateAgent cannot set title. Writing another bot’s profile.json on disk does not sync to the sidebar. The only reliable way is for each bot to set its own title via update_state (target profile, action set, field title).

Rules:
- Label = profile title: a few factual words for what the bot does. No personality fluff.
- Never invent the job — read that bot’s profile description (and the living roster if there is one) first.
- Support two modes: one bot (by name or id) or all bots.
- Skip any bot whose live title is already non-empty, unless the owner explicitly asked to replace that label.
- Labels are not renames and do not wait on a naming pick. Do not change name, avatar, shape, or color as part of this skill.

How to set:
1. Discover targets under /home/box/agent-data/agents/*/profile.json (or one known id). Note which already have a non-empty title.
2. For each target that needs a label, draft a short factual title from its job.
3. Apply:
   - Self: update_state target profile, action set, title = the label.
   - Every other bot: SendToAgent to that bot’s id with priority true. Instruct it to set its own sidebar title and nothing else, shaped like: One-shot ops ask: set your sidebar title (profile title) to exactly: <label>. Use update_state with target profile, action set, title <label>. Do not change your name or description. Reply to the namer bot priority true once done, or if the tool refuses.
4. Wait for each bot’s confirmation (or a clear refusal) before claiming that label is live. Do not claim success from a profile.json write alone.
5. Tell the owner which bots confirmed, which were skipped (with existing title), and any that failed.

Do not write another bot’s profile.json title and call it done. Do not bulk-edit files and assume the UI updated. Do not rename, recolor, or change avatars while labeling.

Good label shape: few words, specific (e.g. Weekday morning brief, PR review packs, Mac maintenance). Not: Helper, Assistant, The smart one.
