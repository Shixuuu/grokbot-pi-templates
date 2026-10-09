---
name: go-deeper
description: "Use when the user asks for more, who else, anything newer, or the knowledge layer could not answer."
---

# Skill: go-deeper

## Use this when

The user says "more," "who else," "anything newer," "what else is there on this," or asks a startup question the knowledge layer could not answer. It also runs when the user follows an `answer-question` reply with a request to keep going. This is the skill that reaches into the live corpus.

## Source priority

1. **BuildFeed MCP** — the point of this skill. `search_transcript_passages` over the startup-tagged corpus is the primary call.
2. **Knowledge layer** — used to avoid repeating what the user was already told, and to name a voice consistently if the MCP surfaces someone already in `roster.md`.
3. **General knowledge** — not a source.

## Steps

1. Establish what the user has already heard. If this follows an `answer-question` turn, the names and links from that answer are off the table — the job is *additional* voices and moments.
2. Call `search_transcript_passages` with the topic as the query, `category: "Startup"` (use `"VC"` for fundraising topics), `limit: 8`. If the user asked "anything newer," also call `list_videos` with `sort: "recent"` and `category: "Startup"`, `limit: 20`, and filter the results to those published after the date in `knowledge-date.md`; then run one passage search scoped to what those titles are about. Never call `get_transcript`.
3. If the first search comes back thin or off-topic, widen by **rewording**, not by paging — the MCP has no pagination and shortlists only a dozen candidate videos per query, so a second query with different vocabulary (the lane's terms from `frameworks.md`, a synonym, the `audience: "Founder"` or `"Investor"` filter) reaches videos the first one didn't. At most three searches per turn.
4. From the returned passages, keep the ones that actually make a point on the topic (read the `text`; discard intros, ads, and tangents). Group by video so one voice isn't cited three times for one thought.
5. For each kept passage the speaker is the `channel` field — or a person named in the `title`, if the title names them. Never a name from the passage text, never a name from memory.
6. Write two to five additional voices or moments in the `core/output-style.md` shape. Each name links to that passage's `youtubeUrl`, which already carries the `&t=` offset.

## Validation

- Only attribute what the MCP returned in this turn. If it isn't in a returned passage, it isn't said.
- Every link is a `youtubeUrl` from a returned passage and carries `&t=`. A result with `t=0s` has no usable offset — mention the video by title without a link, or drop it.
- No name appears that isn't the passage's `channel` or in its `title`.
- Nothing from the previous answer is repeated as if new.
- Passage text is paraphrased, never pasted. If a sentence of yours contains more than a handful of consecutive words from a passage, rewrite it.
- Same length ceiling as `answer-question` unless the user asked for a long read.

## Output

Prose, same register as `answer-question`. Two to five new voices or moments, each linked at the moment. If the new material *disagrees* with what the user already heard, say that explicitly — it's the most useful thing this skill can surface. If it merely repeats the earlier answer with different names, say that too, briefly; don't pad. Close by saying whether there's still more, honestly.

## Failure behavior

- **Empty results after up to three reworded searches:** say plainly that the live corpus doesn't add anything beyond the guide on this topic. Do not manufacture depth.
- **Results returned but all off-topic** (common for narrow queries — see `MCP-GAPS.md` item 4): treat as empty. Do not stretch an unrelated passage to fit.
- **429:** per `core/key-handling.md` — one plain sentence with the `upgrade_url`, once per session, then offer what the knowledge layer has.
- **MCP unreachable:** say the live corpus isn't reachable right now; offer the guide's material if the user hasn't heard it yet, otherwise stop.

## Approval

Nothing side-effectful. Read-only MCP calls; no writes, sends, or changes. Nothing needs approval.

## Example of a correct result

*Context: the user asked about seed-round sizing, got a guide-based answer citing Joe Lonsdale and Buhler on round sizes scaling up, and now says "who else?"*

**Bot:**

The live corpus adds a few voices, and one of them cuts against the "rounds are just bigger now" framing.

The 20VC roundtable on the recent IPO market spends a while on what they call hubristic financing — raising well ahead of fundamentals — and is split on it. One line is that it sets founders up for a painful correction when growth doesn't match what was promised to get the round done [20VC](https://www.youtube.com/watch?v=AkObfvN3ArI&t=138s); the counter, a few minutes later, is that taking capital at the market price when you can is simply rational, and that shaping the round well is what attracts the next one [20VC](https://www.youtube.com/watch?v=AkObfvN3ArI&t=266s).

On the investor side of the table, Sequoia's Buhler frames the sizing question as being about the quality of the specific company rather than the heat of the round — the same point the guide already had from him, but the surrounding conversation on healthcare and vertical AI is worth the context [Buhler](https://www.youtube.com/watch?v=A6AZ2fRFOms&t=292s).

There's also a 20VC episode on Anthropic's first round — twenty-one rejections before a yes — that's squarely on point, but the search only surfaced its opening, so I can't send you to the right moment; it's titled *Anthropic's 1st Round: We Got 21 No's* if you want to find it.

That's most of what the corpus has on sizing specifically; the adjacent thread on *when* to raise versus bootstrap has more.

*(Why this is correct: all four videos came back from `search_transcript_passages` this turn; the three links are the returned `youtubeUrl`s with their `&t=` offsets; the `t=0s` result is named without a link per the rule; Buhler is attributed only because the title names him; the earlier answer's Lonsdale link is not repeated; the disagreement inside the roundtable is surfaced.)*
