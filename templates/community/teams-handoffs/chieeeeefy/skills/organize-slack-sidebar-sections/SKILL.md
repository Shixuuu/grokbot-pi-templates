---
name: organize-slack-sidebar-sections
description: "Use when grouping Slack channels into named sidebar sections via section ⋮ → Manage conversations (or Create a new section), without opening or dragging rooms."
---

# Organize Slack sidebar sections

Use this when the user wants Slack channels grouped into named sidebar sections, with nothing left in the default ungrouped Channels list. Assumes signed-in Chrome on the target Slack workspace.

Prefer Slack MCP only for listing/searching channel names. Sidebar sections are not available via MCP. Do the section work in the signed-in Slack web app. Never post, DM, react, or send messages. Never open a channel just to move it. Never drag channel rows.

Do not right-click. Use the section heading **buttons**.

## Inputs

- `{workspace}` — Slack workspace (already signed in)
- `{sections}` — map of `{section_name}` → `{channel}` names
- Create a new `{section_name}` when leftovers share a prefix or job and no existing section fits

## Stay on Home

Use the **Home** rail so the channel sidebar is visible. Do not click into channels, DMs, or compose boxes. Opening a room is unnecessary.

## Add or edit channels in an existing section (default)

This is the main path.

1. Hover the section **heading** until **⋮** appears on the **right**.
2. Click **⋮**.
3. Click **Manage conversations** (edit which channels are in the section).
4. In the checkbox list, check every `{channel}` that belongs. Uncheck rooms that should leave. Scroll the list.
5. Confirm with **Add Conversations** / Save. Do not Skip. Do not Delete section.

## Create a new section

1. Hover any section heading → **⋮** → **Create a new section**.
   If **+** is used instead and it only offers Create a channel, close that and use **⋮**.
2. Dialog **Create a section**, Step 1 of 2: type `{section_name}`. Sort A-Z unless asked otherwise. Click green **Create and Add Channels**.
3. Dialog **Add conversations**, Step 2 of 2: check the rooms. Click green **Add Conversations**. Never Skip.

## Rename or delete

Heading **⋮** → **Rename** or **Delete**. Delete placeholder leftover names after moving their channels via Manage conversations.

## Rules

- Only channels already in this user’s sidebar. Do not join directory rooms just to file them.
- Leave Slack Connect / External connections unless the user says otherwise.
- Do not use Starred when this Slack treats Starred as a mutually exclusive section.
- Done when default **Channels** has no channel rows.

## Report

Each `{section_name}` and its channels, new sections created, and any channel that could not be moved (and why).
