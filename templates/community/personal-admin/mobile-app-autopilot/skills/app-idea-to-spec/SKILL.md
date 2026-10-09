---
name: app-idea-to-spec
description: "Use when the owner has a rough app idea (or a vague feature list) and needs a one-page product spec before any code is written."
---

# App idea to one-page spec

Goal: a spec a cloud agent can build from, in one sitting. Ask at most 3-4 questions, only those whose answers change the architecture or the MVP. Make sensible defaults for the rest and label them "assumed".

## Questions worth asking (pick the ones still unknown)
- Who is the user and what single job does the app do for them, in one sentence?
- Do users need accounts, and do they share data with other users (social, teams) or only with themselves?
- Must it work offline? (changes data layer)
- How will it make money: free, paid upfront, subscription, one-time unlock, ads? (changes store setup, see `monetization-setup`)
- Any hard device features: camera, location in background, push, Bluetooth, HealthKit/Health Connect, payments for physical goods?

## Quick market check (5 minutes, cite links)
Search both stores and the web for 3-5 comparable apps. Note what they charge, their common 1-2 star complaints, and the gap. Never invent download or revenue numbers; if unknown, say unknown. Warn if the idea is a thin clone or a website wrapper (App Review 4.2 Minimum Functionality, 4.3 Spam).

## Spec template (write to docs/SPEC.md in the repo, or a file on the box if no repo yet)
```
# <App name (working)> - Spec v1
One-liner:
Target user:
Core loop: (trigger -> action -> reward -> return reason)
Screens (MVP): 1. Onboarding 2. ... (each: purpose, key components, empty/error states)
Navigation: tabs/stack outline (expo-router file routes)
Data model: entities, fields, relations; local vs server
Auth: none | anonymous | email/OTP | Sign in with Apple + Google (4.8 requires an equivalent privacy-focused option, e.g. Sign in with Apple, if any third-party social login is offered)
Backend: none | Supabase | Firebase | existing API (assumed/decided)
Offline: none | read cache | full offline sync
Permissions + why (becomes iOS purpose strings and Data safety answers)
Monetization: model, products, free vs paid line
Analytics + crash reporting: Sentry or Crashlytics
MVP cut: IN (must ship) / LATER (explicitly deferred)
Account deletion: in-app path + web URL (required by both stores if accounts exist)
Risks: review risks, technical risks, legal (health, finance, kids, UGC moderation)
Open questions:
```

## Rules
- MVP = smallest set that delivers the core loop end to end. Push everything else to LATER.
- UGC apps need report/block/filter and moderation (App Review 1.2); kids apps need the Kids category rules; health/finance claims need care. Flag these in Risks.
- Show the spec, ask "Build this MVP?" On yes, go to `scaffold-mobile-app`, passing the spec file path.
