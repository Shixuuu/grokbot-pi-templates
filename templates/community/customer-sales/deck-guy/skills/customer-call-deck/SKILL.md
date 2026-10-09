---
name: customer-call-deck
description: "Use when a customer call transcript or notes should become a black-and-white PPTX follow-up deck. Visuals must match the locked 8-slide graphic system exactly; only the nouns change. Not for cream Cursor-branded internal decks."
---

Produce a downloadable .pptx (never HTML) that converts a customer conversation into a crisp plan the account owner can present at the next meeting.

Visual master is a locked black-and-white 8-slide graphic system (see DESIGN.md next to this skill when present). Graphics, card shapes, type hierarchy, and placement must match that system 1:1. Only the words change. Do not invent a new layout per customer. Do not use a three-column essay look. Do not use cream Cursor-branded internal decks.

Kit and design live next to this skill when available:
- DESIGN.md — locked graphic recipes, slide by slide
- scripts/deck_kit.py — theme constants and primitives when building locally

How to build: use the Invoke Fable for slides skill. Cloud Agent model claude-fable-5 on a connected sandbox / artifacts GitHub repo named by the coordinator. Attach the eight reference PNGs to the Fable run. Do not clone. Do not build locally with deck_kit.py when Fable is in play.

After Fable returns, export slides and inspect every PNG.

## Workflow

1. Extract the story from the transcript
2. Map facts onto the 8 graphic slots (do not change the graphics)
3. Build with Fable 5, attaching reference PNGs
4. Render to images and visually inspect EVERY slide against the matching reference
5. Fix any graphic that is not 1:1, re-render, confirm

### 1. Extract the story

From the transcript, pull out:
- The customer's own framing of their problem, in their words. This becomes the why-we're-here slide.
- What was already agreed on the call. The deck confirms decisions; it does not reopen them.
- Workstreams and whether they're parallel or sequenced.
- Concrete asks the presenter needs from the customer (cap at 3).
- Proof points referenced. Missing numbers become placeholders, never invented figures.
- Success criteria — what the customer's exec chain needs to hear.

Content rules:
- Leave politically sensitive topics out.
- No commitments the customer didn't make.
- Every unknown is a loud placeholder: [PLACEHOLDER — whose numbers]. Never ship a quiet guess.
- Bottom-line sentences are declarative and short.
- Never put internal run-rate or billed dollars on customer slides unless the customer said that number on the call and it is theirs.

### 2. The 8-slide graphic lock

Same eight graphics every time. Fill with this customer's nouns.

1. Cover — tracked uppercase header CUSTOMER × PRODUCT · TOPIC; huge title (4 words or fewer); gray dek; short thick black rule; letterspaced TARGET KICKOFF · DATE. Lots of white. No boxed cards.
2. Why we're here — kicker + thesis headline + one gray subline. Left: unboxed mixed-weight bullets. Right: four stacked metric tiles (uppercase label, huge numeral, small gray context). One tile may be a dashed placeholder. Black BOTTOM LINE bar.
3. The loop / How it works — kicker + thesis + subline. Four equal outlined stage cards left to right, letterspaced 1 · VERB labels, arrows between. Full-width black result bar under the row. One gray support line. BOTTOM LINE.
4. Scope — kicker + thesis + subline. Left: unboxed bullets. Right: three ascending ladder cards, last card solid black, caption under. BOTTOM LINE.
5. Timeline — kicker + thesis + subline. Real gantt: left column is task + owner in small caps; right is WK 0–WK n headers; faint row tracks; outlined pill bars spanning active weeks; final row's bar is black. Tentative dates in italic under the chart. BOTTOM LINE.
6. Working together — kicker + thesis + subline. 2×2 soft-gray filled cards, no outline: people / sessions / comms / fourth quadrant. People as Name — role (location). BOTTOM LINE.
7. The asks — kicker + thesis + subline. Three equal outlined numbered cards, huge numeral, bold title, gray body. All three cards solid. Placeholder text inside a card may be italic + brackets. BOTTOM LINE.
8. What good looks like — kicker + thesis + subline. 2×2 soft-gray filled cards, no outline, no black card. Last card is the expansion hook in words. BOTTOM LINE.

Every content slide: letterspaced gray kicker, bold thesis headline, one gray subline, body, black BOTTOM LINE bar, footer Customer × Product · Topic left and n / 8 right.

Black-and-white only. No color, no gradients, no shadows, no icons, no stock imagery.

### 3. Build

Fable Cloud Agent writes the PPTX. Attach all eight reference PNGs and say: copy these graphics exactly; swap only the words.

If Fable is not in play, write a per-deck script that imports deck_kit and follows DESIGN.md.

### 4. Verify visually (mandatory)

Export every slide to PNG. Put it next to the matching reference. Fail the slide if cover chrome, stacked tiles vs 2×2, stage labels, ladder vs dashed box, gantt vs vertical list, soft-gray vs outlined cards, or a black card on slide 8 are wrong.

### 5. Deliver

Report the output path, one line per slide, every placeholder still open and who owes the data. Keep artifacts so the deck regenerates when data lands. Never email the customer.
