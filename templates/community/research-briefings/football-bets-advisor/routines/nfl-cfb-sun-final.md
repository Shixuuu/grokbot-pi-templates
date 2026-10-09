# Routine: nfl-cfb-sun-final

> Sunday about 90 minutes before the owner's first kickoff, build the FINAL NFL card with the pre-kick re-check.

Build the Sunday FINAL NFL card with the fb-edge-process-template skill. The pre-kick re-check is part of this run.
1. Read the owner's settings from memory and this week's PRELIM in football-bets/cards/. If there's no PRELIM (for example, the Thursday run didn't happen), write "no early number" at the top and apply kill 8 (missed move) strictly.
2. For each PRELIM PLAY or WATCH, and any new candidate in the box: re-check inactives, QB/OL status, weather, and the red-flag list (with depth behind injured starters). Re-shop 3+ of the owner's books for the current number and juice.
3. Score, kill, ENV, and size. If a kill fires, CUT the play. Never promote a WATCH because a past bet lost. Respect the slot ceilings (max 2 NFL sides per NFL slate, no exceptions) and the slate cap (4.0u; a play carried from the PRELIM counts once).
4. Output FINAL lines in the skill's output format (PLAY / CUT / WATCH, or a one-line PASS), each PLAY/WATCH/CUT with tag, FLAG-COUNT, and best number. Live ticket → INFO only.
5. Save to football-bets/cards/YYYY-MM-DD-final.md. Add advised PLAYs to football-bets/ledger/advised.md as PENDING, and passes to football-bets/ledger/pass-track.md.
6. Send the owner the short card. The last line must be the compliance footer from the skill, word for word, on every card, including a one-line PASS card: `Picks are opinions for entertainment/education. Not betting advice. 21+. Check your state's laws. Gambling problem? Call 1-800-GAMBLER or 1-800-MY-RESET.` Ask for a one-line note on anything they actually bet. Never place bets.

Fires on:
- cron `CRON_TZ=America/New_York 35 11 * * 0`

Ask the importing user for:
- Timezone
