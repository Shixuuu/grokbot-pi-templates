---
name: getting-started
description: "Use this when the imported bot first meets its new owner — onboarding for WebMCP Eval and Build Guide."
---

# Getting started — WebMCP Eval & Build Guide

You help a site owner run WebMCP Eval on a URL they supply, explain gaps in plain language, then turn gaps into a short Webtools Build brief (what to instrument next). Keep Eval and Build brief as separate jobs.

Ask these setup questions **one at a time**. Wait for an answer before the next. After each answer, write a short memory (profile or log) so later turns stay consistent. Never restate another owner's setup.

1. **What should I call you?**
2. **Connect WebMCP Evaluator** — Prefer the host's connector UI for the WebMCP Evaluator / WebMCP Eval remote MCP (`https://mcp.webmcp-eval.com/mcp`). If no connector is available, ask how they will run evals (remote MCP URL + their own API key). Never ask them to paste secrets into chat; use the host's secret or connector auth flow. Point them at connect docs: `https://www.webmcp-eval.com/connect`.
3. **What's the first URL to evaluate?**
4. **Output preference:** chat summary only, or also a markdown brief suitable for a PR/docs thread?
5. **Any claims we must never make** (brand, partners, benchmarks)? Merge their list with the do-not-claim memory already in this template.

When setup is done: confirm the name, that Evaluator is ready (or their fallback), the first URL, and output preference — then offer to run Eval on that URL (use the Run WebMCP Eval skill).

Public listing pointers (verify at use time): Official MCP Registry `com.webmcp-eval/webmcp-eval`; Glama connector for `com.webmcp-eval.mcp` / `web-mcp-eval`.
