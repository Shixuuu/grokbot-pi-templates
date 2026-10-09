---
name: mac-tidy-playbook
description: "Use this for Mac cleanup, weekly Downloads/Desktop tidy, stale-repo review, or disk reclaim on the user's registered Mac."
---

# Mac tidy playbook

Use this for any Mac cleanup, weekly tidy, Downloads/Desktop sort, stale-repo review, or disk reclaim the user asks for.

## Setup
1. Call ListMachines. Prefer the connected Mac the user is on (or the one they named).
2. Always use Shell/Read with that machineId. Never treat the box as the user's Mac.
3. If Downloads or Desktop returns Operation not permitted, stop organizing those folders and tell the user to grant Desktop & Downloads access for local execution (macOS Privacy), then retry.

## Part 1 — Downloads & Desktop only
Scope: only top-level loose **files** in `~/Downloads` and `~/Desktop`.

Create category folders **inside the same source folder** if missing:
Documents, Images, Videos, Audio, Archives, Installers, Spreadsheets, Presentations, Code, PDFs, Screenshots, Other.

Move each loose file into the best matching category in that same folder.

**Never move:** hidden files, in-progress downloads (`.crdownload`, `.part`, `.download`, `.tmp`), app bundles (`.app`), package directories, existing category folders, or any already-organized folder (topic folders stay put).

**Never delete** anything in Part 1.

Categorize by extension (Screenshots for screenshot-named images):
- Documents: doc/docx/txt/rtf/odt/pages/md
- Images: jpg/jpeg/png/gif/webp/heic/tiff/bmp/svg
- Videos: mp4/mov/avi/mkv/m4v/webm
- Audio: mp3/wav/m4a/aac/flac/aiff
- Archives: zip/rar/7z/tar/gz/tgz/bz2
- Installers: dmg/pkg/msi/exe
- Spreadsheets: xls/xlsx/csv/numbers
- Presentations: ppt/pptx/key
- Code: js/ts/py/rb/go/rs/java/swift/c/cpp/h/json/yml/yaml/xml/sh/html/css (and similar)
- PDFs: pdf
- Other: everything else that is a regular loose file

Quote paths with spaces. Verify destinations after moves.

## Part 2 — Home monitoring (conservative)
List top-level home items. Do **not** reorganize home by default.

Flag only folders that look like git repos or software-dev work.

For repo-related folders with last meaningful touch older than 30 days:
- Report git status (short), remotes, and whether GitHub archival/push looks feasible
- Do **not** push, delete, archive, or remove automatically unless clearly safe and fully reversible in the current run (default: report only)

For software-dev folders: only auto-remove **clearly disposable** caches/generated artifacts (e.g. obvious rebuildable build outputs). If uncertain, leave and report.

Never uninstall apps, SDKs, package managers, or toolchains — candidates only.
Never delete a repository folder just because it is old.

## Disk reclaim (only when asked)
When the user wants to free space toward a target:
1. Measure Data volume / APFS container free space (du can overcount with clones).
2. Prefer reclaim order: XCTestDevices → XcodeBuildMCP workspaces → safe caches (DerivedData, DeviceSupport, tool caches) → CoreSimulator runtimes (careful) → stale repos.
3. For stale GitHub projects the user wants archived: create an archive branch, commit local work (skip secrets and obvious non-public course materials unless asked), push, verify on remote, **then** delete the local folder only after explicit confirmation.
4. Experiment clones the user says they can't push: local delete is OK when they say so.

## Report shape
After each run, report:
- files moved (by source + category)
- folders reviewed and what was detected
- repo candidates older than 30 days (last-touch, git status, remote, push feasibility)
- caches/artifacts removed + reasons (or none)
- items left untouched + why
- later-delete candidates + reasons
- uncertainties needing user review

If nothing material changed on a scheduled run, stay quiet.

## Tone
Short, concrete, no filler. Lead with results. Ask with a question widget before destructive batches.
