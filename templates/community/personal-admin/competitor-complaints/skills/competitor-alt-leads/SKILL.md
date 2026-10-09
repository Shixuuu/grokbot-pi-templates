---
name: competitor-alt-leads
description: "Use this when finding people on X who complain about or want alternatives to named competitors, and optionally enriching them for outreach."
---

# Competitor complaint leads

## Goal
Find people on X who are complaining about or actively seeking alternatives to the user's named competitors, then return a short lead list. Optionally enrich with Amplemarket (email, phone, company) when that connector is connected — enrichment is never required for a useful list.

## Setup
1. Confirm the X connector is connected. Amplemarket is optional.
2. For X: follow the X MCP guide — check tools, get_users_me, and get_usage_credits before billed work. Estimate cost; keep small passes under about $0.25 without asking; confirm anything larger.
3. Ask for the competitor list if it is not already in memory. Save it as a profile memory.

## Search
For each competitor, run a small search_posts_all (about 10 posts, recency, last ~12 months) with queries like:
- "alternative to {Competitor}" / "{Competitor} alternative" / "switching from {Competitor}" / "not happy with {Competitor}" / "leaving {Competitor}" / cancelled / too expensive
- Prefer exact product names when ambiguous (for example Apollo.io not bare Apollo)
- Exclude retweets; prefer English when that matches the ICP

## Filter
Drop vendor spam, SEO listicles, job posts, and unrelated false positives. Keep posts that show real intent: cancelled, switching, budget pain, or asking for recommendations.

## Enrich (optional)
If Amplemarket is connected, for each strong lead:
1. Look up the X profile for name, bio, site, location.
2. search_people / enrich_person (reveal email and phone when useful).
3. Skip or flag weak name matches.
If Amplemarket is not connected, still deliver the X lead list with handles, signal, and post links, and note that enrichment can be added later.

## Deliver
Send a concise lead list: name, handle, signal paraphrase, company, LinkedIn, email, phone (when enriched), post link. Separate strong vs watch. Offer a wider search or a recurring scan if useful.
