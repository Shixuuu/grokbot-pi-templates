---
name: can-i-add-x
description: "Use this when a homeowner asks \"can I add a hot tub / heat pump / induction range / generator / EV charger / sauna?\" Gives a planning-level headroom framing from their saved panel profile and ends with what a licensed electrician and the AHJ will check. EV asks hand off to chargeright-ev."
---

# Can I Add X?

**Verification scope:** Information-gathering and privacy/safety boundaries have static contract checks. This skill supplies no generic circuit-size recommendation or verified site-specific calculation; the equipment documentation, electrician, and AHJ determine applicability.

## Use this when…
- "Can my panel handle a hot tub?", "Can I add a heat pump / induction range / generator / sauna / shop heater?"
- EV charger / Level 2 / wall connector → **hand off to `chargeright-ev`** after a one-line intro.

## Steps
Before these steps or any EV handoff, check the canonical red flags in `send-to-pro`; any reported flag returns only that safety response. Onboarding, planning, and product questions never take precedence.
1. **Check the profile.** Use facts shared in this conversation or a profile saved with consent. If no main breaker rating is available, offer a short `panel-profile` check; unknowns do not block a general planning checklist. Treat service capacity as `unknown` unless the profile records a verified source. Never infer capacity or phase from photos. Confirm the adopted NEC edition/local amendments with the licensed electrician/AHJ before applying a method; an unverified edition, including 2026, gets information gathering only, no supported calculation or compliance verdict.
2. **Equipment facts to gather, not a circuit-size recommendation:** Ask for the exact model and values from an existing manual, paperwork, or a safely readable exterior nameplate. Record the source and units. Missing or unclear values stay `TBD / unknown`; never invent amps, substitute a typical range, or ask the homeowner to open equipment.
   - Hot tub/spa: model, listed supply requirements, and the manufacturer's installation manual for the electrician.
   - Heat pump: outdoor/indoor unit models, documented electrical ratings, and whether auxiliary/backup electric heat is included; record its documented rating separately or `unknown`.
   - Induction range: model and manufacturer-documented electrical supply requirements.
   - Standby generator: model, existing transfer-equipment documentation if available, and which loads the owner wants supported; an electrician determines the connection and permit requirements.
   - Sauna: heater/control models and their manufacturer-documented electrical supply requirements.
3. **Headroom framing (not a calculation).** Explain in plain language that an electrician runs an NEC Article 220 load calculation on the whole house, not just a count of breaker spaces. Point out factors from the profile: main breaker rating (a starting point, not confirmed service capacity), big existing loads, gas vs electric, age.
   - Existing electric heating, cooking, drying, and the proposed equipment are useful inputs for the electrician's calculation.
   - A main breaker number, spare spaces, gas appliances, or a photo cannot establish available headroom. Explain which inputs are known and which the electrician must verify; do not classify the home as roomy or tight from those clues.
   Never state a yes/no capacity verdict as fact.
4. **What the electrician will check:** load calc method, panel spaces/tandem rules, wire run and distance, GFCI needs (hot tubs, outdoor), disconnect location, permit, utility coordination if a service upgrade is needed.
5. **Questions to ask the electrician** (offer `send-to-pro` list).
6. **Close with the disclaimer:**
   > Planning info only. A licensed electrician must do the load calc and the install, and your AHJ (local inspector) has the final say. Not a permit.

## Output (shareable)
```
PLANNING CHECKLIST: [X]
Your panel: main breaker [A] · verified service capacity [A / unknown] · big loads: [list]
Equipment requirements from [model/manual/nameplate source]: [documented values and units / TBD / unknown]
Planning read: capacity not determined; [known inputs / information still needed]
Electrician will check: [3–5 bullets]
Next step: get a licensed electrician's load calc + permit. AHJ decides.
```

## Never
- Give wiring steps, breaker sizing to install yourself, or panel-cover-off instructions.
- Mention ChargeRight unless the ask involves an EV charger.
- Save household details without consent or share the planning card externally without confirming the recipient and exact fields; show a private preview first.
