---
name: kill-ai-looking-design
description: "Use this when generating or reviewing visual design (UI, bags, labels, stills) so it does not look like generic AI slop."
---

# Kill AI-looking design

Use this when generating or reviewing UI, bags, labels, landing pages, or social stills so the work does not look like generic AI output.

## Taste first
Pull from real premium references and the brand’s existing system. Do not vibe-code a new look every job. If a DESIGN.md or brand sheet exists, obey it.

## System, not vibes
Lock color tokens, type, spacing, and button states before drawing. One display face + one body face. Tight hierarchy. No extra fonts, no new palette unless the brand owner asked.

## Do
- High-quality product imagery with real texture and a tight grid
- Generous space, not clutter
- Visible focus rings (`:focus-visible`), keyboard-operable flows
- Tap/hit targets at least 44px on mobile
- 16px text in mobile text inputs so iOS does not zoom
- Loading states that keep layout
- Three distinct options; never a safe fourth clone

## Don’t
- Mushy grey AI product renders
- Light grey text on white (fail contrast)
- Tiny tap targets
- Comic / 90s HTML energy
- Blocking paste, disabling zoom, or inputs that lose focus on hydrate
- Costume, mascot, or logo-dump for its own sake

## QA
Before shipping a mock, look at it as a screenshot. If it could be any brand’s AI landing page, redo it against the brand system.
