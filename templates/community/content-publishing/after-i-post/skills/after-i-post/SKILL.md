---
name: after-i-post
description: "Follow an X post after publication, surface what deserves action, and learn from outcomes. Use for every watch."
---

# After I Post

## Trigger

Use this Skill whenever the user provides an X post URL or asks to watch, review, follow, learn from, or act on a post after it has been published.

## Job

Follow one X post through a time-bounded lifecycle. Surface the people and ideas worth acting on. Preserve evidence that improves the user's future judgment.

## Runtime selection (deterministic)

There are exactly two runtime modes. Never invent a third. Never mix their data roots.

### Full runtime

Use **only** when the complete workflow tree is present and valid on this Bot Computer:

- `workflows/after-i-post/scripts/storage.py`
- `workflows/after-i-post/references/storage-contract.md`
- `workflows/after-i-post/references/operating-protocol.md`
- `workflows/after-i-post/references/signal-model.md`
- `workflows/after-i-post/references/output-contracts.md`
- `workflows/after-i-post/references/learning-policy.md`
- `workflows/after-i-post/references/approval-boundaries.md`

Data root: `AFTER_I_POST_HOME` if set, otherwise `/home/box/agent-data/after-i-post`.

Storage backend: SQLite schema v3 via `python3 scripts/storage.py`.

Validate with `python3 scripts/storage.py validate`. Describe this only as full-runtime / SQLite validation.

### Portable template runtime

Use when the shared Bot contains only this SKILL.md (or the full tree is missing/invalid).

Data root (recipient-specific Agent Computer path):

`/home/box/agent-data/agents/<this-agent-id>/after-i-post-portable/`

Record `storage_backend=portable_json` and `portable_contract_version=1` in `meta.json`.

Implement the store exactly as **Portable JSON contract v1** below (also mirrored by `scripts/portable_storage.py` when the full tree is present). Describe validation only as portable-json validation — never as SQLite or full-package validation.

If `scripts/portable_storage.py` exists, prefer it. If it does not (template-only share), follow the contract in this Skill literally with atomic file writes. Never create a different schema.

## Entry modes

- **Auto Watch** — configured account publishes an eligible new post.
- **Watch This Post** — user supplies any public X post URL. Only that post is watched unless they enable account auto-watch.

## Live-watch invariants (both runtimes)

1. A requested watch is only **prepared** after its watch record and baseline snapshot are persisted.
2. A watch is only **live** when the single master Routine `After I Post Watch` is **enabled** and its **next run is known**.
3. Never say “watching,” “watch is live,” or “I’ll check every 15 minutes” before all three are verified: persisted watch, enabled master Routine, known next run.
4. If the Routine is paused: say the baseline is saved; ask for timezone confirmation and permission to enable monitoring.
5. Manual “watch this for the next 24 hours” closes 24 hours after **acceptance**. Auto-discovered owned posts close 24 hours after **publication**. Retrospective analysis has no active close time.
6. One master Routine handles every watch. Never create one Routine per post.

## First action

1. Select runtime (full vs portable_json).
2. Initialize/validate storage for that runtime only.
3. Inspect the supplied post before asking questions. Resolve canonical post ID and URL, capture available source evidence, infer the likely goal, and persist the baseline.
4. Present the watch contract using prepared vs live language from the invariants above.

If the URL is invalid, ambiguous, inaccessible, or does not resolve to a specific X post, stop and explain exactly what is missing.

## Connector behavior

- Public sources may provide an initial baseline.
- Installing a connector requires explicit user approval.
- Connecting an account requires user action.
- Do not include generic connector capability lists, promotional language, or credit balances in normal After I Post output.
- After connection, resume the interrupted watch automatically.
- Continue pagination within configured limits.
- Record an explicit collection run for replies, quotes, reposts, and likes — including unavailable or skipped collections.

## Routine

Use one master Routine named `After I Post Watch`. It reads active posts from storage and decides what is due. Keep it paused until timezone and permission are confirmed. Stay quiet when no material signal appears.

## Approval

Browsing, evidence capture, local storage, analysis, and drafting are allowed.

Require explicit approval before any post, reply, quote post, direct message, follow, unfollow, delete, account change, connector installation, login, credential entry, purchase, or other external side effect.

## Completion

A normal watch ends with a stored Post Return and one recommended next move. Closure with no further action is valid.

Missing evidence remains UNKNOWN. Never infer private analytics from public metrics.

## Required references (full runtime)

When full runtime is selected, read before acting:

1. `references/operating-protocol.md`
2. `references/storage-contract.md`
3. `references/signal-model.md`
4. `references/output-contracts.md`
5. `references/learning-policy.md`
6. `references/approval-boundaries.md`

When portable runtime is selected, this Skill’s embedded contract is authoritative; if references are absent, do not improvise a third store.

---

# Portable JSON contract v1

`portable_contract_version`: `1`  
`storage_backend`: `portable_json`  
`package_version`: `0.2.0`

## Layout

```
<data-root>/
  meta.json
  indexes/
    active_watches.json
    closed_watches.json
    latest_snapshots.json
  append/
    posts.jsonl
    post_versions.jsonl
    post_snapshots.jsonl
    responses.jsonl
    response_versions.jsonl
    response_metric_snapshots.jsonl
    post_relationships.jsonl
    engagement_actors.jsonl
    collection_runs.jsonl
    signals.jsonl
    recommendations.jsonl
    decisions.jsonl
    routine_runs.jsonl
    evidence.jsonl
    corrections.jsonl
  evidence/
  backups/
  exports/
```

## meta.json (atomic replace)

Required keys: `storage_backend` (`portable_json`), `portable_contract_version` (`1`), `package_version`, `timezone` (null until confirmed), `config` (object; may hold auto_watch_* without secrets), `updated_at` (UTC ISO 8601).

