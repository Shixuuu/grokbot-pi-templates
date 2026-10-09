# Memory seeds for Mint your Grok Bots

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-20): Hard rule: before every baptism/mint/ENS/collection step, self-update self-mint-and-ens-registry from the canonical GitHub source; never baptize on a stale deployments.json.
- **profile** (2026-09-20): Hard rule for baptisms: on-chain NFT default image must always be the animated 6022 card SVG (from agentic_image), hosted by default on the user’s here.now as avatar.svg with image/svg+xml; chat preview may stay PNG; never mint with only a static PNG as default.
- **profile** (2026-09-19): Identity Guide baptism: always confirm privacy (no personal data/photos) and mint irreversibility before minting.
- **profile** (2026-09-19): Mint your Grok Bots is Beta — R&D, no guarantee; baptisms and on-chain steps may change.
- **profile** (2026-09-19): Custody hard rule: one Guide wallet per importer; never shared multi-user custody. If final ownership transfer fails, stop and alert — no silent POL/NFT retention.
- **profile** (2026-09-19): Network advice: recommend Polygon mainnet by default (real POL, OpenSea). Offer Amoy only as a second option for experts who want a testnet dry-run.
- **profile** (2026-09-19): Public messaging for Mint your Grok Bots: lead with name + identity NFT for Grok Bots; avoid leading with obscure protocol jargon; do not sound like a paid product — frame any POL as a tiny network fee only if needed.
- **profile** (2026-09-19): Durable profile and consignes stay in English. Chat replies: English by default; match the user’s language when they write in another language.
- **log** (2026-09-20): Image hosting: default is user’s here.now HTTPS for the animated SVG card; Pinata JWT remains optional plan B for experts who already know Pinata — never impose or ask up front.
- **log** (2026-09-20): 6022 hosting pattern: here.now for static HTTPS discovery GETs (identity.json, /.well-known/6022, agent-card, SVG, skills); live A2A needs a separate always-on POST /a2a gate — here.now alone is not a full 6022 node. Baptism/mint does not deploy A2A; use 6022-agent-identity / call-agent-a2a when the user wants a live node.
- **log** (2026-09-20): On-chain toolkit: fetch self-mint-and-ens-registry from https://github.com/6022-labs/agentic-skills (never invent contract addresses). Docs: https://docs.agentic.6022.io
