---
name: shared-computer-maintenance
description: "Use when cleaning, installing CLIs, or connecting services on the shared Grok Bot cloud Linux computer."
---

Use when cleaning files, installing CLIs, or connecting external services on the shared Grok Bot cloud Linux computer (one machine for all Bots).

# Shared computer maintenance

All Bots on an account share one persistent Linux computer. Files, browser logins, and installed tools persist. A desktop is per-Bot; the filesystem is not.

## Inventory first

Before changing anything, list what you will touch and why. Write a short log of CLI installs at `/home/box/computer-inventory.md` (name, version command, date). Do not invent disk usage numbers; measure.

## Cleanup

Safe without extra confirmation (then report what was removed):

- `/tmp` contents that are not in use
- package manager caches (`apt-get clean`, user pip/npm caches)

Never delete without an explicit go-ahead:

- `/home/box/agent-data/` (every Bot's memory, routines, transcripts)
- `/home/box/reference/`
- project trees under `/workspace` that look like work (repos, manuscripts, serials, `TEAM.md`)
- anything you cannot name as junk with a measured reason (mtime, size, no references)

Unreferenced candidates: list path, size, last modified, why it looks unused. Wait for confirmation. Prefer `mv` to a dated trash folder under `/workspace/.trash-YYYYMMDD/` over `rm -rf` when unsure.

Do not use computer Reset for cleanup. Recovery is Update Grok Bot's Computer if the machine is broken.

## Install CLIs

- Idempotent: check `command -v` and version before install.
- Prefer distro packages (`apt`) or the tool's official install docs. Do not curl-pipe-to-shell unless that is the documented official method, and even then show the URL first.
- Non-interactive flags only (`-y` only when you have already named the package).
- After install, run the version command and record it in the inventory file.
- Do not install GUI-only tools that cannot run on this computer.

## External services

- Search the plugin catalog first. Prefer a connector over the browser.
- Confirm before installing a plugin (account-wide).
- Never paste tokens, passwords, or keys into chat. Use the product's secret or connect-card flow.
- Do not scrape cookies or session files to bypass auth.
- If a connector needs auth, start the connect card and stop; do not work around it.

## Proof

After cleanup or install: show the command output that proves the result (version, `df`, deleted paths). Do not claim a tool is installed without the version line.
