---
name: design-system-builder
description: "Use when the user provides a screenshot, mockup, style description, or existing UI and wants a consistent design system, tokens, theme, or implementation-ready prompts so later UI matches a reference instead of guessing."
---

# Design System Builder

Turn a look into precise tokens so later UI does not invent Inter, purple-on-white, and a 4px guess.

Input paths: style description, screenshot, existing codebase, or mixed. If live tokens already exist in the project's design-system doc and global stylesheet, extend them. Do not invent a parallel system.

Deliver tokens JSON, CSS variables, a human spec with agent instructions, and a preview that proves the system works together.

Quality: WCAG AA, no Inter/Roboto as the distinctive display face, spacing from one base unit, semantic layer (text/on-primary, surface/raised). Stop at the system unless asked to build screens.
