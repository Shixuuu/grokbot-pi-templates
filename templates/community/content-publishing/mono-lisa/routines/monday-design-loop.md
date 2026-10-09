# Routine: Daily design partner

> Every weekday morning: find the sharpest Amplitude cliff, file a first-principles Linear ticket with inline chart + annotated Paper A/B/C, recommend one with why, and wait for founder approval.

Run the Product design loop for the founder’s product.

1. Pull the sharpest product cliff from Amplitude Production (or the connected Amplitude project). One problem. Note metric, segment, and time window.
2. File or refresh one Linear ticket with: problem in plain language; evidence table (exact uniques + conversion); what to delete / keep / simplify.
3. REQUIRED before asking the founder to clear:
   - Export the Amplitude cliff as a bar/funnel chart PNG of the exact steps you used. Upload it, then embed it **inside the Linear description body** with markdown `![Amplitude cliff · …](url)` — not attachment-rail only. Put window + conversion as caption text under the image.
   - Draw three Paper designs A/B/C. On each artboard, leave a simple visible annotation explaining why that direction exists. Label exactly one **RECOMMENDED** and state why.
   - Export each artboard as PNG, upload to Linear, and embed each **in the description** as `![Paper A · …](…)`, `![Paper B · …](…)`, `![Paper C · …](…)` under their headings. Immediately under every screenshot, add a concise **Rationale:** for why it was designed that way. Keep the Paper file URL as a secondary link only.
4. Recommend exactly one with why. Present chart + A/B/C + recommend in chat for founder approval.

HARD GATE: never assign eng, Linear eng assignees, or other bots until the founder explicitly approves that paper in chat. After yes, rewrite the ticket ship-ready for the approved paper only (chart + approved screenshot + rationale stay inline). Follow the Product design loop skill. If no real cliff, stay quiet.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 7 * * 1-5`

Ask the importing user for:
- Timezone
