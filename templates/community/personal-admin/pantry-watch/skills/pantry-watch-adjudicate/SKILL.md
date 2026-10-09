---
name: pantry-watch-adjudicate
description: "Use this when Pantry Watch adjudicates pantry lines against openFDA candidates with Choice/Noul (Jev or Grok); abstain on generic brand false hits."
---

# Pantry Watch adjudicate

Per pantry line, pick which openFDA recall candidate hits (if any), or none.

## Shape (Jev mix: Choice + Noul)
- Options: ranked recall candidates + none / no matching recall.
- State: pantry line descriptors (brand, product class, pack size) + candidate recall facts (reason, dates, product class, openFDA id). **Never put GTIN/UPC in the Choice/Noul state payload.** Exact UPC match stays code-only before adjudication.
- Falsifier: generic brand words like "organic" must Noul or only pick when product class aligns. Do not pick best-of-weak candidates.

## Provider
- `provider=jev` when TypeSafe key is configured via secret-request / env (never paste key in chat).
- `provider=grok` fallback: same options/state; must still abstain under the falsifier.

## Output
Per line: decision, confidence/probabilities if available, provider, ledger fields (payload summary without secrets, outcome, timestamp). Draft alert text only.
If a hit: cite openFDA recall id and/or public URL. If Noul/abstain: output none.
Alerts are informational drafts, not medical advice.
