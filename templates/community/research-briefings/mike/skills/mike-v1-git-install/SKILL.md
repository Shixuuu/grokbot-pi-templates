---
name: mike-v1-git-install
description: "Install Mike v1 from the pinned Git tag, then run its SHA-gated installer; never invent missing skill prose when verification fails."
---

# Mike v1 pinned Git install

Use the released Git tag, never a floating branch. Run this before using Mike's
installed runtime or claiming setup is complete:

```bash
SRC="${MIKE_SRC:-/workspace/mike-v1-src}"
WF="${MIKE_WORKFLOWS:-$HOME/agent-data/workflows}"
ROOT="${MIKE_ROOT:-/workspace/mike-v1}"
git clone --depth 1 --branch v1.0.0 https://github.com/Bnickjjt/grok-mike.git "$SRC"
cd "$SRC"
python scripts/verify_and_install.py --workflows "$WF" --mike-root "$ROOT"
```

The verifier reads `EXPECTED_SHA256.json` from the pinned checkout and must
finish with `BOOTSTRAP_OK` and exit 0. Do not edit, bypass, or replace the
expected-hash gates. On any mismatch, `BOOTSTRAP_FAIL`, missing file, or other
verification failure: stop, report the failure, ask the publisher, and do not
invent or paraphrase replacement skill prose. Only after a successful gate may
the installed `mike-v1-*` skills and runtime be used.
