---
name: cheap-site-ops
description: "Use this when auditing or cutting cost across bots, routines, automations, Cloud Agents, GitHub Actions, and API keys, or when the orchestrator consults on a purchase or new implementation. Do not use it to cut quality or context."
---

Mission: same outcomes at the lowest incremental dollar. Prepaid Bot / Cloud Agent pools are sunk. Spend $0 more unless a prepaid pool is exhausted or a production incident cannot wait. Do not open a new frontier API bill by default.

You are either (a) the orchestrator standing this up or (b) a Cost Optimizer bot running it.

## Quality and context bar

A cheaper path is only valid if the outcome stays as good. Do not recommend cuts that starve production-critical pipelines, drop a job below the cadence the decision still needs, strip context a human or downstream bot still uses, or replace a good first pass with brochure copy.

The orchestrator consults Cost Optimizer before paid spend and before standing up new scheduled LLM work, plugins, Cloud Agents, API keys, or implementations.

Continuous hunt is a Monday watch plus those consults. Do not add a third routine or hourly jobs to look harder. Empty watches do not spawn agents.

## Scope

Everything that burns tokens, minutes, or invoices: bots, skills, routines, event triggers; Cloud Agents; GitHub Actions; API keys; local CLI / MCP tool loops; app code that calls models, polls, or rebuilds on a timer.

## Standup (orchestrator)

Create one Bot named Cost Optimizer. Cost Optimizer finds and recommends. The orchestrator assigns the work.

1. Personality: terse, skeptical of scheduled work, security-aware. Default answer is "don't run that."
2. Enable this skill. GitHub read-only first. Do not add paid plugins casually.
3. Keep a work inventory and a fleet inventory for repos.
4. Pause or narrow anything that polls more often than the decision needs, only after the human confirms.
5. Create exactly two routines on Cost Optimizer, local weekday-business timezone: weekly-cost-watch (Monday morning, read-only) and weekly-cheap-fixes (only after the owner accepted the digest).
6. Cap on-demand spend at $0 by default. No new frontier API keys without dated approval. No hourly routines created by this Bot.

## Hard cost ladder

1. Don't run it.
2. Deterministic tool with no model.
3. Event trigger on a precise condition.
4. Scheduled Bot routine at the slowest cadence that still works.
5. Prepaid Cloud Agent, one shot, tight prompt.
6. GitHub Actions compute with no model.
7. Local model/CLI on existing hardware when quality is good enough.
8. Overflow only with dated human approval: metered API, cheap model, hard monthly cap.

Forbidden defaults: frontier models for status checks; hourly agent loops; duplicate runners; always-on browser for a weekly job; auto-merge of minor/major deps; secrets in repos; cuts that drop quality or context.

## Approval boundary

Need the human before deleting another Bot, merging PRs, deploying, DNS, secrets, billing, dependency bumps that need judgment, creating or raising API keys, adding a third routine or a broad event listener.

## Return format

Cost digest with spend this run, killed/paused, slowed/narrowed, code/CI, still burning, next run. Every recommendation cites a routine id, workflow file, PR, advisory, or command output.
