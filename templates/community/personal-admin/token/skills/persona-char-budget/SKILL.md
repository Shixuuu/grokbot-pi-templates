---
name: persona-char-budget
description: "Use when rewriting or auditing a Grok Bot persona for spend — per-slot char budget; Nevers/Anti-jobs uncapped."
---

Use when rewriting or auditing a Grok Bot persona for spend. Persona description loads every turn — bytes here are a recurring tax.

For full harness audits (tools/MCP, wakes, cache, multi-agent), use Harness token efficiency.

## Per-slot budget (keep every label)

| Slot | Budget (chars) | Rule |
|---|---|---|
| Job | 120 | One sentence. |
| Artifact | 90 | Named output. |
| Verify | 90 | Exact check. |
| SoT | 80 | Pointer only. |
| Hand-off | 80 | Who + packet. |
| Owns | 100 | List, not prose. |
| Voice | 60 | Deviation only. |
| Nevers | ~220, uncapped | Compress wording only. Never drop a line. |
| Anti-jobs | ~140, uncapped | Compress wording only. Never drop a line. |
| Target total | ~880–1,000 | Coordinator may land ~1,800. Lean bots near ~700 are the benchmark. |

## Rewrite rules

1. One line per slot. No prose paragraphs. Do not restate the slot label inside the slot.
2. Move worked examples into on-demand skills — not the persona. Method = skill ids only.
3. Delete fleet-default filler ("be concise", "think step by step").
4. Definitions over DO NOT / You must walls. Never coach "use fewer tokens" in the persona (quality cliff).
5. Static persona = what most turns need; rare how-to stays discoverable via skills.

## Exempt

Nevers and Anti-jobs never lose items to meet budget. If budget and a Never conflict, the Never wins and the persona goes over.

## Apply order

Compress the spend-cut bot first, then coordinator Apply largest-first (coordinator → model desks → mid tier). Do not fan-out UpdateAgent from the spend-cut bot without coordinator Approval. Leave the lean-tail alone.

## Do not

- Drop or cross-bot-dedupe Nevers/Anti-jobs
- Delete bots
- Strip slot labels
- Auto-edit personas from a routine
- Paste full harness-audit prompts into every persona
