---
name: find-pattern-of-pain
description: "Use when the user asks for a Pain Map, pattern of pain, repeating customer pain, or whether customer evidence supports a real struggle worth acting on. Also use when given interviews, tickets, reviews, chats, research notes, a product, or a market and the job is to find pain that repeats. Not for backlog grooming, TAM, feature scoring, or inventing personas without evidence."
---

# Find Pattern of Pain

<!-- PoP pack 09-01-2026 v11 -->

v0.2

Turn customer evidence into a defensible Pain Map. A pattern is independent evidence origins describing the same struggle. One loud customer is not a pattern. No pattern is a valid result.

## Trigger

Run this skill when the user wants any of:

- a Pain Map
- a pattern of pain / repeating customer pain
- whether a struggle is real enough to guide a product or research decision
- pain extracted from interviews, tickets, reviews, chats, support logs, research notes, a product, or a market

If the user hands evidence and asks what hurts, run this. Do not wait for the phrase "Pain Map."

## Non-trigger

Do not run this skill when the job is:

- backlog grooming or feature scoring from a request list
- TAM, pricing, or market-size work
- inventing personas, jobs, or pains without evidence
- competitive feature comparison with no customer evidence
- writing copy, a pitch, or a solution brief from assumed pain
- public discovery / "go find customers" (a different skill)

If the input is only a product or market name and no evidence yet, stop after inventory: state that the corpus is empty, emit no Pain rows, and name the highest-value missing evidence.

## Hard rules

Violating the letter is violating the spirit.

1. One loud customer is not a pattern.
2. Feature requests are not automatically pains. "I want X" is a requested solution. Extract the struggle that produced it, or mark the item solution-only.
3. Frequent does not automatically mean important. Keep Frequency and Severity as separate fields. Never collapse them into one score.
4. Do not average distinct customer segments into one generic customer. Split rows when Who or Context differs in a decision-changing way.
5. Do not claim a convenience sample represents the whole market. Name the sample (who, which channel, which period).
6. Do not manufacture patterns when the evidence does not support one.
7. "I don't see a defensible pattern yet" is a valid and desirable conclusion.
8. Count independent evidence origins, not unique people, not mentions, not URLs. Same person, three tickets = 1 person, and those tickets may also belong to one underlying origin.
9. Infer Underlying job only when the evidence supports it. Otherwise `UNKNOWN`.
10. Preserve contrary evidence and people who do not experience the pain. Absence of contrary search is a confidence cap, not silence.

## Independent evidence origins

An independent origin is a customer/user experience that arose independently of the other evidence being counted.

- Several people participating in the same outage, incident, coordinated event, or tightly coupled thread may corroborate one origin without creating several independent origins.
- Same-thread replies do not automatically become new origins. Examine whether they describe genuinely independent circumstances.
- An article quoting, summarizing, or linking a customer source is derivative. It is not another customer origin unless it contains new first-person evidence from a different customer.
- A repost, screenshot, syndicated copy, reaction count, view count, like, or share is distribution. It is not a new evidence origin.
- Multiple comments or tickets from one person still count as one person and may also belong to one underlying origin.
- Correlated corroboration can increase confidence that an incident really occurred without increasing the independent-origin count.
- Preserve both numbers when useful: people corroborating an origin, and independent origins supporting the pattern.
- A minimum of two independent origins is still only the minimum bar. It does not imply a strong pattern.
- Superficially similar but causally different struggles remain separate.

## Evidence grades

Tag every item before clustering:

| Grade | Meaning | Weight |
| --- | --- | --- |
| Observed | They did the thing: workaround, switch, abandon, pay, escalate | strong |
| Lived | First-person struggle with trigger + consequence, not prompted | strong |
| Requested | Feature or solution ask; struggle may be unstated | weak until decoded |
| Hypothetical | "I would," "users probably," "I imagine" | weak |
| Leading | Answer follows a suggestive question or the researcher's frame | discount or drop |
| Repeated-self | Same person restating the same point | do not re-count |

