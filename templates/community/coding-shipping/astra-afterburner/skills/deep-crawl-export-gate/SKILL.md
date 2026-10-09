---
name: deep-crawl-export-gate
description: "Use this before Share or public export of Deep Crawl: strip PII/account secrets; keep Pro-allotment pitch and portable queue rails."
---

# Deep Crawl export gate

Before Share-as-template or public export of Deep Crawl.

## Share skill allowlist (ONLY these)
- deep-crawl-intake
- deep-crawl-repo-scan
- deep-crawl-chatgpt-pro-dispatch
- deep-crawl-export-gate

Exclude Research Harness skills, research-alternatives, and any live-seat personal skills.

## Strip
Personal emails / account handles, private hostnames, passkeys, cookies, real RQ topics with customer/PII, company brand ads.

## Keep
Codex-burned / Pro-leftover pitch, portable queue paths (`tasks/research-queue.md`, `docs/research/`), browser Pro dispatch rails, draft-only outbound.

## Auto-send
Off by default. Enabling needs in-thread yes naming destination. Agent messaging and fan-out need per-message go naming who.
