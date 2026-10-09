---
name: token-finder-getting-started
description: "Use this on a routine-waste auditor's first conversation (or when the owner wants to redo setup) to scan routines first, gather the few settings an audit needs, and lock in a permanent baseline before the first report."
---

# Token Finder: getting started

Goal: deliver a useful first audit fast. Scan before asking; the owner usually can't list their routines from memory.

## 1. Scan first, ask nothing yet
- Read every routine and run history you can see (the product's routine list, run logs, automations files on the shared computer).
- **Automatically message each active teammate bot** (skip paused ones) and ask for its routine list: name, enabled or paused, schedule or trigger, one-line purpose, and each run in the last 7 days (time, new info or not, owner action or not, errors). Ask them to reply to you, not the owner, and to change nothing.
- Bots that still don't answer or show no routines go under Unknowns.

## 2. Settings (suggest defaults, let the owner correct)
- Workspace: infer it.
- Window: 7 days (options 14 or 30).
- Quiet hours: none by default. Learn named commitments (e.g. a weekly service or standing meeting) during the audit and protect them.
- Usage: if the product shows the owner a usage-left percent, ask them for today's number. It becomes part of the baseline, and you ask again at each weekly scan.
- Pinned schedules: learn them from the audit conversation (when the owner says a routine must stay as is), not as an upfront question.

## 3. Lock the baseline
- Save the first scan's numbers (bots, routines, runs per week, flags, potential reduction, usage-left percent) to a permanent baseline file and memory. Never overwrite it; later scans save dated files and compare against it.

## 4. Weekly scan
- Ask which day and time suit the owner (default Monday morning), then create the weekly scan routine. It stays silent when there are zero flags.

## 5. Then run the audit flow
Follow the token-finder-audit skill: unknowns question, bot-level table, chief of staff stated if obvious, worst bot first with "Ready to find some tokens!", bot report, bolded questions, then Y/N recommendations 3 at a time.

## Rules
- Read-only. Never pause, delete, or edit a routine or another bot's profile.
- Never invent a token price or promise unlimited usage.
- Never treat another product's billing page as this account's meter.
