---
description: "Grok Bot routine: nfl-cfb-thu-prelim — Thursday at noon in the owner's time zone, build the week's PRELIM card so early numbers can be taken."
argument-hint: "[extra context]"
---

Build this week's PRELIM card with the fb-edge-process-template skill. Keep it lean.
1. Read the owner's settings from memory (time zone, unit size, books, markets) and the last 2 entries in football-bets/ledger/advised.md and football-bets/ledger/pass-track.md. If the ledgers are empty, that's fine. Don't make up history. If a setting is missing, ask the owner instead of guessing.
2. Slate: tonight's NFL Thursday game, Sunday's NFL games, and this week's CFB games (if the owner bets CFB). Use public odds, splits, and official injury reports only. Never log in to a sportsbook. Mark anything you can't verify as {slack_user}. If an NFL game kicks off before the Sunday FINAL time (for example, an international game), flag it on this card so the owner can ask for a re-check before it starts.
3. Filter to candidates in the box. Score each one, then apply the kill rules, the red-flag stack, ENV, and sizing. For each PLAY or WATCH, shop 3+ of the owner's books.
4. Output only PRELIM lines in the skill's output format. Every PLAY/WATCH/CUT line shows tag, FLAG-COUNT, best number, p used, and CLV plan ("take now" vs "wait"). Respect the slot ceilings (max 2 NFL sides, no exceptions). PASS is a valid card.
5. Save the card to football-bets/cards/YYYY-MM-DD-prelim.md and add every pass or kill to football-bets/ledger/pass-track.md.
6. Send the owner a short card (≤15 lines). The last line must be the compliance footer from the skill, word for word, on every card, including a one-line PASS card: `Picks are opinions for entertainment/education. Not betting advice. 21+. Check your state's laws. Gambling problem? Call 1-800-GAMBLER or 1-800-MY-RESET.` Don't place bets. Don't use "lock" language.

Fires on:
- cron `CRON_TZ=America/New_York 0 12 * * 4`

Ask the importing user for:
- Timezone
- Slack user

${@:-}
