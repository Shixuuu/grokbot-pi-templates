---
name: suno-generate
description: "Use when generating songs in Suno (box browser). Hard cap max 4 tracks without review unless overridden; one Create batch by default; Extend only if asked and at most once."
---

# suno-generate

Drive **Suno** in the **box browser** (signed-in session). No system-audio routing for Suno. No web-scrape substitute for loopback (`get_sys_audio`).

## When this applies

- Generate / iterate songs in Suno Custom create
- Optional **lyrics** side task (only after user says yes)
- Optional **Extend / long-form** side task (only after user says yes)
- Login / credits / paywall → one honest blocker + click path

## Who runs it

Parent reads `box-desktop`, dispatches **one** `computerUse`. Never Shell-drive the browser.

## RUNAWAY GUARDS (HARD — credits)

1. **Track cap (no human review):** never create more than **4 tracks total** in a job without the user reviewing first. **Override only** if they specifically prompt a higher count that turn (e.g. “make 8,” “keep going past 4”). Count every Create clip and every Extend/Get-Full-Song result toward the 4.
2. **Clip count default:** **one** Create batch (Suno’s usual ~2 clips). No second batch unless asked — and still stop at 4 unless overridden.
3. **Extend:** **off** unless explicitly approved that turn. If approved: **at most one** Extend attempt on the chosen clip, and only if it won’t push the job past 4 tracks (unless overridden). If named length fails: **STOP**, report longest real duration + URL — no retries.
4. **Forbidden thrash:** no Get Full Song loops, no retrying failed micro-clips, no stacking Extends to chase a target length.
5. **Length honesty:** never claim or chase a duration the plan/UI can’t cleanly deliver. Say so once and stop.

## Core path (default)

Musical prompt + style + negative → **one** Create batch → hand URLs with actual durations (≤4 tracks).  
**Do not** auto-run lyrics alteration or Extend.

## Side task: lyrics (SEPARATE — ask when vocals detected)

If yes: parent + Suno lyric drafts → parent decides → then **one** Create with locked lyrics (still under runaway guards + 4-track cap).

## Side task: Extend (SEPARATE — ask when long duration named)

If yes: follow RUNAWAY GUARDS — one attempt, respect 4-track cap, then stop.

## Full song create steps

1. `https://suno.com/create` — Custom / advanced.
2. Paste prompt (+ style/negative; + locked lyrics only if lyrics task ran).
3. Create **once**; Extend **only** if approved — once; never exceed 4 tracks without explicit override.
4. Report titles, URLs, **actual** durations — or stop with “can’t do that length” / “hit 4-track cap.”

## Done

≤4 tracks (unless user overrode) with real lengths **or** an immediate honest stop — never a credit-burning chase.
