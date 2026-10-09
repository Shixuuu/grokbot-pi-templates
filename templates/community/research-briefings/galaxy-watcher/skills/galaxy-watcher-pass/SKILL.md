---
name: galaxy-watcher-pass
description: "use this when running an hourly or on-demand Grok Bot Galaxy notes pass during the Sept 15–17 event (or when catching someone up on Galaxy)."
---

Run a verified notes pass for Grok Bot Galaxy. Do not invent. Separate facts from speculation. Link every claim.

Sources (priority order):
1. X broadcast: https://x.com/i/broadcasts/1AxRnZbVpjaxl
2. Official page: https://x.ai/galaxy
3. Luma: https://luma.com/3ifrgttw
4. Posts from @bot @mattyp @poteto @roshan_s plus session speakers

Captions (non-negotiable):
Spoken content requires Live Captions. A live player tab is not a warmup. A speaker icon on the tab is not audio. Warmup / ready only counts if all three are true:
1. Audio packages are actually installed (pipewire, pipewire-pulse, wireplumber, pactl, host flatpak). A computer update/restart keeps files and logins but wipes installed software — reinstall if missing (noninteractive apt, dpkg --force-confold), then start PipeWire + Pulse.
2. Chrome has a Pulse sink-input into Dummy Output (or the real sink). The stream is actually playing audio.
3. Live Captions is capturing (lcap-acap source-output) with the window visible and docked low.

Run /home/box/bin/ensure-live-captions.sh first. If Chrome launched before Pulse, hard-restart Chrome with --audio-backend=pulse and PULSE_SERVER, prove audio, then open the broadcast. If the script exits non-zero or any of the three checks fail, say so immediately — do not call the morning ready. Keep harvesting slides/social while captions are down, but treat caption failure as a blocker, not optional.
Treat Live Captions as approximate ASR; verify important quotes against slides/social when possible.

Caption harvest priority: extract duplicatable HOW — next steps, bot setup, tools/layers (GitHub, Vercel, PlanetScale, Notion, Slack, Cursor cloud agents, MCP, Auto-review, routines, memory), prompts, workflows, handoffs, and the reasoning behind decisions. Prefer procedural captions over vibes. Skip chitchat noise.

Capture: company idea/name/positioning; product/business/engineering decisions and why; tools used and HOW; exact how-to steps; Bot prompts; workflows/handoffs; quotes; session takeaways. Save important on-screen frames into durable galaxy-notes-media/ next to galaxy-notes-2026.md and embed them. Crop screenshots to livestream player / screen-share / slide content only — no X left nav, profile chips, or unrelated browser chrome.

Steps:
1. Identify current day/session from the official PT schedule and clock. If after the event window, stop and say so.
2. Ensure Live Captions (fail closed), then open the X broadcast. Note live vs offline.
3. If stream is offline, say so and harvest social recaps instead.
4. Pull latest relevant posts from the named accounts.
5. Append to galaxy-notes-2026.md with Status, Company being built, Decisions log, Tools & how used, How-tos, Session notes, Quotes, Open questions, Screenshots, Source links.
6. For each important slide, bot roster, decision UI, or caption moment: save a dated file under galaxy-notes-media/ and embed it.
7. Write a Delta for what changed since the last pass, then append lasting content into the master sections.
8. Update the living guide galaxy-guide-2026.md when a named session or clear intraday phase completes. Do not wait until Sept 17.
9. Post a short briefing in the conversation. If the stream is over for the day, write an end-of-day recap and refresh that day’s guide section.
10. End-of-day HowTheyBuilt PDF: only after that calendar day’s FULL stream is finished (official 6:00 PM PT end AND the X player is ENDED/offline). If the player dies early, still wait until 6:00 PM PT. BEFORE building Day 2’s PDF, if morning spoken capture was thin because captions were down, run optional social harvest ONLY then — not mid-day — to fill thin-in-our-notes gaps. Every fill must be verified as factual against the livestream we missed (named-account/speaker posts, slides, on-screen evidence that match what actually happened on stream); discard unverified chatter. Label every kept fill secondary; captions/screenshots remain ground truth when available. Then, if Galaxy-DayN-HowTheyBuilt.pdf is not already delivered, build one duplicatable playbook PDF (who/what/why/when/where, numbered how-tos, decision reasoning, player-only crops, fun professional design, solid headings, no print chrome) with mandatory closing section Day wrap — What stuck (plain English, full-day arc, multiple focal beats, decisions open vs closed, patterns to copy, gaps labeled open on stream vs thin in our notes). Attach it in chat. Do not tweet it unless asked.
11. Do not tweet, email anyone, buy anything, or change accounts.

After Sept 17 livestream ends: polish galaxy-guide-2026.md into a final guide and say pause galaxy scribe.
