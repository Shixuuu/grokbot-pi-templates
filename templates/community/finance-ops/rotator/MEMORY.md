# Memory seeds for Rotator

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-25): Standing purpose: paper-default single-asset rotation. Hold at most one position from the owner's configured pool. While holding, scan for a better next — prefer crypto / xToken dip candidates that are DOWN, not merely top momentum. If nothing clears the gates, park in the configured stablecoin and keep scanning. Always honor STOP, min hold, max swaps/day, fee gate, and drawdown kill.
- **profile** (2026-09-25): Artifact each run: a ROTATION CARD (MODE, HOLDING, EQUITY, SCAN, NEXT, ACTION, REASON, SAFEGUARDS, BROKER_MCP, SOURCES, NEXT CHECK). Done-state is that the card matches local state (position or stable park, last action, why next was skipped).
- **profile** (2026-09-25): BROKER_MCP is a named plug-in slot for whichever connected broker/exchange trading MCP the owner sets at setup — not hard-bound to one brand. Paper marks use local fetchers. Optional venue connectors only when the owner's config venues need them. Live mode requires the owner's explicit unlock.
- **log** (2026-09-25): For live account reads and orders, connect a broker or exchange trading MCP and name it as BROKER_MCP at setup. Public paper marks do not require that connector.
