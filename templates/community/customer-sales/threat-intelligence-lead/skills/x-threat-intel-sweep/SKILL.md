---
name: x-threat-intel-sweep
description: "Use this when pulling IOCs or threat intel about a topic (e.g. attacks on agentic AI stacks) from X posts and loading them into OpenCTI as a sourced report."
---

# X threat intel sweep into OpenCTI

Goal: turn researcher and vendor posts on X into clean, sourced, deduplicated intel in OpenCTI, without inventing anything.

## 1. Search X (read-only, credit-aware)
- Use the X connector; look up its tool schemas each run. Search and look up posts only. Never post, DM, like, bookmark, or create webhooks or subscriptions.
- Searches cost the owner API credits. Check the usage/credits tool before and after, keep it to about 10 to 20 targeted queries for a first pull (8 to 12 for a daily run), and size max_results sensibly.
- Build queries from the topic plus IOC words: IOC, sha256, hash, C2, domain, "malicious package", npm, pypi, MCP. Favor security researchers, vendors, and DFIR accounts.
- Example topic set for agentic AI threats: malicious or typosquatted MCP servers; poisoned npm/PyPI packages aimed at AI agents and AI coding tools; compromised AI extensions and plugins; LLMjacking and stolen AI API keys; attacks on exposed AI servers (Langflow, n8n, Ollama, Open WebUI, and similar); prompt-injection or tool-poisoning campaigns with real infrastructure; AI-themed malware lures (fake Claude/ChatGPT/Perplexity apps, ClickFix).
- Daily runs search from the previous run onward (Monday covers the weekend).

## 2. Extract only real IOCs
- Keep only values actually written in a post, or confirmed in a linked vendor writeup you fetched. This covers hashes, IPs, domains, URLs, package names and versions, file paths, emails, wallets, and CVEs.
- Refang defanged values (hxxp, [.]). Drop benign domains (github.com, npmjs.com, vendor sites), well-known placeholder values, seized infrastructure, and speculation.
- Scope discipline: drop attackers who merely use AI rather than target AI stacks, and named threats with no indicators.
- Hosting that is only suspicious (an exposed AI service sharing a server with attack tools) gets tagged anomalous-activity, not malicious.
- For every IOC record the source post URL (https://x.com/<user>/status/<id>), author, date, and a one-line context note. Never guess a value.

## 3. Load into OpenCTI (GraphQL or pycti, admin token from `.env`)
- Author: an Organization identity such as "X (Twitter) OSINT".
- One Report per sweep: "<Topic> – X OSINT (<date>)", with a summary, published date, TLP:CLEAR, and topic labels (e.g. agentic-ai, mcp, supply-chain, x-osint).
- Indicators get a STIX pattern, `valid_from` set to the post date, labels, an external reference to the X post (plus the vendor URL when it corroborates), and confidence of 55–65 for a single post or 75–80 when a vendor confirms. Add observables where they fit.
- Link related entities when the source supports it: Malware, Campaign, Intrusion Set, Vulnerability (reuse CVEs already loaded by the CISA KEV feed), and existing MITRE Attack Patterns (e.g. T1195.002, T1190, T1204).
- Search before you create. If an indicator already exists, add the new source reference to it instead of making a duplicate. Keep the loader script and its data file re-runnable without duplicates.
- Put everything in the report's object refs.

## 4. Preview and hand off
- Export the report as a STIX 2.1 bundle and the indicators as a CSV (type, value, confidence, source, OpenCTI id) into `exports/`, named with the date.
- Screenshot the report overview, the knowledge graph, and the indicator list filtered to the report with the headless screenshot tool. Check each image before sending.
- Tell the owner the count, the notable threats grouped plainly, the report link, and honest caveats: thin or concentrated sourcing, what was left out and why, and the credits used.
