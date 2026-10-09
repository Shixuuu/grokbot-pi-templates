---
name: trading-memory-getting-started
description: "Use this when Trading Memory runs for the first time for a new owner, or when tm.py or the journal cannot be verified: it installs and checksum-verifies the helper from trading-memory-helper, checks for a journal needing recovery or migration BEFORE creating anything, then welcomes the owner and offers the two onboarding routes."
---

# Trading Memory - getting started
First run for a new owner, or whenever `tm.py` or the journal cannot be verified; the single home for install/upgrade, recovery, migration and init. Follow `trading-memory-spec` (boundaries: A). No creator data; the owner starts with an empty journal of their own. Nothing here deletes files.

Expected helper: tm.py version 1.1.0, SHA-256 `058110d89a35abc2325ccdda3dd27ef849c74d5f822841b32bbcbb09a706058c`, 137281 bytes, embedded in `trading-memory-helper` (packed bz2 + base64 only for size; the unpacked checksum is authoritative).

## Step 1 - install or verify the helper (never rewrite it)
1. `export TM_HOME=/workspace/trading-memory` (generic default). If it holds anything but tm.py, journal.db, backups/, exports/, schema/, README, use a new empty directory (e.g. `/workspace/trading-memory-journal`), tell the user which and why, and use it throughout.
2. If `$TM_HOME/tm.py` exists, `sha256sum "$TM_HOME/tm.py"`. Expected hash: keep it. `560d13663fe5ad3b634a2189f696e92916e43957af5be2a0180693437583be8d` (tm.py 1.0.0): an upgrade; explain, and with the owner's OK `mv "$TM_HOME/tm.py" "$TM_HOME/tm-1.0.0.py"` (kept, not deleted), install as in 3, then Step 2 (reports `migration_required`). Anything else: never overwrite, edit or delete it; report both hashes and ask (e.g. install into a new TM_HOME).
3. If absent, unpack it with the installer below (v1.1) from the helper's file in the skill catalogue (typically `<agent data dir>/workflows/trading-memory-helper/SKILL.md`, or search it for `trading-memory-helper`; else save the complete helper skill text exactly as provided to a temp file; the checksum decides). It verifies payload hash, unpacked size and SHA-256, writes via a re-verified temp file with an atomic move, and refuses to replace a different tm.py.
4. Any installer error (hash or size mismatch, invalid base64, decompression failure): stop, tell the user the helper text did not transfer intact; never repair, re-encode, retype, rewrite, re-implement or hand-edit tm.py.
5. `python3 "$TM_HOME/tm.py" version` must show tm_version 1.1.0 and file_sha256 equal to the expected hash.

