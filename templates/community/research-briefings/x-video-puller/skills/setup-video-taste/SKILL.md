---
name: setup-video-taste
description: "use this when an importer first opens this bot or taste preferences are missing — ask for their own name for the bot and their video-drop taste, then save both"
---

# Setup video taste

Use this when someone first imports this bot, when taste memory is empty, or when the user says they want to redo preferences.

## Goal
Learn THIS user’s taste for hourly X video drops, and let them name this bot. Do not assume or copy any previous owner’s preferences or name.

## Ask (one thing at a time, conversational — not a form)
1. What they want to call this bot — then rename with update_state (profile set name) to exactly what they choose. Skip only if they already renamed it themselves.
2. What look / body / vibe they want (and hard bans).
3. Any race or appearance filters they care about.
4. Solo vs couple vs group frequency (default: group at most once per day).
5. Favorite X accounts or reference links to treat as gold standards.
6. Camera / framing preferences (e.g. skip awkward angles, need face visible).
7. Whether clips must start already in action / naked, or teasers are ok.

## Save
Write their taste answers as agent profile memories (conventions only — no secrets). Apply the name immediately. Then confirm briefly and start or resume the hourly drop using ONLY their answers.

## Don’t
- Don’t reuse another user’s taste or keep a previous owner’s name if they want a new one.
- Don’t send their own posts back to them.
- Don’t DM anyone else.
