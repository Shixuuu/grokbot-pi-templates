---
name: x-article-to-audio
description: "Use when someone shares an X Article or long X post link and wants it read aloud in full (never a summary), delivered as a synced reader video that plays in chat plus an MP3, with xAI Grok voice or a free edge-tts preview voice."
---

# X Article to Audio

Turn a public X (Twitter) Article into a synced reader video (MP4 that plays in chat) plus an MP3 the owner can listen to. Reads the FULL text, never a summary.

## When to use
The owner shares an X post link (x.com/<user>/status/<id>) that contains an Article, or asks to "listen to", "read aloud", or "make audio of" an X Article. The optional daily bookmarks routine (`article-audio-daily-bookmarks`) also calls this skill for each new Article.

## Stop lines (always)
- Never post, reply, upload, or share the audio publicly (X, podcast hosts, public links, anywhere) without the owner's explicit "yes" in this chat for that specific action.
- Never print, echo, log, or paste API keys. Check for a key only with `[ -n "$XAI_API_KEY" ]`.
- No voice cloning of real people. Use only built-in voices (or the owner's own custom voice if they made it themselves).
- The audio is for the owner's personal listening. If they want to publish audio of someone else's article, remind them to get the author's okay first.
- Never summarize, shorten, or "improve" the article. If the full text is unavailable (paywalled, truncated, preview only), stop and say so.

## Owner preferences
Check memory for saved preferences: voice, speed, intro (yes/no), engine (xai/edge). Defaults: engine auto (xAI if `XAI_API_KEY` is set, else free edge-tts), xAI voice `eve`, free voice `en-US-AndrewNeural` (label it "free preview voice"), speed 1.0, intro on.

## Step 1: Make sure the script exists
If `/workspace/article-audio/article_audio.py` is missing, write it from the "Script" section at the bottom of this skill using the heredoc exactly as given (copy it verbatim, do not edit). Then check dependencies:
```bash
test -f /workspace/article-audio/article_audio.py || echo "MISSING: write it from the Script section"
python3 -c "import edge_tts" 2>/dev/null || pip install edge-tts || pip install --user --break-system-packages edge-tts
command -v ffmpeg && command -v ffprobe
```

## Step 2: Fetch the article text
Use the post id from `x.com/<user>/status/<POST_ID>`. A bare `x.com/i/article/<id>` link has a DIFFERENT id than its parent post and will not work; ask the owner for the post link instead.

A. X connector (preferred, when connected). Call the post lookup tool (e.g. `get_posts_by_id`) with:
- `id`: the post id
- `post.fields`: `article,author_id,created_at`
- `expansions`: `author_id`, `user.fields`: `name,username`

The response has `data.article.title` and `data.article.plain_text` (full text, one paragraph per line). Save it to a JSON file, copying the text exactly (no edits), e.g. with a quoted heredoc so quotes and `$` stay literal:
```bash
mkdir -p /workspace/article-audio/in
cat > /workspace/article-audio/in/<POST_ID>.txt <<'ARTICLE_EOF'
<paste data.article.plain_text here verbatim>
ARTICLE_EOF
python3 - <<'PY'
import json
pid = "<POST_ID>"
text = open(f"/workspace/article-audio/in/{pid}.txt", encoding="utf-8").read()
json.dump({"title": "<article title>", "author": "<author display name>", "text": text},
          open(f"/workspace/article-audio/in/{pid}.json", "w"), ensure_ascii=False)
PY
```
Sanity check: the saved text length should roughly match `plain_text` (a few characters off is fine; hundreds off means something was lost).

B. Free fallback (no connector, or the connector returns only the title with no `plain_text`). Let the script fetch it from the public fxtwitter API (`https://api.fxtwitter.com/i/status/<POST_ID>`, field `tweet.article.title` and `tweet.article.content.blocks`). Just pass the post URL or id to the script.

If both fail, tell the owner the article could not be fetched in full. Do not substitute a summary or the preview text.

## Step 3: Estimate and give a cost notice
Dry run first (cleans text and estimates, no audio):
```bash
python3 /workspace/article-audio/article_audio.py --text-file /workspace/article-audio/in/<POST_ID>.json --dry-run
# or: python3 /workspace/article-audio/article_audio.py "<POST_URL>" --dry-run
```
- Free engine (edge): no cost. Mention it is a free preview voice.
- xAI engine: cost is about $15 per 1M characters (check current xAI pricing), shown as `est_cost_usd`. A typical 7k-character article is about $0.10.
- If `chars` is over 60,000, tell the owner the estimated cost and the length in minutes and wait for a "yes" before rendering. The script refuses xAI renders over 60k characters unless `--yes` is passed.

## Step 4: Render
```bash
python3 /workspace/article-audio/article_audio.py \
  --text-file /workspace/article-audio/in/<POST_ID>.json \
  --engine auto --voice <voice> --speed <speed> --intro \
  --out-dir /workspace/article-audio/out --save-text
```
Flags: `--engine auto|xai|edge`, `--voice` (xAI: eve, ara, rex, sal, leo; edge: e.g. en-US-AndrewNeural), `--speed 0.7-1.5`, `--intro/--no-intro` (spoken title, author, read time), `--language en|auto|<BCP-47>` (xAI only), `--yes` (confirmed long xAI render), `--video/--no-video` (synced reader-video MP4, on by default), `--video-style highlight|phrase` (highlight, the default: each word turns from gray to white as it is spoken; phrase: the whole phrase in white). Articles are split at paragraph breaks into chunks under the 60k-character xAI limit (smaller for edge-tts) and joined with ffmpeg.

The script prints a JSON summary: title, author, words, chars, est_minutes, actual_minutes, duration_deviation_pct, duration_ok, engine, voice, est_cost_usd, path, plus timings_path, timing_method, and video_path, subs_path, video_style, video_seconds for the MP4.

Every render also writes `<base>.timings.json` next to the MP3 (each word with start/end seconds, paragraph breaks, title, author, engine, voice, speed, timing_method). To change only the look of the video, rebuild it from the saved timings. This makes no TTS call and costs nothing:
```bash
python3 /workspace/article-audio/article_audio.py \
  --from-timings /workspace/article-audio/out/<base>.timings.json --video-style phrase
```
It reuses the MP3 next to the timings file (or pass `--audio <mp3>`) and overwrites that article's `.ass` and `.mp4`. On failure it prints `{"ok": false, "error": ...}` and exits non-zero: relay the error plainly.

## Step 5: Verify
- `ok` is true and the file at `path` exists.
- `duration_ok` is true (actual length within 35% of about 150 words per minute at 1.0x, scaled by speed). If false, open the `.txt` next to the MP3 and look for missing sections or garbage, then re-render or report.
- Optionally spot-check: `ffprobe -v error -show_entries format=duration -of csv=p=0 "<path>"`.

## Step 6: Deliver (plays inside the chat)
The script produces a synced reader video by default: an MP4 (`video_path` in the JSON summary) with the narration and the article's words on screen, phrase by phrase, in time with the voice (black background, large serif text, top-left, 2 to 3 short lines per screen; the title and author show during the spoken intro). In the default `highlight` style, words not yet spoken are soft gray and each turns white the moment it is spoken; `phrase` style shows the whole phrase in white. Timing comes from the engine (xAI character timestamps or edge-tts word boundaries; `timing_method` in the summary says which, and `proportional-chars` means an estimate was used). The chat plays video but does not accept MP3 attachments, so attach the MP4 and the owner can press play right in the chat.
- Check `video_path` is set and `video_seconds` matches the MP3 length (within a second). If `video_error` is present, the MP3 is still fine: relay the error and retry just the video with `--from-timings`.
- Optionally grab a frame to confirm the text is legible: `ffmpeg -v error -ss 30 -i "<video_path>" -frames:v 1 /tmp/frame.png`.
- If the owner wants a different look (for example phrase instead of highlight), rebuild with `--from-timings <base>.timings.json --video-style <style>` (free, no new render) and attach the new MP4.
- Add one line with the attachment: title, author, length in minutes, voice, engine (say "free preview voice" for edge-tts), and cost if xAI.
- Keep the MP3 (`path`) and timings file too; copy the MP3 to the owner's computer only if they ask. Do not upload or share any of these files anywhere else without an explicit "yes".

## Script
Write this to `/workspace/article-audio/article_audio.py` on first run if it is missing:

```bash
mkdir -p /workspace/article-audio
cat > /workspace/article-audio/article_audio.py <<'PYEOF'
#!/usr/bin/env python3
"""article_audio.py - turn an X (Twitter) Article into a listenable MP3
plus a synced "reader video" MP4 (narration + the words on screen).

Input : an X post URL / id (fetched via the public fxtwitter API), or
        --text-file (JSON or .txt) with text you already fetched elsewhere.
Output: one MP3, one MP4 (black background, large serif text shown phrase
        by phrase in sync with the voice; by default each word turns from
        gray to white as it is spoken; --no-video to skip), the .ass
        subtitle file, <base>.timings.json (word timings), and a JSON
        summary on stdout. --from-timings rebuilds only the video from an
        existing MP3 + timings.json (no TTS call, free restyle).
Engines: xAI TTS (needs XAI_API_KEY) or edge-tts (free preview voice).
Timing : xAI with_timestamps (per-character times) or edge-tts WordBoundary
         events; falls back to character-proportional timing if neither
         comes back (reported as timing_method in the summary).
Deps  : Python 3.8+ stdlib, edge-tts (pip install edge-tts) for the free
        engine, ffmpeg (with libass) + ffprobe on PATH, a serif font
        (fontconfig). Never summarizes: reads full text.
"""
import argparse, asyncio, base64, json, math, os, re, shutil, subprocess, sys
import tempfile, time, unicodedata, urllib.error, urllib.request

XAI_TTS_URL = "https://api.x.ai/v1/tts"
XAI_LIMIT = 60000            # documented max chars per POST /v1/tts request
XAI_CHUNK = 55000            # stay safely under the limit
EDGE_CHUNK = 8000            # edge-tts splits further internally
XAI_USD_PER_M_CHARS = 15.0
XAI_DEFAULT_VOICE = "eve"
XAI_VOICES = ["eve", "ara", "rex", "sal", "leo"]
EDGE_DEFAULT_VOICE = "en-US-AndrewNeural"
WPM = 150.0                  # typical narration pace at 1.0x
TOLERANCE = 0.35
UA = "Mozilla/5.0 (article-audio script)"
# reader video
VIDEO_W, VIDEO_H, VIDEO_FPS = 1280, 720, 10
FONT_SIZE = 72
MARGIN_L, MARGIN_R, MARGIN_V = 72, 72, 64
LINE_CHARS = 24              # target chars per line (~22-28)
LINE_CHARS_MAX = 28
MAX_LINES = 3
SPOKEN_COLOUR = "&H00FFFFFF"   # ASS &HAABBGGRR: white (spoken / phrase style)
UNSPOKEN_COLOUR = "&H00858585"  # soft gray for not-yet-spoken words
SCREEN_MIN, SCREEN_MAX = 1.5, 4.0     # seconds per screen (soft limits)
SERIF_FONTS = ["Noto Serif", "Fraunces", "Lora", "EB Garamond",
               "Source Serif 4", "DejaVu Serif", "Liberation Serif"]
PAYWALL_HINTS = [
    "subscribe to continue", "subscribe to read", "for subscribers only",
    "this post is for paid subscribers", "unlock this article",
    "become a subscriber to", "sign in to continue reading",
    "this article is only available to", "upgrade to premium to read",
]


def die(msg, code=2):
    print(json.dumps({"ok": False, "error": msg}), flush=True)
    sys.exit(code)


def log(msg):
    print(msg, file=sys.stderr, flush=True)


# ---------------------------------------------------------------- fetching
def parse_post_id(src):
    src = src.strip()
    if re.fullmatch(r"\d{5,25}", src):
        return src
    if re.search(r"/i/article/\d+", src):
        die("That is an x.com/i/article/<id> link. Its id differs from the "
            "parent post id. Open it on X, copy the link of the POST that "
            "contains the article (x.com/<user>/status/<id>), and retry.")
    m = re.search(r"/status(?:es)?/(\d+)", src)
    if not m:
        die("Could not find a post id in: %s" % src)
    return m.group(1)


def http_json(url, data=None, headers=None, timeout=60):
    req = urllib.request.Request(url, data=data, headers=headers or {})
    req.add_header("User-Agent", UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode("utf-8"))


def blocks_to_paragraphs(blocks):
    """Draft.js-style blocks (fxtwitter article.content.blocks) -> paragraphs."""
    paras, in_code = [], False
    for b in blocks:
        t = (b.get("type") or "unstyled").lower()
        txt = (b.get("text") or "").strip()
        if t == "code-block" or t == "code":
            if not in_code:
                paras.append("Code block skipped.")
            in_code = True
            continue
        in_code = False
        if t == "atomic" or not txt:
            continue                       # images / embeds / dividers
        if t.startswith("header"):
            paras.append(as_heading(txt))
        else:
            paras.append(txt)
    return paras


def fetch_fxtwitter(post_id):
    url = "https://api.fxtwitter.com/i/status/%s" % post_id
    try:
        d = http_json(url)
    except urllib.error.HTTPError as e:
        die("fxtwitter returned HTTP %s for post %s" % (e.code, post_id))
    except Exception as e:  # noqa
        die("fxtwitter fetch failed: %s" % e)
    tw = d.get("tweet") or {}
    if not tw:
        die("fxtwitter: post not found or not public (%s)" % d.get("message"))
    author = (tw.get("author") or {})
    author_s = author.get("name") or author.get("screen_name") or ""
    art = tw.get("article")
    if art:
        blocks = ((art.get("content") or {}).get("blocks")) or []
        paras = blocks_to_paragraphs(blocks)
        return {"title": art.get("title") or "", "author": author_s,
                "paragraphs": paras, "preview_text": art.get("preview_text"),
                "source": "fxtwitter", "post_id": post_id}
    text = tw.get("text") or ""
    return {"title": "", "author": author_s, "paragraphs": text.split("\n"),
            "preview_text": None, "source": "fxtwitter-post", "post_id": post_id}


def load_text_file(path, title=None, author=None):
    raw = open(path, encoding="utf-8").read()
    doc = {"title": title or "", "author": author or "", "preview_text": None,
           "source": "text-file", "post_id": None}
    if path.lower().endswith(".json") or raw.lstrip().startswith("{"):
        j = json.loads(raw)
        # Accept the raw X API / connector response: {"data": {"article": ...}}
        users = (j.get("includes") or {}).get("users") or []
        if "data" in j and isinstance(j["data"], dict):
            j = j["data"]
        art = j.get("article") if isinstance(j.get("article"), dict) else j
        text = (art.get("plain_text") or art.get("text") or j.get("text") or "")
        doc["title"] = title or art.get("title") or j.get("title") or ""
        doc["author"] = author or j.get("author") or (
            users[0].get("name") if users else "") or ""
        doc["preview_text"] = art.get("preview_text")
        doc["post_id"] = j.get("id") if j is not art else None
        if art.get("blocks"):
            doc["paragraphs"] = blocks_to_paragraphs(art["blocks"])
            return doc
    else:
        text = raw
    doc["paragraphs"] = plain_to_paragraphs(text)
    return doc


def plain_to_paragraphs(text):
    """Plain text (one paragraph per line, as X article plain_text) ->
    paragraphs. Short lines with no end punctuation are treated as headings."""
    out, in_code = [], False
    for line in text.replace("\r\n", "\n").split("\n"):
        s = line.strip()
        if s.startswith("```"):
            if not in_code:
                out.append("Code block skipped.")
            in_code = not in_code
            continue
        if in_code or not s:
            continue
        if is_heading_like(s):
            out.append(as_heading(s))
        else:
            out.append(s)
    return out


# ---------------------------------------------------------------- cleaning
def is_heading_like(s):
    s = re.sub(r"^#+\s*", "", s)
    return len(s.split()) <= 12 and not re.search(r"[.!?:;,\"')\]]$", s)


def as_heading(s):
    s = re.sub(r"^#+\s*", "", s).strip()
    return s if re.search(r"[.!?]$", s) else s + "."


EMOJI_RE = re.compile(
    "[\U0001F000-\U0001FAFF\U00002600-\U000027BF\U0001F1E6-\U0001F1FF"
    "\U00002B00-\U00002BFF\U0000FE0F\U0000200D\U000020E3]+")
URL_RE = re.compile(r"(https?://\S+|www\.\S+|\bpic\.(twitter|x)\.com/\S+|\bt\.co/\S+)")
ALT_RE = re.compile(r"^\s*(\[?(image|photo|picture|img|alt|gif|video)\b[^\]]*\]?"
                    r"\s*[:\-]|\[(image|photo|alt)[^\]]*\]\s*$)", re.I)
CAPTION_RE = re.compile(r"^\s*(image|photo)\s*(credit|source|via|by)\b", re.I)


def clean_paragraph(p):
    p = unicodedata.normalize("NFC", p)
    if ALT_RE.match(p) or CAPTION_RE.match(p):
        return ""
    p = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", p)          # markdown images
    p = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", p)       # markdown links
    p = URL_RE.sub("", p)
    p = EMOJI_RE.sub("", p)
    p = re.sub(r"`([^`]+)`", r"\1", p)
    p = re.sub(r"[*_]{1,3}([^*_]+)[*_]{1,3}", r"\1", p)  # bold / italics
    p = re.sub(r"^\s*([-*\u2022]|\d+[.)])\s+", "", p)     # list bullets
    p = re.sub(r"#(\w)", r"\1", p)                        # hashtags -> word
    p = re.sub(r"\(\s*\)", "", p)
    p = re.sub(r"[ \t\u00a0]+", " ", p).strip()
    if not re.search(r"[A-Za-z0-9\u00C0-\uFFFF]", p):
        return ""
    return p


def build_script(doc):
    paras = [clean_paragraph(p) for p in doc["paragraphs"]]
    out = []
    for p in paras:
        if not p:
            continue
        if p == "Code block skipped." and out and out[-1] == p:
            continue
        out.append(p)
    return "\n\n".join(out)


def check_readable(body, doc, allow_short=False):
    words = len(body.split())
    if words == 0:
        die("No readable text found (empty after cleaning).")
    low = body.lower()
    for h in PAYWALL_HINTS:
        if h in low[-1500:] or (words < 400 and h in low):
            die("Text looks paywalled or gated ('%s'). Not rendering a "
                "partial article." % h)
    prev = (doc.get("preview_text") or "").strip()
    if prev and len(body) <= len(prev) + 40:
        die("Only the preview text is available; the full article did not "
            "come through. Try the other fetch path.")
    if re.search(r"(\u2026|\.\.\.)\s*$", body) and words < 300:
        die("Text ends with an ellipsis and is short: looks truncated.")
    if words < 60 and not allow_short:
        die("Only %d words found; this does not look like a full article "
            "(use --allow-short to force)." % words)


# ---------------------------------------------------------------- chunking
def chunk_text(text, limit):
    paras, chunks, cur = text.split("\n\n"), [], ""
    for p in paras:
        pieces = [p]
        if len(p) > limit:                         # split long paragraph
            pieces, buf = [], ""
            for s in re.split(r"(?<=[.!?])\s+", p):
                while len(s) > limit:
                    pieces.append(s[:limit]); s = s[limit:]
                if len(buf) + len(s) + 1 > limit:
                    pieces.append(buf); buf = s
                else:
                    buf = (buf + " " + s).strip()
            if buf:
                pieces.append(buf)
        for piece in pieces:
            if cur and len(cur) + 2 + len(piece) > limit:
                chunks.append(cur); cur = piece
            else:
                cur = piece if not cur else cur + "\n\n" + piece
    if cur:
        chunks.append(cur)
    return chunks


# ---------------------------------------------------------------- engines
def render_xai(text, voice, speed, language, out_path, timestamps=False):
    """Render one chunk. With timestamps=True the API answers with a JSON
    envelope {audio (base64), content_type, duration, audio_timestamps:
    {graph_chars, graph_times}}; returns that timing dict (or None)."""
    key = os.environ.get("XAI_API_KEY", "")
    req_body = {
        "text": text, "voice_id": voice, "language": language,
        "speed": speed,
        "output_format": {"codec": "mp3", "sample_rate": 24000,
                          "bit_rate": 128000},
    }
    if timestamps:
        req_body["with_timestamps"] = True
    body = json.dumps(req_body).encode("utf-8")
    for attempt in range(5):
        req = urllib.request.Request(XAI_TTS_URL, data=body, method="POST")
        req.add_header("Authorization", "Bearer " + key)
        req.add_header("Content-Type", "application/json")
        req.add_header("User-Agent", UA)
        try:
            with urllib.request.urlopen(req, timeout=900) as r:
                data = r.read()
                ctype = (r.headers.get("Content-Type") or "").lower()
            ts = None
            if "json" in ctype or data[:1] == b"{":
                try:
                    env = json.loads(data.decode("utf-8"))
                    data = base64.b64decode(env.get("audio") or "")
                    ts = env.get("audio_timestamps")
                except (ValueError, TypeError) as e:
                    raise RuntimeError("bad JSON/base64 timestamp response: %s"
                                       % e)
            if len(data) < 1000:
                raise RuntimeError("tiny audio response (%d bytes)" % len(data))
            open(out_path, "wb").write(data)
            return ts
        except urllib.error.HTTPError as e:
            msg = e.read().decode("utf-8", "replace")[:300]
            if e.code in (429, 500, 502, 503) and attempt < 4:
                time.sleep(2 ** attempt); continue
            hint = {401: "API key missing or invalid",
                    404: "unknown voice_id (check GET /v1/tts/voices)",
                    400: "bad request (empty text, >60k chars, bad params)"}
            die("xAI TTS HTTP %s: %s %s" % (e.code, hint.get(e.code, ""), msg))
        except (urllib.error.URLError, TimeoutError) as e:
            if attempt < 4:
                time.sleep(2 ** attempt); continue
            die("xAI TTS network error: %s" % e)
        except RuntimeError as e:
            if attempt < 4:
                time.sleep(2 ** attempt); continue
            die("xAI TTS error: %s" % e)


def render_edge(text, voice, speed, out_path, timestamps=False):
    """Render one chunk. With timestamps=True returns a list of
    (word, start_s, end_s) from WordBoundary events (offsets are 100 ns)."""
    try:
        import edge_tts
    except ImportError:
        die("edge-tts not installed. Run: pip install edge-tts "
            "(or pip install --user --break-system-packages edge-tts)")
    pct = int(round((speed - 1.0) * 100))
    rate = "%+d%%" % pct

    async def go():
        bounds = []
        try:
            comm = edge_tts.Communicate(text, voice, rate=rate,
                                        boundary="WordBoundary")
        except TypeError:                  # older edge-tts: words by default
            comm = edge_tts.Communicate(text, voice, rate=rate)
        with open(out_path, "wb") as f:
            async for ev in comm.stream():
                if ev.get("type") == "audio":
                    f.write(ev["data"])
                elif ev.get("type") == "WordBoundary" and timestamps:
                    st = ev["offset"] / 1e7
                    bounds.append((ev.get("text") or "", st,
                                   st + ev.get("duration", 0) / 1e7))
        return bounds

    for attempt in range(4):
        try:
            bounds = asyncio.run(go())
            if os.path.getsize(out_path) > 1000:
                return bounds if timestamps else None
            raise RuntimeError("empty audio")
        except Exception as e:  # noqa
            if attempt == 3:
                die("edge-tts failed: %s" % e)
            time.sleep(2 ** attempt)


def ffprobe_seconds(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries",
                          "format=duration", "-of", "csv=p=0", path],
                         capture_output=True, text=True)
    try:
        return float(out.stdout.strip())
    except ValueError:
        die("ffprobe could not read %s: %s" % (path, out.stderr[:200]))


