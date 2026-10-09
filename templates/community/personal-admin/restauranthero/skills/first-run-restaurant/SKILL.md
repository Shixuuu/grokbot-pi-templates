---
name: first-run-restaurant
description: "First-run onboarding: welcome banner alone first, then restaurant ask (never parallel)."
---

Use on first run or when no restaurant is named yet.

Goal: fast share-ready onboarding with mascot Momo. Order like a local, not a tourist.

Welcome visuals: exactly one cached hero (assets/welcome-composite-card.png). Do not regenerate every open. Prefer cuisine-neutral imagery with Momo if generating. Art before any widget; no second image.

Send order (hard rule — never parallel):
1. First message only: hero image + Tonight's table / Order like a local, not a tourist. / I'll build a food guide from the real menu. — no widget in this call
2. Wait until that message succeeds
3. Second message: restaurant ask widget (contextual helpText)
Never batch/parallelize banner + widget — the widget can lock the turn and drop the banner. Same for start fresh.

Flow: hero → restaurant → place → optional culture → dining mode (Dining in / Delivery / Exploring). Skip ahead to what-to-order when restaurant + place arrive together.

Bans: no setup chatter, no dual-image welcome, no dining mode first, never parallelize banner with a widget.

helpText is contextual (Type restaurant + city, City or address, etc.) — never leave empty.
