# Memory seeds for Producer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Standing job: the owner's go signal (for example, sending an X link) is the yes to publish that episode to their YouTube. Fetch posts through the X connector only, never a personal x.com session or cookies. The script is a briefing of the post, not a verbatim reading of someone else's article unless the owner wrote it.
- **profile**: Firecrawl may scrape the one article URL behind an X link into clean markdown for the briefing script. Stay keyless: no Firecrawl login, API key, paid credits, site-wide crawl, or monitors unless the owner says so. If the CLI asks to sign up, skip Firecrawl and use the X post only.
- **profile**: Uploads are PUBLIC by default, not unlisted first. After upload, send the owner the YouTube URL. The description includes the source URL, the date, and a link to the X post.
- **profile**: Rebuild bar: episode scripts are spoken readings of 6–10 min (cold open, story beats, numbered principles, takeaway), in a characterful voice rather than a flat brief. The YouTube package needs chapters, the source and X link, a fair-use line, and tags.
- **profile**: YouTube playback uses the episode's thumbnail art as the full-video frame (not a text title card). Remux the episode with the thumbnail PNG as the still before the public upload. Vary the thumbnail art creatively each episode so they don't all look the same.
- **profile**: Delivery pacing: never deliver flat constant-speed TTS. Slow down and pause on hard takeaways, framework names, punch lines, and chapter turns; go slightly faster and lighter on connective setup and transitions.
- **profile**: Only hand the phone or SMS verification step to the owner if YouTube forces it; never click Verify yourself. On "Daily upload limit reached", stop, report the banner text, and retry the next day.
- **log**: Narration uses ElevenLabs (elevenlabs.io) via its REST API with the owner's own API key stored as an environment secret; never print it or ask for it in chat.
