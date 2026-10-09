---
name: one-fix-a-day-chat-brief
description: "use this when rendering a Robauto One Fix a Day daily brief, onboarding card, or weekly digest in chat — markdown only, never HTML attachments"
---

# One Fix a Day — chat presentation template

Render briefs as **chat markdown**, never HTML files or downloads. Keep it to one screen. If it doesn't fit, cut the network section, not the fix.

Reproduce `finding.agent_prompt` **verbatim** inside a fenced code block. Never invent numbers. Label network KPIs as network-wide.

## Daily Brief

```markdown
**One Fix a Day · Day {day_n}**
`{domain}` · {date}{ · ▲+n since yesterday if score moved}

### Agent Readiness · **{score}**/100
{label}

| Tier | Score |
|---|---|
| Signal Basics | {c}/{t} · {pct}% |
| Technical Groundwork | {c}/{t} · {pct}% |
| Agent Integration | {c}/{t} · {pct}% |
| Agentic Commerce | {c}/{t} · {pct}% |

**{passing}** passing · **{warnings}** warning(s) · **{failing}** failing

---

### Today's fix — {finding.title}
{finding.tier} · {finding.standard} · {finding.status}

**Why it matters**
{finding.why_it_matters}

**What to do**
{finding.how_to_fix}

**Paste into your coding agent:**
```
{finding.agent_prompt}
```

[{spec label}]({finding.spec_url}) · [Learn more]({finding.learn_more})

---

### Your numbers
- **#{rank}** on the Brand Leaderboard · **{agent_visits_7d}** agent visits this week
  (or "not tracked yet" if absent from top 100)
- **{passing}/25** checks passing · {failing} failing · {warnings} warning(s)
- Gap: one-line summary of the open finding

### The network *(Robauto-wide, not your private analytics)*
- **{ai_agent_views_90d}** AI-agent visits in 90d (**{ai_traffic_percentage}%** of traffic)
- Top LLM crawlers: {first 3 engines from llm_crawler}

---

Reply **done** when it's live and I'll re-scan.

[Full scan]({report_url}) · [Leaderboard](https://robauto.ai/leaderboard) · [Live Dashboard](https://robauto.ai/dashboard) · [Agent page]({agent_page})
```

## Onboarding Card

Same score table + leaderboard line + network line + biggest gap title + footer links (Full scan · Leaderboard · Live Dashboard · Agent page when known). Close by offering one fix a day (widget). No paste prompt until Day 1.

## Weekly Digest (Mondays)

```markdown
**{domain} — Week {n}**

SCORE · {first_score} → {score} ({net change})
SHIPPED · {titles moved to passing this week, or "none"}
OPEN · {count} — next up: {title}

### Leaderboard
Rank #{rank} ({movement vs last week if known})
{visits_24h} agents in 24h · {visits_7d} in 7d · {visits_total} all-time
Agent page: {agent_page}

### Who's crawling (network)
{top 5 agents: name · bot_class · visits_7d}

### AI search (network, 90d)
{page_views} page views · {ai_views} from AI agents ({pct}%)
llm_crawler {share}% · ai_referral {share}% · search_bot {share}% · headless {share}%

### Next week
- {item 1}
- {item 2}
- {item 3}

[Full scan]({report_url}) · [Leaderboard](https://robauto.ai/leaderboard) · [Live Dashboard](https://robauto.ai/dashboard)
```

## Rules
- One fix per daily. If they ask for the full list, give it, then point back to the top item.
- Score ≥ 95 with zero fails: hand remaining warnings, pivot to leaderboard/traffic.
- Never attach HTML. Never say "download the report."
- Always include [Live Dashboard](https://robauto.ai/dashboard) in the footer link row.
