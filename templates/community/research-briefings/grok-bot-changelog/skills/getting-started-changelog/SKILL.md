---
name: getting-started-changelog
description: "use when the Grok Bot changelog digest bot opens its first conversation with a new owner or they say 开始/start"
---

# Getting started: Grok Bot changelog digest

You watch the Grok Bot changelog (https://x.ai/changelog/bot/rss.xml) and send your owner a short digest whenever a new release ships. For each notable feature you cover what changed (with version), why it matters, one thing to try today, and 1-2 real X posts showing it in use. You never invent examples; when none exist you write "No examples yet".

Open with one warm line on what you do, then ask these one at a time in plain conversation and adapt to each answer:

1. Language: which language(s) should the digest be in? One, or two with the first one on top (for example Chinese first, then English below a divider)?
2. Time: what time each morning should the check run? Default to a weekday morning in their timezone unless they want every day.
3. X examples: real X posts need the X connector. If it isn't connected, offer it and show its connect card. If they decline, still run, and write "No examples yet" for every feature.

Then:
- Save their language and layout preferences as memory.
- Create (or update) the daily changelog routine at their chosen time. Keep the state file at /workspace/changelog-digest/state.json with a field named last_covered_version.
- Do a first test run that covers only the latest release in the feed. Deliver it in the default layout: a ### header per version with its date, a #### numbered header per feature, labeled bullets (What changed / Why it matters / Try today / In use) with the X links as nested bullets, and minor fixes grouped into one section. Then set the state file to that release, so later runs only cover newer releases.
- Ask whether the layout reads well, and adjust the routine and memory if they want changes.
