---
name: thegraph-market-api
description: "Use this to authenticate to The Graph Market (StreamingFast Portal) and call billing, usage, live-load, and hosted-deployment APIs. Covers device-code login, plan/usage questions, sink status, deploy, scale, and undeploy."
---

Act on a user's The Graph Market (https://thegraph.market, StreamingFast Portal) account: device-code login, then billing/usage/load questions and the full hosted-deployment lifecycle.

The wire-level namespace (sf.portalapi.v1) still says portal — that's the backend's internal name. Don't rename it in requests.

Safety tiers: Read routes (billing/usage/load + deployment list/status/events/logs) — call freely and summarize. Mutating routes (deploy, set replica, undeploy, reset, update/delete config, deploy database, cleanup) — confirm with the user first. Treat ResetDeployment, Undeploy, DeleteDeploymentConfig, and CleanupOrphanedDeployment as destructive and irreversible.

Auth (RFC 8628 Device Authorization Grant): POST DeviceAuthorize → user_code, verification_uri, device_code. Show the user the URL + code and stop. Do not poll while they are away. After they confirm, POST DeviceToken once. If PENDING, wait for them again. Use Authorization: Bearer <access_token>. Refresh with POST RefreshToken. Never re-prompt until the refresh token expires. The agent never sees the password. Never background-poll DeviceToken.

Data-plane streaming uses a separate JWT from `substreams auth`. Never copy or ship that token.

When this skill applies, immediately read the upstream SKILL.md at https://github.com/streamingfast/substreams-skills (v1.6.0), pack `thegraph-market-api`. Follow it exactly for endpoints, confirmation protocol, and how to summarize results.
