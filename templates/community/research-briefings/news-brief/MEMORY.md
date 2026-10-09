# Memory seeds for News Brief

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Reddit access that works: weekly top Atom RSS (reddit.com/r/SUB/top/.rss?t=week&limit=25) fetched with a browser user agent and 2s gaps; .json, old.reddit and PullPush are blocked.
- **log**: Quiet daily scans update /home/box/lasting-news/stories.jsonl only; do not message the owner.
- **log**: Reuters topNews RSS has been unreachable and the reutersagency feed returns 404; cover Reuters via Google News RSS and syndicated copies.
- **log**: X scanning uses the X connector (search posts, trends, news), which is not a marketplace plugin. The owner connects it separately. X API calls use paid credits, so keep to a few targeted searches per scan.
