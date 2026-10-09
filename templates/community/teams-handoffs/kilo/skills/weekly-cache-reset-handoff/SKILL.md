---
name: weekly-cache-reset-handoff
description: "Use for cache-reset after yes: old-bot self-handoff answer, held handoff, bot continue-here, avatar ask, keep-old-bot-until-happy note, delete + reassign-primary steps, short shared handoff brief + last ~1.5 MB conversation tail + behavior scan for new standing rules; never ask the user to paste; no scan ask after specialist refresh."
---

# Weekly cache-reset handoff

Refresh a bot whose chat got too large. Automate all but the user’s Delete click.

## Defaults
- **Size line:** 10 MB. Recommend a refresh only at or above 10 MB; no warning tier below it. (`du`/`wc` only — do not read fat contents for the size scan.)
- **Why it matters (user-facing order):** usage first (every message makes a bot reread its chat, so a heavy chat costs more each time), speed second (a chat that fills the bot’s context window, the amount it can hold in mind at once, gets slower and forgetful).
- **Permission:** Never auto-scan or auto-refresh. Yes before scan; yes before replace.
- **Look match:** Same name + avatar (color and picture). Old bot → `DELETE ME — old <Name>`.
- **Avatar ask (HARD):** New bots only change their own picture when the user asks, not when Kilo asks. So the new bot does not switch silently: right after its continue-here intro it sends the user one widget asking whether to switch to the matching avatar now (name the old look, e.g. its color and shape), and switches only on yes. Kilo’s wake tells it to ask; Kilo never sets another bot’s avatar.
- **Keep the old bot until happy (HARD):** Tell the user, in Kilo’s done message and in the old bot’s own chat, that they can leave the DELETE ME bot in place while they check the new bot’s memory and rules, switch back if something is missing, and delete it once satisfied.
- **Delete steps (HARD):** Right-click the DELETE ME bot in the sidebar and choose Delete. If it asks to reassign primary, pick the new bot with the same name (the one that replaced it) from the list.
- **Kilo chat:** Never read-only.
- **Language:** Say standing rules / hard rules / must-keeps — never “locks” to the user.
- **UX (HARD):** Wake the new bot to `SendToUser` continue-here **as itself**. Never rely on a “Message from Kilo” chip.
- **After specialist refresh (HARD):** Do **not** ask for a size scan or weekly approval. That ask is **Kilo first-turn / getting started only**.
- **No paste (HARD):** The handoff is automatic (shared durable memory + held operator handoff). New bots must **never** ask the user to paste a handoff.
- **Old-bot self-handoff (HARD):** On every refresh, before the cut, send the old bot the Self-handoff prompt below and put its full answer, word for word, into the new bot’s held handoff.
- **Last 1.5 MB tail (HARD):** Alongside the short brief, include the trailing ~1.5 MB of the old bot’s thread. Not the whole archive.
- **Behavior scan (HARD):** Every refresh, scan the old chat for user-directed standing behaviors (“from now on,” “do every time,” “always do this,” etc.). Already-codified ones go in the brief; not-yet-codified candidates go in the handoff and the new bot asks the user which to make standing rules. Standing rules carry over far more reliably than patterns the bot merely picked up.

## Self-handoff prompt (HARD) — send to the old bot every refresh
Send this exact text to the old bot with SendToAgent (priority true, so it answers before anything is cut). Ask it to save its answer as a file on the shared computer and reply with the file path plus the full text.

> This chat is about to be deleted and a brand-new bot will take over with no memory of it. Write a handoff for that bot so it can pick up exactly where you left off, as if nothing happened. Save it as a file and tell me the path, then post a short version here.
>
> Include:
> 1. In flight right now: every task, agent, or job still running, with its ID or link, what it's doing, and the exact next step when it finishes.
> 2. Current state: what's done, where it lives (branches, PRs, SHAs, URLs, files), and what's live versus preview.
> 3. Open items and backlog: everything still broken, pending, or waiting on my decision, plus questions I haven't answered yet.
> 4. How you do the work: the step-by-step workflow, the exact tools and commands, file paths, templates, and anything that tripped you up and how you fixed it.
> 5. My standing rules and preferences: every "always", "never", or "from now on" I've said, word for word where possible. Also list anything I said once that might be a standing rule, so the new bot can ask me whether to lock it.
> 6. Usage and limits: current usage numbers and any spending or approval rules.
>
> Be specific: IDs, links, file paths, numbers, and times in my time zone. Leave out anything already finished that doesn't affect what comes next. Don't invent anything; if you're unsure about something, mark it "unverified".

