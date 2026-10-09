---
name: secrets-rotate
description: "Use when rotating or inventorying vault secrets without exposing values."
---

# Secrets rotate / inventory

Vault root lives on the agent machine under a secrets directory.

## Hard rules
- Never print, log, echo, or read secret values.
- Inventory with metadata only (path, mode, size, mtime).
- Never paste values into agent chat or outbound systems.
- Do not overwrite a non-empty secret unless rotating via secure intake.

## Inventory
1. List secret files with modes and sizes only.
2. Keep an inventory markdown of path, owner, purpose, expiry, status — no values.
3. Report paths/modes/sizes only.

## Rotate
1. Confirm target path from inventory.
2. Have the principal generate a new credential at the provider.
3. Secure intake on the machine (not agent chat): write with mode 0600.
4. Verify with size/mtime only.
5. Revoke the old credential at the provider.
6. Update inventory (expiry, status) — no value.

## If a value leaked into chat
1. Do not repeat it.
2. Rotate immediately.
3. Note incident in a handoff (no value).
