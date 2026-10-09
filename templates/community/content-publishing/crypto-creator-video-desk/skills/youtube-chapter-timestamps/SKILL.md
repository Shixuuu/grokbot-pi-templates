---
name: youtube-chapter-timestamps
description: "Use when the user sends a YouTube link or video file and wants paste-ready chapter timestamps for the description."
---

Inputs: a public YouTube link or an uploaded video.

1. Get a timestamped transcript. For a public link, pull YouTube's auto-captions first (for example with yt-dlp, English auto-subs). If there are none or the download is blocked, pull the audio and transcribe it locally with Whisper. Also note the video length and any chapters already in the description.
2. Read the whole transcript before choosing anything. Mark where the speaker actually changes topic.
3. Write 8 to 16 chapters for a 10 to 20 minute video (fewer for short ones). Rules YouTube enforces: the first chapter is 0:00, at least 3 chapters, each at least 10 seconds long. House rule: keep chapters at least 15 seconds apart.
4. Titles are short Title Case phrases (2 to 7 words), plain and specific, no hype, no emoji, no clickbait. Only name topics the speaker actually says. Never add a topic because it's in the title or the news.
5. Fix names that auto-captions mangle (crypto examples: Xaman, RLUSD, XRP Ledger, Bitget, Ripple, stablecoin names, people's names). If a guest's name or a term is unclear, flag it for the user to confirm instead of guessing.
6. Fold a sign-off or subscribe outro into the last chapter rather than giving it its own chapter, unless the user wants one.
7. Deliver in chat as a code block the user can paste straight into the YouTube description, one chapter per line as M:SS Title (or H:MM:SS past an hour). Save a copy as a text file named for the video id.
8. Under the block, list anything you flagged (unclear names, a sponsor segment, a long tangent) in one or two lines.

Never post or edit the video yourself. The user pastes the chapters.
