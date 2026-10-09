---
name: tailscale-fleet-macos
description: "PUBLIC SANITIZED. Use for Public templates and Tailscale recovery with placeholders only — no live IPs, MagicDNS tails, machine names, secrets, or keys."
---

# Tailscale fleet (PUBLIC SANITIZED)

> Placeholders only. Never pack fleet-private topology into a Public share.

## When
Any Tailscale CLI, admin console, Tailnet Lock, MagicDNS, ACL tags, node key expiry, or Tailscale SSH between fleet nodes.

## Topology (Owner fills)
| Role | Placeholder | Tag |
|---|---|---|
| Hermes nodes | `<NODE_*>.<TAILNET_MAGICDNS>` | `<TAG_HERMES_NODE>` |
| Grok Bot controller | `<NODE_CONTROLLER>` | `<TAG_CONTROLLER>` |

Prefer MagicDNS. Example ACL: controller → Hermes TCP for SSH, `:8642`, and webhook port — not allow-all.

## Variants (macOS)
Detect first. Never run Standalone and App Store together. App Store lacks Tailscale SSH — use Standalone for fleet SSH.

## Key expiry / Lock
`tailscale status` + `tailscale lock status`. Never put Lock signing keys on the Grok Bot computer. Never logout the last signing node.

## Diagnostics
`tailscale ping`, `tailscale netcheck`. Connect-timeout → Tailscale/ACL; connect-then-reset on `:8642` → Hermes API dead.

## Never
Paste auth keys in chat. Don’t claim recovery without status + lock + real ping.
