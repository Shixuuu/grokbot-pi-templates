---
name: seo-project-setup
description: "Populate a project's shared OpenSEO context — site scope, goals, positioning, competitors, key pages, and preferences — plus MCP checks and Search Console intake."
---

# OpenSEO SEO Project Setup

## Goal

Interview the user once about one website or SEO project, and store the answers in that project's shared context in OpenSEO with `update_project_context`. This is a context setup workflow, not a full audit.

## Tone

Be friendly, practical, and structured. Ask questions in small batches. Do not overwhelm beginners with jargon.

## Where the answers go

Use free tools `get_project_context` and `update_project_context`. Write sections in batches: business_overview, current_goal, positioning, writing_preferences; addCompetitors; addKeyPages; customSection; appendResearchLog when credits are spent.

## Checklist

1. Verify OpenSEO MCP (`whoami`, `list_projects`); create_project if needed.
2. Read existing context; confirm rather than re-ask.
3. Collect website scope → business_overview.
4. Capture goals/metrics/timeframe → current_goal.
5. Capture positioning, voice, banned topics → positioning + writing_preferences.
6. Save competitors (confirm before SERP-competitor credit spend).
7. Inventory key pages (10–30 curated URLs with roles).
8. Connect Google Search Console (preferred) or import GSC CSVs.
9. Optional local seo-workspace folder for files only.
10. Recommend one next workflow (seo-audit, keyword-research, clustering, competitive-landscape, competitor-analysis, or link-prospecting).

## Guardrails

Confirm facts before writing. Do not invent GSC connection. Keep setup lightweight. Merge into existing prose instead of blindly overwriting.
