---
name: verify-public-subscription-url
description: "Use before publishing a Clash/mihomo/VLESS subscription, Tailscale Funnel, or Cloudflare tunnel URL — verify TLS + HTTP 200 first, with Funnel/Docker/tunnel checklists when it fails."
---

Use before handing the user any public subscription, Funnel, or tunnel URL for Clash/mihomo/VLESS (or similar). Prove it works from outside the machine. Never invent a green light.

## When to run

- about to send a subscription link (`clash.yaml`, `/sub/...`, Funnel hostname, Cloudflare quick/named tunnel URL)
- after rotating a tunnel hostname or token
- user says the link fails, TLS errors, HandshakeException, or "还不行"

## Probe (required)

1. Resolve the exact URL you will give the user (full `https://...` path, including token if any).
2. From this computer, fetch it with TLS verification ON (e.g. `curl -fsS -o /dev/null -w '%{http_code} %{ssl_verify_result} %{time_total}\n' --max-time 15 '<url>'`). Prefer HTTP/1.1 if HTTP/2 flakes.
3. Pass only if: TLS handshake succeeds AND HTTP status is 200 AND body looks like the expected format (yaml starts with Clash keys / proxies, or the documented payload). Soft 3xx to the same path may be OK if the final status is 200.
4. Fail closed on HandshakeException, certificate errors, timeouts, 4xx/5xx, empty body, or HTML error pages. Do not send the link. Fix or report the failure with the error class and one next step.

## Checklist when TLS or reachability fails

Run only the rows that match the stack in use; skip the rest.

**Tailscale Funnel**
- `tailscale status` — node online, Funnel enabled for the right ports
- Funnel serve config matches the local listener (port/path)
- `TailscaleVarRoot` / cert path writable; Funnel HTTPS certs present (common fix when Funnel TLS dies)
- local backend answering on the Funnel target (curl localhost first)

**Docker + Tailscale exit / forward**
- `DOCKER-USER` (or equivalent) allows `tailscale0` forward; legacy Docker iptables often drops return traffic
- `ip_forward` / NAT masquerade for the exit path if advertising an exit node
- container publishing the proxy port is actually listening

**Cloudflare Quick / Named Tunnel**
- `cloudflared` running; hostname in `cf-host.env` (or equivalent) matches live tunnel logs
- nginx (or front) routes `/sub/...` to the file; token path matches `token.env`
- after cloudflared restart, Quick Tunnel hostname may change — update published yaml and tell the user the new URL only after re-probe

**Clash / mihomo client side**
- user asked for Clash → ship Clash Meta / mihomo yaml, not sing-box unless they asked
- proxy type, UUID, WS path, SNI/host headers match the server

## Report to the user

One short line: URL, HTTP code, TLS ok/fail, latency. On fail, the checklist item you hit and what you changed or need from them. Never paste secrets (UUID/token) unless they already own that chat thread and need them to import.
