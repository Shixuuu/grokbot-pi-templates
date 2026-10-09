---
name: multi-model-transcribe
description: "Use when transcribing local audio or video files (a file or a folder) with one or more faster-whisper models, producing txt/srt/json per model and optionally a majority-vote merged transcript and a short summary.md. Audio stays on the machine; no API key or token."
---

# Multi-model transcribe

Local transcription with several faster-whisper models, one after another, plus an optional merge that majority-votes the outputs, and a short written summary. No API key, no Hugging Face token. The audio never leaves the machine it runs on; the assistant reads the transcript text (not the audio) to write the summary.

## Models (pass as `--models a,b,c`)

| alias | speed on CPU | quality | notes |
|---|---|---|---|
| base | fastest (~30x realtime) | rough | quick drafts, sanity checks |
| small | fast (~13x) | fair | good cheap second opinion |
| distil-large-v3 | medium (~7x) | very good | best speed/quality default, English |
| distil-large-v3.5 | medium (~8x) | very good+ | `distil-whisper/distil-large-v3.5-ct2`, English |
| large-v3-turbo | slower (~3x, est.) | excellent | `deepdml/faster-whisper-large-v3-turbo-ct2`, multilingual |
| medium | slowest (~2x, est.) | good | multilingual, older |

Speeds measured on an 8-core CPU with int8 (est. = not measured), excluding a 3-16 s model load; a CUDA GPU is 10x+ faster. First use of each model downloads it once (75 MB for base up to ~1.6 GB for large-v3-turbo). Suggested default: `distil-large-v3,small` (add `base` for a 3-way vote).

## Steps

1. Save the script below to a working folder as `mmt.py` (write it once; reuse it).
2. Check `ffmpeg` is on PATH (optional but preferred; the script falls back to its built-in decoder). Check `uv` (preferred) or install with `pip install faster-whisper`.
3. Run, on whichever machine holds the audio:
   `uv run mmt.py <file-or-folder> --models distil-large-v3,small --formats txt,srt,json [--merge]`
   - Without uv: `pip install faster-whisper && python mmt.py ...`
   - GPU is auto-detected (float16); CPU uses int8. Override with `--device cpu|cuda --compute-type ...`.
   - `--language en` skips detection. `--out DIR` changes the output root. `--force` redoes existing outputs.
   - For more than ~2 minutes of audio, start it in the background and wait for the completion notice instead of polling.
