---
description: "Grok Bot routine: Weekly Core 30 blogs — Monday kickoff for one Core 30 / gap-analysis blog per active client that week."
argument-hint: "[extra context]"
---

Weekly Core 30 / gap-analysis blog kickoff (local Monday morning).

For EACH active client this week:
1. Pull the next unsigned Core 30 + gap topic from that client’s gap folder. De-dupe against the live site and prior laptop packs. No generator or AI-humanize tools.
2. Cadence default: ONE new article per active client per week (raise only if the user asks).
3. Brief the copywriter to draft humanized educational markdown (frontmatter: title, meta_description, slug, featured_image .webp, featured_image_fallback .jpg, image_alt).
4. After the user signs the draft, studio produces WebP primary + JPEG fallback featured images; package on the user’s laptop under Desktop/Clients/{Agency}/Clients/{Client}/Blogs/…
5. Notify the user of the exact folder path. Publish only after sign-off.

Skip clients whose sites are third-party published unless the user asked for a recommendations pack only.

Fires on:
- cron `0 10 * * 1`

Ask the importing user for:
- Timezone

${@:-}
