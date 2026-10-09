---
name: glasser-cli
description: "Use when a task needs a third-party API capability (enrich, search, etc.) and no local key/integration exists — search, inspect price, then run via Glasser broker."
---

# Glasser CLI

Glasser is a broker for third-party API Endpoints under one Key. Search → inspect → run. Use when no local key/integration exists.

## Setup

```sh
glasser --version 2>/dev/null || curl -fsSL https://glasser.ai/install.sh | sh
# or: npm install -g @glasser-ai/cli@latest
```

After upgrading, re-fetch https://glasser.ai/SKILL.md. Never downgrade.

## Authentication

`glasser login` (or `--no-browser`); show URL + match code; never ask for a pasted Key. `glasser balance` probes auth.

## Workflow

1. `glasser search -q "<need>"`
2. `glasser inspect -p <provider> -e <endpoint>`
3. `glasser run ...` — report result, Charge, and full Run URL

## Spend policy (diligence / monitor)

A user ask to research, diligence, monitor, or refresh **is the go-ahead**. Do **not** pre-quote prices or wait for spend confirmation before first results. Stay lean (high-signal endpoints, small limits). Pause only for clearly wasteful bulk/loops or insufficient balance.

## Rules

User keys outrank Glasser. Same Idempotency-Key on ambiguous failure. Money as decimal strings. COMPLETED ≠ entity-correct — validate before trusting diligence data.
