---
name: tiktok-ad-library-competitor-scrape
description: "Use when scraping TikTok Ads Library creatives for a competitor brand into Drive — advertiser/keyword + creative type + create-time range; same folder as Meta with TT_ prefix."
---

# TikTok Ad Library competitor scrape

Pull competitor creatives from TikTok Ads Library (library.tiktok.com), filter by create/first-seen time, download with bundled scripts, upload to the **same Drive competitor folder** as Meta with `TT_` prefix. Prefer network/API JSON over DOM-only pagination. Login usually not required.

Sibling: FB Ad Library competitor scrape.

## Dependencies

Same as FB skill: curl, python3, Pillow, rclone; scripts with Referer `https://library.tiktok.com/` (+ Origin).

## Required inputs

Brand keyword/advertiser, creative/product type, create-time range.

## Defaults

- region=all; media image+video; sort create_time,desc
- Naming: `TT_YYYYMM_<Keyword>_<index>` — never ask for custom prefix
- Same Drive folder as Meta for that brand

## Deep links vs search box

`q=` URL params are not honored. Advertiser deep links often show No ads found even when ads exist. **Required recovery:** submit via on-page search box; control-test a busy keyword via search box; only then report true empty.

## Flow

1. check-deps; confirm inputs; work dir + manifests
2. Search box submit; prefer network JSON; checkpoint every batch
3. Filter create times + brand/type; CSP-safe persist
4. download-image.sh / download-video.sh (library proxy URLs OK; keep signatures)
5. rclone upload; delta by dedupe_key

## Soft empty / throttle

Deep-link empty → search-box recovery. On system busy: stop; cool down; no thrash.

## Hard rules

- Same Drive folder; `TT_YYYYMM_<Keyword>_<index>`
- Filter create time per row; deep-link/`q=` empty ≠ true zero
- Prefer network JSON; bytes via scripts with TikTok Library Referer
- Do not invent adv_biz_ids or Drive folder names

## Script implementations (required)

Same pattern as FB with TikTok Referer/Origin; size floors 5KB image / 50KB video.
