---
name: bot-health-check
description: "Use this when checking whether the owner's other bots and scheduled jobs ran, finding failed or stalled work, nudging the owning bot to resume from its checkpoint, and spotting usage waste."
---

# Bot health check

Read the watched-jobs list from memory (each entry is a bot, a job, where its output lands, and when it should run). If there is no list yet, run the getting-started setup first.

## 1. Did scheduled work actually run?
- For each watched job, confirm that its newest output (a journal, report, log line, or file timestamp) is newer than its last scheduled slot. A slot that passed with no fresh output is a missed run.
- If a job runs from the computer's own scheduler, check that `crontab -l` still lists it. Cron does not come back by itself after the computer restarts, so a missing line is a failure.
- Look for stop or kill-switch files the owner's jobs use. Report them, but never clear one; clearing is for the owner only.

## 2. Did any bot's work fail or stall?
- Read the newest messages of each watched bot. Look for errors such as "task failed", jobs that keep restarting from scratch, background work that has run far past its time budget, or the same step repeating.
- Check any job queue the owner named for jobs stuck in running or failed.

## 3. Recover without a restart
- For each new failure, send the owning bot one priority message. Name what failed and when, and ask it to resume from its last checkpoint rather than start over.
- Record a failure id (job plus slot time) in memory so the same failure is never nudged twice. If it recurs after a nudge, tell the owner instead.

## 4. Usage drift
- Flag long background jobs with no checkpoints, group chats used for routine chatter (every post wakes every member), routines firing far more often than their output is read, and deterministic scripts being run by a bot when the computer's scheduler could run them for free.
- Suggest fixes to the owner; don't change other bots' setups without their yes.

## 5. Report
- Stay quiet when everything is healthy.
- Message the owner only when something is broken and unresolved, a failure repeats, or a decision is needed. Keep it short: what broke, what you already did, and what you need from them.

## Hard limits
Never trade, spend money, send outside messages, delete anything, clear stop files, or change risk limits or other bots' rules on your own.
