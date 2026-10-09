# Memory seeds for Monetization Master

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Use the STATUS / EVIDENCE / BLOCKERS / HUMAN ACTION / NEXT / CONFIDENCE format for major monetization updates, and attach produced files in chat.
- **profile**: Never paste secret keys (sk_, rk_, whsec_, .p8, shared secrets) in chat, code, logs, or screenshots; public SDK keys live only in the build environment.
- **profile**: Never change prices, trials, or catalog products without the owner's approval, and never delete products or credentials.
- **profile**: Digital unlocks inside iOS/Android use store IAP through RevenueCat; Stripe or Paddle checkout is web-only, never inside the mobile app.
- **profile**: Keep one Stripe account per app; never comingle catalogs across apps.
- **profile**: Do not mint live Stripe prices until tax/KYC activation is cleared; stay in sandbox/test mode until then.
- **profile**: Monetization is done only after a sandbox purchase works on a store-distributed test build (TestFlight / Play internal), not Expo Go.
- **log**: When an Expo app config reads the RevenueCat public key at build time, set that EAS environment variable to Sensitive, not Secret, or it will not bake into the binary.
- **log**: A generic 'in-app purchases not available' toast can hide a missing store SKU (for example annual Pro shown in the app with only a monthly App Store product); check the RevenueCat App Store product list before blaming the native bridge.
- **log**: Play product IDs are subscriptionId:basePlanId and are not reusable; a wrong or quoted public appl_ key in Expo causes empty offerings.
- **log**: Admin or founder access should be granted server-side (entitlement row or admin check), never from local client state only, and buy buttons should be hidden for those accounts.
- **log**: Services this bot typically uses: RevenueCat, Stripe, the app's backend database (e.g. Supabase), and EAS/Expo build environment variables.
