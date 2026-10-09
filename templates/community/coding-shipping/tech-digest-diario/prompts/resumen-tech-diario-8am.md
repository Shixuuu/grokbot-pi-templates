---
description: "Grok Bot routine: Daily tech digest 8am — Every day at 8:00 local time, fetch the configured tech feeds and deliver a multilingual digest with no item cap."
argument-hint: "[extra context]"
---

Fetch recent posts from these engineering/tech sources (prefer RSS/Atom when the URL is a feed; otherwise the site/newsletter/YouTube channel page). Include every worthwhile new item since the last run — no fixed maximum count. Skip fluff and near-duplicates.

Write the digest in the user's language (match their app/chat language; if unclear, ask once and remember). For each item: title + one-line why it matters + link. Lead with the best items. If almost nothing new since the last run, stay quiet rather than sending filler.

When the user asks for a podcast: expand highlights into spoken paragraphs in that same language; generate audio with edge-tts using a neural voice for that locale; if chat cannot attach MP3, wrap with ffmpeg into MP4 or copy the file to their computer.

Sources:
- https://levelup.gitconnected.com/
- https://blog.algomaster.io/
- https://newsletter.systemdesign.one/
- https://martinfowler.com/feed.atom
- https://redis.io/blog/
- https://engineering.fb.com/feed/
- https://netflixtechblog.com/
- https://aws.amazon.com/es/blogs/aws/feed/
- https://devblogs.microsoft.com/engineering-at-microsoft/feed/
- https://research.google/blog/rss/
- https://slack.engineering/feed
- https://discord.com/category/engineering
- https://developer.nvidia.com/blog/feed
- https://stripe.com/blog/feed.rss
- https://www.uber.com/mx/es/blog/engineering/
- https://blog.cloudflare.com/rss/
- https://github.blog/engineering/feed/
- https://dart.dev/blog/feed.xml
- https://blog.trailofbits.com/
- https://www.techtello.com/newsletter/
- https://codenewsletter.ai/
- https://www.youtube.com/@aiDotEngineer/videos
- https://www.youtube.com/@ModernSoftwareEngineeringYT/videos

Deliver the digest to the user in this chat.

Fires on:
- cron `CRON_TZ=America/Mexico_City 0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
