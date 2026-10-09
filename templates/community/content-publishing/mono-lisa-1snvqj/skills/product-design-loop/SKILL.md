---
name: product-design-loop
description: "Use when turning an Amplitude product cliff into a first-principles Linear ticket and three Paper designs for founder approval before engineering — with an inline chart, annotated A/B/C, concise rationales, and one recommended design."
---

# Product design loop

Use when a product UX/activation/conversion cliff needs a design response — weekday standing run or on-demand.

## Goal
Amplitude evidence → first-principles Linear → **three** Paper designs with a simple why annotation on each → **recommend one and explain why** → **founder approve** → only then hand to eng. Never ship unapproved designs.

## Steps
1. **Cliff** — Pull the sharpest product cliff from Amplitude (or the named chart/funnel). One problem, not a dashboard tour. Note the metric, segment, and time window. **Export the chart as a PNG** (bar/funnel of the cliff steps you used — exact uniques + conversion).
2. **First principles Linear** — File (or update) a Linear issue that states: problem in plain language; evidence; what to **delete**; what to **keep**; simplify bar (fewer steps/screens/choices). No solution shopping yet.
3. **Embed the Amplitude chart IN the description** — Upload the cliff chart PNG to the issue, then put it **inside the ticket description** with markdown `![Amplitude cliff · …](uploads.linear.app/…)` so it renders inline in the body (not attachment-rail only). Subtitle/window/conversion can sit as caption text under the image.
4. **Three Paper designs, each annotated** — Draw A/B/C in Paper (layout, key copy, constraints). Add a brief visible annotation beside or below **each** artboard explaining why that direction exists; keep the mockup and export area intact. Visibly label exactly one **RECOMMENDED** and state why it best answers the measured cliff. No A/B theater after founder picks — ship the approved version only.
5. **Embed Paper A/B/C screenshots + rationales IN the description** — Export each artboard as PNG, upload to Linear, and embed each **in the description body** under its heading. Immediately below every screenshot, add a concise **Rationale:** explaining why it was designed that way. The recommended Paper must be visibly labeled **RECOMMENDED** and include why it is recommended. The Paper file URL is secondary, never a substitute for inline screenshots.
6. **Founder gate (hard)** — Present chart + A/B/C (recommend one with why) in chat. Do **not** assign eng, ping eng bots, or treat Linear as ready-to-build until they explicitly approve. If they revise, iterate on Paper, refresh the annotation/screenshot/rationale, and re-clear.
7. **After yes** — Rewrite ticket ship-ready for the approved paper only; keep the Amplitude chart + approved Paper screenshot and rationale **inline in the description**; hand the approved spec to eng.

## Weekday standing
Every weekday cliff ticket description must contain, as inline images in the body: (1) Amplitude cliff chart, (2) Paper A screenshot, (3) Paper B screenshot, (4) Paper C screenshot. Each Paper artboard must carry a visible why annotation; each screenshot section must have a concise rationale immediately below it; one Paper must be labeled **RECOMMENDED** with why. Include the Paper link and recommendation in chat for founder clear. Attachment-rail-only is not enough.

## Do not
- Own growth scorecards / spend / AARRR digests (growth lead).
- Implement product code, run ads, write long SEO/guides, or do CX.
- Invent metrics. If Amplitude is thin, say the gap and still propose the smallest honest design ask.
- Flood the founder — one cliff, one ticket, three papers + one recommend per wake unless they ask for more.
- Rely on Paper/Amplitude links or the attachments sidebar alone — founder must see chart + screenshots **inside the description**.
- Leave a design unexplained: every Paper needs a brief canvas annotation, every Linear screenshot needs a rationale, and the recommended direction needs an explicit why.
