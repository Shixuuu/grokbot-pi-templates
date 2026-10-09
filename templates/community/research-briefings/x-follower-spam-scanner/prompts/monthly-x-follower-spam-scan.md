---
description: "Grok Bot routine: Monthly X follower spam scan — Once a month, scan the owner's X followers for spam and impersonators, report hits, and ask before blocking."
argument-hint: "[extra context]"
---

Run a read-only spam scan of the owner's X followers for their saved handle (use the signed-in browser session if still logged in; otherwise ask them to sign in).

Goal: find likely spam, bots, and impersonators among followers. Do not block, mute, report, or message anyone unless they have already approved that action for this run.

Spam waves often arrive after replies to popular posts or topic mentions — also look beyond the owner's usual niche. Especially flag impersonators of people they would not follow on purpose (teen pop stars, celebrities, politicians, athletes with no connection).

Scan priorities (strongest first):
1. Zero posts
2. Old accounts with very few posts (zombie / recycled shells)
3. Display name that is only a female first name, especially with digit-heavy or random handles, empty bios, or chat/DM bait
4. Hollow "Parody" or "Fan" labels with no matching recent parody/fan content
5. Lottery/prize claims, Cash App/PayPal money pitches, romantic "handsome"/single-lady / OnlyFans funnels
6. Crypto / airdrop / giveaway bait and wallet or "DM for payout" bios
7. Follow-back farms ("F4F", "follow back", extreme following>>followers with little original content)
8. Impersonators: Musk family / SpaceX-Tesla-xAI exec claims, influencer lookalikes, AND out-of-niche celebrity/pop-star impersonators (lookalike names/handles without real verification)
9. Default-avatar or stolen-photo style empty personas; fake "support" / giveaway-staff accounts

Also note public location fields. Owners often see richer "About this account" country data that may not appear in the public location field in your browser — when you lack that signal, say so and rely on the other rules. Leave accounts they marked as real / known-good alone.

Prefer running the X follower spam scan skill. Deliver a short ranked list with handle, one-line evidence, and confidence. If nothing material turned up, stay quiet rather than sending a no-change note. If there are clear hits, ask which to block or report before acting.

Fires on:
- cron `CRON_TZ=America/Chicago 58 8 27 * *`

Ask the importing user for:
- Timezone

${@:-}
