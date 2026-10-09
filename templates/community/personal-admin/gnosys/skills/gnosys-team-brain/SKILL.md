---
name: gnosys-team-brain
description: "use this when any seat should RECALL or SAVE via the Gnosys teammate — sibling protocol, author tags, recreate packs, local→gnosys backfill; no operator-specific paths"
---

# Gnosys team brain (sibling protocol)

Local-first shared memory for a multi-agent Grok Bot team. Route through the **Gnosys** teammate via SendToAgent for QUERY / SAVE / REINFORCE / RECALL so other work isn't blocked. Discover Gnosys's **current** agent id from teammates — never hardcode a template id. The operator's Chief of Staff may run machine Shell directly for urgent one-offs.

## Recovery bar

If every Grok Bot seat were deleted, the owner should be able to **recreate the team from gnosys alone**. Gnosys must hold:

1. **Recreate packs** for every seat (full CreateAgent prompt / profile description, title, wiring) under the ops / Grok Bot project — file on every CreateAgent and UpdateAgent; optionally mirror under an ops `bots/recreate/` folder the owner chooses.
2. **All durable memories** — standing locks, decisions, process rules, lane state. Grok Bot local memory is a cache; gnosys is source of truth.
3. **Author tags** on every write so seats can be rebuilt with the right memory shards.

## When the owner says "recall"

Treat **recall** as a gnosys recall — not Grok Bot chat memory alone. Immediately SendToAgent Gnosys with RECALL (or QUERY), best project cwd or `federated`. Answer from those hits. Optionally reinforce useful hits.

```
RECALL
project: <absolute path or "federated">
query: <what they asked to recall>
limit: 10
author: <your seat name>
```

## Mandatory: SAVE durable knowledge

Immediately message Gnosys with SAVE when:

- The owner locks a decision, standard, path, rate, ICP, or standing rule
- You settle in-lane durable state (keep/kill, architecture, process)
- **CreateAgent** or **UpdateAgent** (name/description/title) — SAVE a full recreate pack
- You learn a fact worth keeping beyond the current turn

Do **not** leave durable knowledge only in chat or Grok Bot memory. Skip ephemeral noise (OTPs, typos, "ok").

Every memory must be tagged with the requesting seat via `author` and tags (e.g. `{"agent":"Products"}`).

```
SAVE
project: <absolute registered project cwd>
title: <short title>
category: decisions
content: <full durable fact in markdown>
relevance: <keyword cloud>
author: <exact seat name>
tags: {"agent":"<exact seat name>"}
```

If project path is unclear: SAVE to the **ops / Grok Bot** project from getting-started (or ask Gnosys) and note `ambiguous-project` in content. Never invent another operator's paths.

## Local → gnosys backfill

Important facts in a seat's Grok Bot memory (profile/log) that are not yet in gnosys must be SAVE'd. Prefer profile-tier and standing locks; skip secrets and OTPs. Dedupe: QUERY first when unsure. CoS may fan out a migrate ask; every seat owns its own shard.

## Project routing

Keep a short map in **your** memory (filled at setup / by CoS): topic → absolute registered cwd. Ops / cross-seat / recreate packs → the ops folder from Gnosys getting-started. Product repos → whatever the owner registered with `gnosys init`. Standing prefs across products → tell Gnosys scope user when the CLI supports it.

## Messaging protocol

- **RECALL / QUERY:** project or federated + query
- **SAVE:** as above (author + agent tag required)
- **REINFORCE:** memory id + signal (`useful` | `not_relevant` | `outdated`)

Other seats do **not** run the gnosys CLI themselves. Only the Gnosys seat (and CoS for emergencies) uses machine Shell + CLI.

## Out of scope

Assuming another user's DB or paths; attaching gnosys-mcp on Grok Bot's remote computer; mounting live `~/.gnosys/gnosys.db` on cloud/SMB.
