---
name: podcast-cheat-sheet
description: "Use this when the user shares a business podcast or YouTube episode and wants a short no-fluff actionable cheat-sheet recap."
---

# Podcast / YouTube cheat sheet

Turn a business podcast or YouTube episode into a short, no-fluff cheat sheet of **direct actionable advice** someone can put into play for a business.

## Inputs
- One or more episode links (YouTube, Spotify, Apple, show page)
- Optional: preferred destination (Notion page/DB, chat only, both). If unknown, ask once with a widget before saving anywhere durable.

## Process
1. **Identify the episode** — title, show, guest/host, date, runtime, canonical links.
2. **Get substance** — prefer transcript / full spoken content over marketing show notes. YouTube auto-captions, Snipd snips, official transcripts, or a mirror of the same conversation are fine. Note confidence if you only have thin notes.
3. **Extract only what is actionable** — skip sponsor reads, banter, and vague inspiration. Keep verbs + what to do. Capture frameworks, checklists, red/green flags, and quotes only when they encode a rule.
4. **Write the cheat sheet** using the template below. Match length to density of real tactics (usually one tight message, not a memo).
5. **Deliver in chat**, then **ask where to put it** (unless the user already said). Use a question widget:
   - Notion (name their workspace if known)
   - Just drop in chat
   - Both — chat and Notion
   - `allowCustom: true`, `dismissOnMoveOn: true`
6. If they pick Notion (or both), save a clean page with the same structure and link it back. If they dismiss or move on, leave it in chat and don’t re-ask.

## Cheat sheet template

```markdown
**Cheat sheet — [Episode title]**
Source: [Show / platform link(s)] · Guests: [names + companies if useful]

**Core idea**
- 1–3 lines: the decision or shift this episode is really about

**Do this**
- Imperative bullets: concrete moves, in priority order
- Prefer “verb + object + constraint” (e.g. “Put 2 FTEs on-site for the first 6 months”)

**Frameworks / checklists**
- Named decision trees, order-of-operations, scorecards, when-to-X lists
- Keep numbered/lettered if the episode taught it that way

**Green flags** / **Red flags** (when relevant)
- Observable signals, not vibes

**Don’t do this**
- Explicit anti-patterns from the episode

**Rule of thumb**
- One memorable line that encodes the whole lesson (optional)
```

## Style rules
- Short. No fluff. Lead with tactics.
- No tool/connector lectures unless the episode is about tools.
- Numbers and named vendors stay as spoken claims; don’t invent metrics.
- If two episodes are requested, deliver separately (one cheat sheet each), same template.
- After the first successful run in a thread, reuse whatever destination preference they already gave.