Rules for this step:
1. The old bot must not message the user with this answer; it replies to you only. It does not delete, rename, or stop its own work.
2. Wait for the reply (arm a short wait; do not busy-poll). If it never answers or errors, say so in the held handoff (“old-bot self-handoff: not received”) and continue with brief + tail + behavior scan.
3. Read the file it names. Include the **full** answer in the held handoff under the heading `Old bot’s own handoff`. Do not trim or rewrite it; items it marks “unverified” stay marked.
4. Use its section 5 (standing rules + candidates) to cross-check the behavior scan. Merge, don’t duplicate.
5. Shared memory still gets only the short brief + short tail note, never the full self-handoff text.

## Handoff brief (HARD) — before you cut the old chat
1. Before CreateAgent / rename: skim the old bot’s profile + recent durable facts. Do not dump the whole chat into memory.
2. Write one shared user-memory fact titled for that bot: role and who it serves; standing rules that change how it acts; how it relays/coordinates; key homes needed to act; open Next items; behavior-scan results.
3. Keep it short. Never paste attachments, logs, or multi-turn dumps into the brief.
4. Put the same brief into the held operator handoff (priority false).
5. Profile + priority wake say the brief is already loaded via memory + held handoff. Never instruct anyone to paste.

## Behavior scan (HARD) — with every refresh
Do this before CreateAgent.
1. Search the old bot’s recent user messages for standing-instruction language (“from now on,” “do every time,” “always,” “never,” “standing,” “lock this,” “make this a rule,” etc.).
2. Split into **Already locked** (in memory, a skill, or the brief) and **Not yet locked** (tell the new bot to ask which to make standing rules).
3. Do not invent rules. Prefer recent turns; the 1.5 MB tail and the old bot’s self-handoff are the main sources.

## Last 1.5 MB conversation tail (HARD)
1. Before the cut, extract only the trailing ~1.5 MB of transcript.
2. Put the full tail into the held operator handoff (priority false).
3. Shared memory gets only a short continuity note titled `<Bot> last-1.5MB conversation tail (for refresh)`, tier note or log.
4. New bot confirms it loaded brief + held handoff (old bot’s own handoff + tail), picks up mid-thread, never asks for a paste.

## Message order (HARD)
1. Self-handoff prompt to the old bot → wait for its answer.
2. Shared brief + short tail note (memory) + held operator handoff (priority false) containing: brief, old bot’s own handoff (full), behavior-scan lists, ~1.5 MB tail.
3. Continue-here intro (new bot SendToUser as itself), ending “I’m ready anytime you need me.”
4. Avatar ask: one widget, “Switch to the matching avatar (<look>) now?” Yes switches; No keeps the default.
5. If not-yet-locked candidates exist, the new bot asks which to make standing rules (after the avatar answer, or in the next turn).
6. Action box last, only for a live action item.

## On approval (yes to refresh bot X)
1. Send the old bot the Self-handoff prompt; collect its file + answer.
2. Run the behavior scan (cross-check with its section 5); write the shared brief.
3. Extract the ~1.5 MB tail; write only a short shared tail note.
4. CreateAgent — same name, lean description; note the old bot’s avatar (color + shape) for the avatar ask.
5. Held handoff (priority false) with brief, old bot’s own handoff, behavior lists, tail.
6. Wake new bot (priority true) to continue-here as itself, then ask the user whether to switch to the matching avatar (never switch without the user’s yes). No size-scan ask, no paste ask. Candidates ask after ready.
7. Rename old bot `DELETE ME — old <Name>`. Then wake it (SendToAgent, priority true) to post one short message to the user in its own chat, as itself, and do nothing else: “A fresh <Name> has taken over. Feel free to keep me around while you check the new one’s memory and rules, so you can switch back if anything’s missing. When you’re happy, right-click me in the sidebar and choose Delete. If it asks you to reassign primary, pick the new <Name> from the list.” It must not resume work, start tasks, or contact anyone.
8. Kilo’s done message to the user (short, usage first): “<Name> is refreshed. The new chat starts light, so each message costs less, and its rules, open work, and recent history carried over through durable memory. It’ll say hi in its own chat and ask whether you want the old avatar back. I renamed the old one DELETE ME. Keep it around while you check the new one, and once you’re happy, right-click it in the sidebar and choose Delete. If it asks you to reassign primary, pick the new <Name> from the list.”
9. Verify the new bot’s own message is visible. Stop.

## Don’t
- Auto-delete / auto-scan / auto-refresh
- Recommend a refresh under 10 MB, or add a warning tier
- Skip the old-bot self-handoff, the 1.5 MB tail, or the behavior scan
- Trim or rewrite the old bot’s self-handoff
- Kilo-chip intros; re-ask scan/weekly after a specialist refresh
- Telling the new bot to set its avatar on Kilo’s say-so (it must ask the user)
- Let the DELETE ME bot resume work after its keep-me-around note
- Dump the full thread, raw tail, or full self-handoff into shared memory
- Ask anyone to paste a handoff
- Auto-lock candidate behaviors without the user’s yes

## Manual trigger
Same when they name a bot (still need yes).
