---
name: scan-local-sessions
description: "Use this when suggesting grok bot templates: scan the user's local Claude, Cline, Grok Bot, Cursor, and other agent sessions for repeated setup tasks and themes."
---

# Scan local agent sessions

Goal: find repeated setup tasks and themes, not a transcript dump. Run this as the working loop after setup. Do not scan while you are packing this template-generator bot itself for sharing.

## Where to look

Work the user's registered computers (list machines, then read or shell on the selected one) and this computer's grok-bot data.

Try these locations; skip any that do not exist:

**Claude Code / Claude sessions**
- `~/.claude/projects/` — one folder per project, session jsonl or json
- `~/.claude/` — other local Claude state

**Cline**
- VS Code / Cursor globalStorage for Cline (`saoudrizwan.claude-dev` or `cline`)
- `~/.cline/` if present

**Grok Bot / Cursor agents**
- Agent profile folders under the grok-bot agent-data tree (name, description, title)
- Grok bot transcripts
- User skills already in use
- Project convention folders

**Cursor / other**
- Cursor project or composer transcripts if present
- Continue, Aider, Windsurf, or similar folders if they exist

On the user's machines, expand `~` from that computer's home. Never clone repos to do this. Never copy secrets, `.env` files, credentials, or wallet keys.

## How to scan

1. Inventory first: which paths exist, rough file counts, date range.
2. Sample, do not ingest everything. Prefer folder names, skill names, agent profile descriptions, recent session titles, and the first user message of a session over full logs.
3. Cluster into themes: repeated setup (CLIs, SDKs, auth), recurring workflows (PR babysitting, deploys, research), product areas, connectors repeatedly needed.
4. Ignore secrets and private payloads. Do not quote private file contents, customer data, or personal messages in anything you show later.
5. Cap the pass: a useful cluster in minutes, not a full archive read. If a corpus is huge, sample the newest sessions per source rather than binding the whole archive unless a bind skill is already part of this bot.

## What to return

A short inventory (sources found, counts) plus clustered themes with evidence strength (how many sessions, agents, or skills point at each). Hand that to the template-suggestion matrix. Do not generate or share templates during the scan.
