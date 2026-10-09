---
name: crew-slip-report
description: "Use this when the owner wants their bots' own mistakes caught, logged, and filed as product feedback to the Grok Bot team: a detective-style case report on platform bugs and bot judgment errors, opt-in only and at most once a month on a day the owner picks."
---

# Crew slip report

You watch the owner's bot crew (including yourself) for slips, keep an honest log, and turn it into product feedback the Grok Bot team can act on. Sending feedback always goes through the owner's approval card. Real people read this feedback, so respect their time: one well-made report a month, never a stream of small ones.

## Opt-in only
- This is the owner's choice. Never start it, schedule it, or file anything on your own initiative, and never set it up as part of a bot's first-run setup.
- You may mention once that it exists if the owner seems interested in product feedback. If they say no or don't answer, drop it and don't bring it up again.
- Only run it when the owner asks for it.

## Setup (only after the owner opts in)
- Ask the owner which day of the month they want their report (1 to 28, so it lands every month) and roughly what time. Default to the 7th in the late morning if they don't care.
- Create a monthly routine for that day and time. If they later want a different day, move the routine; the once-a-month limit still applies, so a new day can't create a second report in the same month.
- If the owner opts out later, delete the routine and stop logging for filing.

## What counts as a slip
- **Platform (P):** product, connector, session, box, or tool bugs and limits. Examples: a connector that says connected but has no account, browser sessions signing out, account switchers failing, disk filling up, subagents missing tools, confusing default UI.
- **Judgment (J):** a bot's own error. Examples: guessing a spec instead of checking the source, acting on the wrong account, saying something was sent or routed when it wasn't, invented facts in a draft, stale "needs you" items, misreading a profile or message.
- **Mixed:** both.

## Gather (evidence first)
1. Read the crew's own logs on the computer: lessons files, case logs, draft logs, queues, and any shared mistakes log. Read transcripts only where available and allowed.
2. Ask teammate bots (SendToAgent) for slips they logged since the last report, if useful.
3. For each slip record: date, bot, type (P/J/Mixed), what went wrong, impact, fix or new rule, and an evidence tag: **verified** (a file, transcript, or sent item backs it) or **reported** (from a bot's memory only). Never invent or inflate a slip.
4. Keep a running log file (one entry per slip, newest first), a short patterns section, and a "last filed" date at the top.
5. Only include slips that are new since the last filing. Don't re-file something already reported unless it got worse or came back after a fix; then say so in one line.

## Write the report
- Detective case-file voice is fine, but keep it factual, polite, and useful to a product team. No snark aimed at the people who build the product.
- Order: **Exhibit A: platform bugs** (what the team can fix, each with a concrete ask), then **Exhibit B: confessions** (judgment errors, your own first, each with the rule now in place), then **Exhibit C: patterns** (e.g. guessing instead of checking, acting before verifying), then a short **product asks** list.
- Under 4000 characters. Lead with the few slips that matter most; drop trivia.
- Privacy: no third-party names or handles (say "a real realtor"), no family members' names or feelings, no kids, no emails, credentials, code phrases, addresses, or file contents from connectors. Describe accounts generically.

## File it
1. Check the "last filed" date. If a report was already filed this calendar month, or less than about three weeks ago, don't file; add the new slips to the log and tell the owner in one line when the next report goes out.
2. Show the owner the draft only if they ask; otherwise call SendFeedback with the report. The owner approves the exact text on the card. Nothing goes out without that approval.
3. If the card is interrupted, re-raise it once. If declined, don't retry; carry the slips to next month.
4. Feedback gets no support reply; don't promise one.
5. Update the "last filed" date, and tell the owner (and the chief-of-staff bot, if there is one) in one line.

## Cadence (applies to every owner)
- At most one report per month, on the day the owner picked. This limit holds even when the owner asks for one sooner; queue the slips for the next monthly report instead.
- The one exception is a security or safety problem (for example, data exposed to the wrong person). Tell the owner right away; if they still want it filed early, file just that one issue.
- If nothing new happened that month, skip filing and say so in one line.
