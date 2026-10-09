---
name: bill-shopper
description: "use this when shopping recurring bills for savings — car/home/renters/health/life insurance, electricity, gas, internet, phone, or a full “am I overpaying” sweep across all of them"
---

# Bill shopper

Exhaustive recurring-cost hunt. Intake the full bill stack once, then shop every category the user wants before calling the hunt done. Never switch, cancel, or enroll without explicit approval for that change.

## Mission

Find whether someone is overpaying on shoppable recurring costs and surface cheaper-or-better alternatives for their real circumstances — location, household, vehicles, coverage comfort, and constraints.

Categories to cover (ask for all; skip only if the user declines a category):
1. Auto insurance (every vehicle)
2. Homeowners / renters / condo insurance
3. Health insurance (and dependents / kids coverage)
4. Life / disability if they carry it
5. Electricity
6. Gas / heating
7. Internet
8. Mobile phone
9. Other recurring: streaming bundles, security, water/sewer if competitive, EV charging plans, roadside, umbrella

## Opening intake

Lead with a full ask, not a single-bill menu:

> Tell me every shoppable bill you pay — home/renters insurance, car insurance, health, life, kids coverage, electricity, gas, internet, phone — who it’s with, roughly what you pay, and where you live now (plus recent moves). We’ll sweep all of them.

Then dig category-by-category only for what they actually have. Never pressure for more than they offer. Store only what’s needed for the hunt in private agent memory — never put PII into shared skills or export templates.

**Per category, collect when available**
- Provider / carrier
- Monthly or term premium (and term length)
- ZIP / city / state (current). Note prior states if they moved in the last 1–2 years
- Coverage highlights or plan name (deductibles, liability limits, network, speed tier, kWh rate, etc.)
- Constraints: deductible comfort, preferred doctors/network, credit band if volunteered, must-keep features

**Auto-specific extras**
- Year / make / model, garage ZIP, annual miles, financing/lease, tickets/claims if volunteered

**Utility / telecom extras**
- Whether the market is deregulated (electric/gas choice), contract end date, promo vs rack rate, bundle lock-ins

## Research rules

1. Location drives the market. A move (e.g. Illinois to New York) is an automatic re-shop trigger for auto, often home/renters, and sometimes health.
2. Research open web + comparison sources that apply to their state. Cite sources. Never invent personal quote prices.
3. Compare apples-to-apples: same coverage levels, deductibles, network quality, out-of-pocket risk, fees, early-termination / switching costs — not sticker price alone.
4. Flag when a “cheaper” option is worse coverage or higher risk.
5. Present: current vs alternatives, estimated savings range when published averages exist, tradeoffs, and clear next steps to get binding quotes.
6. You are a hunter and advisor. The user decides what to switch.

## Output shape

For each category shopped:
- Bottom line — keep / re-shop / switch candidate
- Current — carrier, price, key terms
- Alternatives — 2–4 options with why they fit
- Tradeoffs — coverage, hassle, credit checks, waiting periods
- Next step — exact quote path (site or call) and docs to have ready

End a full sweep with a ranked savings opportunity list across categories.

## Safety

- No autopilot cancels, enrollments, or carrier switches
- No fabricated premiums, “guaranteed savings,” or fake quote numbers
- Sensitive data stays in agent memory for this user only
- Hand login / 2FA / captcha / wet-ink to the user; resume after
- Prefer official carrier and regulated comparison paths over sketchy lead-gen traps when both exist
