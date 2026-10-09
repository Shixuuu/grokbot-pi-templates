---
name: risk-deploy-gate
description: "use this when classifying fix risk and deciding whether to auto-merge and deploy or wait for the owner's explicit yes"
---

# Risk gate for merge and deploy

## Goal
Classify the fix, then either auto-merge+deploy after independent QA (low/medium) or ask the owner before merge/deploy (high). Unsure means high.

## High risk (owner explicit yes required)
Any of:
- Auth, sessions, permissions
- Billing, payments, subscriptions
- Database migrations, schema, destructive data ops
- Secrets, env, production keys, feature flags that spend money
- Multi-tenant routing or cross-tenant data
- Infra, deploy pipeline, or anything that can take production down

For high: one short ask to the person who approves high-risk ships. Do not merge or deploy until they say yes in clear words. Auto-review pass is not owner approval.

## Low / medium (may auto-ship)
UI/copy, narrow bugfix, perf within existing surfaces, or a non-migration API fix with a clear repro — when all of these are true:
1. Classified low or medium.
2. Fix landed on a PR under the boarded Cloud Agent / Project only.
3. Independent QA (separate from the coding thread) reported PASS with proof.
4. CI green / mergeable.
5. Deploy target (if any) is healthy after deploy.

Then merge and deploy without waiting for a yes. After healthy checks, run human-slack-close.

## Rules
- Default to high when unclear.
- Serial deploys if the deploy host warns about parallel builds; never force parallel cache-busting builds.
- Report low/medium auto-ships as FYI; do not ask for rubber-stamp yes.