def concat(parts, out_path, tmp, bitrate="128k"):
    if len(parts) == 1:
        shutil.copyfile(parts[0], out_path); return
    lst = os.path.join(tmp, "list.txt")
    with open(lst, "w") as f:
        for p in parts:
            f.write("file '%s'\n" % p.replace("'", "'\\''"))
    r = subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "concat",
                        "-safe", "0", "-i", lst, "-c:a", "libmp3lame",
                        "-b:a", bitrate, out_path], capture_output=True, text=True)
    if r.returncode != 0:
        die("ffmpeg concat failed: %s" % r.stderr[:400])


# ---------------------------------------------------------------- timing
def tokenize(text):
    """Whitespace tokens with char spans and paragraph-end flags."""
    toks = [{"text": m.group(0), "a": m.start(), "b": m.end(),
             "start": None, "end": None}
            for m in re.finditer(r"\S+", text)]
    for i, t in enumerate(toks):
        gap = text[t["b"]:toks[i + 1]["a"]] if i + 1 < len(toks) else "\n"
        t["para_end"] = "\n" in gap
    return toks


def _norm(s):
    return re.sub(r"[^\w]", "", s.lower())


def interpolate(toks, dur):
    """Fill tokens that have no time, proportional to their length, between
    the nearest timed neighbours (or 0 / chunk end)."""
    n, i = len(toks), 0
    while i < n:
        if toks[i]["start"] is not None:
            i += 1; continue
        j = i
        while j < n and toks[j]["start"] is None:
            j += 1
        t0 = toks[i - 1]["end"] if i > 0 else 0.0
        t1 = toks[j]["start"] if j < n else dur
        t1 = max(t1, t0)
        weights = [len(toks[k]["text"]) + 1 + (6 if re.search(
            r"[.!?:;,]$", toks[k]["text"]) else 0) for k in range(i, j)]
        tot, acc = float(sum(weights)), t0
        for k, w in zip(range(i, j), weights):
            toks[k]["start"] = acc
            acc += (t1 - t0) * w / tot
            toks[k]["end"] = acc
        i = j
    return toks


