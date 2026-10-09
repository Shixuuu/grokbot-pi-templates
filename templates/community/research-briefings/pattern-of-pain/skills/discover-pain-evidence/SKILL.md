---
name: discover-pain-evidence
description: "Use when the user names a product, company, URL, market, category, competitor, or problem space and has not already supplied enough direct customer evidence. Finds and normalizes external evidence of concrete customer or user struggles for find-pattern-of-pain to judge. Not for writing a Pain Map, scoring features, or requiring last30days before first value."
---

# Discover Pain Evidence

<!-- PoP pack 09-01-2026 v11 -->

Find and normalize external evidence of concrete customer or user struggles. This skill builds the corpus. It does not decide the Pain Map. Hand the corpus to `find-pattern-of-pain` only when the user asks for a pattern judgment.

## Trigger

Run when the user gives any of:

- a product or company name
- a product URL
- a market or category
- a competitor
- a problem space

And has not already supplied enough direct customer evidence (interviews, tickets, reviews they own, research notes).

If they already attached a corpus and asked for a Pain Map, do not run this. Run `find-pattern-of-pain` on what they supplied.

## Non-trigger

Do not run when the job is:

- judging whether a pain pattern is defensible (that is `find-pattern-of-pain`)
- backlog grooming, TAM, or feature scoring
- inventing personas or pains without looking
- requiring another skill or connector to be installed before any search

## Hard rules

1. First value must not require installing or configuring another skill, plugin, or connector. Search with what is already available. Deliver a corpus from that, even if thin.
2. Choose sources by relevance to the object, not by running every network. Mechanical "search everything" is a failure.
3. `last30days` is an optional accelerator, never a prerequisite. If that skill is already installed and would change the corpus, you may invoke it. If it is missing, do not stop to set it up.
4. Look for concrete struggle and behavior, not generic sentiment.
5. Do not search only for complaints. Hunt contrary evidence in the same pass.
6. Deduplicate: reposts, quote-articles, screenshots of the same post, and syndicated copies are one underlying source.
7. Each source is a population, not the market. Record the bias. Never treat HN, GitHub issues, or public social as representative.
8. Vendor pages and testimonials establish what the vendor claims, not independent customer pain. Keep them, tag them `Vendor-claim`.
9. If evidence is thin, return a thin corpus and say so. Never lower the bar to fill the output.
10. Do not emit a Pain Map, named pattern, or confidence that a struggle repeats. That judgment belongs to `find-pattern-of-pain`.

## What to search for

Prefer items that contain at least one of:

- concrete past behavior
- repeated workarounds
- trigger events
- consequences or cost
- switching or cancellation behavior
- product limitations tied to blocked progress
- meaningful contrary evidence (people who do not have the pain, like the current workaround, or an old complaint that was fixed)

Treat as weaker and keep them marked weak:

- generic dislike
- feature requests with no stated struggle
- hypothetical willingness ("I would", "users probably")
- engagement counts as if they were independence
- detached analyst summaries

## Evidence types

Tag every item before it enters the corpus. Use the same grades `find-pattern-of-pain` expects:

| Type | Meaning |
| --- | --- |
| Observed | They did the thing: workaround, switch, abandon, pay, escalate |
| Lived | First-person struggle with trigger + consequence, not prompted |
| Requested | Feature or solution ask; struggle may be unstated |
| Hypothetical | "I would," "users probably," "I imagine" |
| Leading | Answer follows a suggestive question or a researcher's frame |
| Repeated-self | Same person restating the same point |
| Vendor-claim | Vendor site, pricing page, testimonial, case study |
| Analyst-summary | Secondary writeup with no primary customer language |

## Source selection

Pick a first stack from the object. Expand only if a gap would change the first judgment.

- Developer / infrastructure / AI products: product + docs, GitHub, Hacker News, web
- Open source: GitHub first, then HN / web / social where useful
- B2B SaaS: product + docs, web, relevant public user discussions (forums, review sites, communities that actually use the category)
- Consumer / creator: web + available public social sources

X, Bluesky, Reddit, YouTube, and other networks are useful when they are already reachable and likely to change the answer. Skip a network when it is not connected, blocked, or a poor match for the object, and say so.

Do not delay first value for Reddit, X, or `last30days` setup.

## Procedure

1. **Frame the object.** One line: what product, company, URL, market, competitor, or problem space, plus any segment the user named.
2. **Choose the first stack.** Write the 2–4 sources you will actually open and why they fit. Name the sources you will skip and why.
3. **Collect primary items.** Pull pages, issues, threads, reviews, and posts that show struggle, workaround, switch, or contrary. Quote short customer language. Keep URL, date, and author when present.
4. **Collect contrary in the same pass.** People who do not feel the alleged pain, who are fine with the workaround, segments where the problem disappears, evidence an old complaint was fixed.
5. **Normalize and dedupe.** One row per underlying source. Collapse reposts and quote-pieces into one `duplicate cluster`.
6. **Bias the sample.** For each network used, state who lives there and who is missing.
7. **Stop.** Stop when the corpus is diverse enough that `find-pattern-of-pain` can make a useful first judgment, and more searching is unlikely to change the likely pattern or an important segment boundary. If you cannot reach that, stop anyway and mark the corpus thin.
8. **Emit the corpus. Do not judge the pattern.**

## Stop condition

Stop when both are true, or when you have honestly exhausted available sources:

- more than one independent primary voice exists, or you can show you looked and they do not
- adding another similar thread is unlikely to add a new struggle, a new segment, or a contrary that would split a later Pain Map

Thin is a valid stop. An empty useful corpus is a valid stop. Filling rows with sentiment is not.

## Output contract

Return all six, every time:

1. **Source-normalized evidence corpus** for `find-pattern-of-pain`. One item per underlying source. Preserve when available:
   - source / network
   - URL
   - date
   - author / user context
   - exact or tightly faithful customer language
   - product / workflow context
   - likely segment
   - evidence type
   - observed behavior / workaround
   - consequence / severity signal
   - duplicate cluster
   - source-bias note
   - extraction confidence (`high` = direct quote + URL; `medium` = paraphrase of a primary page; `low` = secondary summary or incomplete capture)
   Write `UNKNOWN` rather than guessing a field.
2. **Sources searched**
3. **Sources intentionally skipped, and why**
4. **Source / population biases**
5. **Most important missing source class**
6. **Whether `last30days` would materially improve confidence** (yes/no + one sentence). Do not install it from this answer.

Also state, in one line, whether the corpus is **thin** or **enough for a first `find-pattern-of-pain` pass**.

Do not name a pattern. Do not emit Pain, Who, Frequency, Severity, Confidence, or Underlying job as judged fields.

## Failure modes

Stop and rewrite if you: required `last30days` or another install before searching; searched every network by default; treated HN or GitHub as the market; counted a repost as a second source; used a vendor testimonial as independent pain; searched only for complaints; clustered unrelated gripes into "users want control"; filled empty fields; or shipped a Pain Map.

## Valid stop

A thin corpus plus an honest missing-source class is a successful run.
