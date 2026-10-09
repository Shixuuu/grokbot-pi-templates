---
name: claims-to-cutline
description: "Use when turning contested claims from a post, video, article, or reader note into a researched cutline visualization site on grok.me. For ballot measures and special taxes, prefer Civic ballot cutline."
---

# Claims to cutline

## Goal
Produce a shareable evidence page: every claim graded against primary sources, big numbers first, published on grok.me.

## Steps
1. **Route ballots** — if the ask is a ballot measure, special tax, bond, parcel tax, initiative, or “good on paper” civic campaign, run **Civic ballot cutline** for the measure core first. Continue here for any extra media/post claims layered on top.
2. **Extract all claims** — caption/text AND any attached video or audio. Never caption-only. Run the media-claims skill if video/audio is present.
3. **Research each claim** — prefer primary docs and grokipedia over secondary media. Note incomplete periods when they change the story.
4. **Grade** — HOLD / HOLDS WITH CAVEAT / OVERSTATES / RHETORICAL / UNVERIFIED / POLITICAL FRAMING / NOT STATED. Grade both sides when the ask is a claim vs counter-claim. Map organized opposition when the topic is contested policy and fold confirms/adds into the ledger.
5. **Lead with big numbers** — round to the story. Put rounding noise ($30M vs $31M) in footnotes, never the headline. Do not be a pedantic AI that highlights irrelevant precision.
6. **Build the cutline** — dark editorial HTML: hero stats, claim cards, charts if useful, linked sources, collapsible prompt/intention block.
7. **Publish to grok.me only** — use the Publish grok.me cutline skill (Grok Build). Do not use here.now or other anonymous hosts unless the user explicitly names that destination. Prefer a short readable slug. Never modify an unrelated live cutline while publishing.
8. **Deliver** — live URL first, then the scoreboard in a few bullets. Offer to reply on the original thread only if asked; otherwise draft-only.

## Anti-jobs
- Do not post or reply on X/social unless the user explicitly asks.
- Do not install or ask for here.now as the default publish path.
- Do not create skills, bots, or standing routines from a single cutline run.

## Voice
Warm, concise, not pedantic. Funnel clarity beats stump rhetoric (e.g. bills passed ≠ laws enacted).