4. Outputs: `<out>/<file stem>/transcript.<model>.txt|srt|json`; with `--merge`, also `transcript.merged.txt|srt|json`. Default `<out>` is `transcripts/` next to the input. Existing outputs are skipped, including the merged files once all `transcript.merged.*` for the requested formats exist (logs `[merge] <name>: merged outputs exist, skipping`); safe to re-run after an interruption. `--force` redoes both.
5. Merge: every model is aligned word-by-word to the best-ranked model (the pivot, or `--pivot NAME`), each word is majority-voted, and a word only one model heard is shown as `[?word]`. `transcript.merged.json` holds per-word votes, alternatives where models disagreed, and an agreement %. Needs 2+ models; 3+ gives a real vote.
6. Summary: for each file, read `transcript.merged.txt` from its output folder (or, with no merge, the best-ranked model's `transcript.<model>.txt`, using the rank order in the Models table / script) and write `summary.md` in that same folder: a short overview paragraph, then a few key-point bullets. Skip a file whose `summary.md` already exists unless the user asked to redo (or the run used `--force`). This step is done by the assistant from the transcript text; the audio itself is never sent anywhere.
7. Report back: files, models, wall time per model (the script prints a JSON summary on stdout, progress on stderr), output folder, merge agreement %, a 2-3 line sample, and the summary (overview + key points from each `summary.md`). Do not paste whole transcripts into chat.

## Script (mmt.py)

```python
# /// script
# requires-python = ">=3.9"
# dependencies = ["faster-whisper>=1.1"]
# ///
"""Multi-model transcription with faster-whisper, plus an optional majority-vote merge.

Usage:
  uv run mmt.py INPUT [INPUT ...] [--models distil-large-v3,small] [--formats txt,srt,json] [--merge]
  (or: uv run --with faster-whisper python mmt.py ...   /   pip install faster-whisper && python mmt.py ...)

INPUT is an audio/video file or a folder (searched recursively). For every file it writes
  <out>/<stem>/transcript.<model>.{txt,srt,json}   and with --merge   transcript.merged.{txt,srt,json}
Default <out> is a "transcripts" folder next to each input. Existing outputs (per-model and merged)
are skipped unless --force.
No API key or Hugging Face token is needed; all models are public and downloaded anonymously once.
"""
import argparse, difflib, gc, json, os, re, shutil, subprocess, sys, tempfile, time
from collections import Counter
from pathlib import Path

os.environ.setdefault("HF_HUB_DISABLE_IMPLICIT_TOKEN", "1")  # never send a token, even if one is cached
os.environ.setdefault("HF_HUB_DISABLE_TELEMETRY", "1")

MODELS = {  # alias -> (faster-whisper model id or HF repo, quality rank: lower = better)
    "large-v3-turbo": ("deepdml/faster-whisper-large-v3-turbo-ct2", 1),
    "distil-large-v3.5": ("distil-whisper/distil-large-v3.5-ct2", 2),
    "distil-large-v3": ("distil-large-v3", 3),
    "medium": ("medium", 4),
    "small": ("small", 5),
    "base": ("base", 6),
}
DEFAULT_MODELS = "distil-large-v3,small"
AUDIO_EXT = {".mp3", ".wav", ".m4a", ".aac", ".flac", ".ogg", ".opus", ".wma", ".webm", ".mp4", ".mkv", ".mov", ".m4b", ".aiff", ".aif"}


def log(*a):
    print(*a, file=sys.stderr, flush=True)


def pick_device(device, compute):
    if device == "auto":
        try:
            import ctranslate2
            device = "cuda" if ctranslate2.get_cuda_device_count() > 0 else "cpu"
        except Exception:
            device = "cpu"
    if compute == "auto":
        compute = "float16" if device == "cuda" else "int8"
    return device, compute


def find_inputs(paths):
    files = []
    for p in map(Path, paths):
        if p.is_dir():
            files += sorted(f for f in p.rglob("*") if f.is_file() and f.suffix.lower() in AUDIO_EXT and "transcripts" not in f.parts)
        elif p.is_file():
            files.append(p)
        else:
            log(f"skip: not found: {p}")
    return files


def to_wav(src, tmpdir):
    """Convert to 16 kHz mono wav with ffmpeg; fall back to faster-whisper's own decoder if ffmpeg is missing."""
    if not shutil.which("ffmpeg"):
        return str(src)
    dst = Path(tmpdir) / (src.stem + ".16k.wav")
    r = subprocess.run(["ffmpeg", "-nostdin", "-loglevel", "error", "-y", "-i", str(src), "-ac", "1", "-ar", "16000", str(dst)])
    return str(dst) if r.returncode == 0 else str(src)


def ts(t, sep=","):
    t = max(0.0, t or 0.0)
    h, rem = divmod(int(t * 1000), 3600000)
    m, rem = divmod(rem, 60000)
    s, ms = divmod(rem, 1000)
    return f"{h:02d}:{m:02d}:{s:02d}{sep}{ms:03d}"


def write_outputs(base, segments, formats, meta):
    if "txt" in formats:
        Path(f"{base}.txt").write_text("\n".join(s["text"] for s in segments) + "\n", encoding="utf-8")
    if "srt" in formats:
        blocks = [f"{i}\n{ts(s['start'])} --> {ts(s['end'])}\n{s['text']}\n" for i, s in enumerate(segments, 1)]
        Path(f"{base}.srt").write_text("\n".join(blocks), encoding="utf-8")
    if "json" in formats:
        Path(f"{base}.json").write_text(json.dumps({**meta, "segments": segments}, ensure_ascii=False, indent=1), encoding="utf-8")


def transcribe(model, alias, audio, args):
    kw = dict(beam_size=args.beam, vad_filter=not args.no_vad, word_timestamps=True, language=args.language)
    if alias.startswith("distil"):
        kw["condition_on_previous_text"] = False  # recommended for distil models
    t0 = time.time()
    segs, info = model.transcribe(audio, **kw)
    out = []
    for s in segs:
        words = [{"w": w.word.strip(), "start": round(w.start, 2), "end": round(w.end, 2), "p": round(w.probability, 3)} for w in (s.words or [])]
        out.append({"start": round(s.start, 2), "end": round(s.end, 2), "text": s.text.strip(), "words": words})
    return out, info, time.time() - t0


def norm(w):
    return re.sub(r"[^\w']", "", w.lower())


def merge(results, pivot):
    """Align every model's word stream to the pivot model and majority-vote each word slot.
    Words backed by only one model (when 2+ models ran) are marked [?word]. Insertions from
    non-pivot models are kept only when a strict majority of models agree on them."""
    names = list(results)
    n = len(names)
    flat = {m: [(si, w) for si, s in enumerate(results[m]) for w in s["words"] if norm(w["w"])] for m in names}
    piv = flat[pivot]
    pkeys = [norm(w["w"]) for _, w in piv]
    slots = [[(pivot, w)] for _, w in piv]  # candidates per pivot word
    inserts = {}  # pivot index -> list of (model, tuple of words) inserted before that index
    for m in names:
        if m == pivot:
            continue
        okeys = [norm(w["w"]) for _, w in flat[m]]
        sm = difflib.SequenceMatcher(None, pkeys, okeys, autojunk=False)
        for tag, i1, i2, j1, j2 in sm.get_opcodes():
            if tag == "equal" or (tag == "replace" and i2 - i1 == j2 - j1):
                for k in range(i2 - i1):
                    slots[i1 + k].append((m, flat[m][j1 + k][1]))
            elif tag == "replace":  # uneven: map proportionally so long runs still vote
                for k in range(i2 - i1):
                    j = j1 + int(k * (j2 - j1) / (i2 - i1))
                    slots[i1 + k].append((m, flat[m][j][1]))
            elif tag == "insert":
                inserts.setdefault(i1, []).append((m, tuple(norm(w["w"]) for _, w in flat[m][j1:j2]), [w for _, w in flat[m][j1:j2]]))
    merged, single, agree_all = [], 0, 0
    for i in range(len(piv) + 1):
        for key, group in _vote_inserts(inserts.get(i, []), n):
            for w in group:
                merged.append({"w": w["w"], "start": w["start"], "end": w["end"], "votes": key, "seg": piv[min(i, len(piv) - 1)][0] if piv else 0})
        if i == len(piv):
            break
        c = Counter(norm(w["w"]) for _, w in slots[i])
        best, votes = max(c.items(), key=lambda kv: (kv[1], kv[0] == pkeys[i]))
        src = next(w for _, w in slots[i] if norm(w["w"]) == best)
        pw = piv[i][1]
        word = src["w"]
        if n > 1 and votes == 1:
            word, single = f"[?{word}]", single + 1
        if votes == n:
            agree_all += 1
        merged.append({"w": word, "start": pw["start"], "end": pw["end"], "votes": votes, "seg": piv[i][0],
                       "alts": {m: w["w"] for m, w in slots[i]} if votes < n else None})
    segs = []
    for si, s in enumerate(results[pivot]):
        ws = [w for w in merged if w["seg"] == si]
        if ws:
            segs.append({"start": s["start"], "end": s["end"], "text": " ".join(w["w"] for w in ws),
                         "words": [{k: v for k, v in w.items() if v is not None and k != "seg"} for w in ws]})
    stats = {"pivot": pivot, "models": names, "words": len(merged), "all_models_agree": agree_all,
             "single_model_words": single, "agreement_pct": round(100 * agree_all / max(1, len(piv)), 1)}
    return segs, stats


def _vote_inserts(items, n):
    c = Counter(k for _, k, _ in items)
    for key, cnt in c.items():
        if cnt > n / 2 and cnt >= 2:  # pivot lacks it, so a strict majority of all models must have it
            yield cnt, next(ws for _, k, ws in items if k == key)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("inputs", nargs="*")
    ap.add_argument("--models", default=DEFAULT_MODELS, help=f"comma list; aliases: {', '.join(MODELS)} (or any faster-whisper id / CT2 repo / local path)")
    ap.add_argument("--formats", default="txt,srt,json", help="any of txt,srt,json")
    ap.add_argument("--merge", action="store_true", help="also write transcript.merged.* (needs 2+ models)")
    ap.add_argument("--pivot", help="model used as the alignment reference for --merge (default: best-ranked model run)")
    ap.add_argument("--out", help="output root (default: <input folder>/transcripts)")
    ap.add_argument("--device", default="auto", choices=["auto", "cpu", "cuda"])
    ap.add_argument("--compute-type", default="auto", help="auto = float16 on GPU, int8 on CPU")
    ap.add_argument("--threads", type=int, default=0, help="CPU threads (0 = all)")
    ap.add_argument("--language", default=None, help="e.g. en; default auto-detect")
    ap.add_argument("--beam", type=int, default=5)
    ap.add_argument("--no-vad", action="store_true", help="disable the silence (VAD) filter")
    ap.add_argument("--force", action="store_true", help="overwrite existing outputs")
    ap.add_argument("--list-models", action="store_true")
    a = ap.parse_args()
    if a.list_models:
        for k, (rid, r) in MODELS.items():
            print(f"{k:18s} {rid}")
        return
    if not a.inputs:
        ap.error("give at least one file or folder")
    models = [m.strip() for m in a.models.split(",") if m.strip()]
    formats = {f.strip() for f in a.formats.split(",") if f.strip()} | ({"json"} if a.merge else set())
    files = find_inputs(a.inputs)
    if not files:
        sys.exit("no audio files found")
    device, compute = pick_device(a.device, a.compute_type)
    log(f"{len(files)} file(s), models {models}, device {device}/{compute}")

    from faster_whisper import WhisperModel
    outdir = lambda f: Path(a.out or (f.parent / "transcripts")) / f.stem
    summary = {"device": device, "compute_type": compute, "runs": []}
    with tempfile.TemporaryDirectory() as tmp:
        wavs = {}
        for alias in models:  # one model loaded at a time, all files per model
            todo = [f for f in files if a.force or not all((outdir(f) / f"transcript.{alias}.{x}").exists() for x in formats)]
            if not todo:
                log(f"[{alias}] all outputs exist, skipping"); continue
            mid = MODELS.get(alias, (alias, 99))[0]
            t0 = time.time()
            model = WhisperModel(mid, device=device, compute_type=compute, cpu_threads=a.threads)
            log(f"[{alias}] loaded {mid} in {time.time() - t0:.1f}s")
            for f in todo:
                wav = wavs.get(f) or wavs.setdefault(f, to_wav(f, tmp))
                try:
                    segs, info, secs = transcribe(model, alias, wav, a)
                except Exception as e:
                    log(f"[{alias}] FAIL {f.name}: {e}"); summary["runs"].append({"file": str(f), "model": alias, "error": str(e)}); continue
                od = outdir(f); od.mkdir(parents=True, exist_ok=True)
                meta = {"file": f.name, "model": alias, "model_id": mid, "language": info.language, "duration": round(info.duration, 2), "seconds": round(secs, 1)}
                write_outputs(od / f"transcript.{alias}", segs, formats, meta)
                rtf = info.duration / secs if secs else 0
                log(f"[{alias}] {f.name}: {info.duration:.0f}s audio in {secs:.1f}s ({rtf:.1f}x realtime)")
                summary["runs"].append({"file": str(f), "model": alias, "audio_s": round(info.duration, 1), "seconds": round(secs, 1)})
            del model; gc.collect()

    if a.merge:
        mfmts = formats | {"json"}
        for f in files:
            od = outdir(f)
            if not a.force and all((od / f"transcript.merged.{x}").exists() for x in mfmts):
                log(f"[merge] {f.name}: merged outputs exist, skipping"); continue
            res = {}
            for alias in models:
                p = od / f"transcript.{alias}.json"
                if p.exists():
                    res[alias] = json.loads(p.read_text(encoding="utf-8"))["segments"]
            if len(res) < 2:
                log(f"[merge] {f.name}: need 2+ model outputs, have {len(res)}"); continue
            pivot = a.pivot if a.pivot in res else min(res, key=lambda m: MODELS.get(m, (m, 99))[1])
            segs, stats = merge(res, pivot)
            write_outputs(od / "transcript.merged", segs, mfmts, {"file": f.name, "merge": stats, "legend": "[?word] = only one model heard this word"})
            log(f"[merge] {f.name}: {stats['agreement_pct']}% words agreed by all {len(res)} models, {stats['single_model_words']} single-model words (pivot {pivot})")
            summary["runs"].append({"file": str(f), "merge": stats})
    print(json.dumps(summary, indent=1))


if __name__ == "__main__":
    main()
```
