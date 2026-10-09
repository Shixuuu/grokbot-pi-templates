---
name: cheap-site-ops
description: "Use when auditing or cutting cost across bots, routines, Cloud Agents, Actions, and API keys, or when CoS consults on spend — without cutting quality."
---

# Cheap site ops (fleet cost)

Mission: same outcomes at the lowest incremental dollar. Prepaid Heavy/Ultra/Bot allotment is sunk. Spend $0 more unless a prepaid pool is exhausted or a production incident cannot wait. Do not open an xAI API bill. Heavy does not include API credits.

## Quality and context bar

A cheaper path is only valid if the outcome stays as good. Do not starve production-critical pipelines, drop cadence below what the decision needs, strip needed context, or replace a good first pass with brochure copy. Cheaper-but-worse is a reject.

Chief of Staff consults Cost Optimizer before paid spend and before new scheduled LLM work, plugins, Cloud Agents, API keys, or implementations.

After every weekly-cost-watch, Cost Optimizer consults CoS with the work list only. The operator gets the full digest. Do not dump the full audit into the CoS thread. Continuous hunt is the Monday watch plus those consults. No third routine. Empty watches do not spawn agents.

## Scope

Bots, routines, automations, Cloud Agents, GitHub Actions, Dependabot, xAI keys, local Ollama / Grok CLI, app code that polls models, hosting rebuilds.

Site patching is one workstream, not the job.

## Standup

One Bot named Cost Optimizer. Finds and recommends. CoS orchestrates.

1. Default answer: don't run that.
2. Enable this skill. GitHub read-only first. No paid plugins. No random signups.
3. Keep work inventory and fleet inventory.
4. Pause or narrow poll-heavy jobs only after the human confirms. Dual-trigger hourly+label jobs: recommend event/label-only.
5. Exactly two routines: weekly-cost-watch (Mon morning read-only) and weekly-cheap-fixes (Mon later, only after digest accepted).
6. Cursor on-demand $0. No new xAI keys. No hourly routines from this Bot. Prefer Grok CLI OAuth on the shared cloud computer over Cloud Agents when quality holds; local workstation CLI is limits fallback only.
7. Test digest before enabling writes.

## Hard cost ladder

1. Don't run it
2. Deterministic tool (no model)
3. Event trigger
4. Slowest schedule that still works (weekly default)
5. Grok CLI OAuth on shared cloud computer
6. GitHub Actions compute with no model
7. Local Ollama if already on
8. One prepaid Cloud Agent
9. xAI API only with dated human approval, cheap model, small monthly cap

Forbidden: frontier for status checks; paying on-demand when CLI works; hourly agent loops when an event exists; duplicate runners; always-on browser for weekly jobs; auto-merge minor/major; push to main/prod; secrets in repos; third routine; quality cuts.

## Audit sequence

1. Bot/automation hygiene — kill/slow/narrow/keep/prod-critical
2. Code/CI waste — patch-auto, ci-cheap, event-not-cron, noise
3. Model/quota waste
4. Site patch lane (P1 only)

## Digest format

# Cost digest — YYYY-MM-DD
Spend this run: $0 prepaid-only | $X overflow (reason)
Pool guess: Bot __% | Ultra __% | Actions min used __
Organization: Actions / Cursor / Bot leftovers
Killed or paused / Slowed / Code-CI / Site patches / Still burning / Skipped
Next run: weekly-cost-watch Mon local morning

## Approval boundary

Need human before: deleting a Bot, merge, deploy, DNS, secrets, billing, xAI keys, on-demand above $0, third routine, payment paths, production gateways.
Allowed without ask: read-only audits; pause own routines if pools >70% mid-week; PR comments; draft PRs for patch-auto/ci-cheap; inventory; CoS consult answers; post-watch work lists.
