---
name: podcast-produce
description: "use this when producing today's episode of the owner's personal daily podcast, when the daily podcast routine fires, or when the owner asks to change their show"
---

# Produce today's episode

Everything happens in `/workspace/podcast/`. Read `show.json` first; it is the source of truth.

## 0. Resume check
Date is today in the show's timezone (`YYYY-MM-DD`). If `YYYY-MM-DD/script.md` exists and the final MP3 doesn't, skip to step 4 with that script.

## 1. Research, per segment, in show order
Read the last 7 days of `continuity-log.md` first so you report what changed, not what you already said.
- **News topic**: developments since the last episode from the segment's sources. Cover every real development; tighten wording instead of cutting stories.
- **Schedule watch**: the person or org's public schedule today, then "watch this week". Times in the show's timezone; "as scheduled"; never invent an event. If nothing is published yet, say what's known in one line.
- **Ongoing story**: open `trackers/<id>.md` (one line per thread: name, stage, last movement, next step). Cover only threads that moved, as "yesterday X, today Y", plus the next step. Close a thread after one final mention. On a thread's first run (no history), state its current status once as the baseline and log it.
- **Changes watch**: who or what is in, out, or rumored (rumors labeled with the outlet).
- **Reflection**: one idea, host-voiced, no lists. No invented or misattributed quotes.
- **Your inputs**: read the owner's feed or connector and pick the single strongest item.
- **Fixed bit**: weather for the segment's location (a free forecast API such as Open-Meteo; for coastal areas also check the National Hurricane Center's active storms), a quote, scores and so on.
If a segment has nothing new and `when_empty` is skip, drop it silently and record it in the manifest with a reason ("length" is never a reason).

