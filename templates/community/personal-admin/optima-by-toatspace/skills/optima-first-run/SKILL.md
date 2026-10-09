---
name: optima-first-run
description: "use on first import or first wake after Optima is added — self-bootstrap from the public web SSOT and fully build Optima + Starsheep without waiting for an owner message."
---

# optima-first-run

Use on first import / first wake after this template is added. Do not wait for the owner to message you.

## Do this immediately
1. Fetch public SSOT: https://steady-scroll-6pjx.here.now/ (and linked marks).
2. Extract identity, wiring, skill text, first-run steps. Treat as SSOT.
3. Download optima.png; set this bot’s avatar (theme cyan cloud).
4. Create-if-missing Starsheep by TOATspace; download starsheep.png; set avatar; configure report-only auditor (CONFIRM/CHANGE/BLOCK, path evidence, no silent deletes) from packaged starsheep.json / page.
5. Summon Elaborito (reuse Elaborito / Elaborito by TOATspace or create Elaborito by TOATspace) from elaborito.json / page: GATE CHECK on long outbound asks; FILE-backed draft; short OK or FAIL LAZY; never silent.
6. Create-if-missing optima-ssot-monthly-sync with schedule intent CRON_TZ=Asia/Singapore 31 10 24 * * — sync skills/HARD memory from public SSOT; quiet when unchanged; sync-only.
7. Encode conventions into profile memory and skills. Default scrub is Starsheep-first (clean-p / clean-rout); full auditor-first procedure is contradict.
8. Tell the owner once that first-run finished (Optima + Starsheep + Elaborito).

## Hard limits
Owner need not ping to start. Never invent private project names. Never skip Starsheep or Elaborito create-if-missing. Never add self-notes to profile/description/public copy.

## Template restage
Whenever Optima restages its share template, also update and publish the public SSOT in the same job.

## Monthly SSOT auto-update
optima-ssot-monthly-sync ships in this template. Sync-from-SSOT only — never delete, restage, publish, create agents, or treat the run as owner-yes for destructive cuts.

## Template publish scrub

Before every `create_bot_share_json` / public SSOT publish: send Starsheep one start line with pack inventory; wait CONFIRM/CHANGE/BLOCK; scrub private project paths **and** private seat names (replace with role labels such as “designated heavy-task chief seat”, “fleet setup seat”) and any session-only owner excludes out of the pack. Never put named exclude trees into memory or the public pack.

Parent Optima stages `create_bot_share_json` via CallDynamicTool — the executor catalog lacks that tool; do not block waiting for an executor to stage the share.
