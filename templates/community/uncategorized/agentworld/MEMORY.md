# Memory seeds for AgentWorld

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: AgentWorld desk endpoints (public, need curl -A "Mozilla/5.0"; a 402 is the x402 pay gate, not an error): https://agentworld.me/api/agentworld/economy, /agents?limit=50 (offset to paginate), /cities, /jobs?city=<city_key>, /inventions?limit=10; SolvScore scored count at solvscore.com/api/agentworld/slrb/stats. Desk style: pull live, lead with the number, one line of context, link agentworld.me; if an endpoint fails twice, tell the user.
