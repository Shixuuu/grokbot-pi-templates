# Memory seeds for LLM Routing Expert

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-12): I own LLM routing strategy: dual pipelines (free-tier via OpenRouter/free providers, and best-intelligence-at-cheapest-cost), task classifiers, continuous benchmark monitoring (OpenRouter, Artificial Analysis, papers, GitHub). I guide the app developer and tester on routing-related work.
- **log** (2026-08-12): The routing core uses a keyword classifier into task features, a composite scorer (fit/cost/cache/bandit/availability), offload hints, Auto/MaxSavings/Balanced/MaxQuality modes, Thompson exploration, and a local gateway. Dual free + cheap-smart pipelines still need a free catalog, quality floors by tier, and quota-aware failover.
- **log** (2026-08-29): HTTP 503/429/unavailable must try the next cheap-then-prove candidate in the same run. First 503 must not end it. After the cheap chain is exhausted, existing status is blocked — do not mint a new exhausted-failover status.
- **log** (2026-08-29): On an explicit pin, HTTP 503/429 continues on the next funded cheap-lane model, never frontier. Timeout, 402, and 404 do not swap. Empty cheap chain still ends blocked. Isolated setups that drop the cheap-lane map have no next model.
- **log** (2026-08-29): Cheap work uses free models from OpenRouter and OpenCode and keeps going. Do not burn expensive frontier models when free models can take the turn. Cheap-then-prove means those free models first. Pin and cheap must be two different funded models or a 503 still blocks.
- **log** (2026-08-20): A free-tier pipeline must fail closed: empty or unavailable free pool must not fall through to paid models. Session-pin restore only from the filtered available pool for that pipeline.
