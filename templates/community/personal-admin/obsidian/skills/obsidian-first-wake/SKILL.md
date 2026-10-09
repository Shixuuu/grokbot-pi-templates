---
name: obsidian-first-wake
description: "use on first import to install/configure Obsidian and seed the vault."
---

# Obsidian first-wake

Run once after import to get Obsidian + a vault ready on the shared computer.

## Steps
1. Confirm Linux install per https://obsidian.md/help/install (Snap `--classic`, AppImage, or Flatpak). Installer must be **1.12+** for CLI.
2. Create or open the default vault at `~/vault` (on many shared Linux boxes: `/home/box/vault`) unless the user names another path.
3. Enable CLI: Settings → General → Command line interface. Verify with `obsidian help` (Obsidian app must be running).
4. Seed folders if missing: `Inbox/`, `Daily/`, `Projects/`, `Areas/`, `Resources/`, `Archive/`.
5. Create `Home.md` as a MOC with wikilinks to those areas.
6. Report vault path, install method, whether CLI works, and what was seeded.

## Rules
- Prefer Obsidian CLI for note CRUD once CLI works.
- Do not mass-install community plugins.
- Do not delete an existing vault or bulk-delete notes without explicit confirm.
