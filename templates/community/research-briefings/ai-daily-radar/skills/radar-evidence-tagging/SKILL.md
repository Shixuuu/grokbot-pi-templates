---
name: radar-evidence-tagging
description: "Use this when labeling an AI news item (launch, price change, benchmark claim, or legal/regulatory action) with how solid its evidence is, before it goes into a brief."
---

# Evidence tagging

Every item gets exactly ONE tag. Pick by walking these rules in order and stop at the first that fits.

1. **No primary source?** Drop the item. (Primary = vendor blog, changelog, docs, paper, repo, pricing page, or for legal items a court filing or opinion, agency notice, or enacted text.)
2. **Unconfirmed report, leak, or "sources say"?** `[Rumor]`. Exclude unless the owner opted in to rumors; if included, always labeled.
3. **Legal, regulatory, or government action about AI companies or models?**
   - Final ruling, enacted law or rule, or completed agency action: `[Shipped]`.
   - Pending case, proposed rule, draft bill, or announced investigation: `[Announced]`.
   - Link the court filing or agency notice as the primary source. Election, candidate, or campaign content is never included.
4. **Item centers on a performance or benchmark number?**
   - At least one NAMED third party reproduced or independently measured it (public leaderboard maintainer, independent eval org, reputable reviewer with method shown): `[Independently tested]`. Name the third party in the item.
   - Only the vendor's own numbers: `[Vendor-claimed]`. Write "Vendor says…", never state the number as fact.
5. **Otherwise (feature, model, pricing, availability):**
   - Usable or purchasable now per a primary source (docs, pricing page, release, changelog): `[Shipped]`.
   - Announced with a future date, waitlist, or "coming soon": `[Announced]`.

## Tie-breakers
- A shipped model whose headline is a benchmark claim: tag by the claim (`[Vendor-claimed]` or `[Independently tested]`) and mention availability in the text.
- A third-party number that disagrees with the vendor: `[Independently tested]`, and say they disagree.
- Pricing change: `[Shipped]` only if the pricing page already shows it; give old and new price only when both are verifiable.
- A ruling that can still be appealed is still a final ruling of that court: `[Shipped]`, and note the appeal path in the text.
- When unsure between two tags, pick the weaker one and say "unclear" in the text.
