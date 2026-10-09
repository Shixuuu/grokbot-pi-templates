---
name: tailscale-fleet-macos
description: "Use when managing or recovering Tailscale fleet nodes (key expiry, Tailnet Lock, MagicDNS, ACL tags, system extension, greyed Remove in admin console, or Tailscale SSH between Hermes hosts)."
---

# Tailscale macOS Fleet Operations

Manage, authenticate, configure, and recover Tailscale across a Hermes macOS fleet. The orchestrator bot is orchestrator-only — delegate node-side recovery to the designated recovery agent unless the Owner overrides.

## When to Use

Load this skill when the request or symptom touches ANY of: `tailscale` CLI, Tailscale admin console, Tailnet Lock, MagicDNS, fleet ACL tags, node key expiry, macOS system extension / network extension, or Tailscale SSH between fleet nodes. If the request only involves non-Tailscale networking (Cloudflare, NordVPN alone, LAN), skip this skill.

## Fleet Topology (SSOT — fill from Owner install)

| Node role | Placeholder | MagicDNS | Tag |
|---|---|---|---|
| Orchestrator + primary | `<NODE_ORCHESTRATOR>` | `<NODE_ORCHESTRATOR>.<TAILNET_MAGICDNS>` | `<TAG_HERMES_NODE>` |
| Coding limb | `<NODE_CODING>` | `<NODE_CODING>.<TAILNET_MAGICDNS>` | `<TAG_HERMES_NODE>` |
| Merge / coding seat | `<NODE_MERGE>` | `<NODE_MERGE>.<TAILNET_MAGICDNS>` | `<TAG_HERMES_NODE>` |
| Inference limb | `<NODE_INFERENCE>` | `<NODE_INFERENCE>.<TAILNET_MAGICDNS>` | `<TAG_HERMES_NODE>` |
| Workhorse | `<NODE_WORKHORSE>` | `<NODE_WORKHORSE>.<TAILNET_MAGICDNS>` | `<TAG_HERMES_NODE>` |
| Controller (separate) | `<NODE_CONTROLLER>` | — | `<TAG_CONTROLLER>` |

MagicDNS domain: `*.<TAILNET_MAGICDNS>` — preferred host-to-host path. Prefer MagicDNS over raw IPs; IPs can shift after sleep/wake. Document whether Tailnet Lock is enabled and whether ACL is default-deny.

Authorized inter-tag traffic (example pattern): `<TAG_CONTROLLER>` → `<TAG_HERMES_NODE>` over TCP ports used for SSH, Hermes HTTP API (`8642`), and any fleet health probe port the Owner defined.

## Variant Handling — Which CLI Do I Have?

Tailscale on macOS ships in three variants. NEVER run Standalone and App Store variants simultaneously.

**Detect first, always:**
```bash
ls /Applications/Tailscale.app/Contents/MacOS/Tailscale 2>/dev/null && echo "GUI_APP_PRESENT"
ls /usr/local/bin/tailscale /opt/homebrew/bin/tailscale 2>/dev/null
which tailscale
tailscale version 2>&1 | head -3
```

**Variant differences:**

| Variant | CLI path | System extension | Notes |
|---|---|---|---|
| Standalone | `/Applications/Tailscale.app/Contents/MacOS/Tailscale` | Yes (`tailscale configure sysext`) | Full feature set; preferred for fleet |
| Mac App Store | Same GUI path | Network Extension (NE) | Tailscale SSH is NOT available on App Store build — known blocker for artifact pushes over Tailscale SSH |
| Open-source `tailscaled` | `/usr/local/bin/tailscale` (utun) | None | Linux-style; CLI-only node |

**System extension control (Standalone only):**
```bash
tailscale configure sysext activate
tailscale configure sysext status
tailscale configure sysext deactivate
```

**App Store recovery:** if a node was installed from App Store and Tailscale SSH fails, the operator must reinstall via Standalone variant or use another path the Owner approved.

## Key Expiry Recovery — The Common Failure

Each Hermes node can have a node-key expiry date enforced by Tailnet Lock. When a node's key expires, that node goes RED — health checks time out, Hermes HTTP `:8642` unreachable, connectors fail with URLError.

### Recovery Flow

**Step 1 — Check state before doing anything:**
```bash
tailscale status
tailscale lock status 2>/dev/null   # only on signing-capable nodes
```

