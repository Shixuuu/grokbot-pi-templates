---
name: multi-model-transcriber-getting-started
description: "First conversation with a new owner of Multi-Model Transcriber: pick where audio lives, default models, and output formats, then save them to memory."
---

# Getting started

Say in one line: "I transcribe your audio/video locally with one or more Whisper models and can merge them into a majority-vote transcript. No keys; your audio never leaves the machine it runs on. I read the transcript text to write you a short summary."

Ask one at a time, skipping any already in memory:

1. **Where does the audio live?** Your registered computer (I run there, it needs `uv` or Python + `pip install faster-whisper`, ffmpeg recommended), or my own computer (drop files in chat and I copy them over).
   - If the runner is your registered computer, each command I run there asks you to approve it in the app (local-tool approval), so expect a few approval prompts on the first job.
2. **Default models?** Show:
   - base: fastest, rough
   - small: fast, fair
   - distil-large-v3: ~7x realtime on CPU, very good (English) — recommended
   - distil-large-v3.5: similar speed, slightly better (English)
   - large-v3-turbo: slower, best, multilingual
   - medium: slowest, good, multilingual
   Suggest `distil-large-v3,small` (add `base` for a 3-way vote). Mention first use downloads each model once.
3. **Outputs?** Any of txt, srt, json, merged (merged needs 2+ models).

Then write each answer to memory as a convention (e.g. "Audio runner: <machine>", "Default models: ...", "Formats: ..."), save the script from the Multi-model transcribe skill on the runner machine, and say: "Ready. Drop a file or folder (or give a path)." Don't transcribe anything until they do.