def times_from_xai(text, ts, dur):
    """Per-character graph_times -> per-token start/end. graph_chars mirrors
    the input one-for-one, so tokenize the graph_chars string itself."""
    chars = ts.get("graph_chars") or []
    times = ts.get("graph_times") or []
    if not chars or len(chars) != len(times):
        return None
    gtext = "".join(c if len(c) == 1 else (c[:1] or " ") for c in chars)
    toks = tokenize(gtext)
    for t in toks:
        try:
            t["start"] = float(times[t["a"]][0])
            t["end"] = float(times[t["b"] - 1][1])
        except (IndexError, TypeError, ValueError):
            t["start"] = t["end"] = None
    return interpolate(toks, dur)


def times_from_edge(text, bounds, dur):
    """Align WordBoundary words (no punctuation) to the text's tokens."""
    toks = tokenize(text)
    norms = [_norm(t["text"]) for t in toks]
    used = [0] * len(toks)
    j = 0
    for word, st, en in bounds:
        nb = _norm(word)
        if not nb:
            continue
        for k in range(j, min(j + 8, len(toks))):
            rest = norms[k][used[k]:]
            if rest and (rest.startswith(nb) or nb.startswith(rest)):
                if toks[k]["start"] is None:
                    toks[k]["start"] = st
                toks[k]["end"] = en
                used[k] += len(nb)
                j = k if used[k] < len(norms[k]) else k + 1
                break
    for t in toks:                      # partial matches need both ends
        if t["start"] is not None and t["end"] is None:
            t["end"] = t["start"]
    return interpolate(toks, dur)


