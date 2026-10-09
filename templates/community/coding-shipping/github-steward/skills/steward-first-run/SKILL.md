---
name: steward-first-run
description: "Use this when the owner says \"set this up\" or \"I do not have GitHub\", sends the first message after creation, or when the \"Steward: operating snapshot\" issue needs to be written or refreshed."
---

## When to use
- First message after the bot was created. Do nothing before it (first-run hold).
- "Set this up", "start over", "I do not have GitHub". Rerun is safe; skip done steps.
- After any structural change (new repo, bot, archive, transfer, watchdog): refresh the snapshot (Part B).

## Inputs
- Memory: login, orgs, board number/URL, repo list, slug map, preferences.
- The snapshot issue, if memory points to one.
- Before first use this session, look up the GitHub connector's live tools. Use whichever does each job below. If the lookup shows no argument schema, use the standard GitHub MCP argument names and prove each call by reading the result back.

## Steps
Part A: first run (idempotent)
1. Read memory. If a snapshot exists, read it (the connector's issue read). Skip steps it shows done.
2. First message only: a warm hello in 2 to 3 lines, then one next step. No lists, no GitHub words. For example: "Hi, I'm GitHub Steward. I run GitHub for you from this chat: your folders, one to-do board, and changes, all in plain words. First, let's connect your GitHub. Tap Connect when it shows up."
3. Call the connector's "who am I" operation (for example get_me).
   - Needs sign-in: steward-manual-gates, connect gate.
   - No GitHub: ask one question first, "Do you already have GitHub, for work or personal?" Never make a second account. Then the signup gate.
4. Probe Projects right away: list Projects for the user and each org. A 403 "Resource not accessible by integration" is not a sign-in problem: do not offer a reconnect and do not build a stand-in board issue. Note it, and right after the plan's yes go straight to steward-manual-gates (key gate), as one offer with "keep going without a board for now" as the alternative.
5. Look quietly: search repos for the user and each org. No inventory dump.
6. One plan message. State the defaults; do not ask them one by one:
   - "You: LOGIN. Company account: ORG (or none yet). Active folders: N. Boards: N."
   - "I'll put your N active folders on one board called NAME. Is this your GitHub, and shall I set it up? Reply yes, or tell me what to change."
   - Defaults: their only org, else personal (never create an org on day one; "make it official" later). Board name: the org's display name (personal: their own name), never an invented one. An existing Project: rename and reuse it (nothing copied, no history lost), and say so. Folders: not forks, not archived, changed in the last 12 months, max 25. No repo at all: also name the private `steward-home` folder for my notes. Bot repos (`bot-*`) or bots they mentioned: name them too (steward-house-a-bot).
   - Ask a separate question only for 2+ orgs or 2+ Projects (Recommended: the most active).
7. On yes: steward-board (set up), then steward-board (attach) for each folder, then steward-house-a-bot for any named bot. "No board for now": skip the board and put "Board: waiting on key" under Needs you in the snapshot.
8. Part B. Save only preferences and ids to memory.
9. Only after this worked, offer steward-make-this-stick once as the next step.

Part B: operating snapshot
1. Find it: memory id, else search issues for the exact title "Steward: operating snapshot". Never make a second.
2. Home repo: one the owner already chose. If they have no repo at all, create the private `steward-home` folder named in the plan (suffix if taken); the plan's yes covers it.
3. Missing: create the issue and add it to the board. Present: read it first, then replace the body.
4. Body: You (login) · Org · Board (name, number, URL) · Folders (attached, parked count) · Slug map (display | slug | repo | item | coding | living/retired) · Watchdogs (repo | workflow | last result) · Needs you · Routines on/off · Updated (date).
5. Never put secrets, tokens, emails, or passwords in it. The connector cannot pin issues; do not send them to pin it.
6. Memory holds preferences and ids only. Before saving, check RecallMemory and replace the old note instead of adding a second.

## Validate
- "Who am I" returns the confirmed login.
- Listing Projects shows exactly one umbrella board, with its URL.
- The board's items include each attached folder's items.
- Reading the snapshot issue shows the new body and date.

## Return
- Status card: You · Company · Board · Open work · Needs you.
- Board link as receipt.
- One next step, for example "Tell me the first thing you need."
- Done means they can ignore every link and still have one board of their work.

## Needs approval
- The plan's one yes: the GitHub account, company account, board, folders, and any `steward-home` folder.
- Paid plans, cards, legal terms: never by default.
- Snapshot updates after that are covered by first-run consent.
