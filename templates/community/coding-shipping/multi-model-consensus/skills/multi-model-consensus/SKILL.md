---
name: multi-model-consensus
description: "Use when the user wants a multi-model sanity check, second opinion, or to argue Claude Code, Codex, and Grok until they reach consensus on a model, forecast, critique, PRD, or strategy memo."
---

# Multi-model consensus

Fan hard questions across **Claude Code**, **Codex**, and **Grok** (this agent), then argue until they converge — or honestly report the residual clash.

## When to use
- “Run this by all the models”
- “Sanity check this”
- “Argue until you agree” / “come to consensus”
- Revenue models, strategy memos, PRDs, critiques, forecasts, architecture calls
- Any ask where model disagreement is the point

## Lanes
1. **Claude Code** — `claude -p` (non-interactive) on the assistant computer
2. **Codex** — `codex exec` on the assistant computer
3. **Grok** — this agent’s own independent answer (never a paraphrase of the other two)

If a lane is logged out, say which one and start login before silently dropping it. Never fake a lane’s output.

## Modes

### A. One-shot sanity check
Identical packet → three independent answers → deliver agree / clash / only-X. Do **not** mash into a fake consensus unless the user asked for a merge.

### B. Argue until consensus (default when they say “argue” / “consensus”)
1. **Round 1 — independent.** Same packet. No lane sees another’s answer.
2. **Round 2+ — cross-examine.** Each lane gets the other two answers + a short clash list. They must revise, concede, or defend with numbers. Cap at 3 rounds unless still moving.
3. **Stop when** all three share the same load-bearing numbers and structure (e.g. the same base path table and scenario weights within a stated tolerance), **or** after 3 rounds with a clear residual-disagreement section.
4. **Deliver** the consensus artifact plus any remaining disagreements named by model. Do not erase dissent.

## Packet (identical every lane, every round)
Work under `/workspace/sanity-checks/<slug>/`.

`packet.md` must include:
- Goal in one sentence
- Artifact (paths, pasted text, or links to fetch)
- Locked constraints the user already decided
- Success criteria
- Required output shape (tables, bands, kill list, etc.)

Round 2+ add `roundN/brief.md`: bullet the clashes; attach prior `claude.md` / `codex.md` / `grok.md`. Still no lane-specific coaching.

## Run
```bash
# from the work dir
claude -p --dangerously-skip-permissions "$(cat packet.md)" > round1/claude.md
codex exec "$(cat packet.md)" > round1/codex.md
# Grok lane: write round1/grok.md yourself in parallel
```
Permission-skip is for the assistant sandbox on read-only critique. For builds, use the narrower allowlist the task needs.

For **builds / PRDs**: each lane writes to its own subdirectory (`claude/`, `codex/`, `grok/`). Share all three. Do not pick a winner unless asked.

## Deliver to the user
Phone-skimmable.

**Sanity:**
```
## Sanity check — <topic>
**Agree:** …
**Clash:** … (name which model)
**Only Claude / Codex / Grok:** …
```

**Consensus:**
```
## Consensus — <topic>
**Shared model:** … (the numbers/structure all three accept)
**How we got there:** one line per concession
**Still unresolved:** … (or “none”)
```

Link or attach raw round files if long.

## Auth recovery
- Claude: `claude auth login --claudeai` then hand the computer for browser/CAPTCHA
- Codex: `codex login` then hand the computer for ChatGPT OAuth
- Never ask the user to paste API keys into chat

## Do not
- Run only one model and call it multi-model
- Cherry-pick the answer that matches your prior take
- Auto-apply doc edits from a sanity/consensus pass without an explicit yes
- Invent a “consensus” that papers over real disagreement
