---
name: website-tutorial-and-product-spotlight-videos
description: "Use when asked to make a tutorial, walkthrough, or product spotlight video of a website, tool, or product page, plus its vertical short, narration, and YouTube copy."
---

# Website tutorial & product spotlight videos

Make polished, narrated videos from screen recordings of a website (plus any supplied clips), with a matching ~30 s vertical short and ready-to-post YouTube copy. Do the heavy work (recording, rendering, QA) in the background and keep the owner posted at milestones.

## Deliverables (every video)
- Long video: 1920x1080, 24-30 fps, usually 1:00-2:15. Zooms/pans, highlight boxes, captions, a branded title card and end card.
- Narration in the bot's native voice (Ara, see Voice below), mixed under a soft music bed only if the owner wants one. Also keep a silent version in case the owner wants to record their own voice.
- Timestamped script: transcript.txt and transcript.srt, one line per narration window.
- youtube.txt: SEO title (under 70 chars), description, chapters (start at 0:00, each at least 10 s), links, a contact/CTA line, 5-8 hashtags, 15-25 tags.
- stills/ with key frames and a 1280x720 thumbnail.
- Vertical short (1080x1920, ~25-32 s): its own script/.srt, caption copy with hashtags, and a 1080x1920 cover image.
- Work in /workspace/videos/<topic>/; keep reusable render scripts so later videos are fast.

## Brand kit first
Before the first edit for a brand, build a small style kit from the brand's site: logo, colors, fonts, CTA text (site, email, phone). Render a sample title card and caption frame and get the owner's OK before the full edit. If the owner has more than one brand, keep them fully separate: separate kits, separate CTAs, and never mention one brand in another's video or copy unless told to.

## Recording
- Check the real display size first (xrandr or xdpyinfo) and capture the full screen with ffmpeg x11grab at that size; a smaller capture silently grabs only the top-left.
- Load the page before starting the capture so the video doesn't open on the previous page. Park the pointer away from links (no tooltips) and dismiss popups and cookie bars.
- Use slow, deliberate scrolls. Make each hold (4-6 s) its own wait after the previous action finishes, so holds never overlap scrolling.
- For vertical shorts, record a NEW pass in a phone-size browser window (~375 px wide CSS) so the site renders its mobile layout. Capture just the page area and scale it to the full 1080 width. Never crop a desktop recording into 9:16, since that cuts content off.
- Stop ffmpeg with SIGINT, wait until the process exits, then ffprobe the file.

## Supplied clips
- YouTube/Shorts clips: download with yt-dlp (try the web_embedded client if the default hits 429 or a bot check), mute their audio, credit the source on screen and in the description, and crop or blur any browser bookmarks, emails, or other personal info burned into the footage.
- Ask the owner which moments of a supplied clip matter most before cutting any.

## Edit
- Pick a pace that suits the content: tutorials explain each step; spotlights are punchy and center on one clear message (one product per video works best).
- Only use facts you can see on the page or that the owner gave you. Put the key number or claim in a caption, highlight it on screen, then say it.
- Ask whether prices may appear. Prices change, so default to cropping or covering price blocks and keeping prices out of scripts and copy.
- Cover site bugs, typos, chat widgets, or stray banners with a clean branded pill, and report them to the owner afterward as a short list.
- Shorts: keep captions inside the safe zone (below the top ~250 px, left of the right ~150 px button column, above the bottom ~420 px).

## Voice (native Ara voice)
- Write narration as short spoken lines, one per segment, and time each segment's on-screen beat to its audio length.
- Synthesize with xAI TTS: POST https://api.x.ai/v1/tts with header Authorization: Bearer $XAI_API_KEY and JSON {"text": <line>, "voice_id": "ara", "language": "en"}; the response body is MP3. Normalize each segment (ffmpeg loudnorm I=-16, TP=-1.5) to 48 kHz stereo before muxing.
- If XAI_API_KEY is missing or the call fails, ask the owner for the key with a masked secret request. Never ask them to paste it into chat. Meanwhile render the silent version plus the script.
- Write numbers the way they should be spoken ("zero point one three nine", "two hundred eight").

## QA before delivering
- ffprobe: resolution, fps, duration, audio present and in sync.
- 1 fps contact sheets of the whole video plus spot checks around every cut. Look for cropped text, tooltips, pointer, popups, other-brand mentions, legible prices if excluded, and captions off the safe zone.
- Watch the finished video with a video-review pass and fix anything it flags.
- Deliver the video files as attachments, then the script, the YouTube title and chapters, and any site-bug notes. Keep the message short.
