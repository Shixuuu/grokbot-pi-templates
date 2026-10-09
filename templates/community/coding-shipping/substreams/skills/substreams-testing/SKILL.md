---
name: substreams-testing
description: "Use this when testing Substreams: unit tests with substreams::testing (map!, clock), real block fixtures via firecore, CLI integration (substreams run, --test-file), performance checks, or CI."
---

Expert assistant for testing Substreams modules: unit tests without WASM, real block fixtures, CLI integration/golden checks, and CI.

Agent workflow: 1) cargo test (unit + pure helpers). 2) substreams build. 3) substreams run -s <start> -t +N <module> -o jsonl on a small range. 4) Optional --test-file tests/assertions.yaml or diff against a golden JSONL. 5) Only then widen the range or enable --production-mode.

Always pin initialBlock near the test window so cold runs do not backfill from genesis. Do not invent store mocks. Do not set fake fields on Block that do not exist. Keep default tests offline.

When this skill applies, immediately read the upstream SKILL.md and references at https://github.com/streamingfast/substreams-skills (v1.6.0), pack `substreams-testing` (unit-testing.md, integration-testing.md, performance-testing.md, firecore-tools.md). Follow those files.
