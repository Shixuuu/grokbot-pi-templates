---
name: cheap-bot-failure-scan
description: "Use this when you need to check other agents or scheduled jobs for failures (stalls, errors, false \"done\" claims, loops, dead links) while spending as few tokens as possible."
---

# Cheap bot failure scan (shell first, LLM last)

**Principle:** run a zero-token shell sweep, then read only the hits. Never open a full transcript until a cheap signal points to it.

## Order
1. **Events first.** If a completion, failure, or webhook event or a chat post triggered this run, scan only that bot's files.
2. **T0 shell sweep** (zero tokens) using the script below. It reads **only new bytes** since the last run, using saved offsets.
3. **Escalate hits only.** For each hit, read about 30 lines of context: `grep -n -C 15 '<pattern>' <file>`.
4. **Confirm done claims.** For every DONE_CLAIM, check that the claimed artifact exists and isn't empty: `test -s <path> && echo ok || echo MISSING`.
5. **Classify** each confirmed problem with the MAST taxonomy (arXiv 2503.13657): spec violation, step repetition, lost context, derailment, information withholding, reasoning-action mismatch, premature termination, missing or incorrect verification.
6. **Report** only confirmed problems, with the evidence path on its own line and one suggested fix. If everything is clean, say nothing at all.

## Script (save once, for example as `cheap-scan.sh`; args: ROOT STATE_DIR STALL_MINUTES)
```bash
#!/usr/bin/env bash
ROOT="${1:-/workspace}"; STATE="${2:-$HOME/.cheap-scan}"; STALL_MIN="${3:-45}"
mkdir -p "$STATE"; OFF="$STATE/offsets.tsv"; touch "$OFF"
EXC=(-not -path '*/credentials/*' -not -path '*/.secrets/*' -not -path '*/.venv*' -not -path '*/node_modules/*' -not -path '*/.git/*')
MARK="$STATE/last-run"; [ -f "$MARK" ] || touch -d '-1 hour' "$MARK"
ERR='error|traceback|exception|failed|exit code [1-9]|permission denied|timed? ?out|\b429\b|rate.?limit|captcha|401|403|expired'
find "$ROOT" -type f \( -name '*.log' -o -name '*.md' -o -name '*.txt' -o -name '*.json' \) -newer "$MARK" "${EXC[@]}" 2>/dev/null | while read -r f; do
  prev=$(awk -F'\t' -v f="$f" '$1==f{print $2}' "$OFF"); prev=${prev:-0}
  size=$(stat -c %s "$f"); [ "$size" -lt "$prev" ] && prev=0
  new=$(tail -c +"$((prev+1))" "$f")
  hits=$(printf '%s' "$new" | grep -inE "$ERR" | head -5); [ -n "$hits" ] && printf 'ERROR_HIT\t%s\n%s\n' "$f" "$hits"
  d=$(printf '%s' "$new" | grep -inE '\b(done|completed|finished|verified)\b|✅' | head -3); [ -n "$d" ] && printf 'DONE_CLAIM\t%s\n%s\n' "$f" "$d"
  printf '%s' "$new" | grep -oE 'https?://[^ )>"`]+' | sort -u | head -10 | while read -r u; do
    c=$(curl -sIL -m 8 -o /dev/null -w '%{http_code}' "$u"); case "$c" in 404|410|000) printf 'DEAD_LINK\t%s\t%s\t%s\n' "$c" "$u" "$f";; esac; done
  r=$(printf '%s' "$new" | grep -vE '^\s*$' | sort | uniq -c | sort -rn | awk '$1>=5' | head -3); [ -n "$r" ] && printf 'REPEAT\t%s\n%s\n' "$f" "$r"
  awk -F'\t' -v f="$f" '$1!=f' "$OFF" > "$OFF.tmp"; printf '%s\t%s\n' "$f" "$size" >> "$OFF.tmp"; mv "$OFF.tmp" "$OFF"
done
[ -f "$STATE/watch.txt" ] && while read -r d; do [ -d "$d" ] || continue
  if [ -z "$(find "$d" -type f -mmin -"$STALL_MIN" "${EXC[@]}" 2>/dev/null | head -1)" ]; then
    last=$(find "$d" -type f "${EXC[@]}" -printf '%TY-%Tm-%Td %TH:%TM\n' 2>/dev/null | sort | tail -1); printf 'STALL\t%s\tlast write %s\n' "$d" "$last"; fi
done < "$STATE/watch.txt"
touch "$MARK"
```
- Put one directory per line in `$STATE/watch.txt` (one per bot) to get STALL alerts.
- Output tags: `ERROR_HIT`, `DONE_CLAIM`, `DEAD_LINK`, `REPEAT` (the same line 5 or more times suggests a loop), `STALL`. Empty output means nothing to report, so send nothing.
- Other cheap checks: report length with `wc -w <report>` (flag a status report over 250 words), and progress rather than liveness with `sha1sum <output>` compared across runs (the same hash twice means no progress).
- A DONE_CLAIM hit is only a candidate. Confirm it with step 4 before reporting.
- Never scan or print secret files. Keep the exclusions.
