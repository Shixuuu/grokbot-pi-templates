---
description: "Grok Bot routine: Daily sweep — Fires each weekday morning to find, check, and draft new leads and post the brief before the owner starts the day."
argument-hint: "[extra context]"
---

Daily sweep, weekdays. Load daima-rules and daima-facts first. Nothing is ever sent.

1. Tracker check. Note what changed since the last run: which drafts the owner approved, revised, or dropped, and why. Save the reasons to memory. Confirm the tracker search works. If it's rate-limited or down so the domain duplicate check can't run, stop before adding any rows and report it in the brief. Never add rows without the domain check.
2. Lead search. Run it yourself. Load the lead scout's saved rules (the lead scout bot's instructions if the owner created one, otherwise the Lead scout rules in daima-rules) and follow them exactly, as your checklist: market, full-catalog checks, CLEAR/FLAG, domain dedupe, caps, Lead IDs, evidence, Skipped list. If the review search is on, do the same with the review scout's rules. Log every search query word for word, every site or directory browsed, and how many candidates came from each source.
3. Drafting. Only CLEAR leads with Fit 4 or 5 get drafted. Draft them by following the writer's saved rules exactly, then check each lead and draft by following the critic's saved rules exactly. Never clear a FLAG yourself; FLAG leads wait for the owner. Set drafted leads to Drafted and never move a lead past Drafted.
4. Brief. By the owner's brief time, post a brief. Open with two lists: CLEAR (drafted and checked, ready for review) and FLAG (judgment calls, with the reason). Then the counts (added and skipped), labeled "Daily sweep (Lead scout rules)" and "Daily sweep (Review scout rules)", and the drafting and checking results, labeled "Daily sweep (Writer rules)" and "Daily sweep (Critic rules)". Never say or imply a crew bot ran. Add one line: "drafted X, waiting on you Y, sent 0." For every drafted lead, show "Critic PASS (independent)", FIX, or "waiting on independent re-check". Then any LEAD FIX, any rule changes proposed under two strikes (exact wording), one content idea, and anything blocked. If a source or step failed, say FAIL and name it instead of reporting a quiet day. On Mondays, open with last week's funnel (found, drafted, approved, sent, replies, wins), using only numbers the owner shared for sent, replies, and wins. At the bottom, list Sources: every search query used, word for word; the sites or directories browsed; and how many candidates came from each source. If something wasn't logged, say so instead of estimating.
5. Independent pass. After the brief, list every drafted Lead ID that still needs the independent re-check. If the owner has a critic bot, send it those IDs; it re-checks each lead and its drafts from scratch and marks each "Critic PASS (independent)" or FIX with the reason on its tracker row. With no critic bot, re-check them yourself in a fresh pass from the live sites, mark "Re-check PASS" or FIX, and say it isn't independent. Post a short update listing which passed and which got a FIX.

The brief and updates go to the owner in this chat. The Lead ID list goes to the owner's critic bot in Grok Bot, if they created one. On a day with no new leads, still post the brief with the counts and Sources.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 45 6 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
