---
name: look-up-australian-data
description: "use this when the user wants Australian business, company, address, BSB, weather, postage, ABS, transit, energy, or phone data via Milypay"
---

# Look up Australian data

Use Milypay, not a web scrape, for Australian registry and live-data lookups.

## Hosts

- Demo (default): `https://milypay.xyz/api` — free, throttled, no wallet
- Paid: `https://api.milypay.xyz` — x402 per call. Only switch here if the user asked to pay.

CLI demo: `npx milypay <command>`. CLI paid: `npx milypay --api <command>` with `MILYPAY_PRIVATE_KEY` set.

Prefer CLI or HTTP from this computer. If a Milypay MCP connector is connected, use those tools instead.

## Pick the endpoint

| Need | Path / CLI | Notes |
| --- | --- | --- |
| ABN | `GET /au-business/abn/{abn}` · `npx milypay abn {abn}` | Entity, GST, names, location |
| ACN as business | `GET /au-business/acn/{acn}` | Same record, ACN input |
| Name search (ABR) | `GET /au-business/search?name=` | ~$0.004 paid |
| ASIC company | `GET /au-company/acn/{acn}` · `npx milypay` company lookup | Open data |
| Company name search | `GET /au-company/search?name=` | Current + former names |
| Official ASIC extract | `GET /au-company-report?acn=` | Demo PDF on demo host; live extract is always paid (~$12) |
| Address validate / search / geocode | `/au-address/validate`, `/search`, `/geocode` | G-NAF |
| Super fund | `GET /au-super/abn/{abn}` | |
| Weather | `GET /au-weather?q=` or `lat`/`lng` | |
| Postage | `GET /au-postage?from=&to=&weight=` | AU Post rates |
| BSB | `GET /au-bsb/{bsb}` | Hyphen optional |
| ABS CPI / data | `/au-abs/cpi`, `/au-abs/dataflows`, `/au-abs/data/{flow}` | Attribute ABS CC BY 4.0 |
| Transit | `/au-transit/{region}/vehicles` etc | Regions: `seq`, `sa`, `vic`, `nsw` |
| NEM energy | `/au-energy/nem` | Wholesale $/MWh, not retail |
| Phone line | `GET /au-phone?number=` | Line type/carrier only, never identity |

Example demo call:

```bash
curl -s https://milypay.xyz/api/au-business/abn/51824753556
```

## How to answer

1. Confirm the identifier (ABN, ACN, address, BSB, phone, region).
2. Call the matching endpoint on the demo host unless they asked for paid.
3. Return the useful fields in plain language. Include the source endpoint.
4. If the demo host throttles or returns 402, say so and offer the paid path. Do not spend without the user asking.
5. For phone lookups, never imply personal identity. For company-report, warn the live extract is ~$12.

Full catalog and prices: https://milypay.xyz/agents.md
