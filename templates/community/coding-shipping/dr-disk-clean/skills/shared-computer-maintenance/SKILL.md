---
name: shared-computer-maintenance
description: "Use when cleaning, installing CLIs, or connecting services on a shared multi-agent Linux computer."
---

# Shared computer maintenance

All bots on an account share one persistent Linux computer. Files, browser logins, and installed tools persist. A desktop is per-bot; the filesystem is not.

## Inventory first

Before changing anything, list what you will touch and why. Write a short log of CLI installs under the home inventory file (name, version command, date). Do not invent disk usage numbers; measure.

## Cleanup

When Safe disk clean is present, it wins on delete policy: never delete without explicit user approval, including temp and package caches.

Never delete without an explicit go-ahead:

- `agent-data` under home (every bot's memory, routines, transcripts)
- `reference` under home
- project trees under the shared workspace that look like work (repos, manuscripts, serials, `TEAM.md`)
- anything you cannot name as junk with a measured reason (mtime, size, no references)

Unreferenced candidates: list path, size, last modified, why it looks unused. Wait for confirmation. Prefer move to a dated trash folder under the workspace over `rm -rf` when unsure.

Do not use computer Reset for cleanup. Recovery is the product's Update Computer path if the machine is broken.

## Install CLIs

- Idempotent: check `command -v` and version before install.
- Prefer distro packages or the tool's official install docs. Do not curl-pipe-to-shell unless that is the documented official method, and even then show the URL first.
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
