---
name: jev-usage-router
description: "use this when deciding whether to fan out, open a browser, retry, run a high-risk mutation, verify research citations, check completion before reporting done, or whether an expensive run is worth its tokens — call Jev via OpenRouter through the jev-shadow wrapper"
---

# Jev usage router

Cheap typed decision layer in front of expensive Grok Bot / Mac CLI work: prompt → Grok bot → Jev decision → Grok bot (or Mac CLI) executes. Jev returns Choice / Score / Noul with a confidence. It never writes prose, arguments, or side effects, and never authorizes merge, pay, or send.

## Provider

OpenRouter model `typesafe/jev-1.13` (System One endpoint). The key lives in a local `.env` on the bot's computer; never put it in state, notes, or chat. Tools on the bot's computer: a raw `jev-route '<state>' [gate]` helper, the **jev-shadow wrapper**, and a `jev-shadow-report` tally. Config: a `router.json` with `mode`, `confidence_floor` (0.55), per-gate `gate_modes`, and a kill switch (`enabled: false`).

## Gates (one multi-question call each)

| Gate | When | Primary Choice |
|---|---|---|
| `intake` | Ambiguous route / fan-out | route: inline \| research \| coding_em \| escalate (+ packet_complete check when state is a handoff packet) |
| `pre_browser` | Before browser use | proceed \| skip \| escalate |
| `pre_retry` | Before an expensive retry | retry \| abort \| escalate |
| `pre_research` | Before a full scout | skip \| light_web \| full_scout \| escalate |
| `pre_tool` | Before high-risk Shell/MCP mutations | allow \| ask \| deny |
| `research_check` (shadow) | Citation step | accept \| verify_more \| reject |
| `completion_check` (shadow) | Before a non-trivial done report | complete \| verify_more \| incomplete |
| `worth_running` (forced shadow) | Before an expensive run (deep brief, Mac CLI launch, bot wake, retry, fan-out, publish) | run \| skip \| downgrade |

`intake` accepts optional `available_workers` / `unavailable` so it only offers workers that exist now (e.g. Mac offline → drop coding_em).

## Shadow gates (fleet default)

Fleet call sites use the **jev-shadow wrapper on the bot's computer**: `jev-shadow <gate> '<state>' --caller <bot> --why <text>`. It forces shadow for every gate, has an ~8s hard timeout, prints one line (`JEV_SHADOW <gate> <verdict|error> conf=<x>`), logs a record, and **always exits 0**. The caller logs and continues as planned; never gate behavior on a shadow verdict.

Call sites: chief of staff before routing (intake, state = handoff packet) and before done reports (completion_check); research bot at citation checks (research_check) and before deep briefs/publishes (worth_running); coding EM before each Mac CLI launch or retry (worth_running).

`worth_running` state: `{"task":"...","planned_action":"mac_cli_launch","evidence":{"prior_attempts":0,"changed_since_last_run":true},"cost_level":"high"}`. Keep evidence small and factual.

## Exception paths (read first)

Every failure → one `error conf=0` line + a log record, exit 0, task continues. Never retry Jev in-task, never wait on it, never page a human for it.
- Jev down / timeout / low confidence → continue as planned.
- Quota or credits → continue; don't buy credits; flag repeats to the owner.
- Missing key → continue; fix the `.env` (never paste the key).
- Secret-looking or oversized state → not sent, logged redacted; fix next time.

## Active gates

When `mode=active` and a gate isn't shadow, honor the primary choice only if confidence ≥ floor; otherwise fall back to normal chief-of-staff routing or ask the owner. `pre_tool`: deny → stop, ask → owner, allow → proceed.

## Promotion rule (shadow → active)

All three: (1) Three clean real-task runs matching what the owner would have done (Three-Run Proof, including a replay regression check on saved runs); (2) a report where every would-skip/downgrade was spot-checked by hand and was correct; (3) the owner's explicit approval. Then flip the gate mode, update this skill and the playbook, and file a Decisions note. Demote on any false skip. An active gate still never authorizes publish/send/merge/pay.

## Report

`jev-shadow-report --since 7d --exclude-caller smoke-test` tallies calls by gate, caller, and verdict, the error rate, and **potential savings (not applied)** = would-skip + would-downgrade counts. Read-only.

## Don't

- Put secrets in state, or let Jev authorize irreversible actions.
- Treat Jev as a coding seat or a text generator.
- Treat shadow verdicts as blockers, or promote a gate without the promotion rule.
