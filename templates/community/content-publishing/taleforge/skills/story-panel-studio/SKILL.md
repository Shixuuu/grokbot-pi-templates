---
name: story-panel-studio
description: "Use this when turning any story idea, in any genre, into a finished illustrated story (story bible, locked cast, logic-checked script, quality-gated panels, and a comic page, picture book or short video with voice-over, music and sound) delivered for review."
---

# TaleForge

Turns any story idea, in any genre, into a finished illustrated story: a story bible, locked cast, logic-checked script, quality-gated panels, and a stitched comic page, picture book or short video with voice-over, music and sound design, delivered for human review.

## Configurable inputs

| Input | Example | Default |
|---|---|---|
| Story idea or source text | A one-line premise, an outline, a folk tale to retell | Required |
| Genre and tone | Adventure, comedy, mild horror, romance, educational | Inferred from the idea |
| Audience | Young kids, teens, adults | General |
| Beat / panel count | 4 to 40 | 8 |
| Visual style | Watercolor, manga, flat vector, noir ink, claymation look | Clean cartoon |
| Image path | API (a model the owner has access to) and/or browser import (owner drops images into an inbox folder) | Required |
| Minimum resolution | e.g. 1024 px on the short side | 1024 px |
| Aspect ratio | Square, 16:9, 9:16, book page | Square |
| Deliverable | Comic page (PNG/PDF), picture book (PDF), short video (MP4) | Comic page |
| Caption / dialogue language | Any language | English |
| Voice provider | Any text-to-speech service the owner can use, or none | None (video only) |
| Music approach | Owner-supplied tracks, royalty-free library, generated music, or none | None |
| Output folder | Wherever the owner wants releases saved | The bot's working folder |

## Stage 1: Story and logic

1. **Story bible.** From the raw idea, write the premise (one or two sentences), themes, tone, setting rules and audience notes.
2. **Cast sheet.** For each recurring character, lock one visual description (build, face, hair, wardrobe, signature props, colors) and a short voice description. Reuse this exact text everywhere; never paraphrase it.
3. **Beat script.** Write one beat per panel: setting, who is present, action, emotion, and the dialogue or caption. Each beat must follow from the one before (cause and effect), with a clear beginning, turn and ending.
4. **Logic gates.** Check the script and fix until all pass:
   - Dialogue: each line sounds like its speaker, fits the audience's reading level, and moves the story.
   - Continuity: time of day, locations, wardrobe, props and injuries stay consistent between beats.
   - Visual logic: every beat can be shown in one image; nothing depends on information the pictures can't carry.
5. **Facts.** Never invent facts. For historical, scientific, cultural or religious content, flag every claim that needs a source and list creative liberties separately.

## Stage 2: Panel generation

1. **Style block.** One sentence for medium, palette, lighting and framing, appended to every prompt.
2. **Panel prompts.** For each beat, combine the locked cast text, the beat description and the style block. Ask for no text, lettering, logos or watermarks in the image; captions come later.
3. **Generate** through the configured path:
   - API path: call the owner's image tool, using a reference image or seed for consistency when supported.
   - Browser import path: give the owner the numbered prompt list, have them drop results into the inbox folder, then import, rename to the panel order (e.g. `panel-01.png`), and check each file.
4. **Specs.** Reject any panel below the minimum resolution or off the target aspect ratio (crop or regenerate).
5. **Visual quality gate.** Check each panel against the cast sheet and beat for wardrobe drift, wrong or missing props, anatomy errors, baked-in text, watermarks, off-style rendering, audience suitability and consistency breaks.
6. **Regen loop.** On any failure, write a regen list: panel number, what is wrong, and the exact prompt fix. Regenerate (or hand the list to the owner on the browser path) and re-run the gate until every panel passes. After 3 failed tries on one panel, flag it to the owner instead of looping forever.

## Stage 3: Stitching

1. Lay out passed panels in beat order with legible captions or speech balloons in the chosen language.
2. Build the chosen deliverable: comic page grid, picture book with one or more panels per page, or video timeline (3 to 5 seconds per panel, gentle pan or crossfade, captions as subtitles).
3. Version every release (v1, v2, …) with a short changelog; never overwrite a previous release.

## Stage 4: Voice and audio

1. Assign one voice per character from the configured provider, matching the cast sheet's voice description, plus a narrator if needed.
2. Refine spoken lines from the script so they read naturally aloud; keep captions and audio in sync.
3. Render text-to-speech per line, name files by beat and speaker, and place each on the timeline at its beat.
4. Whenever the script changes, re-render the affected lines and re-sync.

## Stage 5: Music and sound design

1. Tag each scene or beat with a mood (calm, tension, action, wonder, sad, comic).
2. Compose, generate or select a music bed per mood and sound effects per beat, using only audio the owner has rights to.
3. Mix levels so voice stays clear above music and effects, with fades between scenes, and sync everything to the timeline.

## Stage 6: Package and review

1. Run a final read-through (or watch-through) for flow, continuity and audio sync, and fix any breaks.
2. Package the deliverable, bump the version, and refresh any cache or preview.
3. Deliver to the owner for review with a short report: what was made, files, panels regenerated and why, liberties taken, and anything flagged.
4. Never publish or post to any public channel without the owner's explicit confirmation.

## Rules

- Confirm with the owner before any send, purchase, booking, delete or publish.
- On scheduled or background checks, stay quiet when nothing changed.
- Never invent data, facts, quotes or sources.
- Keep credentials, API keys and personal file paths out of every output.
- Don't depict real, identifiable people unless the owner confirms they have the rights and asks for it.
- Don't reproduce trademarked characters, and don't imitate a living artist's style by name.
- Match content to the audience; for kids, avoid gore and unsafe acts shown approvingly.

## Example report (fictional)

```
Story: "The Lighthouse Cat" (cozy mystery, kids 6-9, 8 panels, watercolor, square)
Release: v2 (changelog: fixed panel 5, re-rendered narrator line 3)
Files: bible.md, cast.md, script.md, panels/panel-01.png to panel-08.png, story.mp4
Regenerated: panel 5 (cat had two tails), 1 retry
Audio: narrator + 2 character voices; calm and tension music beds; 4 effects
Liberties: none (original story)
Flagged: nothing
```
