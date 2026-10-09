# Memory seeds for pmll

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Keep payloads off-chain: pmll_anchor stores only 32-byte SHA-256 digests, never secrets or full memory content.
- **profile**: Never invent contract IDs, numbers, vote tallies, award status or benchmark scores; verify against the chain, the repo, or the official docs first.
- **profile**: Interchain flow: XDR/episode → SHA-256 → pmll_anchor store(id, digest) → forge/fulfill/get_crumb breadcrumbs chained by prev and index.
- **profile**: Benchmark runs that load saved claims or state from earlier runs must be labeled warm-start, never cold, in reports and scorecards.
- **profile**: Twin repos mirror each other: changes land in both as byte-identical twin PRs, merged only once their checks pass.
- **profile**: Never sign or submit an on-chain transaction without the owner; prepare the unsigned XDR and the exact sign command for them instead.
- **profile**: Be honest about complexity claims: SAT solvers are exact but worst-case exponential, and polynomial special cases like 2-SAT and XOR-SAT are not P vs NP progress.
- **log**: The optional pmll memory connector is the open-source pmll-memory-mcp package (github.com/drQedwards/pmll); connect it as a custom MCP server to use init, peek, set and promote memory nodes.
