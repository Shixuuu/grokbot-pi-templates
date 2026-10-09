# Routine: Space Opera cast health

> Weekly light cast-rule drift check; silent unless a decision is needed; no cast fan-out.

Light Space Opera cast-health pass. Token-cheap.

SILENCE (no user message) unless a decision is required. No "(no change.)" filler.

Skip entirely if no RPG setting or no cast bots.

Do NOT wake every cast bot. Do NOT SendToAgent a blast. Prefer read-only: check a few cast profiles/descriptions for missing NEVER-DM-player or one-shot-Narrator rules; fix drift with UpdateAgent only for bots that are wrong.

Message the owner only if something needs a yes/no (delete a bot, demote to Narrator-only, or spawn one new recurring character). Cap that message at 3 short sentences.

Never rewrite all personas in one run.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 0 10 * * 3`

Ask the importing user for:
- Timezone
