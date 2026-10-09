---
name: funnel-fields-api
description: "use this when creating or cloning Funnel custom dimensions/metrics via the fields API instead of the Funnel UI rule builder — especially paid-media spine fields with sourceType mappings. always prefer API; double-verify after every create."
---

# Funnel fields API (skip the UI rule builder)

**Standing rule:** always prefer this API over the Funnel custom-field UI. UI only if the API path is blocked (no session token, endpoint failure). After every create: **double-verify** — (1) MCP `search_fields` / catalog shows the new id, (2) Data Explorer or `query_data` spot-check with Channel filter returns non-null where expected.

Prefer this over clicking Funnel’s custom-field UI. The Control Plane / Terraform `custom-fields` endpoint only creates **shells** (name + unit). **Rules live here.**

## Write endpoint (US)

```
POST https://api.us.fields.funnel.io/{workspaceId}/fields/
```

Headers (required):

| Header | Value |
| --- | --- |
| `Content-Type` | `application/json` |
| `x-origin` | `meld-fields-app` |
| `x-auth-token` | session JWT from a logged-in Funnel browser session |

Auth notes from live sniff: **no cookie, no CSRF**. Empty `referer` is fine. Fields UI runs in cross-origin iframe `meld-fields.us.fields.funnel.io`.

Do **not** use Control Plane OAuth for rule payloads. Do **not** store tokens in skills, memory, or git — sniff/refresh from the live session when needed.

Success: **201** body `{ field, accountLastModified, versionId }`. `field` includes `id, name, describe, unit, derived, accountId, createdAt, updatedAt, createdBy, updatedBy, editor: "v2", type: "dimension"|"measure"`.

Side calls after save (ignore for create automation): `meld-api.funnel.io/.../dataset/` preview, `api.exports.us.funnel.io/.../fields/used`.

Optional companion: after fields exist, use funnel-bq-export-maintain for export → BQ landing.

## Create body (dimension)

```json
{
  "id": "dim-<id>_<Name>",
  "name": "Display Name",
  "describe": "Short description",
  "unit": "string",
  "derived": { "expr": { "=case": [ /* rules */ ] } },
  "createdAt": null,
  "createdBy": "<userId>",
  "updatedAt": null,
  "updatedBy": "<userId>",
  "editor": "v2",
  "template": null
}
```

- Dimensions: `unit` = `string` | `date` | `datetime`
- Metrics/measures: same host/path; `unit` = `number` | `percent` | `monetary` | `duration`. Prefer id prefix `cf…` style matching existing customs when known; if POST rejects client id, omit and use response id.
- Confirm with the owner before any production create/update on a live client workspace (keep-all inventory after create).

## Rule DSL (`derived.expr`)

Ordered top-to-bottom `=case` list. Each branch:

```json
{
  "=when": { "sourceType": { "=eq": "facebookads" } },
  "=then": {
    "=case": [
      {
        "=when": { "facebookads-some_field": { "=notEmpty": "" } },
        "=then": { "=value": [ { "=get": "facebookads-some_field" } ] }
      },
      {
        "=when": true,
        "=then": { "=value": [ { "=get": "facebookads-fallback_field" } ] }
      }
    ]
  }
}
```

Primitives: `sourceType` + `=eq`; `=get`; `=notEmpty`; `=when: true` default. Omit platforms not connected.

Only map platforms that exist in **that** workspace. Never invent campaign/ad ids or conversion metrics.

## Paid-media spine (template intent)

Clone mappings per client; remap native field ids after `search_fields` discovery.

| Field | Typical sources |
| --- | --- |
| Client ID | constant |
| Platform Source | `sourceType` → display labels |
| Status / Campaign ID / Ad Set / Ad / Creative | Meta / Reddit / RTB / MNTN / Google / SA360 as connected |
| Keyword (search) | `adwords-keyword`; `searchads360-keywordText` |
| Landing Page Views | Meta `facebookads-actions.landing_page_view`; TikTok `tiktok-total_landing_page_view` |
| Initiate Checkout | Meta prefer `facebookads-actions.offsite_conversion.fb_pixel_initiate_checkout`, fallback `facebookads-actions.omni_initiated_checkout`; TikTok `tiktok-initiate_checkout` |

Ecom metrics (discover, don’t blind-copy): Platform Revenue / Platform Orders. Hotel: Booking Starts etc.

## Workflow

1. `list_workspaces` / `load_workspace` → target `workspaceId`
2. Discover connectors + native fields (`search_fields`); skip create if custom already exists
3. Obtain fresh `x-auth-token` from logged-in Funnel session (CDP/network sniff); never paste into chat
4. `POST` one field; expect 201
5. **Double-verify:** `search_fields` finds new id; `query_data` or Data Explorer spot-check (Channel filter + Platform Source + new field + Cost)
6. Keep-all unless the owner says delete; keep a verify invent of every create
7. Then build export via funnel-bq-export-maintain — create/save only; never enable/run/backfill (owner owns start)

## Anti-patterns

- Don’t use Control Plane for rule-bearing customs
- Don’t drive the Funnel rule-builder UI when this API path works
- Don’t hardcode one client’s platform set onto another
- Don’t enable production exports — owner start = owner owns
- Don’t skip double-verify after create
