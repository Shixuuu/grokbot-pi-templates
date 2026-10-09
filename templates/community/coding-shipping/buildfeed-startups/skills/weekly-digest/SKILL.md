---
name: weekly-digest
description: "Use when the weekly digest routine fires, or the user asks what's new this week on startups."
---

# Skill: weekly-digest

## Use this when

The weekly digest routine fires, or the user asks "what's new this week" / "anything new on startups." Not on demand for a single topic — that's `go-deeper` with "anything newer."

## Source priority

1. **BuildFeed MCP** — the only source. The digest is by definition about content newer than the knowledge layer.
2. **Knowledge layer** — used only to map an item to a lane and to avoid re-surfacing a video already in the guide.
3. General knowledge — not a source.

## Steps

1. Establish the window: since the last digest run (stored as a convention memory after each run), or the last seven days on the first run.
2. Call `list_videos` with `since: <ISO date>` (the start of the window), `category: "Startup"`, `sort: "recent"`, `limit: 50`, then again with `category: "VC"`. `since` reads the archive index. Merge and de-duplicate by `videoId`.
3. If a call errors because `since` is rejected, fall back to `list_videos` with `sort: "recent"`, `category: "Startup"`, `limit: 50`, and once more with `category: "VC"`, then keep only items whose `publishedDate` falls inside the window.
4. Drop anything already linked in the knowledge layer (match on `videoId` against the links in `positions.md`, `disagreements.md`, `frameworks.md`).
5. **Filter to the lanes.** "Startup-tagged" is not the same as "about startups": a coding-tool tutorial, a robotics talk, or a market-news segment can carry the tag. Keep an item only if its title and `channelName` place it in one of the five lanes in `scope.md`. It is normal for this to cut the list by half or more.
6. For each remaining item, find the best moment: one `search_transcript_passages` call with the video's title as the query and `limit: 3`. **Keep only a passage whose `videoId` equals this item's `videoId`** and whose `youtubeUrl` has a non-zero `&t=` offset — the tool searches the whole corpus and will otherwise return a different video. Never call `get_transcript`. If nothing matches this `videoId` with a usable offset, list the item **without a link**.
7. Order by lane (the order in `scope.md`), then by date. Cap at ten items. If more than ten qualify, keep the ten with offsets first, then by recency.
8. Write it. Then store today's date as the "last digest" convention memory.

## Validation

- Every item's `publishedDate` is inside the window.
- Every item maps to a named lane; unmapped items are gone.
- Every link is a `youtubeUrl` from a passage whose `videoId` matches the listed item, and carries `&t=` with a non-zero offset; items without one are unlinked, never linked to the top of the video or to a different video.
- No item duplicates a video already in the knowledge layer.
- Ten items or fewer. One line each.
- Zero qualifying items → **no message is sent.** Not "nothing new," not a heartbeat. Silence.

## Output

A short header line with the window, then items grouped by lane with the lane as a bold label, one line per item: **the title as the link**, opening at the best moment, followed by an em dash and the channel (and the guest, if the title names one). No summaries, no takeaways, no "why it matters" — the user clicks or doesn't.

## Failure behavior

- **No new content in the window, or nothing survives the lane filter:** send nothing. This is the expected outcome most weeks and is not an error.
- **429 on any call:** stop, send nothing, and do not notify — a background routine never delivers the budget notice (`core/key-handling.md`). Try again at the next scheduled run.
- **MCP unreachable:** same as 429 — silence, retry next run. Do not fall back to the knowledge layer; a digest of old content is worse than no digest.
- **`list_videos` returns items but none carry `publishedDate`:** treat as empty; do not guess dates from `generatedAt`.

## Approval

Nothing side-effectful beyond delivering the digest message itself, which the user authorized when they confirmed the routine on first run. No sends to third parties, no posts, no changes. Nothing else needs approval.

## Example of a correct result

*A run covering 11–17 August. Five Startup-tagged videos landed in the window; a Grok Bot tutorial, a UX-design talk and a robotics lecture were dropped by the lane filter, one item had no timestamped moment and is listed unlinked, leaving two lines.*

**New on BuildFeed, 11–17 Aug**

**Strategy**
[When to Build Your Own Agent Harness](https://youtu.be/HI2q3ci3Iuc?t=510) — Sequoia Capital, with Harrison Chase of LangChain

**Founder, team and hiring**
He Made $1.5M a Year On RuneScape at 18 Years Old — Newcomer *(no timestamped moment found)*

*(Why this is correct: both items are real corpus videos published inside the window; the linked item opens at a passage offset from the corpus rather than at 0; the unlinked item is named with its title and channel and no link, per the offset rule; three tagged-but-off-lane videos were filtered out rather than padded in; two lines is a legitimate digest — the skill does not inflate to look busy. Had zero survived, nothing would have been sent.)*
