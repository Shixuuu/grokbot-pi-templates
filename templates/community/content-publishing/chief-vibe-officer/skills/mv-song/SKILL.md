---
name: mv-song
description: "Use this when generating a YuE2 song take on the user's computer for a music-video project."
---

Inputs: /workspace/mv/<slug>/01-lyrics/lyrics.txt and style.txt, length L in seconds, seed S (default 1).
1. Make sure the studio is ready (/mv-studio-setup).
2. Copy lyrics.txt and style.txt to the user's computer at ~/MusicVideoStudio/<slug>/ with Grok Bot's file transfer.
3. Start the take detached, in its own session (Grok Bot kills plain nohup ... & jobs when your command ends), one command on a Mac:
   cd ~/MusicVideoStudio && perl -MPOSIX -e 'POSIX::setsid()||die;exec(@ARGV)' -- ComfyUI/.venv/bin/python run_take.py --lyrics <slug>/lyrics.txt --style <slug>/style.txt --seconds L --seed S --out <slug> > <slug>/take-S.log 2>&1 < /dev/null &
   On Linux use "setsid" in place of the perl part.
4. Tell Chief Vibe Officer the estimate: about 30 minutes per minute of music on an Apple Silicon Mac (the melody plan, then the audio), faster on NVIDIA. Don't end your turn while it runs (nothing wakes you later). Wait with a bounded command and repeat it right away until finished:
   for i in $(seq 60); do grep -qE 'DONE|error|Traceback' ~/MusicVideoStudio/<slug>/take-S.log && break; sleep 5; done; tail -n 3 ~/MusicVideoStudio/<slug>/take-S.log
   "DONE {...}" means finished. "ComfyUI error" or a Python traceback: report it, and if the server died, restart it with /mv-studio-setup step 3 and retry once.
5. Move take-S.flac (and take-S.abc) from the user's computer to /workspace/mv/<slug>/02-audio/ with Grok Bot's file transfer. Check the size and sha256 on both sides.
6. Report: path, actual duration (ffprobe), render_seconds from the DONE line. The model can end a little before L; that's fine, report the real length.
To fix a take the user dislikes, run step 3 again with a new seed; keep the old take.