Get the installer without retyping it (the block below, SHA-256 `a7b4aa02322b14daff77df25ed3e5909d34791ecb5c38b2a3f55a290c1213dec`):
```bash
GS="<path to this trading-memory-getting-started SKILL.md>"
python3 -c 'import sys;L=open(sys.argv[1]).read().split("\n");i=L.index("```python install_tm.py");j=L.index("```",i+1);open(sys.argv[2],"w").write("\n".join(L[i+1:j])+"\n")' "$GS" /tmp/install_tm.py
sha256sum /tmp/install_tm.py   # must be a7b4aa02322b14daff77df25ed3e5909d34791ecb5c38b2a3f55a290c1213dec
python3 /tmp/install_tm.py --expected-sha256 058110d89a35abc2325ccdda3dd27ef849c74d5f822841b32bbcbb09a706058c --expected-size 137281 --dest "$TM_HOME/tm.py" "<path to trading-memory-helper SKILL.md>"
python3 "$TM_HOME/tm.py" version
```
The installer also accepts an older plain ```` ```python tm.py ```` helper split in two files (pass both).

```python install_tm.py
#!/usr/bin/env python3
"""Install tm.py from Trading Memory helper skill text, verified by SHA-256 (installer v1.1).

Usage: python3 install_tm.py --expected-sha256 HEX [--expected-size N] --dest "$TM_HOME/tm.py" HELPER_SKILL.md [HELPER_PART2_SKILL.md]

- Packed helper (v1.1): finds the fenced block opened by a line exactly "```text tm.py.bz2.b64" (or
  "```text tm.py.xz.b64") and closed by the next line exactly "```". The lines between are joined
  without separators and base64-decoded (strict alphabet). The SHA-256 of the decoded bytes must equal
  the "Compressed payload SHA-256" stated in the helper text. The bytes are then decompressed (bz2 or
  xz, output capped at the expected size + 1) and must form exactly one complete stream.
- Plain helper (v1.0, still accepted): the block opened by "```python tm.py" (or "```python tm.py part
  K/N") is used as-is: every line between the fences, joined with "\n", plus one final newline.
- The unpacked file must have the size stated in the helper ("tm.py size (unpacked): N bytes", packed
  form) and --expected-size when given, and its SHA-256 must equal --expected-sha256 AND the SHA-256
  stated in the helper text. The unpacked file's checksum is authoritative.
- Existing dest with the same hash: kept. Existing dest with a different hash: refused, untouched.
- Otherwise: written to a temp file beside dest, re-hashed, then linked into place atomically
  (never replaces a file). Exit codes: 0 ok, 2 extraction/decoding/hash failure, 4 different tm.py exists.
"""
import argparse, base64, binascii, hashlib, json, os, re, sys, tempfile

INSTALLER_VERSION = "1.1"
FENCE = re.compile(r"^```python tm\.py(?: part (\d+)/(\d+))?$")
PACKED_FENCE = re.compile(r"^```text tm\.py\.(bz2|xz)\.b64$")
STATED = re.compile(r"(?i)(?:whole[- ]file )?sha-?256[^0-9a-f\n]*\b([0-9a-f]{64})\b")
PART_STATED = re.compile(r"(?i)part (\d+)/(\d+) sha-?256[^0-9a-f\n]*\b([0-9a-f]{64})\b")
PACKED_STATED = re.compile(r"(?i)compressed payload sha-?256[^0-9a-f\n]*\b([0-9a-f]{64})\b")
SIZE_STATED = re.compile(r"(?i)tm\.py size \(unpacked\)[^0-9\n]*(\d+) bytes")
MAX_UNPACKED = 4 * 1024 * 1024  # hard cap when no size is known


def result(code, **kw):
    kw.setdefault("installer_version", INSTALLER_VERSION)
    print(json.dumps(kw, indent=2))
    sys.exit(code)


def fail(msg, **kw):
    result(2, ok=False, installed=False, error=msg, **kw)


def unpack(kind, b64_lines, packed_sha, sizes):
    """Decode base64, verify the compressed payload hash, decompress one complete stream."""
    text = "".join(l.strip() for l in b64_lines)
    try:
        payload = base64.b64decode(text.encode("ascii"), validate=True)
    except (binascii.Error, ValueError, UnicodeEncodeError) as ex:
        fail(f"packed block is not valid base64 ({ex}); helper text is altered or incomplete. "
             "Do not fix or rewrite tm.py; report this.")
    got = hashlib.sha256(payload).hexdigest()
    if got != packed_sha:
        fail("compressed payload SHA-256 mismatch: helper text is altered or incomplete. "
             "Do not fix or rewrite tm.py; report this.", compressed_sha256=got, stated_compressed_sha256=packed_sha)
    limit = (min(sizes) if sizes else MAX_UNPACKED) + 1
    try:
        if kind == "bz2":
            import bz2
            d = bz2.BZ2Decompressor()
        else:
            import lzma
            d = lzma.LZMADecompressor(format=lzma.FORMAT_XZ)
    except ImportError:
        fail(f"this Python has no '{kind}' module, so the packed helper cannot be unpacked here. "
             "Do not rewrite tm.py; report this.")
    try:
        data = d.decompress(payload, max_length=limit)
    except (OSError, EOFError, ValueError) as ex:
        fail(f"decompression failed ({ex}); helper text is altered or incomplete. Do not fix or rewrite tm.py; report this.")
    if not d.eof or d.unused_data or len(data) >= limit:
        fail("packed payload is truncated, has trailing data or is larger than the stated size. "
             "Do not fix or rewrite tm.py; report this.", unpacked_bytes_so_far=len(data))
    return data


