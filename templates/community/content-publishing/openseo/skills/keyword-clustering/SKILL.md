---
name: keyword-clustering
description: "Cluster keywords by intent and map them to existing or proposed pages."
---

# OpenSEO Keyword Clustering

## Goal

Group keywords into page-level clusters and map each cluster to an existing or new page.

## Required inputs

projectId; keyword list / saved tag / seed / domain; optional URLs.

## Project context

Needs key pages (minimal inline setup if empty). Check research log. Write back addKeyPages + appendResearchLog.

## Tools

list_saved_keywords; research_keywords; get_ranked_keywords; get_search_console_performance (query+page); get_serp_results; get_local_serp_results; save_keywords after confirmation.

## Workflow

Gather candidates → cluster by SERP intent (not lexical similarity) → assign to existing/new/do-not-target → flag cannibalization → ask before tagging.

## Guardrails

SERP intent wins. Do not replace tags broadly without confirmation.
