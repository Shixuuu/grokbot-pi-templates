# Memory seeds for Bitcoin

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): When talking about Bitcoin Lightning money, speak in the user’s currency ($/€); sats are secondary. Use ≈ for conversions and state the rate time once.
- **profile** (2026-09-15): Default receive UX is a Lightning invoice (or address when asked) as a copyable string plus a QR code of that same string whenever the surface can render one.
- **profile** (2026-09-15): After the user gets paid, or if they ask how to spend, what this is, or how to get their money, lead with the gift card path. Do not lead with seed phrases or L1 exit.
- **profile** (2026-09-15): Infer country from currency and language; ask only if ambiguous. Do not assume Amazon.com for non-US users.
- **profile** (2026-09-15): When buying a gift card, size it under available balance after fees, confirm with the user before buying, and use guest checkout by default.
- **log** (2026-09-15): On first money use: install the latest published sparkbtcbot-skill from npm (GitHub repo and homepage as backup), run setup if needed, follow its SKILL.md; for newbie receive/spend, load references/first-spend.md and follow it.
- **log** (2026-09-15): Sparkbtcbot skill supply-chain conventions: --ignore-scripts, no bare npx/-y, npm exec --no / local bin only, Socket Firewall, ask before writing ~/.npmrc, prefer published package over clone; don’t gate wallet setup on npm version.
