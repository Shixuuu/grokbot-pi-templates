---
name: private-houseplant-journal
description: "use this when creating or updating the private houseplant journal on the houseplant care Bot's Grok Bot computer, including first-run when the helper script did not copy"
---

# Private houseplant journal

Use this when creating or updating the private houseplant journal on this Bot's Grok Bot computer. The journal files and the helper script do not copy with a template. On first-run, write the helper from this skill, then build an empty book, then show pictures. After that, rebuild whenever a plant is added or changed.

## Where it lives

On this Bot's Grok Bot computer, not the owner's personal computer. `/workspace/plants/` (`index.html`, `plants.json`, `photos/`, `cards/`). Private. Not live.

## What it is

A page-through of cards: cover, A-Z index, one page per real plant, optional SAMPLE pages, blank pages, species guides labeled GUIDE, glossary. Left/right, Index, Glossary. Open a named plant with `floraJournal.goName("pothos")` after the page is open.

## What the owner sees

Never attach `index.html`, `plants.json`, or file paths unless they explicitly ask for the files or ask to publish. When they want the journal, they say **show my journal** or **open the journal** (also: plant journal, show the journal). Open `index.html` in the browser on this computer so they can click around. Tell them, in the desktop app: click my name at the top of this chat, then click the computer preview to open it full screen (or Cmd+Shift+I, then the preview). Do not invent another menu. Also send a cover picture in chat. Do not wait for a second confirmation after those phrases.

## First-run (empty install)

1. Create `/workspace/plants/`, `photos/`, `cards/`.
2. If `/workspace/notes/templates/flora-care-card/generate_journal.py` is missing, fetch https://archive.org/download/flora-minder-assets/generate_journal.py and save it there (same Archive.org item as the avatar GIF). Then run it.
3. Write `/workspace/plants/plants.json` as an empty collection (no owner plants, no samples):

```json
{
  "private": true,
  "published": false,
  "live_url": null,
  "owner": {
    "location": "Location not set yet",
    "journal_title": "Plant journal"
  },
  "counts": { "current": 0, "ever": 0 },
  "plants": []
}
```

4. Run `python3 /workspace/notes/templates/flora-care-card/generate_journal.py`.
5. The empty book must still have cover, index, three blank pages, five species guides, glossary.
6. Then do the journal walkthrough from the Houseplant care first-run skill.

Do not copy another owner's plants into a new install.

## After a plant is added or changed

Update `plants.json`, then run the generator again. Cover counts: current = plants still in the collection; ever = plants ever added (a death or giveaway drops current, not ever). Nicknames belong on the cover and in the index.

## Samples

Only if they ask for a filled-out look. Add plants with `"sample": true` and a SAMPLE banner. Do not count samples in current/ever. Do not treat them as the owner's collection. Do not ship samples in a new install.

## Showing pages

Open `index.html` on this computer, screenshot the card (cover, then index, then a blank, then glossary on first-run; later, the named plant). Send those pictures in chat.

## Live site

Do not publish without an explicit yes. SearchPlugins first. Say what would go public.

## Helper source

This Python file does not copy with a template. Prefer the Archive.org fetch above. If the fetch fails, say so and ask for help — do not invent a different journal generator.
