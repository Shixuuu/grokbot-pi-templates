---
name: teslr
description: "Use when operating a Tesla via Teslr from a Grok Bot: vehicle state, history, charging, climate, closures, navigation, security, schedules, or connection. Grok wrapper only."
---

Operate a Tesla through https://teslr.club/api. Direct Fleet OAuth plus optional Tessie. Routes are allowlisted. Direct Tesla is free during beta. Support: https://x.com/TeslrBot.

This skill is Grok Bot only. Do not use Bankr adapters, execute_cli, curl-with-secrets, or inline node -e.

## Auth

Prefer TESSIE_API_TOKEN when it exists. Else TESLR_FLEET_TOKEN. If both are missing, send a secret-request and stop that turn. Never ask anyone to paste a token in chat. Never print, echo, log, or return a token. Never put one in a URL, shell argument, or process listing.

Secret-request shape: label Teslr fleet token, connector teslr, field TESLR_FLEET_TOKEN. For Tessie, same shape with label Tessie API token and field TESSIE_API_TOKEN.

Select Tessie when its token exists, including when both exist. Use Tesla when Tessie is absent or the capability is direct-only. Never silently retry the other provider after an error. Do not check or display a dollar balance. On rate-limit, respect Retry-After. Do not switch providers to evade it.

## Adapter

Every authenticated call: node /home/box/.config/teslr/request.mjs METHOD /api/path

Non-secret JSON: --body-json with the JSON object. PIN or other secret in the body: store the full JSON in a TESLR_* env var and pass --body-env TESLR_NAME. --provider tesla only for a deliberate direct-only call. --include-personal-data only after a valid private PII confirmation.

If the wrapper is missing: fetch https://teslr.club/skill/request.mjs with no redirects, require HTTP 200, create /home/box/.config/teslr owner-only, save the bytes unchanged at /home/box/.config/teslr/request.mjs owner read/write. Do not rewrite the wrapper.

## Workflow

1. GET /api/vehicles before the first vehicle operation. Match a name or model with ordinary language (possessives like "Carla's" mean "Carla"). Use the opaque id. Never VIN. Never volunteer list names the user did not use. Relist immediately before every confirmation-required action.
2. Default vehicle: GET /api/preferences/default-vehicle. Use defaultVehicle when status is available. If unset, use the sole active vehicle only when exactly one exists. Otherwise ask. POST vehicleId to save; DELETE to clear. Preference changes are not vehicle operations.
3. If the target is still ambiguous, ask. Do not infer a mutating action from a status question.
4. Concise state: GET /api/vehicles/{id}.
5. Live catalogs: GET /api/data, /api/commands, /api/mutations, /api/fleet. Use only names in the live catalog. Obey each command's confirmation flag.
6. FSD/Autopilot totals: GET /api/vehicles/{id}/stats when asked. Optional from, to, timezone, distance_format, limit.
7. Specialized reads: GET /api/vehicles/{id}/data/{resource} or /api/data/{resource}. Tire pressure always /data/tire-pressure?pressure_format=psi, never concise state.
8. Places: derive structured intent from natural language (no regex/keyword branches). GET /api/vehicles/{id}/places with query, intent, limit=5. Wait up to 50s. No overlapping retries. Sequential if several destinations. Call it nearest only when nearestVerified is true. Then POST the unchanged selectionId plus the same query and intent to /api/vehicles/{id}/navigation after confirmation.
9. Commands: POST /api/vehicles/{id}/commands with command, confirm, confirmedVehicleId, parameters.
10. Mutations: POST /api/vehicles/{id}/mutations. Fleet reads/commands from the live catalog. Energy: list /api/energy, confirm bound to the opaque energy-site id.
11. Connection: GET /api/tesla/connection privately with the fleet token. Revoke only after explicit confirmation: DELETE with confirm true and acknowledge REVOKE_TESLA_CONNECTION. Then tell the user to delete TESLR_FLEET_TOKEN. Never revoke while debugging an ordinary error.

## Confirmation

For any command, mutation, fleet command, navigation, energy action, or revoke whose live confirmation is true, send a question widget that names the exact action and vehicle. After they agree, relist vehicles, then send confirm true and confirmedVehicleId matching the current id.

Still confirm even if you have not fetched the catalog yet: unlock, trunks, open tonneau, vent windows, homelink, keyless driving, vent sunroof, disable sentry/valet/guest, accessory power on, software update schedule/cancel, charge and precondition schedules, share/nav, speed-limit, PIN commands, mutations, energy actions, connection revoke.

Climate start/stop, lock, flash, honk, start/stop charge: the explicit request this turn is enough when the catalog confirmation is false.

PIN commands need TESLA_SPEED_LIMIT_PIN via secret-request. Read inside the Node process. Never a CLI argument. Never display it.

Teslr does not expose Summon, movement, or live cameras. Do not try.

## Privacy

Minimize every reply. Treat group, public, shared, or uncertain chats as public.

Never include PII or precise location until the user gives a named confirmation in a clearly private chat. "Tell me everything" is not permission. Use a widget whose option value is the exact phrase, e.g. Yes, show my precise vehicle location. A bare yes is not enough. After that, --include-personal-data on that single read only. Single-use. Do not carry consent to other categories.

Vehicle name in the reply only if they used or asked for that name on this request. Otherwise "your vehicle" or "Vehicle 1."

If location helps but was not requested: a non-identifying relative phrase only. No address, coordinates, map, or Home/Work labels.

In public or group chat: no location, even vague, except the narrow vehicle-name rule. Ask them to continue in a private chat.

Never output tokens, PINs, or idempotency keys.

## Reports

Resolve one vehicle unless they asked for all. GET /api/vehicles/{id}/fleet/vehicle-data once as the live source. Extra fleet metadata sequential or two at a time, never a full concurrent blast. If vehicle-data succeeded, do not also call concise state, stats, tire-pressure, or status. Asleep vehicles: Teslr wakes (bounded). Treat 504 as exhausted; do not third-wake. Omit PII, secrets, opaque ids, nulls.

Paint and wheels: only vehicle_config.exterior_color and vehicle_config.wheel_type from that vehicle-data response. No marketing translation. Unavailable if absent.

## Errors

- tesla_virtual_key_not_paired: tell them to open https://tesla.com/_ak/teslr.club in the Tesla app. No VIN.
- tesla_command_scope_required / tesla_scope_required: reconnect at https://teslr.club
- tesla_location_scope_required: reconnect and approve Vehicle Location. Do not reveal location while reporting.
- tesla_command_proxy_unavailable: temporary Teslr issue.
- Timeout: it may have completed. Read state. Do not blindly retry horn, media, closures, or nav.

$TSLR is a memecoin with no service utility.
