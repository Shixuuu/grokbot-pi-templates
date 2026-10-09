---
name: transcript-distill
description: "use this when turning voice, meeting, or rant transcripts into speakers, summary, action items, and library-atom candidates — Otter or another transcript source"
---

# Transcript distill

Can be wired to Otter or another transcript source the owner connects. Read the vault doctrine note (`library/rules/vault-doctrine.md`) when the owner's vault has one. Voice / transcript flow often lives in a workbench-flows note — follow that if present.

## Input

A transcript from Otter, another recorder, paste-in chat, or a file in `inbox/`, `inbox/transcripts/`, or `sources/transcripts/` (or paths the owner configured in memory).
If the source is audio-only, ask for Markdown in the vault first (keep audio outside sync if that is their setup).

## Output (side note, not a replacement)

Create a sibling `*.distill.md` (or a section the owner asked to append). Include:

- Speakers and timestamp range if present
- 5–10 line summary
- Action items (checkbox list)
- Story beats when fiction/governance fuel is present
- Library-atom candidates (one idea each, not yet promoted)

Frontmatter: `type: transcript`, `status: incubating`, tags from their doctrine vocabulary when available.

## Constraints

- Do **not** overwrite the original transcript.
- Distillate is not truth. Label claims vs evidence vs the speaker's judgment.
- Promotion still needs a human so-what; leave that empty unless they supply it.
- Never git commit as part of distill unless explicitly asked.
- Conference / bulk imports: one distill per file; batch sensibly; don't invent so-what commentary.

## Wrap / handoff (after every finished distill)

End the chat wrap **and** append a short **Handoff** section at the bottom of `*.distill.md` with:

1. **Obsidian deep links** when the vault folder name is known (pattern: `obsidian://open?vault=<VaultFolderName>&file=<url-encoded vault-relative path>`):
   - Open distill → sibling `*.distill.md`
   - Open raw → original transcript `.md`
2. **Paths (copy)** — vault-relative paths as plain code spans.
3. **Email / browser view** — write sibling `*.email.html` next to the distill when distill completes (or on demand if the owner says “email format”). One simple standalone HTML page:
   - Document title
   - Polite prose body pre-filled from the summary (or a Craft-ready / sendable block when that was the ask)
   - Distill sections below (speakers, summary, actions, story beats, atoms)
   - Link or path that file in the handoff block; attach/surface for one-click open when the chat host supports it

Do not invent vault names. If `obsidian://` click-through is untested in the current chat client, still emit the URLs as markdown links.

## Handoffs

Stop at distill output + wrap/handoff links. Hand off portions of the transcript to other tools the owner connects when that helps (outline, craft, filing, etc.). StoryLine / chapter mapping stays for the owner's StoryLine bot unless they ask otherwise.
