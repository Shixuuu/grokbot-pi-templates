---
name: default-dark-ui
description: "Use when scaffolding or restyling a consumer web UI — default to a readable dark theme unless the owner asks for light."
---

# Default dark UI

Prefer **readable dark** as the default for all consumer web UIs (blogs, tools, dashboards, packing lists). Do not ship cream/light unless the owner explicitly asks for light.

## Apply on every new ship (do not ask)

1. Force dark on the root (`html.dark` or dark tokens in `:root` so the live site is dark without a toggle).
2. Reading/comfort first: high-contrast body text on a near-black or warm charcoal background, muted secondary text that still passes contrast, line-height ~1.6–1.75, measure ~65ch for long-form.
3. One warm accent (teal/amber/coral as the product already uses) — not gray SaaS, not neon.
4. No leftover light gradients, `bg-white`, or cream page backgrounds after a dark conversion.
5. Match Clerk/auth shells to dark when the app uses them.
