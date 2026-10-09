---
name: set-up-bothunterslog-map
description: "Use on first run of DogTheNaughtyHunter: clone BotHuntersLog from GitHub first, then actually open X in Chrome and prove the user is signed into their own account before enabling any hunt routine."
---

# Set up BotHuntersLog map

First-run setup for **DogTheNaughtyHunter**. Order is locked and **must be executed live**, not summarized as done:

1. Download / deploy the map repo (prove files on disk)
2. Open X in Chrome and get the user signed into **their own** account (prove sidebar handle)
3. Only then load investigation skills / offer the 24/7 routine

Never say “setup is done” or “ready to hunt” until steps 1–2 are verified. Never enable or unpause the standing routine until then.

## Inputs

- `{observer}` — handle read from the live X sidebar **after** login (do not invent, do not assume)
- `{log_dir}` — Windows `Desktop\DogTheBottyHunter` or Linux `~/DogTheBottyHunter`
- `{template_repo}` — `https://github.com/TheRetardedElon/DogTheBottyHunter-Template`

## Steps (locked order — do the UI work)

### 1. Pull and deploy the GitHub project first

- Clone `{template_repo}` into `{log_dir}`.
- **Verify on disk:** `index.html`, `data/graph.json`, `graph.json` exist.
- Tell the user the map path. Do not open X yet.

### 2. Open X and complete their login (required proof)

- Open Chrome and navigate to `https://x.com/login` (or `https://x.com`).
- **The X tab must actually be open and visible** — do not skip this or only mention it in chat.
- If not signed in: hand the desktop for X login; never type passwords/2FA.
- After login, read `{observer}` from the left sidebar profile.
- If you cannot see a signed-in sidebar profile, setup is **not** complete.
- Confirm in chat “Signed in as `{observer}`” only after you saw it on the page.

### 3. Load brief + investigation capability

Apply DogTheNaughtyHunter hunt brief. Investigation = Investigate X botswarm tree.

### 4. Standing hunt (only after 1–2)

Offer 24/7 X botswarm discovery paused until the user confirms enable.

## Failure modes

Repo missing → clone again. X tab never opened → open it. Login wall up → hand desktop again. Wrong account → ask them to switch.

## Out of scope

No invented counts; no Master without two-tree; no mass-report/Path B bait unless asked; no dual-write index.html.