## 2. Write the script
`YYYY-MM-DD/script.md`, one section per spoken block:
```
## [Host] Segment title
Spoken text...
```
- An intro (show name, date, a one-line preview of what's coming) and a short sign-off, both by the first host.
- Write for the ear: short sentences, no URLs, no markdown inside spoken text, numbers spoken naturally.
- Never invent news, scores, events, numbers or quotes. Label rumors with the outlet.
- Hand-offs: check each block's first line against the block before it. Only thank a co-host when they spoke immediately before.
- Two-host banter is fine where the segment's tone says so; keep each line tagged with its host.

## 3. Manifest
`YYYY-MM-DD/manifest.json`: segments included, `silent_omits` with reasons, sources used, any source failures.

## 4. Audio
For each block, in order: write its text to `seg-NN.txt` and run
`python3 scripts/tts.py --provider <host.provider> --voice <host.voice> --in seg-NN.txt --out seg-NN.mp3`
The script splits long text and retries 3 times. If any block still fails, stop and deliver the script plus the exact error, marked incomplete. Never claim a finished episode you don't have.
Then `python3 scripts/assemble.py --out "<Show Name> YYYY-MM-DD.mp3" seg-*.mp3`.

## 5. Deliver
- **chat**: chat attachments don't accept bare audio, so wrap the MP3 as an MP4 with a title card and attach that, plus a one-line note on what's in it. Write the show name to `title.txt` and the date line to `date.txt` (files, so apostrophes in names can't break the filter), then:
  `ffmpeg -y -f lavfi -i "color=c=0x14161c:s=1080x1080:r=2" -i "<episode>.mp3" -vf "drawtext=textfile=title.txt:fontcolor=white:fontsize=84:x=(w-text_w)/2:y=(h-text_h)/2-50,drawtext=textfile=date.txt:fontcolor=0xff7a3d:fontsize=48:x=(w-text_w)/2:y=(h-text_h)/2+60" -c:v libx264 -tune stillimage -pix_fmt yuv420p -c:a aac -b:a 128k -shortest "<episode>.mp4"`
- **email / drive**: use the owner's connector; if the MP3 is too large for it, send the script and attach the video in chat instead, and say so once.

## 6. Remember
Append one line per covered story to `continuity-log.md`: `YYYY-MM-DD | segment id | story | what's new`. Update tracker files. Keep only the last 30 days in the log.

## Changing the show
The owner changes the show only by chatting ("drop the sports segment", "make it calmer", "switch Rex to ElevenLabs"). Repeat the change back in one plain sentence, update `show.json`, confirm, and adjust the daily routine if the ready time changed. Never ask the owner to edit files.

## Helper scripts (write these to /workspace/podcast/scripts/ on first run)

### tts.py
```python
#!/usr/bin/env python3
"""Render one text segment to MP3 with the host's provider.
Usage: tts.py --provider xai|elevenlabs --voice VOICE --in text.txt --out seg.mp3
Keys come from env: XAI_API_KEY, ELEVENLABS_API_KEY. Never printed."""
import argparse, json, os, sys, time, urllib.request, urllib.error, subprocess, tempfile

LIMITS = {"xai": 14000, "elevenlabs": 4500}

def chunks(text, limit):
    out, cur = [], ""
    for para in text.replace("\r", "").split("\n"):
        para = para.strip()
        if not para:
            continue
        while len(para) > limit:  # split very long paragraphs on sentence ends
            cut = para.rfind(". ", 0, limit)
            cut = cut + 1 if cut > 0 else limit
            out.append(para[:cut]); para = para[cut:].strip()
        if len(cur) + len(para) + 1 > limit:
            out.append(cur); cur = para
        else:
            cur = (cur + "\n" + para).strip()
    if cur:
        out.append(cur)
    return out

def call(provider, voice, text):
    if provider == "xai":
        key = os.environ.get("XAI_API_KEY")
        url = "https://api.x.ai/v1/tts"
        body = {"text": text, "voice_id": voice, "language": "en",
                "output_format": {"codec": "mp3", "sample_rate": 24000, "bit_rate": 128000}}
        headers = {"Authorization": f"Bearer {key}", "Content-Type": "application/json"}
    elif provider == "elevenlabs":
        key = os.environ.get("ELEVENLABS_API_KEY")
        model = os.environ.get("ELEVENLABS_MODEL", "eleven_multilingual_v2")
        url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice}?output_format=mp3_44100_128"
        body = {"text": text, "model_id": model}
        headers = {"xi-api-key": key or "", "Content-Type": "application/json", "Accept": "audio/mpeg"}
    else:
        sys.exit(f"unknown provider {provider}")
    if not key:
        sys.exit(f"missing key for {provider}")
    req = urllib.request.Request(url, data=json.dumps(body).encode(), headers=headers, method="POST")
    last = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=180) as r:
                data = r.read()
                if len(data) < 1000:
                    raise RuntimeError(f"tiny response ({len(data)} bytes)")
                return data
        except urllib.error.HTTPError as e:
            last = f"HTTP {e.code}: {e.read()[:300].decode(errors='replace')}"
        except Exception as e:
            last = str(e)
        time.sleep(2 * (attempt + 1))
    sys.exit(f"TTS failed after 3 tries ({provider}/{voice}): {last}")

def main():
    a = argparse.ArgumentParser()
    a.add_argument("--provider", required=True); a.add_argument("--voice", required=True)
    a.add_argument("--in", dest="inp", required=True); a.add_argument("--out", required=True)
    o = a.parse_args()
    text = open(o.inp).read()
    parts = chunks(text, LIMITS[o.provider])
    if len(parts) == 1:
        data = call(o.provider, o.voice, parts[0]); open(o.out, "wb").write(data); return
    with tempfile.TemporaryDirectory() as d:
        files = []
        for i, p in enumerate(parts):
            f = os.path.join(d, f"{i:03d}.mp3"); data = call(o.provider, o.voice, p); open(f, "wb").write(data); files.append(f)
        lst = os.path.join(d, "list.txt"); open(lst, "w").write("".join(f"file '{f}'\n" for f in files))
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", lst,
                        "-ar", "44100", "-ac", "1", "-b:a", "128k", o.out], check=True)

if __name__ == "__main__":
    main()
```

### assemble.py
```python
#!/usr/bin/env python3
"""Join segment MP3s (in order) into one episode with short gaps, normalized loudness.
Usage: assemble.py --out episode.mp3 seg1.mp3 seg2.mp3 ...  [--gap 0.6]"""
import argparse, os, subprocess, tempfile
a = argparse.ArgumentParser(); a.add_argument("--out", required=True); a.add_argument("--gap", type=float, default=0.6)
a.add_argument("segments", nargs="+"); o = a.parse_args()
with tempfile.TemporaryDirectory() as d:
    gap = os.path.join(d, "gap.mp3")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=44100:cl=mono",
                    "-t", str(o.gap), "-b:a", "128k", gap], check=True)
    norm = []
    for i, s in enumerate(o.segments):
        n = os.path.join(d, f"n{i:03d}.mp3")
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", s, "-ar", "44100", "-ac", "1",
                        "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-b:a", "128k", n], check=True)
        norm += [n, gap]
    lst = os.path.join(d, "list.txt"); open(lst, "w").write("".join(f"file '{f}'\n" for f in norm[:-1]))
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", lst,
                    "-c", "copy", o.out], check=True)
print(o.out)
```
