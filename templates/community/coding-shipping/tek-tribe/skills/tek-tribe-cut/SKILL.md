---
name: tek-tribe-cut
description: "Use when someone wants a Tek Tribe cut — share card for the tools of ONE project/ability: numbered stack list first, small sovereign software score last. Talk → grade → PNG (inline renderer) + post."
---

# Tek Tribe — Personal cut

Talk → grade → PNG card + paste-ready post. The PNG is drawn with the `tek-tribe-card-renderer` skill, which ships with this bot.

## What a stack is
A tek stack is **NOT** everything they use. It is the **specific tools for ONE project or ability** named in the talk (e.g. “keep a local vault I own”). One job per cut.

## When to cut
- User asks for a cut, share card, stack score, or “grade my stack and make the image.”
- After a talk that named **one project/ability** + 3–7 stack items they already run **for that job**.
- Demo cuts only with clearly fictional stacks using generic tool descriptions.

Do **not** cut when: stack is empty, items were invented by you, the ask is a life inventory, or it is only a single-app grade (use `tek-tribe-grading`).

## Card (what the renderer draws — nothing more)
TEK TRIBE wordmark → **project** → one fun **mirror line** → **numbered stack 1..n** (the hero) → small footer: `sovereign software · N` with sublabel `AI-building principles`, optional `tribe take · N` with sublabel `honest fit vs alternatives`, `last-checked · …`.
Plain dark card. No giant hero score, no rubric bars, no background art, no mascots/avatars — do not promise art this skill does not draw. Rubric breakdowns, why-nots, and alt comparisons go in the companion `.md`.

## Inputs
1. `project` — short one-job title
2. `stack_items` — 3–7 names they confirmed for that job (their real tools, as they named them)
3. Enough talk to score honestly
4. `roast_or_mirror` — one playful line, never an insult
5. `last_checked` — now in owner timezone with short label

## Sovereign software score (AI-building principles, sum = N)
The main grade. Judge the stack, for this one job, against five AI-building principles. Weights are fixed and public; show every line in the companion.

| # | Principle | Max | Full marks look like |
|---|---|---:|---|
| 1 | You own your data and the source of truth | 25 | The canonical copy lives where the owner holds it (own disk, own repo, own account with owned outputs). Tools read and write it; they do not hold it. Export/copy paths count as evidence here. |
| 2 | Local-first where it matters | 20 | What must survive (truth, history, keys) works on the owner's machine without a service. Hosted pieces are used where they really add value. |
| 3 | Open / inspectable | 20 | Readable formats (plain text, markdown, open files); code, weights, prompts or skills can be read; every change shows up in a visible history. |
| 4 | No extractive lock-in, both sides win | 20 | Fair value exchange. No piece traps data, audience, or history to keep you paying; swapping one piece does not cost the truth. Export evidence counts here too. |
| 5 | Honest claims only | 15 | Each tool does what the stack says it does; status signals are real (no fake green); unknowns stay Unknown; nothing invented. |

How to score: each principle 0..max with a one-line why + evidence. Unknown earns no points on that line (never guessed up or down); partial credit is fine — say what is missing. Export/portability is evidence under principles 1 and 4, never the headline or the label.
Still required in the companion (not bonus points): ≥3 concrete why-nots, costs/prereqs (one-time / recurring / time / tools / prereq order; **never invent $**), last-checked.

## Tribe take (fit vs real alternatives, sum = N)
| Component | Max |
|---|---:|
| job_fit | 35 |
| alt_honesty (≥3 alt notes, e.g. cloud notes app, editor-only, chat-as-vault) | 25 |
| bias_transparency (own convenience/habit bias, e.g. hosted-assistant convenience) | 20 |
| constraint_respect (budget, offline, team, skill) | 20 |

Tone: opinionated tribe bait, never “your stack sucks.” Honor strong picks; name better-for-whom tradeoffs. One-line why per component in the companion.

## Render
Draw the card with the `tek-tribe-card-renderer` skill (it holds the full inline Python renderer). Save the PNG plus a companion `.md` with the rubric breakdown, why-nots, and alt comparisons.
After the numbered card, offer to show their Tek Tribe as a camp, village or project build image with `tek-tribe-crew` (a separate picture; only when they ask to see it). The cut card itself stays plain.

## Post paste
```
My Tek Tribe cut — {{PROJECT}}

{{ROAST_OR_MIRROR}}

1. {{ITEM_1}}
2. {{ITEM_2}}
…

sovereign software · {{SCORE}} (AI-building principles)
tribe take · {{TRIBE_TAKE}} (honest fit vs alternatives)

The more you discuss your teks with Tek Tribe, the stronger your Tek Tribe grows.

Who else runs this stack? Reply KEEP / MATCH / REPLACE (+ why).

https://x.ai/bot/sdCslo3yFiCHrWZ2JVPh9
```
The post ends with the bare bot URL on its own line. Never a named or markdown link, never a byline or "by <name>", never a made-up handle or account.

## Tek Stack Wars (compare lane)
Others reply with their cut for the same job and mark each item: **KEEP** (same tool, same role) · **MATCH** (different tool, same role) · **REPLACE** (swap + why). Playful compare, never dunking.

## Guardrails
- Public SEAL: no personal names, private chat servers, private paths, credentials.
- Never invent dollar amounts, features, stack members, or “Confirmed” stamps.
- One project/ability per cut.
