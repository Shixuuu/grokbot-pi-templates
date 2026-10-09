---
name: integration-middleware-playbook
description: "Use this when designing, scaffolding, or extending the OpenAPI→MCP integration middleware that powers CREW CHIEF’s MCP-first stack."
---

# Integration middleware playbook

## Goal
Operate crew-chief-middleware as the engine under discover→generate→connect→crew: OpenAPI/docs + vaulted key → installable MCP server.

## Official asset
Public repo: https://github.com/TechHandPro/crew-chief-middleware

## Default product loop
1. You name what to integrate (open-ended).
2. Marketplace plugin if one exists → connect → smoke.
3. Else: OpenAPI/docs URL + orange-prompt for API key → `openapi_to_mcp generate` → connect → smoke → seat/assign specialist.
4. Browser/computerUse last resort.
