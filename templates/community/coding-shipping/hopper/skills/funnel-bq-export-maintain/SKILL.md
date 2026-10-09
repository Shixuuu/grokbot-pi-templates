---
name: funnel-bq-export-maintain
description: "use this when inspecting, cloning, maintaining, or diagnosing Funnel.io → BigQuery paid search / paid social raw exports for client onboard"
---

# Funnel → BigQuery export maintain

Own normalized paid-media raw landing: Funnel custom exports → the owner’s raw BigQuery dataset. Not dashboard UI.

## Standing rule — create, never start

You **may create and save** export definitions (fields, filter, destination, schedule).

You must **never**:
- enable / turn on an export
- click Run / Start / Sync now
- trigger a backfill or first load

Leave every new or edited export **disabled**. When the owner enables or runs it, that is **their** accountability for production data landing. Do not ask to enable unless they explicitly tell you to turn it on.

## Gold references

Ask the owner which Funnel workspaces/exports are gold. Typical pattern:

| Industry shape | Search table pattern | Social table pattern | Conversion metrics |
|---|---|---|---|
| Hotel | `search__{client_slug}` | `social__{client_slug}` | Booking Starts (discover) |
| Ecom | `search__{client_slug}` | `social__{client_slug}` | Platform Revenue / Orders (discover) |

## Shared recipe (both channels)

1. **Destination:** Google BigQuery · owner’s credentials · their project + raw dataset · **single table** · auto-create dataset on · summary off · safe field names
2. **Naming:** `{search|social}__{client_slug}` (double underscore) — or per-platform tables in a client dataset if they prefer
3. **Filter:** Channel exactly matches `Paid Search` or `Paid Social` (one filter)
4. **Schedule:** Daily 4:00 am America/New_York · daily partition · rolling range (match client preference, often ~3–24 months)
5. **Currency:** Original
6. **Save disabled** — see standing rule above. Confirm field list / dest when they ask to review; never enable for them.

## Dimension spine (shared)

Prefer **custom / cross-platform dimensions** so Google + Meta (+ Bing later) land in one column. Never invent campaign/ad ids.

| Funnel field | Typical BQ header | Notes |
|---|---|---|
| Date | `Date` | |
| Client ID | `Client_ID` | constant per client |
| Platform Source | `Platform_Source` | |
| Channel | `Channel` | also the export filter |
| Status | `Status` | |
| Campaign ID | `Campaign_ID` | |
| Campaign | `Campaign` | |
| Ad Set ID | `Ad_Set_ID` or `Ad_Group_ID` | keep client naming convention |
| Ad Set / Ad Set Name | `Ad_Set_Name` or `Ad_Group` | |
| Ad ID | `Ad_ID` | |
| Creative Format | `Creative_Format` | |
| Placement | `Placement` | |

**Search-only:** add `Keyword` when the Google Ads source is keyword-capable (`Search Keyword` report type, or Standard at ad-group/ad grain that actually returns keywords). Campaign-level Standard / Asset reports will leave Keyword null.

**Social-only (ecom creative grain):** after Ad ID add Creative, then Creative Format, Placement, CTA, Creative URL, Video Length (STRING dim), Ad Descriptions. Hotel/lean social can omit creative extras.

## Metrics (dynamic — discover per client)

Always include delivery:

- Cost, Impressions, Clicks

Then **discover** conversion/KPI custom measures in that workspace. Do **not** copy ecom metrics onto a hotel client or hotel metrics onto ecom.

## Inspect / diagnose checklist

1. List Funnel workspaces; open the client workspace (MCP `list_workspaces` / `load_workspace`).
2. In UI: Data → Export → Google BigQuery. Read the live export config (not MCP source summary labels alone).
3. Verify filter Channel, field order, BQ table name, last-run success, schedule, **enabled=false for drafts you created**.
4. Check data sources: report type + report level. Keyword/ad-group nulls → wrong grain (need Search Keyword or Ad Group/Ad level). PMax has no keywords — keep separate campaign-level feed if needed.
5. Prefer custom dims over native platform fields for shared columns.
6. Verify land in BQ when credentials allow. Never claim landed without checking.
7. If AOV/KPI looks wrong: confirm which metrics the export actually ships vs what the dashboard computes.

## Onboard a new client (clone)

1. Discover connectors present (do not assume Meta/TikTok/Google).
2. Ensure custom dim spine exists — prefer funnel-fields-api (`POST api.us.fields.funnel.io/.../fields/` + `derived.expr`) over the UI rule builder. Clone mappings from the gold references; add platform deps for new sources.
3. Discover conversion metrics for that business; create/map custom measures as needed.
4. Build **Paid Search Export** + **Paid Social Export** (or one channel if only one applies) — **save disabled**.
5. Owner reviews → **they** enable/run → then verify first BQ load.
6. Update this skill or a client note with table slug + conversion metric set.

## Custom fields API (preferred)

Use funnel-fields-api. Browser session `x-auth-token` + `meld-fields-app` origin. Control Plane / Terraform custom-fields = shells only (no rules).

## Optional Control Plane path

Funnel Control Plane API (Terraform provider) can create/update BigQuery **exports** via `POST/PUT .../exports` with system-user OAuth. If creating via API, set `enabled = false`. UI remains fallback for export wizard if needed.