def times_proportional(text, dur):
    """Last resort: spread the chunk duration by character counts."""
    return interpolate(tokenize(text), dur)


# ---------------------------------------------------------------- video
END_RE = re.compile(r"[.!?][\"'\u201d\u2019)\]]*$")
CLAUSE_RE = re.compile(r"([.!?,;:]|\u2014|\u2013)[\"'\u201d\u2019)\]]*$")


def wrap_words(text, width):
    lines, cur = [], ""
    for w in text.split():
        if cur and len(cur) + 1 + len(w) > width:
            lines.append(cur); cur = w
        else:
            cur = (cur + " " + w).strip()
    if cur:
        lines.append(cur)
    return lines


def screen_lines(ws):
    """Wrap a word group into as few lines as possible (<= LINE_CHARS_MAX
    chars each), then balance line lengths. None if > MAX_LINES lines."""
    text = " ".join(w["text"] for w in ws)
    lines = wrap_words(text, LINE_CHARS_MAX)
    if len(lines) > MAX_LINES:
        return None
    longest = max(len(w) for w in text.split())
    for width in range(max(14, longest), LINE_CHARS_MAX):
        bal = wrap_words(text, width)
        if len(bal) == len(lines):
            return bal
    return lines


def split_balanced(ws, k):
    """Split a word list into k parts of roughly equal character length."""
    total = float(sum(len(w["text"]) + 1 for w in ws))
    parts, cur, acc = [], [], 0.0
    for w in ws:
        n = len(w["text"]) + 1
        target = total * (len(parts) + 1) / k
        if cur and len(parts) < k - 1 and acc + n / 2.0 > target:
            parts.append(cur); cur = []
        cur.append(w); acc += n
    if cur:
        parts.append(cur)
    return parts