A pattern candidate needs at least **2 independent evidence origins** describing the **same struggle** (not the same solution request), with at least one Observed or Lived item. Below that bar, say there is no defensible pattern.

## Procedure

1. **Inventory.** List every source: who (person or durable handle), role/segment if known, channel, date if known, and item count. Deduplicate people across files. State the sample in one line (who is in, who is missing).
2. **Extract atoms.** For each source, pull only what is present: struggle, trigger, consequence, workaround, observed behavior. Do not fill gaps. Quote short customer language with attribution. Tag each atom with an evidence grade.
3. **Separate solution from problem.** Put requested solutions in a side list. For each request, write the underlying struggle if the source actually stated one. If they only asked for a feature, leave the struggle `UNKNOWN` and do not promote the request to a Pain.
4. **Cluster by struggle, not wording.** Group atoms that describe the same failure to make progress. Keep segment-specific clusters apart when Who or Context would change the decision. Keep superficially similar but causally different struggles separate.
5. **Count independence.** Count independent evidence origins, not unique people. Report Independent support as `N independent evidence origins`. When useful, also report how many people corroborated each origin and which items are derivative or distribution and therefore uncounted.
6. **Score Frequency and Severity separately.** Frequency is how often it hits people who have it. Severity is cost when it hits. Corpus count is the independent-origin count, never Frequency.
7. **Flag weak method.** Leading questions, hypotheticals, and researcher paraphrase cannot found a pattern.
8. **Hunt contrary evidence.** Who does not have this pain? If you did not search, say so and cap Confidence at low.
9. **Job inference (optional).** Write Underlying job only when multiple independent evidence origins show the progress they were trying to make. Otherwise `UNKNOWN`.
10. **What the corpus cannot establish.** Market prevalence, missing segments, causal why, willingness to pay.
11. **Next unknown.** One highest-value missing evidence that would confirm, kill, or split the leading candidate.
12. **Emit or refuse a pattern.** If no cluster clears the independence bar, say there is no defensible pattern yet. Do not dress scraps as a Pain Map row.

## Output contract

Lead with the verdict: a named pattern worth acting on, or no defensible pattern yet.

Then, where supported, one Pain Map per surviving pattern (split by segment when required): Pain, Who, Context, Trigger, Frequency, Severity, Consequence, Current workaround, Independent support, Representative customer language, Contrary evidence, Confidence, Underlying job, Next unknown.

Independent support reports **independent evidence origins**, not merely unique people. When useful, also state how many people corroborated those origins.

Also emit every time: evidence inventory, requested solutions vs underlying problems, what the corpus cannot establish, and sample limits.

Write `UNKNOWN` rather than guessing. Never omit Contrary evidence, Independent support, Confidence, corpus limits, or Next unknown.

### Confidence

- **low**: 2 independent evidence origins, mixed contrary, mostly Requested/Hypothetical, or contrary not searched
- **medium**: 3+ independent evidence origins in one evidenced segment, at least one Observed behavior or workaround, contrary checked
- **high**: 5+ independent evidence origins, more than one context or channel, contrary searched and does not kill it, job inference supported

Two independent origins is the minimum bar, not a strong pattern.

Never mark **high** on a single-channel convenience sample.

## Failure modes

Stop and rewrite if you: called one customer's story a pattern; treated a feature request as the pain; used corpus volume as Frequency; averaged unlike segments; implied the sample is the market; inferred a job from a tool name; dropped people who do not feel the pain; quoted a leading prompt as customer language; filled empty fields with guesses; shipped a Pain Map row below the 2-independent-origin bar; counted unique people in the same incident, thread, or outage as multiple independent origins; or treated a quote, repost, screenshot, or engagement count as a new origin.

## Valid stop

If the evidence does not support a pattern, say: I don't see a defensible pattern yet. Then give inventory, why the bar was not met, what the corpus cannot establish, and the single Next unknown. That is a successful run.
