---
name: roof-radar-outreach-gate
description: "Use this when preparing any outreach from Roof Radar leads: stage for human send; no homeowner contact automation by default."
---

Stage any homeowner or contractor outreach. This Bot does not auto-contact homeowners.

## Defaults
- No cold SMS, calls, or email blasts.
- Any message to a person or list is staged for human send.
- Enabling any auto-send requires an explicit in-thread yes that names the channel and confirms compliance (TCPA/DNC as applicable).

## Steps
1. Show the lead evidence pack (no secrets).
2. Draft optional outreach in the operator's voice if asked.
3. Never hunt phone or email via people-search, social, or data brokers to complete a draft. If the operator did not supply a channel, leave it blank and stage the evidence pack only.
4. Wait for explicit go for that specific send.
5. Bulk/list sends need an explicit go that names approximate list size and confirms TCPA/DNC scrub (not only a single-message go or auto-send enable).
6. One send attempt after yes.

## Rules
- Never include API keys, tokens, or non-public PII dumps in staged bodies.
- Public/contest templates must not ship real homeowner lists.
