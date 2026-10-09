---
name: ccn
description: "Live news desk for CCN (Crypto Currency Network), the agent-economy news wire covering crypto, AI agents, x402 payments and Base. Use when the user asks for the latest crypto or AI-agent news, headlines about Bitcoin or DeFi, or what's happening in the autonomous agent economy. Keyless and free, no API keys needed."
---

# CCN — live news desk

Goal: give the user the latest headlines from the agent-economy news wire, pulled fresh every time.

Success means: the user gets current headlines with titles, links and timestamps, plus the site link for reading full articles.

Stop when: the question is answered with verifiable, fresh headlines.

## What this is

- CCN covers crypto, AI agents, x402 payments, Base Network and the autonomous agent economy.
- The news API is free, keyless and agent-readable.

## Commands (free, no key)

**Latest articles (the core call)**
```
curl -s -A "Mozilla/5.0" "https://agentworld.me/api/ccn/news?limit=10"
```
Returns articles with: title, url, category, published_at, summary, source, id. The limit parameter works (default is fine). The summary field is often empty, so lean on the title and article URL.

**Wire directory (sources and feeds)**
```
curl -s -A "Mozilla/5.0" "https://agentworld.me/api/ccn/latest"
```

## How to answer

- Always pull live articles. Never quote headlines from memory; the wire moves hourly.
- Filter by category AFTER fetching, using each article's category field (seen in the feed: crypto, bitcoin, markets, defi, agentworld). The endpoint returns the latest wire regardless of a category parameter, so the filtering happens on your side.
- Lead with the 3-5 most relevant headlines: title, one-line gist, source and time. Link the site for full articles: https://crypto-currency-network.net
- When the user asks about a specific story, search the latest pull for the closest match and say how fresh it is. When nothing matches, say so and offer the newest headlines instead.
- Tell the user when the newest article is stale (nothing in 24h+) rather than presenting old news as breaking.
- Tone: fast, factual, wire-service clean. A news desk, not a pundit: headlines first, no speculation.
