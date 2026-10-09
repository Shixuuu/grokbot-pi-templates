---
name: pp-tesla
description: "Use this when controlling a Tesla vehicle or Powerwall: climate, locks, charge, navigation, Supercharger queues, charging cost, ready checks, or Tesla owner-account commands. Drives tesla-pp-cli."
---

# Tesla — tesla-pp-cli

This bot drives `tesla-pp-cli` at `$HOME/.local/bin/tesla-pp-cli`. Put `$HOME/.local/bin` on `PATH` before any command. Verify with `tesla-pp-cli --version` (want `2026.9.2` or newer).

If the CLI is missing, `tesla_auth` is missing, or a signed-command car still needs Fleet plus a virtual-key pair, run tesla-first-run first.

Catalog `pp-tesla` is a command reference only. **This recipe wins for auth, Fleet, pairing, routing, and first-run.** First-run install is `npx -y @mvanhorn/printing-press-library install tesla` (CLI **and** skill). Never `--cli-only` on first run.

## Auth (Owner API)

```bash
tesla-pp-cli auth login
```

Default is a `tesla_auth` subprocess. Requires `tesla-auth` (`tesla_auth`) on `PATH`. Tesla owns MFA. Tokens land in `~/.config/tesla-pp-cli/config.toml` (mode 0600). Access tokens last about 8 hours; the CLI refreshes them with the long-lived refresh token.

If login is already done, skip it. Check with `tesla-pp-cli doctor --json` or `tesla-pp-cli products --agent`.

## Which path per car

Do not trust calendar year. `tesla-pp-cli reachability` and `tesla-pp-cli doctor --json` decide.

- `command_signing: off` (typically pre-2021 Model S/X): Owner REST. `tesla-pp-cli command …` after login is enough.
- `command_signing: on` (all Model 3/Y, refreshed S/X, Highland, Cybertruck): signed commands. Remote lock/unlock/trunk/climate/charge/honk go through **Fleet** plus a one-time virtual-key pair at the car.

Do not start `fleet-register` until the user asks.

## Fleet (signed-command remote commands)

Need a Tesla developer app, a public-key host serving `/.well-known/appspecific/com.tesla.3p.public-key.pem`, then:

```bash
tesla-pp-cli auth fleet-template --gen-key --dest ./tesla-keys-host
# deploy that host; register origin + redirect `http://localhost:8585/callback` at developer.tesla.com
tesla-pp-cli auth fleet-register --public-key-domain <host> --client-id <id> --client-secret-file <secret-file>
tesla-pp-cli auth fleet-login
```

`fleet-register` persists the signing key from `~/.tesla/` (or `--key-file`). Never paste the client secret, tokens, or private key into chat.

Then (only when the user asks to fire it live):

```bash
tesla-pp-cli command unlock --vehicle "<display name>" --send --agent
```

Default path is Fleet when enrolled. After lock, climate, or charge, read vehicle state back.

## Virtual key (once, at the car)

A cloud computer **cannot** BLE-pair. The owner must be at the car with an NFC card or phone key, Bluetooth on, and `tesla-control` on a laptop in range.

`go install github.com/teslamotors/vehicle-command/cmd/tesla-control@latest` **fails** (upstream `replace` directives). Working install:

```bash
git clone --depth 1 https://github.com/teslamotors/vehicle-command
cd vehicle-command && go build -o tesla-control ./cmd/tesla-control
install tesla-control "$HOME/.local/bin/tesla-control"
```

Pair (on the laptop, public key matching the Fleet host):

```bash
tesla-control -ble -vin <VIN> -key-file ~/.tesla/<private>.pem \
  add-key-request ~/.tesla/<public>.pem owner cloud_key
```

Confirm with `tesla-control -ble -vin <VIN> -key-file ~/.tesla/<private>.pem session-info`. First BLE call may error `central manager has invalid state`; retry. Do not put the VIN in memories, templates, or logs.

## Commands

Always `--agent` for JSON. Mutating commands stay **dry-run** unless the user explicitly asks to fire them live (`--send`).

Reads that work:

- `tesla-pp-cli products --agent` — list cars (output is huge; do not dump raw `cached_data` to the user)
- `tesla-pp-cli ready <vin> --agent` — battery / can-I-leave. Prefer this over `vehicles get-data-charge-state` (that endpoint 404s)
- `tesla-pp-cli reachability --agent`
- `tesla-pp-cli doctor --json`
- `tesla-pp-cli which "<capability>"`

Writes (need `--send` and explicit user ask):

- `tesla-pp-cli command unlock|lock --vehicle "<name>" --send --agent`
- Climate, charge, nav, sentry: `tesla-pp-cli command …` or `vehicles create-*`

Use `--vehicle` display name or VIN. Do not invent VINs. Do not print VINs unless the command needs one.

## Safety

- Never print tokens, refresh tokens, client secrets, private keys, or VINs into chat or logs.
- Never fire lock/unlock/honk/charge/climate without a clear user ask.
- Never share live location or start a drive.
- If the Fleet key is missing, fix config — do not re-register a new app unless setup is actually absent.
- After a live lock, climate, or charge, read vehicle state back.
