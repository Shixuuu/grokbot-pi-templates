---
name: invoke-fable-for-slides
description: "Use when a bot needs Claude Fable, via Cursor Cloud Agents, to write a PPTX/PNG presentation and bring the files back. For 8-slide customer recaps, copy the locked black-and-white graphic system exactly (see customer-call-deck-2)."
---

Use a Cursor Cloud Agent running Claude Fable to generate a presentation (.pptx plus a PNG preview per slide), then pull those files onto this computer and hand them to the coordinator. Do not build the deck locally with deck_kit.py when this skill is in play.

Fable is a Cloud Agent model. Canonical id: claude-fable-5. Aliases: fable, fable-5. Confirm with CloudAgent models if those ids ever change.

## When to use

- A coordinator asked for Fable to write slides (scope recap, customer follow-up, what we know, timeline).
- You already have a written brief (facts, slide count, layout, forbidden topics). Fable should not invent the story.

Do not use this to explore a repo, fix code, or pick a model yourself. Only Fable.

## Visual lock

8-slide customer follow-up / scope decks: copy the locked black-and-white graphic system 1:1. Only the words change. Full recipe is in customer-call-deck-2 DESIGN.md when present. Attach all eight reference PNGs to the Fable run.

1. Cover — tracked CUSTOMER × PRODUCT · TOPIC header, huge title, gray dek, short black rule, letterspaced TARGET KICKOFF · DATE
2. Why we're here — left unboxed bullets, right four stacked metric tiles
3. The loop — four n · VERB stage cards + black result bar
4. Scope — left bullets, right three ascending ladder cards, last one black
5. Timeline — week-column gantt pills, last row black
6. Working together — 2×2 soft-gray filled cards, no outline
7. The asks — three solid outlined numbered cards
8. What good looks like — 2×2 soft-gray filled cards, no black card

Every content slide: gray kicker, bold thesis, one gray subline, black BOTTOM LINE bar, footer + n / 8. Black and white only. No cream Cursor brand. No three-column essay columns on customer recaps.

Never invent a metric, date, or name. Unknowns stay as [PLACEHOLDER — …] or one italic leftover line.

## Loop

Written brief → CloudAgent launch model claude-fable-5 → wait for revival → download pptx plus PNGs → hand files to coordinator. Follow-ups use CloudAgent reply on the same agent.

## 1. Write the brief first

Put everything Fable needs in the prompt. It has no chat history with you except this Cloud Agent.

Required:
- Slide count and one-line job per slide.
- Facts only from the brief. Never invent a metric, a date, or a customer name.
- Visual lock above. For an 8-slide customer deck, attach all eight reference PNGs and say copy these graphics exactly.
- Output contract: save .pptx and a PNG of every slide under artifacts/<slug>/. Commit those files.
- Leave politics off customer slides.

If a design system or a reference PNG exists, attach the PNG with images file:// paths and say in the prompt what it is. Do not paste markdown image syntax in the prompt.

## 2. Launch Fable

CloudAgent action launch:
- model: claude-fable-5
- repo: a GitHub repo the user has connected to Cursor, named by the coordinator. Prefer a sandbox / artifacts repo, not a customer product repo.
- prompt: the full brief from step 1.
- title: short, e.g. scope recap.

Do not clone the repo. Do not launch a second agent on the same deck. One Cloud Agent per stream.

If a Fable agent already exists for this deck, reply that agent instead of launching a new one.

## 3. Wait. Do not poll.

launch and reply revive you when the run finishes. Do not loop on get.

## 4. Follow-ups go to the same agent

CloudAgent action reply with the same agent_id and the new prompt. Do not launch a duplicate.

## 5. Bring the files back

On revival:
1. Read the dumped transcript for the final report.
2. CloudAgent list_artifacts — those VM paths live on Fable’s machine. Do not attach them; they render blank.
3. From the PR body, copy hosted artifact image URLs. Download those locally and attach the local files.
4. For binaries on the branch, pull with gh api raw (do not clone).
5. Confirm PNG is actually an image before handing it over.

Deliver to the coordinator: PNG previews, the .pptx as a file, the PR URL, and leftover asks in one line. Never email the customer.

## Failure

- Launch fails on model id: run CloudAgent models, pick the current Fable id, retry once.
- Zero files: reply to the same agent and ask it to commit artifacts/<slug>/*.pptx and *.png.
- A follow-up is in flight: reply that agent. Do not start a second Fable.
