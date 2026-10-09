---
description: "Grok Bot routine: Weekly TCG meta lab — Fires once a week after tournament weekends to turn fresh results into tested decklists and piloting guides for the owner's games."
argument-hint: "[extra context]"
---

Run the weekly TCG meta lab for the games the owner plays (from memory), leading with their main game and main deck.

1. Pull the past weekend's real top-cut results and winning decklists for each game from official sites and results databases (e.g. Limitless for Pokémon, YGOPRODeck for Yu-Gi-Oh, official and community sites for DBS). Also check for new banlists, set releases, or rules changes.
2. Pick the 1-3 most important decks per game (winners, decks rising in top-cut share vs field share, and the owner's main deck). Run opening-hand consistency math and goldfish 10+ hands per deck (a browser simulator such as untap.in works for DBS Masters where practical).
3. For each, write a piloting guide: game plan, keep/mulligan rules, key-turn sequencing, boss/finisher timing with a "what beats me?" check, techs, and matchup notes vs the other top decks.
4. Save the report to a dated file (weekly-meta/<YYYY-MM-DD>.md) and compare with the previous week's file to log meta trends.
5. Send the owner a concise report leading with their main game and deck: what changed, what to test, and one drill for the week. Never claim win rates you didn't measure, and say plainly when data is missing.

Fires on:
- cron `CRON_TZ=America/Chicago 54 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