def build_screens(words, audio_secs):
    """Group timed words into screens of <= MAX_LINES short lines: split at
    clause punctuation / paragraph ends, split long clauses evenly, then
    merge short neighbours (never across a paragraph end)."""
    clauses, cur = [], []
    for w in words:
        cur.append(w)
        if w.get("para_end") or CLAUSE_RE.search(w["text"]):
            clauses.append(cur); cur = []
    if cur:
        clauses.append(cur)
    pieces = []
    for c in clauses:
        dur = c[-1]["end"] - c[0]["start"]
        k = max(1, int(math.ceil(dur / (SCREEN_MAX * 1.25))))
        while True:
            parts = split_balanced(c, k)
            if all(screen_lines(p) for p in parts) or k >= len(c):
                break
            k += 1
        pieces.extend(parts)
    merged = []
    for p in pieces:
        if merged:
            prev = merged[-1]
            last = prev[-1]
            pd = last["end"] - prev[0]["start"]
            nd = p[-1]["end"] - p[0]["start"]
            both = prev + p
            ok = (not last.get("para_end") and screen_lines(both)
                  and both[-1]["end"] - both[0]["start"] <= SCREEN_MAX
                  and (pd < SCREEN_MIN or nd < 1.0)
                  and (not END_RE.search(last["text"]) or pd < 1.2
                       or nd < 1.0))
            if ok:
                merged[-1] = both
                continue
        merged.append(p)
    out = []
    for k, sc in enumerate(merged):
        st, last = sc[0]["start"], sc[-1]["end"]
        if k + 1 < len(merged):
            en = min(merged[k + 1][0]["start"], max(last + 1.2, st + 0.6))
        else:
            en = audio_secs
        lines = screen_lines(sc) or wrap_words(
            " ".join(w["text"] for w in sc), LINE_CHARS_MAX)
        it, wlines = iter(sc), []
        for l in lines:               # tokens have no spaces: map 1:1
            wlines.append([next(it) for _ in l.split()])
        out.append({"start": st, "end": max(en, st + 0.1),
                    "lines": lines, "words": wlines})
    return out


