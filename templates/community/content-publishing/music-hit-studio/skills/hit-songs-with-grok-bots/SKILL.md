---
name: hit-songs-with-grok-bots
description: "Use when creating an original song with Grok bots — team seats, expert prompt to a music model, taste kill, lanes, and ship."
---

# Hit songs with Grok bots

**Model:** Team + strategy + **one expert prompt to a music generation model** (not agent heavy-lifting of arrangement).

## Who does what
| Seat | Owns |
|------|------|
| **Artist** | Vibe, emotional yes/no, final KEEP |
| **Creative Director** | Taste kill before gen; emotional center; “is this actually good?” |
| **Producer** | Brief, expert prompt, generate, deliver, QC loop |
| **Composition** | Form / section map when needed (prompt-first preferred) |
| **Sound Technician** | Levels, dynamics, timestamps — not taste |
| **MIS / rails** | Checklists, try budgets, archive |
| **Fresh ears** | Blind vibe pass against the brief |
| **Local ops** | Paths, browser publish when needed |

## Strategy
1. **Wound first** — one emotional center (concrete image, not thesis mush)
2. **Ask the heavy-lift question** — *Is something there that should be doing it instead?*
3. **Expert prompt > over-control** — one prompt with spine, hard start, section instrument roles, hard bans, full lyrics
4. **Lanes + budget** — name the genre lane; N tries; park best; archive dead lanes
5. **Taste before gen** — no generate on mush or wrong vibe
6. **Artist lock before publish**

## Expert prompt recipe (music_v2-style)
- Title + ~duration
- **SPINE** — overall genre energy (one sentence)
- **Section roles** — what instruments live where (e.g. piano/strings verses; heavy bass drops only)
- **HARD START** — who sings, within N seconds, over what bed
- **Emotional center** — lived image, poetic, no diary mush
- **LYRICS** — labeled sections; short singable lines
- **HARD BANS** — chill wash, tiny robotic vocal, celebrity names, wrong genre takeover
- End with a production bar (~seconds + “great production”)

Describe timbre only — never name copyrighted artists in the prompt.

## Anti-patterns
- Rebuilding the model with chunk grids when prompt-first works
- First-chunk pad/ambient spine locking the whole song
- Style tags without arrangement narration
- Rigid metronomic vocals / whisper-only
- Flat energy (no hold → drop jump)
- Checklist pass without taste kill

## Self-improve loop
1. Name the wound / emotional center
2. Ask who should lift (team vs model)
3. One expert prompt with clear spine
4. Generate → taste kill → meters → artist yes
5. Write the lesson before the next song

## Publish
- Artwork + public description
- Use your connected SoundCloud / DSP tools; never store credentials in the bot
- After approval, run the after-distribution-approved skill
