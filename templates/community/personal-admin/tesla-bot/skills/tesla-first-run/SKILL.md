---
name: tesla-first-run
description: "Use this when Tesla Bot is first imported, tesla-pp-cli is missing, Owner login is not done, or a signed-command car still needs Fleet plus a one-time virtual-key pair."
---

# Tesla Bot first run

Do this once per computer that will control the car. Then use pp-tesla for day-to-day commands.

Install **CLI and skill**, never `--cli-only`. Catalog `pp-tesla` may still quote `--cli-only`; ignore that for first run.

## 1. Install

```bash
npx -y @mvanhorn/printing-press-library install tesla
```

Verify: `tesla-pp-cli --version` (want `2026.9.2` or newer, matching GitHub `tesla-current`). Keep `$HOME/.local/bin` on `PATH`.

Also need:

- **tesla-auth** (`tesla_auth`) on `PATH` — `cargo install tesla_auth` or `brew install adriankumpf/tap/tesla_auth`
- **tesla-control** — for the one-time BLE key pair. Do **not** `go install …@latest` (upstream `replace` directives break it). Clone and build:

```bash
git clone --depth 1 https://github.com/teslamotors/vehicle-command
cd vehicle-command && go build -o tesla-control ./cmd/tesla-control
install tesla-control "$HOME/.local/bin/tesla-control"
```

## 2. Owner login

```bash
tesla-pp-cli auth login
```

Default is a `tesla_auth` subprocess (native Tesla OAuth). Tesla owns MFA. Tokens go to `~/.config/tesla-pp-cli/config.toml`. Skip if `tesla-pp-cli products --agent` already lists vehicles.

## 3. See what you have

```bash
tesla-pp-cli products --agent
tesla-pp-cli reachability --agent
tesla-pp-cli doctor --json
```

Do not trust calendar year. Branch on `command_signing` / `vehicle_command_protocol_required`.

- `command_signing: off` (typically pre-2021 Model S/X): REST after login. Stop here.
- `command_signing: on` (all Model 3/Y, including 2017–2020 after the 2024 rollout; refreshed S/X; Highland; Cybertruck): Fleet plus one virtual-key pair for remote commands, including unlock.

Climate, charge, honk, and unlock go through `tesla-pp-cli` and Fleet. Do not send `fleet-register` until the user asks.

## 4. Fleet API (signed-command cars)

1. Tesla developer app with vehicle information, location, commands, charging scopes. Personal-use credit is typically $0 net.
2. Public-key HTTPS host serving `/.well-known/appspecific/com.tesla.3p.public-key.pem` (a free Vercel static host is fine).
3. Origin = that host. Redirect = `http://localhost:8585/callback`.
4. Generate keys and register:

```bash
tesla-pp-cli auth fleet-template --gen-key --dest ./tesla-keys-host
# deploy the public-key host, then:
tesla-pp-cli auth fleet-register --public-key-domain <host> --client-id <id> --client-secret-file <secret-file>
tesla-pp-cli auth fleet-login
```

`fleet-register` persists the signing key from `~/.tesla/` (or `--key-file`). Never paste the client secret, tokens, or private key into chat.

## 5. Virtual key at the car (once)

Must be done on a laptop **next to the car**, Bluetooth on, NFC card or phone key in hand. A cloud computer cannot do this.

Copy the Fleet public/private PEM pair to that laptop, then:

```bash
tesla-control -ble -vin <VIN> -key-file ~/.tesla/<private>.pem \
  add-key-request ~/.tesla/<public>.pem owner cloud_key
```

Owner taps the NFC card on the B-pillar / console when the car asks. Confirm `session-info`. After that, remote Fleet commands from the bot computer work. `auth export` / `auth import` moves the same identity to another machine without tapping again.

Do not put the VIN in the template, memories, or logs. Use it only for the pair command.

## 6. Prove it

Battery: `tesla-pp-cli ready <vin> --agent` (not `vehicles get-data-charge-state`).

Unlock only after the user asks: `tesla-pp-cli command unlock --vehicle "<name>" --send --agent`. Default path is Fleet when enrolled.

After lock, climate, or charge, read vehicle state back.

Commands stay dry-run unless the user says to fire them live (`--send`).