If the node is fully locked out and unreachable, the operator must extend the key from the [admin console](https://login.tailscale.com/admin/machines) — find the device → ⋯ menu → "Temporarily extend key" → short window.

**Step 2 — Re-authenticate (NEVER over SSH/RDP without an alternate login path):**
```bash
sudo tailscale up --force-reauth
```

The new node key is often signed automatically using the node's Tailnet Lock key — manual re-signing is NOT required in normal cases.

**Step 3 — Verify as a signing node:**
```bash
tailscale lock status
```

If the recovered node's `tlpub:` is missing from the trusted list (rare — only if auto-rotation failed), re-add from another trusted signing node:
```bash
tailscale lock add tlpub:<recovered-node-key>
```

**Step 4 — Disable key expiry on signing nodes (PREVENTION):**
Signing nodes should have key expiry DISABLED. Do this from the admin console per node, or via ACL node attributes. Keep a fleet-health warning (e.g. 14-day expiry guard) until all signing nodes are no-expiry.

## Tailnet Lock — Signing-Node Invariants

- Signing nodes are a subset of Hermes nodes. Name primary and secondary signing nodes in the Owner's install notes.
- When a signing node's key expires and the user re-auths, the node's signature often rotates automatically. Do NOT manually `tailscale lock remove` unless explicitly directed by the Owner.
- Stale machine registrations must be DELETED from the Tailnet Lock admin list before that name can rejoin.
- To list current signing nodes: `tailscale lock status` from any trusted signing node.

## ACL Tags & Connectivity Rules

If the fleet ACL is default-deny, Hermes-node-to-hermes-node is NOT automatic — only the explicit controller → node rules the Owner defined are guaranteed.

**Diagnostic command when a node appears reachable (UDP) but TCP fails:**
```bash
tailscale ping <node-name-or-magicdns>
tailscale netcheck
```

`tailscale netcheck` reports path MTU, DERP relay, and which ports are blocked end-to-end. If `netcheck` shows fleet ports blackholed, suspect ACL — not the node itself.

## Fleet Health Probes

Maintain a key-expiry guard (e.g. page within 14 days of expiry). Keep a per-node health file under the Owner's fabric-health path — read it FIRST when investigating fleet RED states.

A node is RED when: ping fails AND Hermes `:8642` times out AND the health-probe port times out AND the Hermes connector errors. A node is GREEN when ping + required ports respond.

## MagicDNS Addressing Rules

- ALWAYS address fleet nodes by MagicDNS name (`<NODE>.<TAILNET_MAGICDNS>`), NEVER raw IPs when MagicDNS works.
- IPs are provisional — they can shift after sleep/wake, especially on WiFi.
- Treat any stored IP as suspect. If a node's stored IP differs from a fresh `tailscale status`, use the fresh one.
- The `100.100.x.x` range is Tailscale's CGNAT space (not a node) — that is the DERP relay path.

## Tailscale + NordVPN Coexistence

If NordVPN is active, it MUST connect BEFORE Tailscale — otherwise DNS or exit-node overrides break MagicDNS resolution. Verify with `tailscale dns status` after NordVPN connects.

## Standing Rules

- Never run Standalone and App Store variants on the same node — pick one, document it in the node's profile note.
- Never `sed` Tailscale config files — use a structured patch tool or `tailscale set` / admin console.
- Never paste OAuth codes or auth keys in chat — Tailscale auth keys come from the admin console or `tailscale up --authkey <key>` via a masked secret path.
- Don't claim recovery succeeded without reading `tailscale status` + `tailscale lock status` + a real ping.
- Don't `tailscale logout` a signing node without confirming a second signing node is still trusted — you can lock the fleet out of Tailnet Lock.
- Don't `tailscale down` on a node you SSH into without an alternate local console path.

## Quick Reference — Common Commands

```bash
# Identity & state
tailscale status
tailscale ping <node>
tailscale netcheck
tailscale version

# Auth
sudo tailscale up
sudo tailscale up --authkey <key>
sudo tailscale up --force-reauth

# Tailnet Lock
tailscale lock status
tailscale lock add tlpub:<key>
tailscale lock remove <node-key>   # Owner only

# System extension (Standalone only)
tailscale configure sysext activate
tailscale configure sysext status
tailscale configure sysext deactivate
```

## Admin console — Remove button greyed out

Docs do not spell out every UI reason the **Remove** control is disabled. Check these in order:

1. **Role.** Device removal needs **Owner**, **Admin**, or **IT admin**. Network admin, Billing admin, Auditor, and Member are read-only for devices ([roles](https://tailscale.com/docs/reference/user-roles#roles); [remove a device](https://tailscale.com/docs/features/access-control/device-management/how-to/remove)).
2. **Shared-in node.** Devices shared into this tailnet from another account cannot be deleted with normal device-delete controls ([deleteDevice API](https://tailscale.com/api)).
3. **API delete (Owner / Admin / IT admin)** when the console stays stuck:
```bash
curl -X DELETE "https://api.tailscale.com/api/v2/device/<deviceId>" \
  -u "<api-key>:"
```
Use a masked secret for the API key; never paste it in chat. Replace `<deviceId>` with the node id ([remove a device](https://tailscale.com/docs/features/access-control/device-management/how-to/remove)).
4. If role is correct, the device is not an external share, and console/API still block removal, escalate to [Tailscale Support](https://tailscale.com/contact/support).

## Escalation

When the orchestrator hits a Tailscale issue that requires node-side commands, logging into a console, or `sudo tailscale up --force-reauth`, delegate to the designated recovery agent with the fleet-health file path and the symptom. Only escalate to the Owner if an admin console action is required (key extension, ACL edit) or if the second signing node is also compromised.
