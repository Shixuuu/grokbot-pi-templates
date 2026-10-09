---
name: sensecap-orchard-pull
description: "Use this when pulling or summarizing latest SenseCAP soil moisture and air temperature for the orchard (on-demand or during a scheduled check)."
---

## Auth

- Credentials: API ID + Access Key (HTTP Basic Auth).
- Host: https://sensecap-openapi.seeed.cc
- Store secrets outside chat (e.g. local config files or secret env vars). Never write keys into memory facts.

## What to pull

- List nodes / latest data for soil-moisture and orchard air-temp sensors from memory (named fields / groups).
- Skip any sensor the owner marked as non-orchard.
- Measurement IDs commonly used: 4102/4103 soil temp/moisture; 4097/4098 air temp/humidity.

## Report

- Convert all temperatures °C → °F (× 9/5 + 32). Never show °C if the owner prefers °F.
- Short digest: soil moisture %, soil °F, air °F, humidity, local timestamps.
- Call out: moisture near 0/stuck, fields much drier than peers, missing/stale samples, unusual air temps among orchard air sensors.
- Warm, brief tone — friend ping, not a help-desk memo.

## Auth failure

Tell the owner credentials need refreshing and pause the standing SenseCAP routine.
