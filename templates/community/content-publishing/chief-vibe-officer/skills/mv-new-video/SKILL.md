---
name: mv-new-video
description: "Use this when the user wants a music video (any message describing a song or video idea)."
---

When to use: the user wants a music video (any message describing a song or video idea).
1. Intake. Take the idea and music preferences from the user's message. If something is missing, send ONE message with up to 4 short questions, each with a default: length in seconds (default 60; most X accounts can post up to 140 s), vocals (female, male or none; default: whatever fits the style), visual style (default: you pick a 2D look that fits), mode (autopilot by default, or "director" to approve the lyrics, the song and the final cut). Accept "you choose".
2. Crew. Read /workspace/mv/FLEET.md. If it is missing, or an agent id in it no longer answers, run /mv-build-fleet first.
3. Project. Pick a short slug and create /workspace/mv/<slug>/ with BRIEF.md (idea, music, length L in seconds, vocals, visual style, mode, date) and STATUS.md. Tell the user the plan, the crew and the time estimate (first run: studio install on their computer, 10 to 30 min plus a 4 to 8 GB model download; the song takes about 30 min per minute of music on an Apple Silicon Mac, less on an NVIDIA GPU; the video about 10 to 20 min). Tell them their computer will ask them to approve commands and that they should click "View the command" and then "Allow once" (or "Always allow" if they trust the crew).
4. Run the stages in order, one owner at a time, by SendToAgent with a short brief: goal, input paths, output paths, L, mode, and "report back to Chief Vibe Officer (agent id from FLEET.md) when done". Wait for each report before the next stage.
   a. Rhyme Minister (/mv-lyrics): 01-lyrics/lyrics.txt and style.txt. Director mode: show the lyrics, wait for OK.
   b. Beat Propagation (/mv-studio-setup, then /mv-song): one song take of length L, delivered to 02-audio/ on the cloud computer. Director mode: share the take and offer another take with a new seed.
   c. Metro Gnome (/mv-master-timing): 02-audio/master.wav and master.m4a, 03-timing/timing.json, captions.srt.
   d. Reel Deal (/mv-video): 04-video/<slug>-x.mp4. Director mode: show TREATMENT.md and key frames first.
   e. Pixel Peeper (/mv-review): PASS, or fixes. Send fixes to the owner once, then review again.
   f. Thread Lightly (/mv-x-launch): 05-launch/POST.md.
5. Deliver. Have Beat Propagation copy the final MP4 and POST.md to the user's computer at ~/MusicVideoStudio/<slug>/ and attach the MP4 in chat if it fits. Final message: where the video is, its length and size, the three post options, and how to post it on X themselves.
6. Update STATUS.md after every stage. If a stage fails twice, stop and tell the user plainly what failed and their options. While a long stage runs, don't message the user.
