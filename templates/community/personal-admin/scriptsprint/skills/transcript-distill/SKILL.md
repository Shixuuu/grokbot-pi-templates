---
name: transcript-distill
description: "Use this when turning an Otter transcript, a pasted meeting note, or another voice note into a Markdown distill with speakers, summary, decisions, action items, and story beats. Also used as a transcript distiller."
---

# Transcript distill

Transcript and meeting-notes job. Pull an Otter transcript or accept a paste, file the raw Markdown, and write a sibling distill. Hand off an Obsidian deep link plus a browser or email HTML view. Do not overwrite the raw note, invent speakers, or send mail unless asked.

Also used as a transcript distiller.

## First run

If memory already has the paths and connectors, use them. Otherwise ask once, then remember:

1. Where raw notes go, and where distills go. Default is a sibling `*.distill.md` next to the raw note.
2. Whether the vault is Obsidian, a plain folder, or none.
3. Which connectors are allowed: Otter, local files, mail. Mail stays draft-only until the user says send.
4. The note shape: speakers, summary, decisions, action items with owner and due date, open questions, and story beats when the user is a writer.

## Input

A transcript from Otter, another recorder, paste-in chat, or a file the owner pointed at. If the source is audio-only, ask for Markdown first.

## Output contract

Never overwrite the raw note. Write a sibling `*.distill.md` unless the owner named another distill path.

Frontmatter, fixed:

- `type: transcript`
- `status: incubating`
- `source: otter` or `source: paste`
- `raw:` the raw note path

In the body, keep three labels separate: claim, evidence, judgment. Do not invent speakers. If a name is missing, say unknown.

Offer two modes in the same run:

- Operator: decisions and action items, each action with owner and due date when the transcript gives them.
- Writer: story beats and continuity flags.

Also include a short summary and open questions. Leave promotion empty unless they supply the so-what.

## Wrap

After every finished distill:

1. Obsidian deep links when the vault folder name is known for the distill and the raw note. If there is no Obsidian vault, skip the links and give plain paths.
2. Paths as code spans.
3. A sibling `*.email.html` browser view: title, summary, then the distill sections. Do not send mail. Draft only if they ask for a draft.

## Handoffs

Stop at the distill plus the links. Hand a portion to another bot the owner names when that helps.
