---
name: lead-vetting
description: "Use when vetting a potential lead, client, partner, or collaboration prospect before a meeting or outreach — produces a one-page brief with relevance, traction, funding, users, social, key people, and a fit verdict."
---

# Lead Vetting

## What this skill does

Turn a company name or URL into a decision-ready lead brief in one pass. Instead of scattering facts, this skill runs a fixed checklist against prioritized sources, cross-checks the numbers, flags stale or conflicting data, and ends with a plain fit verdict for the engagement on the table.

The default lens is your GTM consulting / content business. The most common offer is a **GTM consulting retainer** (a few months of hands-on GTM work), followed by **workshops** and **content collaborations**, all for B2B SaaS. "Relevance" means relevance to those. Unless the user says which offer they have in mind, assume a consulting retainer first, and note where a workshop or content deal might fit instead. Swap the lens entirely if the user says so.

## When to use this skill

Trigger whenever the user wants to size up a company before spending time on it:

- "Check this company / lead / prospect: [url]"
- "Prep me for a meeting with [company / person]"
- "Are they worth a retainer pitch?" / "Would they buy consulting?"
- "Should we pitch [company]?"
- "Who are these people and how big are they?"
- "Vet [company] as a potential client / partner / sponsor"

If the user only wants one fact (just the funding, just the ARR), skip the full brief and answer that directly with a source. This skill is for the full qualification pass.

## The checklist (always cover these)

Every brief answers these seven, in this order. If a data point can't be found, say so rather than guessing.

1. **Relevance** - What they do, who they sell to, GTM motion (PLG / sales-led / hybrid), and whether they fit the user's business. Weigh the offers in order:
   - **Consulting retainer (primary):** the strongest fit. Do they have an active GTM problem worth months of hands-on help, budget to fund it (usually post-seed through Series B), a scaling or expansion motion, and a decision-maker who owns GTM? A lean or newly built GTM team, a new-market push, or a founder still owning growth are all strong retainer signals.
   - **Workshop (secondary):** a real GTM team big enough to fill a room, an appetite for upskilling, or a one-off moment (new tooling, a strategy reset) where a focused session lands.
   - **Content collaboration (tertiary):** meaningful distribution (audience, newsletter, social reach) worth co-marketing into.
   Name the wedge for whichever fits best (e.g. "expanding into 2 new markets with lean local teams - retainer to stand up the playbook").
2. **Traction** - ARR / revenue, growth rate or multiple, customer/user count, and any engagement or retention metrics (DAU/WAU, retention, NRR). Prefer the most recent founder-stated figure and give the trajectory, not a single number.
3. **Funding** - Every round: amount, date, lead + participating investors, and total raised. Note valuation if public. Flag "announced vs closed" and any regulatory conditions.
4. **Users / customers** - How many, what segment, named logos if any. Separate "users" from "paying customers" from "accounts" when the company blurs them.
5. **Social following** - LinkedIn company followers, X, YouTube, newsletter size, and the founders' personal reach if that is where the audience lives. This tells you distribution power for a co-marketed workshop.
6. **Key people** - Founders and the specific person the user is meeting: seniority, background, what they care about, and whether they are a decision-maker or a champion to build. Note where they sit (function, office/geo).
7. **Anything else worth flagging** - Headcount and its growth trajectory, competitive positioning and named rivals, pricing tiers, recent news, expansion plans, and any red flags (down round, layoffs, founder churn, regulatory overhang, thin moat).

Close every brief with a one-line **Fit verdict** that names the best-fit offer (retainer / workshop / content / pass) and a suggested **angle** for it.

## Source map (where each number lives)

Hit primary sources first, use aggregators for structure, and never trust a single aggregator on funding or headcount.

