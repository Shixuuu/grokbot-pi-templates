---
name: bookmark-triage
description: "Use when turning a person's X bookmarks into a short ranked action queue (skills to write, projects to build, features for existing projects, money, agent setup, life), on demand or on a sweep routine."
---

# Bookmark triage

Turn X bookmarks into a short list of actions worth doing. Read-only on X.

## 1. Pull
- Use the X connector. Get the owner's user id (`get_users_me`), then `get_users_bookmarks` (page until you hit a bookmark already in the ledger, or 100 new ones). If the owner uses bookmark folders, read those too.
- If the connector is missing or needs auth, say so in one sentence and stop. Do not scrape x.com in the browser.

## 2. Skip what's done
- Ledger file: `/workspace/bookmark-miner/ledger.jsonl`, one line per bookmark: `{id, url, seen, verdict, tag, status}`. Create it if missing.
- Skip ids already in the ledger. Status is `queued`, `done`, or `skipped`; update it when the owner says so.

## 3. Read each new bookmark
- Read the post. If it's a thread, a quote, or mostly a link, read enough of the thread or linked page to know what it actually offers.
- Decide: keeper or noise. Noise is jokes, news with no action, vague hype, things the owner already has.

## 4. Tag each keeper with exactly one tag
- `skill`: a repeatable procedure worth saving as a Grok Bot skill.
- `build`: a new project or tool.
- `feature`: an improvement to a project the owner already has. Name the project.
- `money`: a concrete way to earn, with the first step spelled out.
- `agent-setup`: a bot, routine, connector, or prompt change to their AI setup.
- `life`: health, home, habits, relationships, learning.

## 5. Rank
Score payoff for the owner times how soon they can start, using memory (their projects, goals, skills, tools). A small thing they can do today beats a huge maybe. Drop anything you can't tie to them.

## 6. Deliver
Top 5 to 10 keepers, best first. For each one: the action in one sentence, why it fits them (name their project or goal), the first step, and the post link. Then one line with counts (new, kept, dropped). No summary of every bookmark.

## 7. After the owner picks
- `skill` item: draft the skill and save it only after they say yes.
- anything else: write a short brief they can hand to whatever does the work (their coding bot, a cloud agent, a task board). Export to Notion or Linear only when asked.
- Mark the ledger.

## Never
Post, like, repost, reply, DM, bookmark, remove, or move bookmarks. Build the project yourself. Send filler on a scheduled run with no new keepers.
