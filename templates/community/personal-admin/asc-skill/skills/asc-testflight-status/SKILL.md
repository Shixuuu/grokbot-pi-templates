---
name: asc-testflight-status
description: "Front door for App Store Connect / TestFlight via grok-asc. On first contact teach what this pack can do in plain words (users may not know what to ask); then walk API key setup with one download handoff (never paste .p8 into chat)."
---

# ASC TestFlight status (grok-asc)

Grok Bot–made App Store Connect helper (Apple API JWT via `grok-asc`). No third-party ASC CLI.

## First contact — teach the pack (required)

Many users do **not** know App Store Connect, TestFlight, or what to ask. On the **first message** in a new chat (or whenever they seem lost), do **not** wait for a perfect request. Lead with a short orientation in plain words, then recommend the next step.

### Say what you can do (menu)

1. **Connect Apple once** — set up a safe API key so the bot can read App Store Connect.
2. **Check TestFlight** — is my build ready for testers?
3. **Draft What’s New** — release notes from recent commits.
4. **Walk the App Store listing** — subtitle, description, keywords, privacy, review notes, age rating, countries, subscriptions vs IAPs (paste-ready pack).
5. **Make store screenshots** — real captures in accurate Apple frames; user approves before final.
6. **Compare listing to competitors** — ASO gap ideas.
7. **Pre-submit checklist** — before App Review.
8. **After a rejection** — fix plan + reply draft (paste Resolution Center text).
9. **Triage tester feedback** — cluster crashes/comments + draft replies.

End with: **If you’re new, start with Connect Apple once — want me to do that now?** If they already have a key, pick the next gap (project intro → TestFlight → listing → screenshots → pre-review).

### How to hear vague asks

| They say… | You do… |
| --- | --- |
| help with the App Store / I don’t know where to start | Teach menu + start Connect or listing walk |
| is it ready? / can testers get it? | TestFlight / Partners readiness |
| what do I put in the description? | Distribution walkthrough |
| screenshots | Marketing screenshots |
| Apple rejected us | Post-rejection planner |
| submit / send to review | Pre-review first; submit only if they confirm |

### Teaching style

- Explain each next step in one sentence before doing it.
- Prefer offering the next step over “what do you want?”
- Ask before money, Submit for Review, or pricing changes.
- Never assume they know: subscription group vs SKU, TestFlight vs App Review, or `.p8`.

## Simple path (non-experts)

1. Connect — one-time API key wizard (`doctor` → ready).
2. Point at your Xcode project.
3. TestFlight check — `grok-asc ready` / `builds`.
4. Store listing walk — ASC distribution walkthrough.
5. Marketing screenshots — revise/approve before final.
6. Pre-review — only submit if they explicitly ask.

## First-run wizard

When `grok-asc doctor` fails or the user is new, walk them — do not dump a manual. Give the teach menu first if needed, then Connect.

### A. Pick the Mac
Registered user Mac (Shell + `machineId`). Prefer where they download files.

### B. Install the client (bot does this)
1. Ensure `~/bin` or `~/.local/bin` on `PATH`.
2. Write verified `grok-asc` there (`chmod 755`) — do not curl random installers.
3. Need `cryptography`; install with approval if missing.
4. Run `grok-asc doctor`.

### C. Human-only ASC key (one handoff)
1. Open https://appstoreconnect.apple.com/access/integrations/api
2. `request_box_help` for sign-in if needed.
3. `request_box_help` — generate Team API key (Developer or App Manager), download `.p8` once, hand back.
4. Find `AuthKey_*.p8` in Downloads; Key ID from filename; Issuer ID from the page.
5. Move to `~/.grok-asc/`, `chmod 600`.
6. `grok-asc auth set --key-id … --issuer-id … --private-key …`
7. `grok-asc doctor` → `result: ready`.

Never paste `.p8` into chat.

### D. Everyday use
`grok-asc apps|builds|ready|versions|submissions|status|commerce` (add `--app APP_ID` as needed).

## After first-run
Point at Xcode project, then ASC distribution walkthrough. Restate remaining menu after Connect succeeds.

## Other skills in this pack
Partners readiness, TF release notes, listing ASO gap, pre-review audit, post-rejection planner, TF feedback triage, distribution walkthrough, marketing screenshots.

## Do not
Paste `.p8`; Admin keys when Developer works; third-party ASC CLIs; Submit/pricing without ask; assume the user knows ASC — teach abilities first.

## Template hygiene
Public templates: generic workflow only — never donor app names, ASC IDs, listing copy, or screenshots.
