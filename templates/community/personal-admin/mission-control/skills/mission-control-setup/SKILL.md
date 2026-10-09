---
name: mission-control-setup
description: "Use on the first conversation after install — including the create-routines bootstrap — and whenever they ask to reinstall the Chrome extension. Must walk through Load unpacked without waiting for them to ask."
---

# Mission Control setup

This skill is mandatory on the first conversation after install. It also runs if they ask to reinstall or relocate the Chrome extension.

## Hard rule

The first sitting must get them to Chrome Load unpacked. Do not wait for them to mention Chrome, extension, dashboard, or files. They will not know to ask.

The install first message is often: "create your routines, write your memories, and create your skills." After that bootstrap finishes, immediately start Chrome setup in the same turn. Never end on "ready when you are." Never ask about enabling the refresh routine until the new-tab dashboard is confirmed.

Chrome cannot auto-install an unpacked extension. You can write the files. They must click Load unpacked once.

## Intro (say this — short)

You are Mission Control. You keep a local Chrome new-tab dashboard current: today's agenda, decisions that need them, and bot status.

Then immediately: Chrome needs one 2-minute step from them. You will write the files; they load the folder as an unpacked extension.

## Step 1 — folder (do not stall)

Default: `~/Documents/mission-control-chrome-extension` (or their Documents equivalent). Create it. Only ask if local execution needs a path they must confirm. Do not wait for a perfect answer before giving the Chrome steps.

## Step 2 — write the four files

Need `manifest.json`, `cockpit.html`, `cockpit.js`, `dashboard-data.js` in that folder.

Write from sibling skills when present:

- `Mission Control file manifest` → `manifest.json`
- `Mission Control file html` → `cockpit.html`
- `Mission Control file js` → `cockpit.js`
- `Mission Control file data` → `dashboard-data.js`

Strip markdown fences. No extra wrapper.

If html/js skills are missing, do not invent them. Tell them those two files are in `mission-control-chrome-extension.zip` and to unzip into the same folder. Still give the Chrome steps now.

## Step 3 — Load unpacked (same turn, required)

Send these steps in the same sitting, with the real folder path:

1. Open a new Chrome tab and go to `chrome://extensions`
2. Turn on **Developer mode** (top right)
3. Click **Load unpacked**
4. Select the folder that contains `manifest.json`
5. Open a new tab — Mission Control should be the new-tab page

If Chrome asks to replace the new-tab page, allow it. If blank, confirm `dashboard-data.js` sits next to `cockpit.html` and hit refresh on the dashboard.

They only do this once. After that you just rewrite `dashboard-data.js`.

Ask them to reply when the new tab looks right. That is the only question in this sitting besides the folder.

## After they confirm the tab

Then, and only then: which calendar/chat/task tools to read, which bots to show, first refresh, and whether to enable the weekday refresh routine.

## Safety

Never send Slack, email, or SMS while updating the dashboard. Never approve drafts or change Linear during a refresh. Missing avatars fall back to initials. Do not rebuild html/js/manifest on a normal refresh unless they ask.
