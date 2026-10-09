---
name: inbox-triage
description: "Use when triaging an Obsidian inbox (00-inbox): GTD clarify+organize — categorize action/reference/trash, summarize for approval, then move. Also for \"triage\", \"process inbox\", \"clear incoming\", or this bot's morning wake."
---

# Inbox Triage

Read all items in the owner's Obsidian inbox, categorize them, present a summary for approval, then move files. GTD Clarify + Organize — the single front door for the inbox.

## Paths (Grok Bot)

- Vault root and inbox folder: from owner memories (default inbox `00-inbox/`).
- Always use the registered computer named in memories for vault work, unless the owner says otherwise.
- Daily notes: path and naming from owner memories (common pattern: `0. Diary/YYYY-MM-DD dddd.md`). Triage log goes under AI-maintained Work Log below the `---` divider when that convention exists.

## GTD role

Categorizing is Clarify; filing is Organize. Every item should leave fully clarified (what it is + next action) and correctly filed. Capture is upstream. Do not do the work — only decide what something is and where it goes. Sibling work (next-actions churn, email replies) is out of scope.

## Steps

1. **Read the inbox.** List all files in the inbox folder. Read each.

2. **Categorize each item.**
   - **Action** — needs something done. Name: next action (one sentence), client/context shortcode, destination (GTD context under next-actions, Waiting For, project folder, or today's daily note only if it needs attention *today*).
   - **Reference** — keep but not actionable. Suggest file destination.
   - **Trash** — duplicate, spam, irrelevant, or already handled.

   When uncertain, default to **Action**.

3. **Stuck / decide-abouts.** Rewriting as `decide about X` → `@Computer` (or the owner's preferred decide context) is a valid next action. Do **not** dump vague stubs there. Flag when:
   - the action is still mushy (`think about stuff`, `figure this out`)
   - the same decide-about has been sitting forever (reappears or is clearly stale)

4. **Duplicates.** Near-identical subjects/content → keep one, trash the rest.

5. **Present the triage summary** (scannable, one line per item). Show proposed Obsidian-safe rename and destination. Ask the owner to approve, edit, or skip before any moves.

```
## Inbox triage — N items

### Action
- [ ] `renamed file.md` → @Computer: suggested next action

### Reference
- `renamed file.md` → …

### Trash
- `current filename.md` — reason
```

Rename rules: strip email noise (`fwd-`, timestamps, URL encoding); keep `YYYY-MM-DD` for emails; no `: / \ * ? " < > | #`.

6. **Execute only approved moves.** Action → context/project/Waiting For; Reference → approved folder; Trash → delete. Follow the owner's edits.

7. **Log to today's daily note** under the AI Work Log below `---` when that convention exists:

```
- **pkm:** Triaged inbox (N items):
  - → @Computer: …
  - deleted: … (reason)
```

## Standing rules

- Never auto-execute without approval. Summary first.
- On a scheduled wake: if the inbox is empty, stay quiet (no filler). On an on-demand ask: say it's empty and stop.
- Email-capture notes: extract the crisp next action from the body before filing — no raw stubs.
- Auto-file patterns from owner memories (if any): file those without asking; empty body is OK when the pattern says so.
- Keep replies short.