def pick_font():
    """First installed serif family from SERIF_FONTS (via fontconfig)."""
    try:
        r = subprocess.run(["fc-list", ":", "family"], capture_output=True,
                           text=True, timeout=30)
        fams = set()
        for line in r.stdout.splitlines():
            fams.update(f.strip() for f in line.split(","))
        for f in SERIF_FONTS:
            if f in fams:
                return f
    except (OSError, subprocess.SubprocessError):
        pass
    return "serif"


def ass_time(t):
    cs = int(round(max(0.0, t) * 100))
    return "%d:%02d:%02d.%02d" % (cs // 360000, cs // 6000 % 60,
                                  cs // 100 % 60, cs % 100)


def ass_escape(s):
    return s.replace("\\", "/").replace("{", "(").replace("}", ")")


def karaoke_text(s):
    """One screen as ASS karaoke: each word switches gray -> white (\\k,
    instant) at its own start time, relative to the event start. Cumulative
    rounding keeps centisecond steps from drifting."""
    t0 = s["start"]
    flat = [w for l in s["words"] for w in l]
    starts = [max(0.0, w["start"] - t0) for w in flat] + [
        max(0.0, s["end"] - t0)]
    cs = [int(round(x * 100)) for x in starts]
    for i in range(1, len(cs)):
        cs[i] = max(cs[i], cs[i - 1])
    out, i = [], 0
    for line in s["words"]:
        parts = []
        for w in line:
            parts.append("{\\k%d}%s" % (cs[i + 1] - cs[i], ass_escape(w["text"])))
            i += 1
        out.append(" ".join(parts))
    return "\\N".join(out)


def write_ass(path, screens, font, title=None, author=None, title_end=0.0,
              style="highlight"):
    head = [
        "[Script Info]", "ScriptType: v4.00+",
        "PlayResX: %d" % VIDEO_W, "PlayResY: %d" % VIDEO_H,
        "WrapStyle: 2", "ScaledBorderAndShadow: yes", "",
        "[V4+ Styles]",
        "Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, "
        "OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, "
        "ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, "
        "Alignment, MarginL, MarginR, MarginV, Encoding",
        "Style: Reader,%s,%d,%s,%s,&H00000000,&H00000000,"
        "0,0,0,0,100,100,0,0,1,0,0,7,%d,%d,%d,1"
        % (font, FONT_SIZE, SPOKEN_COLOUR, UNSPOKEN_COLOUR,
           MARGIN_L, MARGIN_R, MARGIN_V), "",
        "[Events]",
        "Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, "
        "Effect, Text",
    ]
    ev = []
    if title and title_end > 0.3:
        tl = wrap_words(title, LINE_CHARS)
        fs = FONT_SIZE
        if len(tl) > 4:
            fs = int(FONT_SIZE * 0.75)
            tl = wrap_words(title, int(LINE_CHARS / 0.75))
        txt = "{\\fs%d}" % fs + "\\N".join(ass_escape(l) for l in tl)
        if author:
            txt += ("\\N{\\fs%d} \\N{\\fs%d\\i1\\c&HBBBBBB&}By %s"
                    % (int(FONT_SIZE * 0.3), int(FONT_SIZE * 0.6),
                       ass_escape(author)))
        ev.append("Dialogue: 0,%s,%s,Reader,,0,0,0,,%s"
                  % (ass_time(0), ass_time(title_end), txt))
    for s in screens:
        if style == "highlight" and s.get("words"):
            txt = karaoke_text(s)
        else:
            txt = "\\N".join(ass_escape(l) for l in s["lines"])
        ev.append("Dialogue: 0,%s,%s,Reader,,0,0,0,,%s"
                  % (ass_time(s["start"]), ass_time(s["end"]), txt))
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(head + ev) + "\n")


def render_video(audio_path, ass_path, out_path, secs):
    """Black 1280x720 background + burned-in ASS + the MP3 audio -> MP4."""
    d, name = os.path.split(os.path.abspath(ass_path))
    filt = "ass=%s" % name.replace("\\", "/").replace(":", "\\:") \
        .replace("'", "\\'").replace(",", "\\,")
    cmd = ["ffmpeg", "-y", "-v", "error",
           "-f", "lavfi", "-i", "color=c=black:s=%dx%d:r=%d"
           % (VIDEO_W, VIDEO_H, VIDEO_FPS),
           "-i", os.path.abspath(audio_path),
           "-vf", filt, "-map", "0:v", "-map", "1:a",
           "-c:v", "libx264", "-tune", "stillimage", "-preset", "medium",
           "-crf", "28", "-pix_fmt", "yuv420p", "-r", str(VIDEO_FPS),
           "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart",
           "-t", "%.3f" % secs, os.path.abspath(out_path)]
    r = subprocess.run(cmd, capture_output=True, text=True, cwd=d)
    if r.returncode != 0:
        raise RuntimeError("ffmpeg video render failed: %s" % r.stderr[-400:])


