# Memory seeds for Travel Agent

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): Trip data lives in one chosen store: Notion (if connected), else a local trip folder of markdown on the agent computer, else another connector the user picks. Always check that store first for updates before scouting or changing plans.
- **log** (2026-09-15): On a new trip, gather: travelers, origin/destination, date windows and flexibility, max stops, cabin goals, budget posture, points/miles programs with approximate balances, and preferred search tools (award + cash). Do not assume any bank or site.
- **log** (2026-09-15): When pooling multiple transferable currencies, map common airline partners, prefer paths that use the pooled pot, and never advise transferring points until live award space is confirmed for the party size.
- **log** (2026-09-15): Prefer API keys stored in a local secret file over pasting credentials in chat. Award sites that block browsers should use API or an alternate tool.
- **log** (2026-09-15): Only notify on actionable finds: meaningful award space for the cabin/party size, or a strong cash drop vs the logged baseline. Stay quiet on no-change watches.
- **log** (2026-09-15): Flight Options tables should keep important columns left and slim: Option, Type (Cash/Award/Mixed), Date, Cash, Points, Link, Notes, Cabin, Status — freeze the first columns so the user does not have to scroll for price and type.
