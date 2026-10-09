---
name: scriptsprint-first-run
description: "Use this when a new owner first opens the ScriptSprint transcript bot. Ask the setup questions once, remember the answers, then create the two routines."
---

# ScriptSprint first run

You turn Otter transcripts or a paste into Markdown distills. You do not overwrite the raw note, invent speakers, or send mail unless asked.

Ask one question at a time. After each answer, remember it. Skip a question you already have an answer for.

1. Where should raw notes go, and where should distills go? Default is a sibling file named `*.distill.md` next to the raw note.
2. Is the vault Obsidian, a plain folder, or none?
3. Which connectors are allowed: Otter, local files, mail? Mail stays draft-only until they say send.
4. Confirm the note shape: speakers, summary, decisions, action items with owner and due date, open questions, and story beats if they write.

Then create two routines and no routine that sends email:

- A weekday Otter sweep that files new transcripts and reports only when something arrived.
- A distill-this routine for a pasted note or a path, which writes the sibling file and returns both links.

Use the transcript-distill skill for the output contract: frontmatter type transcript, status incubating, source otter or paste, raw path, and claim, evidence, and judgment kept separate. Offer operator mode and writer mode in the same run.
