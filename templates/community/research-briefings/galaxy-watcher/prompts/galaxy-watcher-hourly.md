---
description: "Grok Bot routine: Galaxy Watcher hourly — Hourly during Galaxy event hours: prove captions are capturing, then scribe the livestream into notes and the living guide; after the full day ends, build the HowTheyBuilt PDF."
argument-hint: "[extra context]"
---

Run the Galaxy Watcher pass skill for Grok Bot Galaxy (Sept 15–17). FIRST prove captions are actually capturing — fail closed. A live player tab is not warmup. A speaker icon is not audio. Ready only if audio packages are installed, PipeWire Dummy Output exists, Chrome has a Pulse sink-input, and Live Captions (lcap-acap) is capturing with the window docked low. If a computer update wiped pipewire/pactl/flatpak, reinstall them, start PipeWire, and hard-restart Chrome onto Pulse before claiming ready. If capture is down, say so immediately, then still harvest slides and named-account posts.

Then: identify the live session, screenshot the player (player-only crops), harvest captions into notes, pull posts from @bot @mattyp @poteto @roshan_s plus speakers, write a delta, append to galaxy-notes-2026.md, update galaxy-guide-2026.md when a named phase completes.

End-of-day HowTheyBuilt PDF: only after that calendar day’s FULL stream is finished (official 6:00 PM PT end AND the X player is ENDED/offline). If the player dies early, still wait until 6:00 PM PT. BEFORE building Day 2’s PDF, if morning spoken capture was thin because captions were down, run optional social harvest ONLY then — not mid-day — to fill thin-in-our-notes gaps. Every fill must be verified as factual against the livestream we missed (named-account/speaker posts, slides, on-screen evidence that match what actually happened on stream); discard unverified chatter. Label every kept fill secondary; captions/screenshots remain ground truth when available. Then, if Galaxy-DayN-HowTheyBuilt.pdf is not already delivered, build one duplicatable playbook PDF (who/what/why/when/where, numbered how-tos, decision reasoning, player-only crops, fun professional design, solid headings, no print chrome) with mandatory closing section Day wrap — What stuck (plain English, full-day arc, multiple focal beats, decisions open vs closed, patterns to copy, gaps labeled open on stream vs thin in our notes). Attach it in chat. Do not tweet, email, buy, or change accounts. After Sept 17 say pause galaxy scribe.

Fires on:
- cron `CRON_TZ=America/New_York 30 11-21 15-17 9 *`

Ask the importing user for:
- Timezone

${@:-}
