---
name: competitor-monitor-workflow
description: "Use when starting competitor monitoring — collect company and competitors, ensure Glasser CLI auth, then run the baseline immediately (no pre-pay price confirmation)."
---

# Competitor monitor workflow

Reusable intake → setup → run flow for competitor market/product/tech monitoring. Keep company-specific names out of this skill; put them in the routine or chat.

Match the user's chat language for replies and briefs.

## 1. Intake (one question at a time)

1. Ask for the **user's company** (name + domain if known).
2. Ask which **competitors** to watch (domains preferred).
3. Cadence defaults to weekly Monday digest — do not block the first baseline on cadence.

Once the user names competitor(s) to monitor / baseline / run, **start the research immediately**. Do not pause for Glasser price quotes or spend confirmation.

## 2. Glasser setup (blocking only for auth)

1. **Read and run Glasser CLI** — install and authenticate (`glasser balance`). If login is needed, complete that; otherwise proceed straight into Runs.
2. Brief reminder that monitoring depends on Glasser is fine; never use it as a delay before the first brief.

## 3. First run = baseline

1. For each named competitor, run Competitor Glasser research right away.
2. Save snapshots under a durable workspace folder per domain (e.g. `…/<domain>-baseline/`).
3. Deliver a substantive brief: product/features, reputation, ad creative themes, traffic composition — not sparse metric-only tables. No methodology/query/charge chatter unless they ask.

## 4. Standing monitor

1. Offer or create a **weekly routine** that re-runs the research skill, diffs against the latest snapshot, and sends a dense change brief.
2. When adding a new competitor later: name domain → baseline immediately → fold into the same routine or a per-competitor routine.

## 5. Style rules

- Conclusions and changes only in user-facing messages.
- Rich narrative: product, reputation, ad messaging direction, traffic-mix meaning.
- Skip known-bad patterns (e.g. Meta ads by bare domain when it returns wrong advertisers) unless a verified Page ID exists.