def make_video(mp3_path, words, n_intro, title, author, show_title, secs,
               style):
    """Screens -> .ass -> MP4 next to the MP3. Returns summary fields."""
    tv = time.time()
    body_words = [w for w in words[n_intro:] if w["text"].strip()]
    if not body_words:
        raise RuntimeError("no timed words for the video")
    screens = build_screens(body_words, secs)
    ass_path = mp3_path[:-4] + ".ass"
    font = pick_font()
    write_ass(ass_path, screens, font,
              title if show_title else None,
              author if show_title else None,
              body_words[0]["start"] if show_title else 0.0, style)
    vpath = mp3_path[:-4] + ".mp4"
    render_video(mp3_path, ass_path, vpath, secs)
    return {
        "video_path": vpath, "subs_path": ass_path, "video_style": style,
        "video_seconds": round(ffprobe_seconds(vpath), 2),
        "video_screens": len(screens), "video_font": font,
        "video_render_seconds": round(time.time() - tv, 1),
        "video_size_mb": round(os.path.getsize(vpath) / 1e6, 2),
    }


def write_timings(path, words, n_intro, meta):
    data = dict(meta)
    data.update({
        "version": 1, "intro_words": n_intro,
        "paragraph_ends": [i for i, w in enumerate(words) if w.get("para_end")],
        "words": [{"text": w["text"], "start": round(w["start"], 3),
                   "end": round(w["end"], 3),
                   "para_end": bool(w.get("para_end"))} for w in words],
    })
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=1)


def rebuild_from_timings(tpath, style, audio=None):
    """--from-timings: rebuild only the video from MP3 + timings.json."""
    try:
        t = json.load(open(tpath, encoding="utf-8"))
        words = [{"text": w["text"], "start": float(w["start"]),
                  "end": float(w["end"]), "para_end": bool(w.get("para_end"))}
                 for w in t["words"]]
    except (OSError, ValueError, KeyError, TypeError) as e:
        die("Could not read timings file %s: %s" % (tpath, e))
    mp3 = audio or t.get("audio_path") or ""
    guess = re.sub(r"\.timings\.json$", ".mp3", os.path.abspath(tpath))
    if not os.path.isfile(mp3) and os.path.isfile(guess):
        mp3 = guess
    if not os.path.isfile(mp3):
        die("MP3 for the timings file not found (looked for %s); pass "
            "--audio <mp3>." % (mp3 or guess))
    for tool in ("ffmpeg", "ffprobe"):
        if not shutil.which(tool):
            die("%s not found on PATH" % tool)
    mp3 = os.path.abspath(mp3)
    if not mp3.lower().endswith(".mp3"):
        die("--audio must be an .mp3 file")
    secs = ffprobe_seconds(mp3)
    n_intro = int(t.get("intro_words") or 0)
    summary = {"ok": True, "mode": "from-timings", "title": t.get("title"),
               "author": t.get("author"), "engine": t.get("engine"),
               "voice": t.get("voice"), "speed": t.get("speed"),
               "timing_method": t.get("timing_method"), "path": mp3,
               "timings_path": os.path.abspath(tpath),
               "actual_minutes": round(secs / 60.0, 2)}
    try:
        summary.update(make_video(mp3, words, n_intro, t.get("title") or "",
                                  t.get("author") or "", n_intro > 0, secs,
                                  style))
    except (RuntimeError, OSError, ValueError, KeyError) as e:
        die("Video rebuild failed: %s" % e)
    print(json.dumps(summary, indent=2))


def slugify(s, maxlen=80):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    s = re.sub(r"[^A-Za-z0-9]+", "-", s).strip("-").lower()
    return (s[:maxlen].rstrip("-")) or "article"


