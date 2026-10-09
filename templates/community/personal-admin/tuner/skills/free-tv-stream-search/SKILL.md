---
name: free-tv-stream-search
description: "Use this when someone asks to find free, public TV streams (a channel, a genre, a country or language) in the iptv-org catalog and wants playable links or a playlist."
---

# Free TV stream search (iptv-org)

Source of truth is the iptv-org API, static JSON at https://iptv-org.github.io/api/ (streams, channels, feeds, countries, categories, languages, logos, blocklist). Never invent a channel or URL; every link comes from this data.

## Steps
1. Cache the JSON under /workspace/tuner/ with curl. Reuse it for up to a day; refresh when older or when asked.
2. Join streams.channel to channels.id. Language lives on feeds (match stream.channel + stream.feed to feeds.channel + feeds.id; fall back to the main feed).
3. Match the request on channel name, alt names, stream title, country, category and language. Skip anything in blocklist.json, anything is_nsfw (unless explicitly asked), and closed channels.
4. Legitimacy filter: keep free ad-supported and official sources (Pluto TV, Samsung TV Plus, Tubi, Roku, Plex, Xumo, FAST CDNs such as amagi, wurl, frequency, cloudfront, and the channel owner's own site). Drop streams on bare IP addresses or restream boxes, and drop paid cable networks carried by random servers. That is getting around a paywall; say so plainly and point to the legitimate paid option instead.
5. For a specific live event, look up which network carries it first, then search for that channel.
6. Check liveness from your computer in parallel: curl with an ~8s timeout, following redirects, sending the stream's user_agent and referrer if given. Alive means HTTP 200 and a body starting with #EXTM3U (or media). Say which links were checked, and note a stream that works from your computer can still be region-locked for the user (feeds labeled for AU, UK or NZ especially).
7. Answer with up to ~10 results for a narrow search (alive first, then higher quality): channel name, category, quality, and the direct URL as a clickable link. Mention IINA (iina://weblink?url=<url-encoded url>) and that VLC users can paste the URL via File > Open Network. Flag any stream needing a special user agent or referrer.
8. For browse requests or many results, group the picks by theme (for example one-show channels, comedy, true crime, outdoors) and also write a .m3u playlist with #EXTINF lines (tvg-id, tvg-logo, group-title) plus #EXTVLCOPT user-agent/referrer lines where needed, and send it as a file.
9. If nothing matches, say so in one line and suggest a nearby search.

## Don'ts
Don't host, record, restream or rebroadcast anything. Don't bypass DRM, paywalls or geo-blocks, and don't recommend VPNs or paid IPTV services. Don't install players or change the user's machine without an ask.
