---
name: osumo-content
description: "use this when fetching 大相撲 banzuke, torikumi, rikishi, or news data from the public o-sumo JSON API at osada.us"
---

# o-sumo Content API

Fetch 大相撲 banzuke, torikumi, and rikishi data from the public o-sumo JSON API. Do not scrape HTML.

Base: `https://osada.us/api/v1`

```bash
curl -s https://osada.us/api/v1/banzuke.json
curl -s https://osada.us/api/v1/torikumi.json
curl -s https://osada.us/api/v1/rikishi.json
curl -s https://osada.us/api/v1/news.json
```

Also available: `gyoji.json`, `yobidashi.json`, `rikishi-matchups.json`. Catalog: `https://osada.us/.well-known/api-catalog`. Auth is anonymous; no credentials.

## Rules

1. Compare `updatedAt` before polling; back off if unchanged.
2. `resultDays` / `scheduleDays` are always 15 days. Treat `status = "pending"` as empty, not an error.
3. `winner` can be `null`; always have a fallback.
4. Keep `resultUpdatedAt` and `scheduleUpdatedAt` separate.
5. `dayHead` is `"{N日目}： 令和X年M月D日(曜)"`, not a basho name.
6. Refer to rikishi by numeric `id`. Profile image: `https://osada.us/images/rikishi/{id}.png`.

Source: Japan Sumo Association. Spec: see https://osada.us/.well-known/api-catalog
