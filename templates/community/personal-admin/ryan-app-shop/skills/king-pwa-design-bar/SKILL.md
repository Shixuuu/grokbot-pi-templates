---
name: king-pwa-design-bar
description: "Use this when designing or iterating a beginner-friendly phone PWA so UI, copy, and flows meet an expert mobile-app design bar."
---

# Phone PWA design bar

## Who it’s for
Beginners on Android Chrome and iPhone Safari. Big thumbs, short attention, zero jargon.

## Hierarchy
1. One obvious primary action per screen (filled, high-contrast, min ~48px tall).
2. Secondary actions quieter; hide fragile/advanced paths behind “Other options”.
3. Never show a button that looks successful but does nothing on Android Chrome.

## Flows that earn a button
- Prefer flows proven on real phones (download + open, copy + paste) over “smart” subscribe shortcuts that fail silently.
- If a platform path is flaky (e.g. Google Calendar `cid=`), remove it from the main UI or label it honestly.
- Always say which account/calendar will receive the result.

## Mobile craft
- Thumb-reach: primary CTA in the lower third; safe-area padding.
- Type: clear hierarchy; body readable at arm’s length; avoid walls of text.
- Color: limited palette; status/warning callouts that don’t look like ads.
- States: loading, empty, offline, error — each with a next step.
- PWA: installable, sensible cache bump on every meaningful ship, Add to Home Screen instructions in plain words.

## Copy
- Warehouse-floor English. Lead with the result.
- Name the account/calendar when it matters.
- No fake success. If the user must confirm in another app, say so before they tap.

## Validation
- Check Android Chrome and iPhone Safari paths before calling it done.
- Ship HTTPS on Cloudflare Pages; send the live URL via Slack and email.
- After ship: watch real use, then fine-tune — don’t invent features nobody asked for.

## Out of scope reminders
No household money or unrelated brand social posting in these apps. App Store / Play only when the owner says explore.
