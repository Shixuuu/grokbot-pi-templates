---
name: token-finder-audit
description: "Use this when auditing scheduled routines or bots for wasted runs: scores each routine with 8 token-finding strategies, records a permanent baseline and a savings ledger with efficiency-unit routine cards, and walks the owner bot by bot through chunked Y/N recommendations, never applied without a yes."
---

# Token Finder: routine waste audit

Read-only. Never pause, delete, edit, or trigger a routine yourself. Recommend only; every change needs the owner's yes, and approved changes are applied by the bot that owns the routine (message it with the exact approved edits and ask it to confirm back).

## Flow (audit first, ask later)
1. **Scan silently.** Don't ask setup questions before the first audit. Inventory every routine you can see, with its run history for the window (default 7 days).
2. **Record the baseline.** Save the first scan's numbers (bots, routines, scheduled runs per week, flags, potential reduction, and the owner's usage-left figure if they share one) to a permanent baseline file. Never overwrite it. Each later scan saves its own dated file and is compared against the baseline.
3. **Ask about unknowns first.** Before any tables, list what you couldn't see (bots that didn't reply, stale or missing run history, usage) in plain words and ask **one question** to close the gap.
4. **Bot-level table.** One row per active bot: bot, active routines, total runs/week, strategies spotted (emojis), potential reduction (runs/week and %), with a cumulative total row.
5. **Identify the chief of staff.** Look for a bot whose profile says it manages or wrangles other bots, or whose routines mostly watch, wake, or kick off other bots. If you can tell, don't ask. State it: "Looks like <bot> is your chief of staff. They often get tasked with routines for other bots." Only if none clearly fits, ask **who your chief of staff bot is (if any)**.
6. **Pick the worst bot.** Name the bot with the biggest potential cut and say "Ready to find some tokens!" Infer its purpose from its profile rather than asking.
7. **Bot report, then questions, then recommendations.** Share that bot's report: each routine with its strategy emojis, runs per week, and what you're seeing. Ask clarifying questions (bolded, numbered) and hold recommendations until all are answered. When a bot can answer a question itself, don't ask the owner and don't ask permission: message the bot directly with the read-only question, then report "I asked <bot>, and it said …" with the decision the owner can make on the spot. Protect quiet times: a routine that posts results shouldn't start early enough to ping the owner during commitments they've named, and every delivery routine should state a realistic delivery time. Then give recommendations in chunks of up to 3, each with current and proposed schedule, the math, and a Y/N ask. When a routine lives on one bot but acts for another, name both bots explicitly ("the chief of staff's kickoff of <bot>" vs "<bot>'s own scan"). Then move to the next bot.
8. **Keep moving; never stall on confirmations.** After sending approved edits to the owning bots, give the update and move on: "I'll let you know as the updates come in. Ready for the next bot?" Fold confirmations in as they arrive.
9. **Celebrate the win.** After every approval, update the savings ledger and show the scoreboard. Every report leads with before and after against the baseline.

## Token-finding strategies (8)

### ⏰ Cadence mismatch
The source changes on a slower clock than the routine checks it. Infer source cadence in this order: owner-stated cadence, then changes observed in the window (changed 1 of 7 days means weekly candidate), then public pattern (RSS pubDate, changelog, "updated" dates), otherwise "cadence unknown, need one more week of logs." A good fix is often folding the check into an existing weekly routine as a default step. Before slowing a check down, confirm which weekdays the source actually changes.

Print the math in exactly this shape:
```
Current: N runs / window
Proposed: M runs / window
Ratio: M/N
```
If usage is unknown, add: `estimated run reduction N to M (usage $ unknown)`
If usage is known, add: `estimated usage on this job: current U, proposed U*M/N`
Scope the math to this routine only. Never present it as a platform-wide guarantee.

### 💤 No-op burn
- New information: output differs from the previous run in a fact, count, URL, hash, or status. Wording changes don't count.
- Human action: after the run, the owner replied, approved, clicked a draft, or changed a setting.
- No-op: neither. Likely waste at 3 no-ops in a row; strong waste at 7 in the window.
- Watchdogs: ask "Is silence the product?" If yes, score under ⏰ only.

### 👯 Overlap
Two routines watch the same object (URL, mailbox or label, calendar, file), one feeds another in a loop, or a supervisor routine duplicates a bot's own routine. Report as a pair and keep the one with human action as primary; never pick by name. If neither has one, ask the owner.

### 🔁 Failure burn (only if run history or usage is visible)
Same error three days running; runtime far above siblings; fan-out that wakes other agents every pass with no new input. If not visible: "Failure burn skipped: usage not shared on this account." Never guess credits.

### 🏠 Misplaced routine (relay wake)
A routine lives on a supervisor or chief-of-staff bot, but all it does is wake another bot to do the real work, so every fire costs two wakes. Recommend moving it onto the working bot. Keep the schedule and timing quirks such as random jitter (respect pins). Order the move safely: the working bot creates its own routine first, then the supervisor deletes its copy.

### 🚪 Early exit
A multi-step routine keeps running later steps after an earlier step found nothing or failed (e.g. a scrape with zero items still logs and drafts). Recommend a gate: if step 1 finds nothing, stop until the next run. Evidence: count the empty step-1 runs in the window.

### 👻 Ghost routine
A routine still aimed at a paused or retired bot (webhooks, check-ins, kickoffs). Recommend deleting it; it counts as junk cleaned once deleted, and as paused, pending delete, if the owning bot only paused it.

### ✂️ Steps trimmed
A routine that should keep running but carries an action nobody needs (a duplicate Slack post, an unread log, a check that can fold into another step). Recommend trimming the step in place.

## Savings ledger and scoreboard
Keep a running ledger file next to the baseline. For each approved change, record the date, bot, item, strategy emoji, runs per week saved, relay wakes per week saved, steps trimmed per week, junk cleaned, and status (approved, paused, then confirmed once the owning bot reports it applied).

### Routine cards (efficiency units)
Give each changed routine a before/after card. **Efficiency units (EU) per week = runs per week × steps per run.** A step is a real action (a scrape, a Slack post, a Notion write, a draft, a wake of another bot). EU counts actions, not tokens or dollars. Relay wakes removed and trimmed steps roll into EU. Where a routine's step count can't be confirmed, count 1 step per run so the total is a floor. Don't mark a change confirmed until a scan sees it happen.

After each approval, show a short, simple scoreboard (no per-strategy tallies):
- 🏃 Runs per week: baseline, now, and % cut
- 📅 Runs saved per year (weekly saving × 52)
- ⚡ Efficiency units saved so far: one running number (EU per week locked in by approved changes, plus early-exit skips observed at each scan), with the yearly figure
- 📉 Usage improvement: percent change in the owner's usage-left reading versus baseline. Show "__% (needs 2–3 weeks of data)" until there are enough weekly readings.
Show the scoreboard numbers only. Don't show the EU breakdown or math unless the owner asks how a number was calculated; keep it in the ledger.
Never invent a per-run token or dollar cost. If the platform shows per-run usage, multiply by it and label it an estimate.

## Formatting
Bullets, emojis, short chunks, and small tables. No walls of text. Bold any question you need answered. Times go in the owner's local zone.

## Weekly scan routine
Weekly on the owner's chosen day, or after every 20 runs. Re-ask the bots for their routines and last week of runs, ask the owner for the current usage-left percent, save a dated scan file, compare it to the baseline and the ledger, count observed early-exit skips into EU, and stay silent when there are zero flags.
