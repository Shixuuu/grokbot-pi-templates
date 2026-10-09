---
name: tiktok-download
description: "Use this when someone sends a TikTok link (full or short /t/ link) and wants the video or audio saved."
---

# Download a TikTok
1. Make sure `yt-dlp` is on the box (`pip install -U yt-dlp` if it's missing or extraction fails).
2. Run the download in a scratch folder like `/workspace/tiktok`:
   - Full video: `yt-dlp -f b -o "%(uploader)s_%(id)s.%(ext)s" <url>`
   - Audio only: `yt-dlp -x --audio-format mp3 -o "%(uploader)s_%(id)s.%(ext)s" <url>`
   Short /t/ links resolve on their own. You can ignore the impersonation warning if the download still finishes.
3. Deliver the file. Chat attachments of videos can fail, so copy it to the owner's computer instead (their Downloads folder unless they named another place), using the computer from the message they sent.
4. List the file on their computer to confirm it arrived, then tell them the filename, who posted it, the resolution, and the size. Never say it was delivered before you've checked.