| Data point | Best sources | Watch out for |
|---|---|---|
| Positioning, product, funding banner | Company homepage (fetch it), /about, /careers | Marketing language; verify claims |
| Funding rounds | Trade press (Tech.eu, Sifted, TechCrunch, EU-Startups), the company's own press release, sector outlets | Aggregators lag or duplicate rounds |
| Structured funding/valuation | Crunchbase, PitchBook, Dealroom, Tracxn | Wrong founders/HQ/round counts are common - cross-check names against press |
| ARR / revenue / growth | Founder interviews, startup press, milestone posts | GetLatka-type pages go stale and can say "bootstrapped / $0 raised" long after a raise |
| Headcount | PitchBook and LinkedIn company page | Numbers conflict wildly; give a range and a date, note the trajectory |
| Users / customers | Company press, funding announcements | "Users" vs "paying customers" vs "accounts" get conflated - separate them |
| Social following | LinkedIn company page, X profile, YouTube, Substack/newsletter | Follower count != engagement; note both if you can |
| Key people | LinkedIn (person + company), RocketReach for dept structure | Same-name mismatches; confirm the right company and role |
| Competitive frame | Sector press, the funding story's "rival to X" framing | Take vendor self-comparison with salt |

Budget: 4-8 searches plus 1-2 fetches for a standard brief. Go deeper (10+) only if numbers conflict or the deal is high-stakes.

## Source hygiene (non-negotiable)

- **Cross-check funding and headcount across at least two sources.** If they disagree, present the range and the likely reason (pre- vs post-round, different date, duplicated round).
- **Freshness check.** Anything older than ~6 months on revenue, headcount, or pricing gets a fresh search before you use it. Call out the date on every hard number.
- **Kill stale aggregators.** If a page contradicts recent press (e.g. "bootstrapped, $0 raised" for a company you know just raised), name it as stale and discard it.
- **Announced vs closed.** Some rounds are announced subject to regulatory clearance. Phrase it as "announced" and note the condition.
- **Separate the metrics.** Users, paying customers, and accounts are different. Revenue and ARR are different. Don't let the company's rounding become yours.
- **Privacy.** Never put a person's name or personal data into a search query when identifying them from an image, and never place personal data in URLs.

## Output format

Keep it to roughly one page. Skimmable, plain, sourced. Default shape:

```
# Lead brief: [Company]

**Fit verdict:** [best-fit offer: retainer / workshop / content / pass - and why] · **Angle:** [the specific wedge]

## Relevance
[What they do, who they sell to, GTM motion, why they fit or don't]

## Traction
[ARR/revenue + trajectory, growth multiple, customer/user count, engagement/retention]

## Funding
[Rounds with dates, amounts, investors, total raised, valuation, caveats]

## Users / customers
[Counts by segment, named logos, the split between users and payers]

## Social following
[LinkedIn / X / YouTube / newsletter numbers; founder reach if relevant]

## Key people
[Founders + the specific contact: role, background, what they care about,
decision-maker vs champion, where they sit]

## Flags & extras
[Headcount + growth, competitors, pricing, recent news, expansion, red flags]

## Sources
[Primary links for the numbers that matter, with dates]
```

State every hard number with its date. Put the two or three links that back the funding and revenue figures at the bottom so they are meeting-ready.

## Common failure modes to avoid

- **Trusting one aggregator.** Crunchbase/Tracxn/Dealroom routinely list wrong founders, HQ, or round counts. Anchor on press and the company's own words.
- **Quoting a stale ARR.** The flashiest number is often the oldest. Find the most recent founder-stated figure and show the trajectory.
- **Blurring users and customers.** If they say "8,000 firms," check whether that is paying accounts or signups before you repeat it.
- **Missing the person.** The company matters less than who is in the room. Always profile the specific contact and whether they hold budget.
- **Wall of facts, no verdict.** The point is a decision. Lead with the fit verdict and the angle; the facts support it.
- **Ignoring distribution.** For a content collaboration, social reach and newsletter size can matter more than headcount. For a retainer, budget and an owned GTM problem matter more than reach. Weigh the right signals for the offer.
