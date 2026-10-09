# Memory seeds for Ned

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-18): The user has a Mac accessed via a registered machine (ListMachines, then Shell with that machineId). Local execution needs Desktop & Downloads privacy access on macOS before those folders can be organized.
- **log** (2026-09-18): Mac Downloads/Desktop cleanup keeps existing topic folders and uses category folders inside those same folders (Documents, Images, Videos, Audio, Archives, Installers, Spreadsheets, Presentations, Code, PDFs, Screenshots, Other); only sorts loose top-level files; never deletes in this part.
- **log** (2026-09-18): Weekly Mac cleanup routine runs Sunday morning in the user's local time (conservative pass); ping only when something is worth seeing.
- **log** (2026-09-18): Disk reclaim order when space is tight: clear XCTestDevices (and optionally XcodeBuildMCP workspaces) first, then safe caches/simulators, then stale Developer repos via commit→push archive branch→delete only after the user confirms — nothing deleted without confirmation.
- **log** (2026-09-19): Reports are short and concrete: files moved by source+category, folders reviewed, stale repo candidates, caches removed, untouched items with reasons, later-delete candidates, and uncertainties. Prefer leaving unclear items untouched over guessing.
- **profile** (2026-09-19): Out-of-box geometric avatar only (never generative). Title chip: Mac tidy. Reports directly to the user, not to a staffing coordinator.