## indexes (atomic replace)

- `active_watches.json`: map `post_id` → watch summary (status=active|prepared, watch_mode, ownership, accepted_at, watch_ends_at, goal, …)
- `closed_watches.json`: map `post_id` → closed summary
- `latest_snapshots.json`: map `post_id` → `snapshot_id` only. **Derived pointer.** Never count as a metric snapshot. Updating a pointer does not create a snapshot.

Atomic replace = write `*.tmp` then `os.replace` onto the target.

## append/*.jsonl (append-only)

Each line is one canonical JSON object with a stable unique `id` (or domain primary key). Never rewrite or delete lines. Unknown is JSON `null`, never `0` when the field means unknown.

### posts

Keys: `post_id`, `account_id`, `canonical_url`, `author_handle`, `published_at`, `platform_kind`, `content_type`, `ownership` (`owned`|`external`|`unknown`), `conversation_id`, `watch_mode` (`auto`|`manual`), `goal`, `goal_is_inferred`, `status`, `watch_started_at`, `watch_ends_at`, `closed_at`, `edit_history`, `captured_at`, `text`, `metadata`

### post_versions

Keys: `version_id`, `post_id`, `captured_at`, `text`, `content_hash`, `evidence_id`

### post_snapshots (immutable root metrics)

Keys: `snapshot_id`, `post_id`, `captured_at`, `source`, `impressions`, `likes`, `replies`, `reposts`, `quotes`, `bookmarks`, `link_clicks`, `profile_visits`, `media_views`, `retrieval_channel`, `metric_visibility`, `raw`, `evidence_id`  
Null for unavailable metrics. Deduplicate by `snapshot_id`.

### responses / response_versions

`responses`: `response_id`, `parent_post_id`, `kind` (`reply`|`quote`), `author`, `url`, `first_captured_at`  
`response_versions`: `version_id`, `response_id`, `parent_post_id`, `kind`, `url`, `captured_at`, `text`, `content_hash`, `metrics`, `evidence_id`

### response_metric_snapshots

Keys: `snapshot_id`, `response_id`, `parent_post_id`, `kind`, `captured_at`, `impressions`, `likes`, `replies`, `reposts`, `quotes`, `bookmarks`, `media_views`, `retrieval_channel`, `metric_visibility`, `raw`, `evidence_id`

### post_relationships

Keys: `relationship_id`, `from_post_id`, `to_post_id`, `root_post_id`, `relationship_kind` (`root`|`replied_to`|`thread_parent`|`conversation`|`quoted`|`reposted`), `conversation_id`, `captured_at`, `source`, `evidence_id`  
Direct replies: `relationship_kind=replied_to` and `to_post_id=root`. Nested replies: `replied_to` with `to_post_id` ≠ root (also record `thread_parent` when known). Deduplicate edges by (`from_post_id`,`to_post_id`,`relationship_kind`).

### engagement_actors

Keys: `actor_row_id`, `root_post_id`, `interaction_kind` (`reply`|`quote`|`repost`|`like`), `author`, `display_name`, `platform_object_id`, `created_at`, `first_seen_at`, `last_seen_at`, `source`, `evidence_id`

### collection_runs (always record attempts)

Keys: `run_id`, `root_post_id`, `collection_kind` (`replies`|`quotes`|`reposts`|`likes`), `endpoint_or_tool`, `started_at`, `finished_at`, `pages_requested`, `items_returned`, `reported_count`, `collected_unique`, `pagination_exhausted` (bool), `pagination_status`, `coverage_status` (`complete`|`partial`|`unavailable`|`unknown`), `completion_basis`, `discrepancy_reason`, `truncation_reason`, `error`, `retrieval_channel`, `evidence_id`, `metadata`  
Record even when the endpoint fails, returns zero records, or is intentionally skipped.

### signals

Keys: `signal_id`, `post_id`, `response_id`, `detected_at`, `kind`, `summary`, `evidence`, `confidence`, `materiality`, `scores`, `status`, `metadata`

### recommendations / decisions

`recommendations`: `recommendation_id`, `post_id`, `signal_id`, `created_at`, `action_type`, `recommendation`, `rationale`, `urgency`, `confidence`, `status`  
`decisions`: `decision_id`, `recommendation_id`, `decided_at`, `status`, `note`, `actor`  
Deduplicate recommendations by (`post_id`,`response_id`,`action_type`, content hash).

### routine_runs

Keys: `run_id`, `started_at`, `finished_at`, `status`, `summary`, `interrupted`, `metadata`

### evidence

Keys: `evidence_id`, `post_id`, `captured_at`, `kind`, `source_url`, `relative_path`, `sha256`, `mime_type`, `notes`  
Never store secrets, cookies, tokens, credentials, or private messages.

### corrections

Keys: `correction_id`, `account_id`, `created_at`, `original_behavior`, `user_correction`, `derived_rule`, `status`, `metadata`

## Validation (portable)

Fail closed on: malformed JSON, missing required fields, invalid references (orphan FKs), duplicate IDs, impossible watch dates (`watch_ends_at` < `watch_started_at` / `accepted_at`), unrecognized `portable_contract_version` or `storage_backend`.

Success language: “portable-json validation ok (contract v1)”. Never claim SQLite validation in portable mode.

## Backup and export

- Backup: copy the entire data root into `backups/<UTC-timestamp>/` excluding nothing required for restore; never include connector credentials (they must not exist in the store).
- Export: write JSONL copies of each append table plus `meta.json` into `exports/<UTC-timestamp>/`.

## Security

Never store secrets, connector credentials, cookies, tokens, private messages, payment data, or unrelated personal information.
