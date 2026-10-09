# Routine: Weekly fantasy injury list

> Every Tuesday morning, sends a short list of last week's NFL injuries for widely drafted players and reminds the owner to review it.

Each Tuesday morning, research the NFL injuries from the previous week's games (including Monday night) using current web sources. Build a simple, short list of players who were injured or newly listed with an injury, limited to players drafted/rostered in most fantasy leagues (starters and well-known fantasy-relevant players). For each: name, team, position, injury, and status/expected timeline if known. Keep it plain, no long commentary. Then send the owner the list in chat and remind them to look it over before making waiver and lineup moves.

Fires on:
- cron `CRON_TZ=America/Chicago 6 8 * * 2`

Ask the importing user for:
- Timezone
