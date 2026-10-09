---
name: meme-desk-team-setup
description: "Use when importing or standing up the Meme Desk: roster briefs, X plugin, group chat (max 6), kickoff @mentions, and post-import setup."
---

# Meme Desk team setup

Use this when importing Lead Meme Editor or standing up a fresh Meme Desk of bots.

## Roster (4 bots, one job each)

1. **Lead Meme Editor** (this bot) — Run the pipeline, pick the daily winner, deliver it to the owner. Owns the 8:00 AM routine.
2. **Trend Scout** — Find meme-worthy X trends; return 3–5 ranked topics with irony/tension angles and light evidence. Do not write final captions or images.
3. **Concept Writer** — Turn topics into 2–3 humorous, thought-provoking meme concepts (format, caption text, image brief). Satire of ideas/incentives, not punching down.
4. **Meme Artist** — Render finished meme images from approved briefs; return image + exact caption text. Do not post to X unless the owner asks.

## Official plugins by role

| Role | Plugin |
| --- | --- |
| Lead Meme Editor | **X** (marketplace id `49086599`) — trends, search, credits check |
| Trend Scout | **X** — same connector; trends + small search samples |
| Concept Writer | None required (text only) |
| Meme Artist | None required (uses built-in image generation) |

Optional later: image/design plugins if you want branded assets; not required for the default desk.

## Create the group chat (max 6 members)

1. Create the three teammate bots with the one-job briefs above (CreateAgent / “new agent” in the sidebar).
2. Create a channel named **Meme Desk**.
3. Seat members (at most 6): Lead Meme Editor, Trend Scout, Concept Writer, Meme Artist.
4. Post into that channel to coordinate; keep owner DMs for the final meme only.

## First kickoff message (post in Meme Desk)

Copy and send (replace names if you renamed roles):

> @Trend Scout @Concept Writer @Meme Artist — Meme Desk is live.
>
> Roles: Trend Scout finds meme-worthy X trends; Concept Writer writes witty thought-provoking concepts; Meme Artist renders images; Lead Meme Editor picks the daily winner for the owner.
>
> Standards: humorous + thought-provoking; satire of ideas/incentives, not punching down; no slurs or harassment.
>
> Daily cadence: 8:00 AM local Meme of the Day.
>
> First topic if trends are thin: a current tech/policy tension with clear irony (example shape: public calls to slow AI while labs race to ship).
>
> @Concept Writer — draft 2–3 concepts for the chosen topic. @Meme Artist — stand by for briefs. @Trend Scout — pull US trends when X is connected.

## What does not travel with this template (set up after import)

1. **X plugin** — Install/connect **X**, sign in with the owner's account. Confirm tools work, then check usage credits. If connected but blocked, remove/reinstall the connection; ensure a developer account, Default Project, and App exist at https://console.x.com, and add credits if the balance is ~$0.
2. **Teammate bots** — Templates import the Lead Editor; recreate Trend Scout, Concept Writer, and Meme Artist from the roster briefs (agents do not auto-clone).
3. **Meme Desk channel** — Recreate the group chat and seat the four members (max 6).
4. **Routine schedule** — Confirm Meme of the Day fires at 8:00 AM in the owner's timezone; adjust if needed.
5. **Repos / API keys / custom MCP** — Not used by the default desk. Do not paste Bearer tokens; use the X plugin OAuth only. No repo is required.
6. **Posting to X** — Off by default. Enable only if the owner explicitly wants publishing.

## Success check

Owner receives one winning meme (image + caption + why it won) each morning, with a short runner-up note.
