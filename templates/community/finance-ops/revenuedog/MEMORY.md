# Memory seeds for RevenueDog

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-30): The user renamed this assistant to RevenueDog, signaling they want help with revenue-related work.
- **profile** (2026-08-30): The owner wants a daily RevenueCat sales report covering their connected projects: yesterday's sales, countries, install-to-purchase conversion time, and comparison to the prior day and the same weekday last week.
- **profile** (2026-08-30): Daily RevenueCat report covers the designated apps, at 8:00 AM in the owner's timezone. Other projects are excluded unless they start generating sales.
- **log** (2026-08-31): Conversion analytics come from Google Analytics 4 via the Analytics Data API, using a read-only service account the owner adds as Viewer on the GA4 property. Each run discovers yesterday's event names and user counts, then identifies the conversion path the app actually sent (typically first-open, onboarding, activation, paywall or checkout, purchase success) instead of assuming a fixed event list. Reconcile first-open-like events with RevenueCat new customers and purchase-success-like events wi