def extract(paths, cli_sizes=frozenset()):
    parts, stated, part_stated, packed, packed_stated, size_stated = {}, set(), {}, [], set(), set()
    for p in paths:
        lines = open(p, encoding="utf-8", newline="").read().replace("\r\n", "\n").split("\n")
        i = 0
        while i < len(lines):
            m = FENCE.match(lines[i])
            pm = PACKED_FENCE.match(lines[i])
            if not (m or pm):
                i += 1
                continue
            j = next((k for k in range(i + 1, len(lines)) if lines[k] == "```"), None)
            if j is None:
                fail(f"unclosed tm.py fence in {p}")
            if pm:
                packed.append((pm.group(1), lines[i + 1:j]))
            else:
                k, n = (int(m.group(1)), int(m.group(2))) if m.group(1) else (1, 1)
                if k in parts:
                    fail(f"duplicate tm.py block (part {k})")
                parts[k] = (n, "\n".join(lines[i + 1:j]) + "\n")
            i = j + 1
        text = "\n".join(lines)
        for m in PART_STATED.finditer(text):
            part_stated[int(m.group(1))] = m.group(3)
        for m in PACKED_STATED.finditer(text):
            packed_stated.add(m.group(1))
        for m in SIZE_STATED.finditer(text):
            size_stated.add(int(m.group(1)))
        outside = "\n".join(l for l in lines if not (FENCE.match(l) or PACKED_FENCE.match(l)))
        outside = re.sub(r"(?i)part \d+/\d+ sha-?256[^\n]*", "", outside)
        outside = re.sub(r"(?i)compressed payload sha-?256[^\n]*", "", outside)
        for m in STATED.finditer(outside):
            stated.add(m.group(1))
    if packed:
        if parts or len(packed) != 1:
            fail("expected exactly one packed tm.py block and no plain tm.py block")
        if len(packed_stated) != 1:
            fail("helper text must state exactly one 'Compressed payload SHA-256'", found=sorted(packed_stated))
        if len(size_stated) != 1:
            fail("helper text must state exactly one 'tm.py size (unpacked): N bytes'", found=sorted(size_stated))
        kind, body = packed[0]
        return unpack(kind, body, packed_stated.pop(), size_stated | set(cli_sizes)), stated, size_stated
    if not parts:
        fail("no ```text tm.py.bz2.b64, ```text tm.py.xz.b64 or ```python tm.py block found")
    totals = {n for n, _ in parts.values()}
    if len(totals) != 1 or sorted(parts) != list(range(1, totals.pop() + 1)):
        fail(f"incomplete or inconsistent parts: found {sorted(parts)}")
    for k, (_, body) in parts.items():
        want = part_stated.get(k)
        if want and hashlib.sha256(body.encode("utf-8")).hexdigest() != want:
            fail(f"part {k} SHA-256 mismatch (part text altered)")
    return "".join(parts[k][1] for k in sorted(parts)).encode("utf-8"), stated, set()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--expected-sha256", required=True)
    ap.add_argument("--expected-size", type=int)
    ap.add_argument("--dest", required=True)
    ap.add_argument("skill_files", nargs="+")
    a = ap.parse_args()
    want = a.expected_sha256.strip().lower()
    sizes = set() if a.expected_size is None else {a.expected_size}
    data, stated, size_stated = extract(a.skill_files, sizes)
    got = hashlib.sha256(data).hexdigest()
    bad_size = [s for s in sizes | size_stated if s != len(data)]
    if bad_size:
        fail("size mismatch: unpacked tm.py does not have the expected byte size. Do not fix or rewrite tm.py; "
             "report this.", unpacked_size=len(data), expected_sizes=sorted(sizes | size_stated), extracted_sha256=got)
    if got != want or want not in stated:
        fail("SHA-256 mismatch: helper text is altered or incomplete. Do not fix or rewrite tm.py; report this.",
             extracted_sha256=got, expected_sha256=want, stated_in_helper=sorted(stated))
    dest = os.path.abspath(a.dest)
    if os.path.exists(dest):
        have = hashlib.sha256(open(dest, "rb").read()).hexdigest()
        if have == want:
            result(0, ok=True, installed=False, action="kept existing verified tm.py", path=dest, sha256=have)
        result(4, ok=False, installed=False, action="refused: a different tm.py already exists; left untouched",
               path=dest, existing_sha256=have, expected_sha256=want)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    fd, tmp = tempfile.mkstemp(prefix=".tm.py.install-", suffix=".tmp", dir=os.path.dirname(dest))
    try:
        with os.fdopen(fd, "wb") as f:
            f.write(data)
            f.flush()
            os.fsync(f.fileno())
        if hashlib.sha256(open(tmp, "rb").read()).hexdigest() != want:
            fail("temp file hash mismatch after write")
        os.chmod(tmp, 0o644)
        try:
            os.link(tmp, dest)  # atomic and fails if dest appeared meanwhile
        except FileExistsError:
            result(4, ok=False, installed=False, action="refused: tm.py appeared during install; left untouched")
    finally:
        if os.path.exists(tmp):
            os.unlink(tmp)
    final = hashlib.sha256(open(dest, "rb").read()).hexdigest()
    result(0 if final == want else 2, ok=final == want, installed=True, action="installed", path=dest,
           sha256=final, size_bytes=len(data))


