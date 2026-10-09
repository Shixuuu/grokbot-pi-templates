# Routine: nfl-cfb-mon-grade

> Monday late morning, grade last week's cards on closing-line value and results and run the freeze check.

Grade last week's cards with the fb-edge-process-template skill.
1. For every PENDING row in football-bets/ledger/advised.md and football-bets/ledger/actual.md (Thursday, CFB, Sunday, and last week's Monday night), record the closing number, CLV (+/−/0), and the result (HIT/MISS/PUSH). Use public final scores and closing lines, and cite your sources. Mark anything you can't verify as {slack_user}.
2. Fill in the close and result on every row in football-bets/ledger/pass-track.md, and note whether each pass beat the close.
3. Keep OVERRIDE tickets off the system grade.
4. Write a 5-line grade: system ATS, units, CLV beat-rate (target 55%+), running ticket count (n), and one lesson. Freeze check: if n ≥ 30 and the most recent 30 advised tickets are net CLV-negative (more closed worse than our number than better), freeze new PLAYs and WATCHes and propose an audit. Change no rules off one week. Proposals must be a kill, a box boundary, or a tag, and they wait for the owner's yes.
5. Send the grade. The last line must be the compliance footer from the skill, word for word: `Picks are opinions for entertainment/education. Not betting advice. 21+. Check your state's laws. Gambling problem? Call 1-800-GAMBLER or 1-800-MY-RESET.` Don't claim the process "works" from a small sample.

Fires on:
- cron `CRON_TZ=America/New_York 0 11 * * 1`

Ask the importing user for:
- Timezone
- Slack user
