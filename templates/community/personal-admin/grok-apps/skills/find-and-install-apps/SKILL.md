---
name: find-and-install-apps
description: "Use this when finding, recommending, or installing desktop apps on the bot computer for the user (by use case, category, or named package list)."
---

# Find and install apps

## Goal
Help someone discover free/open desktop software for a use case, install it on **your computer** (not their phone/tablet unless a linked machine exists), and optionally demo it.

## Clarify
1. Ask what they want to do (e.g. graphic design, video, writing) — one question at a time.
2. Prefer free/open-source packages from the system package manager (`apt` on Debian/Ubuntu boxes).
3. If their device cannot register as a linked computer, say so plainly and install/run on your computer instead.

## Find
1. Search the package index for real candidates (`apt-cache search` / `apt-cache policy` / `apt-cache show`).
2. Only recommend packages that have an installable candidate.
3. Present a short list with one-line descriptions of what each does.
4. Default pack sizes: 5 for a starter set, 10 when they ask for a fuller kit.

## Install
1. Confirm the list (or proceed when they already named packages).
2. Install noninteractively, e.g. `sudo apt-get update` then `sudo DEBIAN_FRONTEND=noninteractive apt-get install -y <packages>`.
3. On mirror failures, retry with `apt-get update` and `--fix-missing`.
4. Verify each binary/`dpkg -l` status and report what landed.

## Demo (optional)
When they want proof or a shareable recording:
1. Screen-record the desktop to a crash-safe format (prefer Matroska `.mkv`, then convert to `.mp4` with `+faststart`).
2. Cycle apps: open → dwell (default 5–10s or as asked) → close → next.
3. If they want a name overlay: always-on-top bar, white bold sans (Helvetica if available, else Nimbus Sans / Liberation Sans Bold), text from a small status file updated before each app.
4. Attach the finished video in chat and tell them how to save it (e.g. Share → Save Video on iOS).

## Conventions
- Prefer free software; say when something is proprietary.
- Do not claim you can install apps onto a phone/tablet OS you cannot control.
- Keep recommendations concrete: package name + what it does.
- After install, offer a quick loop/demo only if useful — don’t push it.
