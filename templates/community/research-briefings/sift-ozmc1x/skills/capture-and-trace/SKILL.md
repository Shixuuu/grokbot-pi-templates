---
name: capture-and-trace
description: "Use when the owner drops a link, thought, or X post to save, says \"sort my bookmarks\", \"digest\", \"review queue\" or \"weekly review\", or when the daily bookmark-sort or weekly-review routine runs. Judges each item keep/act/kill, traces hype posts to their real source, and keeps one note per item until the owner adds their take."
---

# Capture and trace

One item, one note. Most items die. Nothing counts as knowledge until the owner writes "My take".

## Settings (from memory, set by getting-started-capture)
- Name and output style (short clear mode on or off).
- Sources: X bookmarks (X plugin) or paste only.
- Intake mode: ask now or save first (ask why later in the digest).
- Storage: a notes folder or wiki (path + index file), Notion, a Google Doc, or chat only.
- Cache index: yes or no.
- X spend cap per run, and whether the first paid use is approved.
- Live projects or interests, one line each (for relevance).
If a setting is missing, ask once. Don't guess paths or ids. If setup was never run, offer it first (getting-started-capture).

## Hard rules
- Never invent a source. If none is found, write "no source found" and list what you searched.
- Never delete the original (no bookmark removal).
- Every digest line links its item. Never a bare id or file path.
- Mark guesses about the owner's reasons or opinions with "(guess)".
- Short, clear sentences. One idea per sentence.
- Never post, message, or share anything for the owner.

## 0. Check first
Before working on any item, check the index or cache (or the local seen-list in chat-only mode) by item id. X posts use `x-<post id>`. If it is already there, reuse it and stop. Don't redo work.

## 1. Intake
- Link, thought, or X post dropped in chat: give it an id, log it, reply "In. <id>".
- Intake mode (setting): `ask now` (default) asks "Why save this?" once if no reason is given. `save first` never asks at intake; the item goes to the WHY? line of the next digest, same as bookmark-sort items.
- Don't triage on the spot unless asked or a routine is running.

## 2. Bookmark sort (X)
1. Pull bookmarks newest first since the last run. Stop at the first id already seen. No backfill unless asked.
2. Free prefilter first, before any fetch or model call: drop exact and URL duplicates (normalize URLs, strip tracking params) and links to known hype or link-in-bio domains. Log each drop as a kill. Flag hype phrases with no numbers ("insane", "game changer", "nobody is talking about", "save this").
3. Paid X API only within the per-run cap. Before the first paid use, estimate the cost (items x price per item) and ask. Check credits before and after each run and report the spend.
4. Get text cheapest first: text the owner pasted, then text already saved locally, then a free mirror (e.g. `https://api.fxtwitter.com/<user>/status/<id>`), then the paid API. For links, fetch the page; for code repos, read the README.

## 3. Judge: keep / act / kill
Score 1-5:
- R, relevance to the owner's projects: 5 changes a plan; 3 useful context; 1 none.
- N, novelty against existing notes: 5 new; 3 adds detail; 1 already covered.
- A, actionability: 5 a concrete step this week; 3 maybe later; 1 nothing.
Verdicts:
- kill: R <= 2, or R+N+A <= 8, or N = 1. If in doubt, kill. One log line, no note.
- keep: R >= 3 and R+N+A >= 9. Write the note.
- act: keep plus R >= 4 and A >= 4. Note plus one next-step line.
Like counts are not relevance. Hype with no numbers, repo, or method counts against N.

## 4. Trace (hype or engagement-farm posts only)
Threads, tool lists, "99% don't know", course funnels. Write the result into the Trace section of the same note.
1. Get the full post and replies. The source link is often in the last reply.
2. Pull clues: links, quoted posts, logos or URLs in images, named products, papers, repos, people, distinctive phrases, every number.
3. Search: follow links and quotes first; then product name plus a feature word; then exact phrases for the earliest version. Prefer primary sources (docs, papers, repos, the author's own post). A template list with no sources: stop early, "no source found".
4. Verify every number and claim. Note what the post left out: cost, privacy, cloud dependency, permissions, paid lock-in.
5. Confidence: high, medium, low, or untraced.

## 5. Note (storage mode)
One note per item, named by id, status `needs-you`. Under 25 lines before the trace. Add one line to the index (id, one-line summary, link). Keep the index tight. Wrap frontmatter values in double quotes.
```
---
summary: "one line, what it is and why it matters"
status: needs-you          # reviewed after My take
item_url: url
source_urls: []
confidence: high|medium|low|untraced
---
# Title
- Source: url | author | posted | captured
- Why saved: owner's line, or a guess marked (guess)
- Verdict: keep|act (R/N/A)
## Summary
2-3 lines.
## Takeaways
- 1-3 bullets
## Trace
Post, source links + confidence, 3-6 facts, what was changed or hyped, keep/kill.
## My take
Empty until the owner writes 1-3 lines.
```
- If the item only adds to an existing note, add 1-3 lines plus the link there instead.
- After My take: set `status: reviewed`. Now it counts as knowledge.
- Chat-only mode: send the note in chat. Keep a small local seen-list (id, verdict, date) so items never repeat.

## 6. Digest (chat, at most 15 lines)
```
Digest YYYY-MM-DD: N in, K keep, A act, X kill (spend $S)
ACT  [title](link) (R/N/A): one line + next step
KEEP [title](link) (R/N/A): one line -> note
KILL [author](link) 3-word reason; ...
WHY? guessed reasons for: [title](link), ... (fix or ok)
NEEDS YOU (N): [title](note) per needs-you note, STALE if 7+ days
```

## 7. Weekly stale check
- Every needs-you note untouched 7+ days: ask "keep or drop?" one line each.
- Drop: remove the note, keep the log line so it is never pulled again.
- Report counts for the week (in / keep / act / kill) and kill rate (60-85% is healthy).
- List kills the owner wanted back, and propose at most 3 rule changes. Change only what the owner approves.