if __name__ == "__main__":
    main()
```

## Step 2 - the journal: recovery and migration BEFORE init
The journal is `$TM_HOME/journal.db` by default (or `TM_DB`/`--db`). Run `python3 "$TM_HOME/tm.py" check-compat` (changes nothing; exit 3 = action needed) and act on `state`:
- `recovery_required` (no journal.db, but `backups/*.db` or `exports/*/journal.json` exist): never `init`. Tell the owner, list `recovery_candidates` (newest first) and ask; with their OK `python3 "$TM_HOME/tm.py" restore "<candidate path>"` (integrity and record counts verified; a schema-1 .json export is upgraded on restore; a schema-1 .db then reports `migration_required`; an existing journal is replaced only with `--overwrite`, which first takes a verified safety backup). A new empty journal only on their explicit decision: `init --kind personal --ignore-backups`.
- `migration_required` (a tm.py 1.0.0 journal): explain, ask, then `python3 "$TM_HOME/tm.py" migrate`: verified backup first (`backups/...-pre-migrate-v1.db`), one transaction, record counts before/after and `rows_lost` (must be empty); report the backup path. On failure the journal is unchanged: report the error and stop. Other commands refuse schema 1; nothing migrates automatically.
- `absent` (`init_would: create a new empty store`): `init --kind personal`; report the verified path and zero counts.
- `compatible`: show `status` counts, `show-profile` and `list-strategies`, offer to RESUME; never re-initialise, overwrite or repeat onboarding unless asked.
- Anything else (not a Trading Memory file, higher/unknown or incomplete schema, unreadable, or a directory with unrelated files; `init` refuses these and changes nothing): stop, explain plainly, change nothing; offer a dated copy or a new TM_HOME; never delete or replace it.

## Step 3 - welcome and route
Welcome the owner in one or two sentences (what Trading Memory does; their journal stays in their own workspace), offer the two routes (spec C) and continue with `trading-memory-onboarding`.
