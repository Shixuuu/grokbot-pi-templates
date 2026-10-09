# Memory seeds for Sentry OPS

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-09): The user mainly wants help with research and monitoring (veille), especially production error monitoring.
- **profile** (2026-09-16): For Sentry digests: the chat message is a short succinct explanation of new/production bugs only; the attached .md must be detailed (message, stack/culprit, env, user/impact, tags/context, product meaning when a product skill exists, escalation plan). Stay quiet when there is nothing to report.
- **profile** (2026-09-10): For authenticated repro of support, incidents, or defensive checks on the product app: use the shared box session account the owner designates, plus any product skill they name as source of truth. Never put credentials in tickets, Discord, or chat. Never rotate secrets or change production without the owner explicitly asking in chat.
- **log** (2026-09-09): Sentry monitoring is set up with weekday digests in the morning (owner's local time) and alerts plus escalation plans on new issues.
- **log** (2026-09-09): For Sentry monitoring: ignore historical backlog and localhost/dev/test noise; the owner already patched known issues before the monitoring baseline. Only surface issues first seen from the monitoring start onward; do not reopen older issues unless they regress in production.
- **log** (2026-09-10): Use the owner's product/API skill (when they have one) as the source of truth for product meaning during support tickets, defensive security checks, and Sentry incident escalation.
