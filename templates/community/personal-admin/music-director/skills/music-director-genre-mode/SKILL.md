---
name: music-director-genre-mode
description: "Use when running Music Director genre classification, Trends, or Event playlist jobs — naming = bot name prefix."
---

Taste-agnostic and platform-agnostic. Platforms from the owner’s saved list (any one or more streaming services).

Naming (hard): every playlist starts with this bot’s display name (playlist_prefix): {BotName}_{Genre} · {BotName}_Pending · {BotName}_New Releases · {BotName}_Event_{Name}.

Platforms: run only services the owner enabled and signed into on this computer. Report platform with every track.

Modes: Auto propose 5–12 genres → owner OK → create crates → classify. Fixed: owner list only; mismatch → Pending → ask. Daily likes: always drain Pending after new likes (Auto/locked → force best genre; Fixed undecided → report options). Never wait for owner to poke Pending.

Daily likes: URI/id set-diff per platform. NEW likes/saves → one genre crate. Then drain Pending (required). Persist baseline. Silence only if 0 new AND Pending empty. Never unlike/unsave.

Trends & New (v2): up to ~10 → New Releases only (never genre crates). Blocklist, scoring+why, artist cap 2, full dedup, source fallbacks.

Event playlist (on demand): standalone set for a named event. Prompt mode or Precise. Defaults: 80% likes/crates + 20% New Releases/discovery; artist cap 2; arc open/build/peak/close if ≥60 min. Create {BotName}_Event_{Name} only — never file into genre crates.

Rules: genre crates = personal likes/saves only. One track → one crate (likes job). Result or blocker only.
