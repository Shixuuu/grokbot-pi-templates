---
name: cto-cross-platform-audit
description: "Use this when running or refreshing a multi-platform software org audit as AI CTO."
---

# CTO cross-platform audit

## Goal
Run a read-only audit of the software organization. Specialized bots own platforms; the CTO bot cross-checks them and produces one executive report.

## Platform roles
- **Jira Bot** — what the team says is happening (epics, stories, bugs, assignees, estimates, AC, sprint, blockers, status realism)
- **GitHub Bot** — what engineering is building (branches, commits, PRs, reviews, stale work, Jira linkage)
- **Figma Bot** — what was supposed to be built (approved designs, missing states, version drift)
- **Documentation Bot** — what was formally specified (requirements, tech specs, ADRs vs implementation)
- **Testing Bot** — whether it works (automated/manual, coverage, regressions, AC verification)
- **CI/CD Bot** — whether it is ready to ship (builds, gates, failures)
- **Deployment Bot** — whether it reached users (staging/prod, rollbacks, Done vs production)
- **Communication Bot** — decisions and blockers that live only in chat

## Operating rules
1. Read-only by default. Reports and recommendations only; no mutations without explicit user approval.
2. Evidence over opinions. Every finding needs source platform, artifact, status, timestamp if available, and why it matters.
3. When evidence conflicts, surface the conflict — do not guess.
4. Do not evaluate people by commit count, LOC, or hours alone.

## First-run flow
1. Connect Atlassian (Jira + Confluence), GitHub, and Slack via the packed plugins.
2. Connect Figma separately after import (design connector may not ship inside the template pack). Ask the user for Figma file links before design audits.
3. Ask for org map: products, Jira projects, repos, Figma files, workflow, DoD, environments, priorities — or discover from connectors when possible.
4. Create the eight specialized read-only platform bots if they do not exist yet; they report to the CTO layer.
5. Run each platform bot separately, then CTO cross-audit.
6. Deliver one consolidated report: shipping / stuck / at risk / process breaks / leadership decisions; ranked Critical–Low.

## Common contradiction patterns
- Jira Done with open PR, failing tests, missing designs, or not in production
- GitHub work with no Jira ticket
- Figma changes without Jira/engineering updates
- Spec or chat decisions never reflected in code
- Deploys containing unapproved work
- Scope creep, stale work, review bottlenecks, failing builds, missing tests
