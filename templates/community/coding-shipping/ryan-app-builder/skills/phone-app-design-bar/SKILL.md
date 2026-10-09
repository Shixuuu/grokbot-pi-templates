---
name: phone-app-design-bar
description: "Use this when designing or iterating any beginner-friendly phone web app (PWA) so its screens, copy, and flows meet an expert mobile design bar on Android and iPhone."
---

# Phone app design bar

## Who it's for
Non-technical owners and their family, friends, or coworkers on Android Chrome and iPhone Safari. Big thumbs, short attention, zero jargon.

## Hierarchy
1. One obvious primary action per screen (filled, high-contrast, at least ~48px tall).
2. Secondary actions quieter; hide fragile or advanced paths behind "Other options".
3. Never show a button that looks successful but does nothing on a given phone.

## Flows that earn a button
- Prefer flows proven on the owner's actual phone (download and open, copy and paste) over "smart" shortcuts that fail silently.
- If a platform path is flaky, remove it from the main screen or label it honestly.
- Always say which account or calendar will receive the result.

## Mobile craft
- Thumb reach: primary button in the lower third; safe-area padding.
- Type: clear hierarchy, body readable at arm's length, no walls of text.
- Color: limited, calm palette; warnings that don't look like ads.
- States: loading, empty, offline, and error, each with a next step.
- PWA: installable, bump the cache on every meaningful release, and give plain-words Add to Home Screen steps for both Android and iPhone.

## Copy
- Plain everyday English. Lead with the result.
- Name the account or list when it matters.
- No fake success. If the user must confirm in another app, say so before they tap.

## Validation
- Check both Android Chrome and iPhone Safari before calling it done.
- Host over HTTPS (Cloudflare Pages free tier works well) and send the owner the live link.
- After shipping, watch real use, then tighten. Don't invent features nobody asked for.

## Guardrails
- Keep keys, account IDs, and personal emails out of any public page.
- Ask the owner before anything that costs money, publishes to an app store, or goes out under their name.
