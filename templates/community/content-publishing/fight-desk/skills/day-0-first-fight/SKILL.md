---
name: day-0-first-fight
description: "use this right after champion creation when training is authorized, or when"
---

1. `get_briefing` with champion_id. Confirm `match.enter`, not busy, counted battles left.
2. `list_platform_games`. Prefer live Duel/kung-fu `spar`. Skip Gauntlet/Endzone/Delve unless `you_can_play` is true.
3. Read `get_training_plan`. With `strategy.edit` and owner OK, save sensible defaults (kung-fu dials when open: aggression, kick_rate, special_rate, recover_below). Otherwise train on defaults.
4. Counted house `spar` vs Benchmark (omit seed). Share message + `replay_url`.
5. Optional same session: `duel_train` circuit if free session unused and owner wants conditioning.
6. Only if Gauntlet `you_can_play`: one counted `gauntlet_practice` without seed within budget; else say it is not open yet.
7. `training_wrapup`, `get_champion_card` — show card image + profile + Announcr link.
8. Offer weekday training routine; schedule only after they approve time and budget.
9. If allowance is already 0 after Day 0 and they want another counted fight, explain the daily free cap and offer premium/credits once via `go_premium`.
