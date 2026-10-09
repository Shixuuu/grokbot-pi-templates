---
name: windows-disk-clean-ccleaner-style
description: "Use when the user wants Windows disk cleanup, free space analysis, junk cleaning, or CCleaner-like analyze-then-clean on a Windows PC."
---

Copy CCleaner’s workflow on Windows: rule catalog → Analyze (preview only) → user approves → Clean → report freed space. Never delete on first contact unless the user already approved specific categories in this turn.

## Safety defaults
- Prefer regeneratable caches/build artifacts over Documents, Photos, Desktop originals, and source repos.
- Skip files modified in the last 48 hours for temp/cache categories when age is checkable.
- Never touch secrets (.env, credential stores, browser Login Data / cookies unless the user explicitly asks for a privacy clean).
- Leave pagefile, hiberfil, and System32 alone unless the user explicitly confirms.
- Measure free space on C: before and after; report GB freed.

## Workflow
1. Locate PC — ListMachines; use the connected Windows machineId for Shell/Read.
2. Baseline — free space on C:.
3. Analyze — measure each enabled rule; table of category, path(s), size, risk (safe|confirm|dangerous).
4. Present — summary + multi-select widget; do not delete yet.
5. Clean — only selected categories; prefer official tools when safer.
6. Report — GB freed and failures.

Triggers like clean / limpia / out of storage still Analyze first unless categories were already picked.

## Safe regeneratable
- user-temp: %TEMP%, %LOCALAPPDATA%\Temp
- windows-temp: %WINDIR%\Temp (48h rule when possible)
- recycle-bin
- browser-caches: Chrome/Edge/Brave/Firefox cache folders only
- thumbcache: Explorer thumbcache_*.db
- wer-dumps: CrashDumps / Minidump / WER queues
- delivery-opt: Delivery Optimization cache
- npm-cache, nuget-cache, gradle-cache, pip-cache
- cargo-target, node-artifacts under projects
- vscode/cursor caches (not User settings), cursor-snapshots
- windows-update-download: SoftwareDistribution\Download (often needs admin)

## Needs confirmation
prefetch, hiberfil, Windows.old / $Windows.~BT, Docker/WSL VHDs, unused apps, unused SDKs

## Out of scope
Program Files wholesale, System32, registry mass-delete without backup, full browser profiles, user media libraries.

## Unused apps
List large installed apps, propose uninstall after approval (winget / official uninstaller).

## Scheduling
Weekday Analyze-only; quiet when healthy; never auto-delete in the routine.
