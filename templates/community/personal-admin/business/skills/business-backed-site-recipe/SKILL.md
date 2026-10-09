---
name: business-backed-site-recipe
description: "Use this when designing or reviewing a new public website (any framework) that uses the Business NoCRUD PostgreSQL schema for browser sessions, email signup, list subscriptions, paid tiers, and mail links."
---

# Business-backed site recipe (framework-agnostic)

Distilled from production sites built on Business 0.2.11+. Read `/business-sites` in the Business clone first; this complements it with app-layer patterns. Placeholders only: example.com, support mailbox, your vault.

## Architecture that worked
- Static front end (any SPA or plain HTML) plus a small JSON API. No server rendering needed.
- One shared identity library with a per-site config struct: host, app name, list name, list sets (Pro, News, Terms, Cookie consent), cookie name, public base URL, support mailbox, secret paths. Select the site by `Host` header. Never hardcode per-product branches, hosts, or proxy IPs in shared code.
- Reverse proxy routes `/api/*` to the app with `Host` preserved; `/l/<token>` and other SPA paths fall back to the app shell.

## Steps
1. **Schema**: Business >=0.2.11 on PostgreSQL (0.2.12 for CMS/campaigns/culture). App role gets EXECUTE on procedures and SELECT on views. Connection from `PG*` env vars filled from the secret store.
2. **Bootstrap at startup**: `GetApplication(app)`, `GetApplicationRelease(app, NULL)`, find-or-insert Site for `GetWord(host)` and its SiteApplicationRelease (SAR). Cache the SAR id. If no upstream `GetSite` procedure exists, propose one upstream rather than growing raw inserts.
3. **Session middleware** on every API request: read cookie; if missing/invalid mint 32 hex chars from 16 secure random bytes. Cookie `HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age ~400d`, reissued each visit. Call `SetSession(token, SAR, NULL, NULL, GetUrl(secure, host, path), clientIP, NULL, NULL, 'session')`. Trust `X-Forwarded-For` only from your own proxy.
4. **Identity + plan**: token to SessionToken (ALWAYS filter by this SAR), to credential, to email. Plan comes from list-set membership in the `List` view on each request (e.g. Pro = paid). Return plan and consent flags to the client, never the raw token.
5. **Anonymous work** goes on `SetSessionPath`; after claim use `SetIndividualPath` / `StopIndividualPath`. Stop rows, never delete.
6. **Signup** (email + required Terms checkbox): subscribe `Terms`, mint a `mail` token (GetIndividualEmail, GetEmail, credential, `SetSession(..., 'mail')`), mail `https://example.com/l/<token>` (path, not #hash, so mail scanners keep it). Subscribe product lists when the link is opened for true double opt-in, or document single opt-in explicitly.
7. **Link landing** `/l/<token>`: check token type, SAR, and timeout if the site uses one (link expiry is a per-site choice; some owners intentionally keep mail links permanent). Then `ClaimSession(browserToken, email)`. Never claim a browser to a typed, unverified email; a typed email is not proof.
8. **Restore on new device**: `POST /api/reclaim {email}` always returns the same neutral message; mail a link only if the address holds a relevant list set.
9. **Manage/unsubscribe**: `/manage` page plus `GET/POST /api/lists`, identity from mail token or claimed cookie. On = `ListSubscribeEmail`, off = `GetIndividualEmail` then `ListUnSubscribe`. Every letter carries `List-Unsubscribe`, a manage link, support mailbox, and postal address. Run a bounce processor (dry-run default) that unsubscribes hard bounces.
10. **Mail transport**: SMTP submission with STARTTLS (TLS 1.2+) or an API provider; credentials fetched from the vault at send time; plain-text templates keyed by kind; dry-run flag; refuse to send marketing mail without a postal address. For bulk mail use `SetContent*` / `SetCampaign*` / `SetCampaignEvent` (0.2.12), not ad-hoc tables.
11. **Payments**: hosted checkout with metadata `{product, email}` and a server-side reference, not the cookie value. Signature-checked webhook: `ClaimSession` + `ListSubscribeEmail(list, 'Pro', email)`; cancellation `ListUnSubscribe`. Keep processor customer/subscription ids outside Business. Enforce test mode in code until a deliberate switch.
12. **Consent**: Terms and cookie consent are list sets; mirror in an HttpOnly flag cookie.
13. **Edge**: HSTS, nosniff, `X-Frame-Options DENY`, `server_tokens off`, rate limit and body cap on `/api/`, `Cache-Control: no-store`. CORS echoes only your own origin, never `*` on cookie-setting endpoints. In-process rate limit per IP and per session.
14. **Side tables** for product state (if any) are append-only with `stopped` columns. No hard DELETE, no overwriting history.
15. **Culture/ops**: if localized, `SetSessionCulture` from Accept-Language or user choice. Health endpoint, post-deploy smoke test with throwaway plus-addressed test inboxes, admin reports only through views (`IndividualSessions`, `SiteMembership`).

## Pitfalls to avoid
- Promising an expiry in the email copy that the code never enforces (pick one: permanent links or real timeouts, and say so honestly).
- Token lookups not filtered by SAR, so a token from one site resolves on another.
- Claiming a browser session before the inbox is proven.
- Writing list rows before confirmation while calling it opt-in.
- Returning the HttpOnly token in JSON or sending it to the payment processor.
- Check-then-act races on one-time grant tokens; do the check and the grant in one transaction or behind a unique insert first.
- Proxy routing that silently shadows a handler (dead routes).
