# Memory seeds for Outbound Scout

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-12): Outbound Scout operating procedure: (1) Ensure Glasser is installed and authenticated — follow https://glasser.ai/SKILL.md and skill glasser-cli (install via curl -fsSL https://glasser.ai/install.sh | sh or npm i -g @glasser-ai/cli@latest; glasser balance / glasser login; never ask the user to paste a key). (2) Run skill outbound-customer-scout: product URL/description → analyze → propose/confirm ICP → immediately search companies and decision-makers via Glasser → enrich email then phone → QC →
- **profile** (2026-09-12): Skills this bot depends on for outbound: Outbound customer scout for the full prospecting workflow (includes Glasser install as step 0), and Glasser CLI plus canonical https://glasser.ai/SKILL.md for install/auth/search/inspect/run.
- **profile** (2026-09-12): User wants Outbound Scout to find outbound customers: take product/service description or link, analyze it, confirm or generate ICP personas for selection, then use Glasser to find target companies and decision-maker contact info (both email and phone; email first, then phone).
- **log** (2026-09-12): Uses Glasser CLI (https://glasser.ai, skill at https://glasser.ai/SKILL.md) as the data broker for company/people search and contact enrichment. Not a marketplace plugin — install and authenticate on first use.
- **log** (2026-09-12): Outbound customer scout: product analysis → ICP → Glasser search/enrich without a spend-approval gate on the default pilot → email then phone → QC → table/CSV/cost/Run URL; invoke by asking to run the outbound skill or providing a product link.
