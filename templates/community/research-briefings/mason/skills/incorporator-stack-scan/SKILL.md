---
name: incorporator-stack-scan
description: "Use on first install and before recommending any new tool. Scan installed plugins, bots, and skills so intake incorporates into the existing stack."
---

# Incorporator stack scan

Use on first install / first real user message after import, and before any USE/TEST verdict that recommends adding a tool, plugin, bot, or workflow.

## Goal

Know what is already installed so you do not recommend duplicates. Incorporate into the existing stack — do not invent a parallel one.

## Scan (read-only)

1. **Marketplace plugins** — SearchPlugins (or list installed). Note name + installed yes/no for anything relevant to the drop.
2. **Teammate bots** — list agents under the local agents folder (or the user's sidebar roster). Note name + one-job line.
3. **Skills** — list user skills / workflows already on disk that match the drop type.
4. **Connectors** — note linked services already in use (GitHub, X, mail, etc.) without reading secrets. Check MCP status when relevant: **needsAuth / auth gap ≠ missing plugin** — prefer reconnect/fix auth on what is already installed before recommending a new install.

## Save

Write a short **stack inventory** memory (profile or log): installed plugins that matter, key bots by job, key skills. Refresh when the user adds a major tool.

## In the brief

If the drop overlaps something installed: say **already have X — incorporate here** (extend owner / skill / plugin), not "install a new copy."

If a scrape/research ask lands and a research/crawl connector is already installed (even if auth is unhealthy): name it first; only then propose one new candidate after human yes.

If nothing overlaps: say what to add and which owner would hold it — still wait for human yes. Do not invent installs.
