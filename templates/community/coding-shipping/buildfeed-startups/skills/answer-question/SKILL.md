---
name: answer-question
description: "Use when the user asks what top startup voices say about something inside the five startup lanes."
---

# Skill: answer-question

## Use this when

The user asks what the top startup voices say about something — "what do people think about X," "how should I think about Y," "is it true that Z" — and X is inside the five lanes in `scope.md`. This is the default skill; most turns are this.

## Source priority

1. **Knowledge layer** — the `field-guide` skill (`positions`, `disagreements`, `frameworks`, `roster`). Answer from here whenever it covers the topic.
2. **BuildFeed MCP** — only if the guide is silent on the topic, or the question is about something newer than the date in `knowledge-date.md`. Not for topics the guide already covers; if the user wants more after a guide-based answer, that's `go-deeper`, not this.
3. **General knowledge** — not a source. If you can't answer from 1 or 2, say so.

## Steps

1. Read the question and map it to a lane. If it's outside the lanes, give the short out-of-scope answer from `scope.md` and stop.
2. Search `positions.md` for stances on the topic. Note every holder and their link.
3. Check `disagreements.md` for a live debate on the topic. If there is one, you will surface it.
4. Check `frameworks.md` for a named model the roster uses here; naming it is often the most useful thing you can do.
5. If steps 2–4 found nothing, or the question mentions something recent (a launch, a round, a name that isn't in `roster.md`, "this month"), call the MCP: `search_transcript_passages` with the question as the query and `category: "Startup"` (or `"VC"` for fundraising). One call. Use only what comes back.
6. Write the answer in the shape from `core/output-style.md`: lead with the substance, name the voices, links on the names, disagreement shown as two sides if there is one.
7. Close with an offer to go deeper only if there is genuinely more on this topic — more positions in the guide than you used, or the question is broad enough that the live corpus would add voices.

## Validation

Before sending, check:

- Every person named is either in `roster.md`, attributed in `positions.md`/`disagreements.md`/`frameworks.md`, or came back from the MCP call in this turn — with a link. A name with no link is removed.
- Every video link carries `?t=` (or `&t=…s`). A link without an offset is dropped; the sentence stays.
- Any "most people agree" / "the common view" claim has at least two named people behind it. One person is one person's view; say it that way.
- Nothing is quoted at length. If more than a few words sit inside quotation marks, paraphrase them.
- Nothing is attributed to an organization ("YC thinks," "the Sequoia view"). Rewrite to the person or the channel.
- Under 250 words, unless the user asked for more.

## Output

Prose. Two or three short paragraphs. Names linked. If `disagreements.md` has a debate on this topic, one paragraph shows both sides with a name on each. If a named framework applies, name it. No lists of sources, no timestamps in the text, no preamble.

## Failure behavior

- **Guide silent, MCP returns nothing:** say so in one sentence — "BuildFeed doesn't have anything on that from the startup roster" — and offer one adjacent topic the guide does cover, if there is an obvious one. Do not answer from general knowledge unless you label it as your own general knowledge, not BuildFeed's, in the same sentence.
- **MCP returns 429:** follow `core/key-handling.md`. Once per session, one plain sentence with the `upgrade_url`, then answer from the knowledge layer.
- **MCP unreachable / error:** answer from the knowledge layer if it covers the topic; if it doesn't, say the live corpus isn't reachable right now and that the guide has nothing on this. Never fabricate a result.

## Approval

Nothing in this skill is side-effectful. It reads the field guide and calls a read-only MCP. It never sends, posts, saves, or changes anything. Never call `get_transcript`.

## Example of a correct result

**User:** How should I think about pricing my SaaS product?

**Bot:**

The strongest line in the roster is Jason Cohen's, and it's blunt: price on the value the customer already cares about — growth, not savings — because value-based pricing has a much higher ceiling than cost-based [Jason Cohen](https://youtu.be/8xLquwfx6p0?t=2814). His test for whether you're there yet is just as blunt: keep raising the price in steps until demand actually drops. If you multiplied it and nothing observable changed, you weren't near the price [Jason Cohen](https://youtu.be/8xLquwfx6p0?t=2312).

There's a live disagreement on the *structure*, though. Cohen is arguing for pushing conventional contract pricing up until you hit resistance — higher prices filter toward customers who value the product [Jason Cohen](https://youtu.be/8xLquwfx6p0?t=2316) — while Greg Isenberg thinks per-seat pricing is losing its appeal and that buyers in the AI era increasingly want to pay per completed task [Greg Isenberg](https://youtu.be/9T1yWEq5kP0?t=1141). Which one applies depends on whether what you sell is a seat or an outcome.

Mark Roberge would add a sequencing caveat: none of this tuning is worth doing until product-market fit is locked, because pricing and quota changes on top of weak retention just move the problem around [Mark Roberge](https://youtu.be/5bnpMYSdqbM?t=2739).

There's more in the corpus on the per-task side if you want to go deeper.

*(Why this is correct: every name is in `positions.md` or `disagreements.md` with the exact link used; both sides of the pricing-structure debate are shown with a name each; the offer to go deeper is made because the corpus has more on that thread; 190 words.)*
