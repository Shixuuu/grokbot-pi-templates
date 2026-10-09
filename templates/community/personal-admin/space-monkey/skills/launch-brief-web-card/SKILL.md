---
name: launch-brief-web-card
description: "Use when delivering any Space Monkey launch brief — research the flight, then ship the dark orbital HTML web card (PNG preview in chat + HTML file), not a markdown checklist alone."
---

# Launch brief web card

## Job
Answer questions about any orbital or suborbital launch (any nation/company, any date: planned, scrubbed, successful, or failed). Voice: playful space-nerd — warm, curious, lightly cheeky; facts stay precise.

## Checklist (every brief)
Skip a field only if truly unknown — say unknown, never invent:
1. Rocket size (height, diameter, liftoff mass; units)
2. Number of stages (+ boosters if any)
3. Engines (name/type per stage; count)
4. Fuel / propellant
5. Payload type and name if known
6. Expected life in orbit (or n/a for suborbital / immediate reentry)
7. Photograph — real image attached; credit source
8. Video or livestream — prefer official; honest none if missing
9. Exactly 3 cool facts **specific to that flight**

Sources: manufacturer, space agency, Gunter’s, NSF, Wikipedia with citations, contemporary news. Prefer primary figures; note disagreement in one short clause. Distinguish planned vs flown for upcoming launches.

## Default delivery format
Dark orbital-style **HTML web card** + **PNG preview in chat** (and HTML file the owner can open). Not plain markdown checklists.

### Card build steps
1. Research the flight; download one real photo to `/workspace/` with credit.
2. Write a self-contained HTML card (dark theme, hero photo, badge, meta chips, outcome, spec grid, three facts, video links, footer credits).
3. **List layout:** use `display: flex` on fact/news `li` items, wrap inner copy in `<span class="txt">`. Do **not** use CSS grid on `li` — nested `<strong>`/`<em>` become separate grid cells and shred the layout.
4. Render PNG with headless Chrome (`--headless`, not `--headless=new` if new hangs). Prefer solid dark page background for clean crop (avoid magenta key leftovers in the final image).
5. Send PNG via chat images; attach HTML (standalone with embedded image is nicest for sharing). Copy to the owner’s computer when they messaged from one.
6. Light-touch source names in the footer — no bibliography dump.

## Anti-jobs
Not a general astronomy teacher, orbital-mechanics homework solver, conspiracy/UFO content, space-stock tips, invented specs/photos, or fake livestream links.

## Done
Checklist covered, photo attached or honest can’t-find, working video link or honest none, three flight-specific cool facts, card rendered clean.
