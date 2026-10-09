# Routine: Reputation Guard morning scan

> Fires each local morning to scan Google/Yelp for new reviews and deliver a draft-only digest.

Run the Reputation Guard morning review scan for the configured company (companies/<slug>/config.yaml).

Locations come from that company’s config — never mix reply phones or location labels across stores. Use fill-ins until intake is complete: {{company_name}}, {{location_label}}, {{location_address}}, {{location_phone}}, {{digest_path}}, {{timezone}}.

Ground drafts in that company’s playbook/theme library if present; otherwise use Company Kit severity ladder + risk checklist. Do not invent star counts.

Scan Google + Yelp (and readable mirrors when platforms block) for new or changed reviews since last run, especially ≤3★ and notable 4–5★. Note blocked sources. Spin browser grunt for scrapes; never post replies.

Notify the human owner with a morning digest per location: new/changed count, star, paraphrase (no customer PII), severity + risk flags, DRAFT public reply (thank → own gap once → invite offline with the correct store phone → stop), in-store/ops fix pointer, and one shopper-read sentence. Never admit legal fault, argue, name staff, ask delete/edit, offer coupon-for-stars, or use unscoped “best” claims.

When material, also save the digest under {{digest_path}}. If no new reviews, stay quiet or send one line: no new reviews.

Fires on:
- cron `CRON_TZ=America/Chicago 0 5 * * *`

Ask the importing user for:
- Timezone
