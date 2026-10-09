---
name: fb-ad-library-competitor-scrape
description: "Use when scraping Meta/Facebook Ad Library creatives for a competitor brand into Drive — keyword + creative type + date range, with login required for pagination."
---

# FB Ad Library competitor scrape

Pull competitor creatives from Meta Ad Library, filter by **Started running**, download media with the bundled scripts, upload to Drive. Prefer logged-in Facebook; rate-limit every network step.

Scripts live beside this skill:

- `scripts/check-deps.sh` — required/optional dependency check (`--install` to attempt install)
- `scripts/download-image.sh` — signed still via curl + Facebook Referer
- `scripts/download-video.sh` — CDN video via curl + Facebook Referer
- `scripts/verify-image.py` — reject tiny/placeholder JPEGs (Pillow)

Resolve the skill directory first (this folder), then call the scripts by absolute path.

## Dependencies

| Dep | Required? | Used for | Install |
|---|---|---|---|
| `curl` | **yes** | image + video download | `sudo apt-get install -y curl` |
| `python3` | **yes** | `verify-image.py` | `sudo apt-get install -y python3` |
| `Pillow` (`PIL`) | **yes** | image dimension/format check | `python3 -m pip install Pillow` |
| `rclone` | for Drive upload | copy into competitor folders | [rclone.org/install](https://rclone.org/install/) (prefer official, not random apt) |
| `file` | optional | soft video mime sniff | `sudo apt-get install -y file` |

Also needed at runtime (not apt packages): logged-in Facebook session in the agent browser; rclone remote already configured for the target Drive if uploading.

### Preflight (mandatory)

```bash
SKILL_DIR=.../fb-ad-library-competitor-scrape
"$SKILL_DIR/scripts/check-deps.sh"
# or
"$SKILL_DIR/scripts/check-deps.sh" --install
```

Do not start pagination or downloads if required deps fail. `rclone` warn-only is OK when the run is download-only; fix rclone before upload.

## Required inputs (ask if missing)

| Input | Meaning |
|---|---|
| **Brand keyword** | Ad Library search query |
| **Creative / product type** | Disambiguation for name collisions; reject lookalikes |
| **Time range** | **Started running** window. Optional URL impressions soft pre-filter only — never sole filter |

## Defaults

- Country/region: worldwide
- Media: image + video
- File naming: `YYYYMM_<Keyword>_<index>.<ext>` — never ask for a custom prefix
- Upload target: mapped Drive competitor subfolder (caller supplies; do not invent)

## Before any scrape

1. Run `scripts/check-deps.sh`.
2. Verify Facebook login on facebook.com home (empty Ad Library is not proof of logout).
3. Confirm keyword, creative type, time range; create work dir + manifests.
4. Multi-brand: wait several minutes between keywords.

## Ad Library search

Stay on keyword results; do not open advertiser Pages. Filter every card by **Started running**.

## Soft rate-limit / empty-state

Stop that keyword on explicit empty, blank results, or session soft-limit. Cool down; no burst retries.

## Pagination

Slow scroll-to-bottom; checkpoint `manifest-candidates.json` every batch; CSP-safe export via shell/file or chunked transfer.

## Download media

```bash
"$SKILL_DIR/scripts/download-video.sh" "$VIDEO_URL" "OUT.mp4"
"$SKILL_DIR/scripts/download-image.sh" "$IMAGE_URL" "OUT.jpg"
"$SKILL_DIR/scripts/verify-image.py" "OUT.jpg"
```

Keep signed query strings intact. Referer: `https://www.facebook.com/`. Delta-download new dedupe_keys only.

## Upload

rclone into the brand competitor folder. Report paths and counts.

## Hard rules

- check-deps before scrape; verify login on facebook.com home
- Stay on keyword results; always filter by Started running
- Naming `YYYYMM_<Keyword>_<index>`; soft rate-limit → stop and cool down
- Checkpoint manifests; bytes via download scripts, not browser hacks

## Script implementations (required)

Create `scripts/` with: check-deps.sh; download-image.sh / download-video.sh (curl + Facebook Referer, keep signatures, size floors 5KB/50KB); verify-image.py.
