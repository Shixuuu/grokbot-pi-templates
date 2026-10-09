---
name: xrpl-primary-sources
description: "use this when answering XRPL questions or building lab receipts — prefer the XRPL Docs MCP (mcp.xrpledger.ai), then xrpl.org / UNL / explorers / XLS over random social posts; re-fetch live amendment data"
---

# XRPL primary sources

Use this whenever answering ledger questions, citing mechanics, or checking live protocol state. Prefer these over random Twitter threads. Re-fetch live data when numbers matter (amendment votes, fees, reserves). Never invent vote percentages.

## Docs MCP (prefer first for documentation)

When the **XRPL Docs** connector is connected (`user-xrpl-docs` / endpoint `https://mcp.xrpledger.ai`), use it **before** web browsing or guessing for protocol docs, tutorials, XLS drafts, and SDK API reference:

1. `search_documentation` — semantic search; optional `filters.source` (`xrpl.org`, `opensource.ripple.com`, `docs.xrplevm.org`, `XLS`/`standards`, `xrpl.js`/`js`, `xrpl-py`/`py`) and `doc_section` / `heading`.
2. `read_documentation` — full page (or paginated) from a returned path.
3. `read_sections` — pull named headings only when you do not need the whole page.

What it covers: xrpl.org, opensource.ripple.com, docs.xrplevm.org, XRPL-Standards, xrpl.js, xrpl-py.

What it does **not** do: wallet signing, account balances, live amendment vote counts, or explorer receipts — use explorers / RPC / UNL sources below for those.

Backup site-only MCP (narrower corpus): `https://xrpl.org/mcp`.
Human index of AI tooling: https://xrpl.org/resources/dev-tools/ai-tools

If the connector is missing or errors, fall back to the HTTP doc links below (WebFetch / browser), then explorers.

## Docs (source of truth — browse when MCP is offline)

- Concepts & references: https://xrpl.org/docs
- Amendments: https://xrpl.org/docs/concepts/networks-and-servers/amendments
- UNL / consensus: https://xrpl.org/docs/concepts/consensus-protocol/unl
- Known Amendments (human UI): https://xrpl.org/resources/known-amendments
- Transaction types & rippled API: https://xrpl.org/docs/references
- Ripple opensource / in-dev features: https://opensource.ripple.com
- XRPL EVM sidechain docs: https://docs.xrplevm.org

## Live amendment votes (bots)

Known Amendments is for humans. Scraping that page often returns nav chrome, not vote tables. For live counts:

1. Prefer an explorer amendments API (e.g. XRPSCAN) or rippled `feature` on a public / trusted RPC.
2. Map amendment IDs to names before citing.
3. Report count / threshold (or majority ledger) from that live source. Never invent percentages.
4. Link Known Amendments and/or the explorer for the owner to click through.

## UNL lists

- Foundation recommended UNL: https://unl.xrplf.org
- UNL data / PRs: https://github.com/XRPLF/unl (live operator list: `data/unl-raw.yaml`)
- Ripple published list (default also subscribed): https://vl.ripple.com

## Standards

- XLS process & drafts: https://xls.xrpl.org
- Prefer Docs MCP `source: XLS` / `standards` when searching proposals; verify status (Draft / Final) from the returned page.

## Explorers (receipts / account peeks)

- https://xrpscan.com
- https://bithomp.com
- Prefer explorer links + tx hashes in build receipts.

## Wallets & regular key

- Xaman / Joey for phone master signing
- Regular Key / AccountSet UI: https://xrpl.services (or equivalent the owner trusts)
- Never ask for master seeds; masked secret store for throwaway play keys only
- Account vs RegularKey: see the regular-key agent wallet skill (Payment Account = master; Destination ≠ master for proof pays)

## Markets / DEX UIs (coach + screenshots; phone often signs)

- First Ledger: https://firstledger.net
- Native DEX still settles on-ledger; UI is not the ledger

## RPC

- Prefer public cluster or a trusted node the owner names
- Do not assume a stock mainnet xrpld fits on the Grok Bot computer

## How to cite

1. Prefer Docs MCP paths / sections, then answer in plain XRPL speak.
2. Link the primary doc or explorer (human URL when possible, not only an MCP path).
3. If Twitter is the tip, verify against Docs MCP / xrpl.org / explorer / live RPC before treating it as fact.
