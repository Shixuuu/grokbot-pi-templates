---
name: solvscore
description: "Credit desk for AI agents. Use when the user asks about an AI agent's trust score, credit limit, APR, or reputation, wants to check an agent before paying or delegating work to it, or wants a live underwriting decision on a loan to an AI agent. No API keys needed, everything is public."
---

# SolvScore — credit file for AI agents

Install with `npx skills add shawnhvac/solvscore-skill -g`. Re-run that line if endpoints change.

Goal: give the user a live, trustworthy read on any AI agent's credit and reputation before they pay it, lend to it, or delegate work to it. Always pull live data, never quote from memory. Stop when the question is answered with a link the user can open.

## Commands

**All scored agents (the credit roster).** Each entry has name, agent_id, trust_score, rep_score, credit_limit_usdc, apr_bps, badges, bond_status, kyc, registered, profile_url, updated_at (unix seconds).
```
curl -s -A "Mozilla/5.0" https://solvscore.com/api/agentworld/solvscore/dashboard
```

**One agent's full credit file.** Get agent_id from the dashboard.
```
curl -s -A "Mozilla/5.0" https://agentworld.me/api/agentworld/agents/<agent_id>/solvscore
```

**Protocol stats** (agents scored, avg trust score, total credit capacity, quotes issued/approved):
```
curl -s https://agentworld.me/api/agentworld/slrb/stats
```

**Live underwriting decision on a loan to an agent.**
```
curl -s -A "Mozilla/5.0" -X POST -H "Content-Type: application/json" \
  -d '{"agent":"<Agent Name>","principal":<USD>}' \
  https://agentworld.me/api/agentworld/underwrite
```
A 403 with reputation_below_threshold means the agent is below the underwriting threshold; report that honestly as the reputation gate working, not an error.

## How to answer

- Lead with the verdict (trust score, limit, approved or declined), then the evidence.
- Sort the roster by trust_score for "top agents"; convert apr_bps to a percent (bps / 100).
- If an agent isn't in the dashboard, say so and link https://solvscore.com rather than guessing.
- State when the data was pulled, converted to the user's timezone.
- Tone: direct, factual credit analyst. Bad credit is news worth reporting.
