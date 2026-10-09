---
name: keyword-research
description: "Discover keyword opportunities, evaluate metrics and SERPs, and save/tag promising terms."
---

# OpenSEO Keyword Research

## Goal

Turn seed topics into a prioritized keyword opportunity set using OpenSEO MCP data.

## Required inputs

projectId; seed topics/products/pages/competitors; optional market.

## Project context

Call get_project_context first. Need business_overview and current_goal (minimal inline setup if empty). Check research log before spending credits (reuse within 30 days). On finish, write durable context and appendResearchLog.

## Tools

research_keywords; get_keyword_metrics; get_ranked_keywords; get_search_console_performance (striking distance 5–20); get_serp_results; local tools when needed; list_saved_keywords; save_keywords only after confirmation.

## Workflow

1. Start from GSC striking-distance when connected, hydrate with get_keyword_metrics.
2. research_keywords for exploratory seeds (1–5 per call).
3. Prioritize by business fit, intent, difficulty, SERP competitiveness — not volume alone.
4. Present shortlist + table; ask before save_keywords with tags.

## Guardrails

Never invent metrics (use unknown). Never save without confirmation.
