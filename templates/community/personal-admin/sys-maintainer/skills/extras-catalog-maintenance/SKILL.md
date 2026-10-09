---
name: extras-catalog-maintenance
description: "Use this when you need to build or maintain a catalog of extra apps/packages on a Linux computer and restore them after system updates wipe installed software."
---

# Extras catalog maintenance

Goal: keep the base system and user-added extras separate, and put the extras back when a computer update wipes system-installed software (apt, npm globals, pip, CLIs in /usr/local/bin, docker images). Files under the home folder survive updates. The machine-id may or may not change.

## Never
- Never uninstall, delete, or downgrade anything.
- Never install anything that isn't already in the catalog. Only restore known extras.
- Never add an apt repo or keyring that wasn't already on the box when it was cataloged.
- Never edit the script, recipes, or baselines during a scheduled run. Propose the fix in chat.
- If extras are missing and there's no sign of an update, don't reinstall them. The owner may have removed them on purpose. Hold them and ask the owner first (see step 3).
- Never report an app as missing until you've checked every place it could live (see "Finding an app" below). Other bots may install apps outside apt.

## Layout (all under `~/sys-maintainer/` so it survives updates)
- `catalog.json`: extras with restore recipes (apt, local .deb, pip user package, CLI with a saved copy, symlink, apt repo files, home-folder app), plus optional `update_cmd` / `post_restore_cmd`. Each entry can list its `paths` (install folder and launcher). The `ignore` section lists items to never catalog.
- `baseline.json` (plus `baselines/` history): the base system.
- `snapshots/YYYY-MM-DD.json`: a daily snapshot, pruned after 60 days.
- `unsure.json`: items that couldn't be classified. These are never restored.
- `held.json`: missing extras that weren't reinstalled because no update was detected, each with the date it was first seen.
- `bin/` holds saved binaries, and `apt/` holds saved repo lists and keyrings.
- `inventory.md` is the human summary, and `last-run.txt` holds the latest summary.
- `maintain.py` has `check | restore [NAME ...] | update | recatalog | daily`, plus `--dry-run`. A lock file prevents overlapping runs.

Build `maintain.py` as a normal file. If one write is too big, split it into a few modules of about 300 lines or fewer. Test each subcommand with `--dry-run` before the first real restore.

## Finding an app
An app counts as present if any of these finds it: its apt package, `command -v <name>` on the full login PATH (`bash -lc`), a launcher or symlink in `/usr/local/bin`, `~/.local/bin`, or `~/bin`, an app folder in `~/.local/<app>`, `~/.local/share/<app>`, `~/opt`, or `/opt`, a `.desktop` file in `~/.local/share/applications` or `/usr/share/applications`, or its catalog `paths`. A folder only counts if it holds an executable or a `.desktop` file points into it, and a `.desktop` file only counts if its command exists. Apps unpacked into the home folder (tarball installs like a browser in `~/.local/<app>`) survive updates. Mark them `home_app` so they're known, and restore only a broken launcher or symlink, never the app itself. An app that's found but has a broken launcher is "degraded", not missing.

## First setup (empty catalog)
The box may already have extras, so don't treat everything as base. Classify everything by evidence (below), show the owner the extras list and the unsure list, and write the baseline only after they confirm.

## What `daily` does
1. It snapshots apt (manual packages plus versions), `/usr/local/bin`, `~/.local/bin`, and `~/bin` (with owners and symlink targets), app folders in `~/.local`, `~/.local/share`, `~/opt`, and `/opt`, `.desktop` launchers, npm globals, pip user packages, docker images, os-release, machine-id, and boot time.
2. It detects an update when the machine-id or os-release changed, or when several cataloged extras are missing at once (3 or more, or 2 or more making up 30% or more of the catalog), after checking every place in "Finding an app". On detection, it saves what's present now as the new baseline, then restores.
3. It restores and repairs degraded launchers only after an update is detected. Repo files and keyrings go first, then `apt-get update` (keep going if it fails, never disable signature checks), then packages, binaries, and symlinks. `post_restore_cmd` runs only after a real restore. With no update detected, missing extras go into `held.json` and the output's `held_missing` list instead. `changed` turns true only when the held list changes, so the owner is asked once, not every day. A manual `restore NAME` always restores.
4. It runs `update_cmd` self-updaters for extras that are present. Rate limits and 403s count as skipped. An update only counts when the binary actually changed.
5. It classifies anything new by evidence:
   - Symlinks into platform-managed folders are base.
   - apt: a user `Requested-By` in `/var/log/apt/history.log` means extra; no `Requested-By` means base.
   - A file or app folder owned by a non-root user is an extra. A root file from initial setup is base; anything else goes to unsure.
   - pip: a package with the REQUESTED marker is an extra; a dependency is base.
   - Aliases join their target's entry. Extras get a recipe automatically.
6. It prints a short summary and one JSON line with `changed`.

## Reporting
When `changed` is false, send nothing. When it's true, send one plain message about the update, restores, updates, new extras, and new unsure items. For newly held items, ask the owner whether to reinstall each one (`restore NAME`) or retire it. To retire an extra, the owner removes it from the catalog.
