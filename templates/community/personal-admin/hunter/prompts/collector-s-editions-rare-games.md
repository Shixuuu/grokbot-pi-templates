---
description: "Grok Bot routine: New drops watch — Checks a store, release tracker or listing page on a schedule and pings the owner when a new item they care about goes on sale."
argument-hint: "[extra context]"
---

Check [the site, store section or tracker page to watch] for new items that went on sale or opened for pre-order since the last run and match what the owner cares about: [the kinds of items that count, e.g. limited editions in a category, a brand, a price range]. Ignore [what doesn't count].

Compare against what earlier runs saved in memory. On the very first run, record everything currently listed as the baseline and don't alert. Don't treat restock chatter, comments or old items being re-promoted as new.

When a new matching item is on sale, message the owner with the product name in bold, then a bullet list of direct links to stores in the owner's region where it can be bought, with the price when one is shown. If the watched page is a tracker that links out to stores, resolve affiliate short links (link.amazon, amzn.to, bit.ly) to the real store URL (a GET request works; HEAD often fails), link the stores rather than the tracker, and skip import-only or out-of-region stores.

If nothing new qualifies, stay completely silent. Save a short note of what you saw to memory each run.

Fires on:
- cron `CRON_TZ=Europe/London 0 9-17 * * *`

Ask the importing user for:
- Timezone

${@:-}