# ---------------------------------------------------------------- main
def main():
    ap = argparse.ArgumentParser(description="X Article -> MP3")
    ap.add_argument("source", nargs="?", help="X post URL or post id")
    ap.add_argument("--text-file", help="JSON (X API/connector response or "
                    "{title,author,text}) or .txt with the article text")
    ap.add_argument("--title"); ap.add_argument("--author")
    ap.add_argument("--engine", choices=["auto", "xai", "edge"], default="auto")
    ap.add_argument("--voice", help="xAI: eve|ara|rex|sal|leo (or custom id); "
                    "edge: e.g. en-US-AndrewNeural")
    ap.add_argument("--speed", type=float, default=1.0, help="0.7-1.5")
    ap.add_argument("--language", default="en", help="xAI: BCP-47 or auto")
    g = ap.add_mutually_exclusive_group()
    g.add_argument("--intro", dest="intro", action="store_true", default=True)
    g.add_argument("--no-intro", dest="intro", action="store_false")
    ap.add_argument("--out-dir", default="/workspace/article-audio/out")
    ap.add_argument("--dry-run", action="store_true",
                    help="clean + estimate only, no audio")
    ap.add_argument("--yes", action="store_true",
                    help="confirm xAI renders over 60k chars (cost notice)")
    ap.add_argument("--allow-short", action="store_true")
    ap.add_argument("--save-text", action="store_true",
                    help="also write the cleaned narration text next to the MP3")
    gv = ap.add_mutually_exclusive_group()
    gv.add_argument("--video", dest="video", action="store_true", default=True,
                    help="also render a synced reader-video MP4 (default)")
    gv.add_argument("--no-video", dest="video", action="store_false",
                    help="MP3 only")
    ap.add_argument("--video-style", choices=["highlight", "phrase"],
                    default="highlight", help="highlight: words turn gray -> "
                    "white as spoken (default); phrase: whole phrase in white")
    ap.add_argument("--from-timings", metavar="TIMINGS_JSON",
                    help="rebuild only the video from an existing MP3 + "
                    "<base>.timings.json (no TTS call)")
    ap.add_argument("--audio", help="with --from-timings: the MP3 to use "
                    "(default: next to the timings file)")
    a = ap.parse_args()

    if a.from_timings:
        rebuild_from_timings(a.from_timings, a.video_style, a.audio)
        return

    if not (0.7 <= a.speed <= 1.5):
        die("--speed must be between 0.7 and 1.5")
    if not a.source and not a.text_file:
        die("Give a post URL/id or --text-file.")
    if a.text_file:
        doc = load_text_file(a.text_file, a.title, a.author)
    else:
        doc = fetch_fxtwitter(parse_post_id(a.source))
        if a.title: doc["title"] = a.title
        if a.author: doc["author"] = a.author
    body = build_script(doc)
    check_readable(body, doc, a.allow_short)

    have_key = bool(os.environ.get("XAI_API_KEY"))
    engine = a.engine
    if engine == "auto":
        engine = "xai" if have_key else "edge"
    if engine == "xai" and not have_key:
        die("--engine xai needs the XAI_API_KEY environment variable.")
    voice = a.voice
    if engine == "xai":
        voice = (voice or XAI_DEFAULT_VOICE).lower()
    else:
        if not voice or voice.lower() in XAI_VOICES:
            if voice:
                log("note: '%s' is an xAI voice; using free preview voice %s"
                    % (voice, EDGE_DEFAULT_VOICE))
            voice = EDGE_DEFAULT_VOICE

    title = (doc.get("title") or "").strip() or "Untitled article"
    author = (doc.get("author") or "").strip()
    body_words = len(body.split())
    read_min = max(1, int(round(body_words / 238.0)))   # silent-reading time
    script = body
    if a.intro:
        intro = title if re.search(r"[.!?]$", title) else title + "."
        if author:
            intro += " By %s." % author
        intro += " About a %d minute read." % read_min if read_min == 1 else \
                 " About a %d-minute read." % read_min
        script = intro + "\n\n" + body
    words, chars = len(script.split()), len(script)
    est_min = words / (WPM * a.speed)
    xai_cost = round(chars * XAI_USD_PER_M_CHARS / 1e6, 4)
    summary = {
        "ok": True, "title": title, "author": author, "source": doc["source"],
        "post_id": doc.get("post_id"), "words": words, "chars": chars,
        "body_chars": len(body), "est_minutes": round(est_min, 2),
        "engine": engine, "voice": voice, "speed": a.speed,
        "voice_label": "free preview voice" if engine == "edge" else "xAI voice",
        "est_cost_usd": xai_cost if engine == "xai" else 0.0,
        "est_cost_usd_if_xai": xai_cost,
    }
    if engine == "xai" and chars > XAI_LIMIT and not a.yes and not a.dry_run:
        summary.update(ok=False, error="Over 60k chars: est. xAI cost $%.2f. "
                       "Confirm with the owner, then rerun with --yes." % xai_cost)
        print(json.dumps(summary, indent=2)); sys.exit(3)

    os.makedirs(a.out_dir, exist_ok=True)
    base = slugify(title) + "-" + slugify(voice, 30)
    out_path = os.path.join(os.path.abspath(a.out_dir), base + ".mp3")
    if a.save_text or a.dry_run:
        tpath = out_path[:-4] + ".txt"
        open(tpath, "w", encoding="utf-8").write(script)
        summary["text_path"] = tpath
    if a.dry_run:
        summary["dry_run"] = True
        print(json.dumps(summary, indent=2)); return

    for tool in ("ffmpeg", "ffprobe"):
        if not shutil.which(tool):
            die("%s not found on PATH" % tool)
    chunks = chunk_text(script, XAI_CHUNK if engine == "xai" else EDGE_CHUNK)
    t0 = time.time()
    words, methods, offset = [], set(), 0.0
    with tempfile.TemporaryDirectory() as tmp:
        parts = []
        for i, c in enumerate(chunks):
            p = os.path.join(tmp, "part%03d.mp3" % i)
            log("rendering chunk %d/%d (%d chars) via %s/%s"
                % (i + 1, len(chunks), len(c), engine, voice))
            if engine == "xai":
                timing = render_xai(c, voice, a.speed, a.language, p, True)
            else:
                timing = render_edge(c, voice, a.speed, p, True)
            parts.append(p)
            pdur = ffprobe_seconds(p)
            toks = None
            if engine == "xai" and isinstance(timing, dict):
                toks = times_from_xai(c, timing, pdur)
                if toks:
                    methods.add("xai-char-timestamps")
            elif engine == "edge" and timing:
                toks = times_from_edge(c, timing, pdur)
                methods.add("edge-word-boundary")
            if not toks:
                toks = times_proportional(c, pdur)
                methods.add("proportional-chars")
                log("note: no engine timestamps for chunk %d; using "
                    "character-proportional timing" % (i + 1))
            for t in toks:
                t["start"] += offset; t["end"] += offset
            words.extend(toks)
            offset += pdur          # multi-chunk: cumulative durations
        concat(parts, out_path, tmp, "128k" if engine == "xai" else "64k")
    secs = ffprobe_seconds(out_path)
    actual = secs / 60.0
    dev = (actual - est_min) / est_min if est_min else 0.0
    summary.update({
        "chunks": len(chunks), "actual_minutes": round(actual, 2),
        "duration_deviation_pct": round(dev * 100, 1),
        "duration_ok": abs(dev) <= TOLERANCE,
        "render_seconds": round(time.time() - t0, 1),
        "size_mb": round(os.path.getsize(out_path) / 1e6, 2),
        "path": out_path,
    })
    if not summary["duration_ok"]:
        summary["warning"] = ("Duration is %.0f%% off the ~%d wpm estimate; "
                              "listen to check for skipped or garbled text."
                              % (dev * 100, WPM * a.speed))
    n_intro = len(intro.split()) if a.intro else 0
    if offset > 0 and abs(secs - offset) > 0.5:      # re-encode drift
        scale = secs / offset
        for w in words:
            w["start"] *= scale; w["end"] *= scale
    timing_method = "+".join(sorted(methods))
    tpath = out_path[:-4] + ".timings.json"
    try:
        write_timings(tpath, words, n_intro, {
            "title": title, "author": author, "engine": engine,
            "voice": voice, "speed": a.speed, "timing_method": timing_method,
            "audio_path": out_path, "audio_seconds": round(secs, 3)})
        summary["timings_path"] = tpath
    except OSError as e:
        summary["timings_path"] = None
        summary["timings_error"] = str(e)
    summary["timing_method"] = timing_method
    summary["video_path"] = None
    if a.video:
        try:
            summary.update(make_video(out_path, words, n_intro, title, author,
                                      a.intro, secs, a.video_style))
        except (RuntimeError, OSError, ValueError, KeyError) as e:
            summary["video_error"] = "%s (the MP3 is fine)" % e
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
PYEOF
chmod +x /workspace/article-audio/article_audio.py
python3 -m py_compile /workspace/article-audio/article_audio.py && echo "script OK"
```
