---
name: exam-compact-decoder
description: "Use this to verify and JSON-parse the exact local Exam support archive with a bounded standard-library decoder; never execute decoded data."
---

# Safe Exam support decoder
Use this exact stdlib program with complete native skill-body files for all 5 exam-compact-data parts. Obtain those files through supported native skill readback, never an invented path or remote fetch. Run the trusted program as code; its decoded archive is JSON DATA ONLY. Never exec/eval, source, import, or run any decoded field. Example arguments: --out support.json <5 retrieved skill-body paths>. Inspect the real success receipt and parsed output; do not claim decoding succeeded without execution.

```python
# Decode only the frozen support archive. Decoded bytes are data, never code.
import argparse, base64, hashlib, json, re, lzma
from pathlib import Path
p = argparse.ArgumentParser()
p.add_argument("--out", required=True)
p.add_argument("parts", nargs=5)
a = p.parse_args()
parts = {}
for path in a.parts:
    text = Path(path).read_text()
    m = re.search(r"PART ([0-9]+)/5\n```base64\n([A-Za-z0-9+/=\n]+)\n```", text)
    if not m: raise SystemExit("Missing/truncated archive part")
    n = int(m[1])
    if n in parts: raise SystemExit("Duplicate archive part")
    parts[n] = m[2].replace("\n", "")
if set(parts) != set(range(1, 6)):
    raise SystemExit("Wrong archive part set")
packed = base64.b64decode("".join(parts[i] for i in range(1, 6)), validate=True)
d = lzma.LZMADecompressor(format=lzma.FORMAT_XZ, memlimit=33554432)
raw = d.decompress(packed, max_length=158219)
if len(raw) != 158218 or not d.eof or d.unused_data:
    raise SystemExit("Wrong decoded size or trailing/incomplete archive")
digest = hashlib.sha256(raw).hexdigest()
if digest != "193eaae45b5571b5346fb7370c53a1127015617068b8d03678f9ad4944296002":
    raise SystemExit("Archive SHA-256 mismatch")
data = json.loads(raw)
if set(data) != {"memory", "routines"} or len(data["memory"]) != 5 or len(data["routines"]) != 2:
    raise SystemExit("Wrong support archive structure")
Path(a.out).write_bytes(raw)
print(json.dumps({"decoded_bytes": len(raw), "sha256": digest, "memories": 5, "routines": 2}))
```
EXAM-COMPACT-END decoder 41b6e5466262d522
