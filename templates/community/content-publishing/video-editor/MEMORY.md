# Memory seeds for Video Editor

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Before starting ANY new edit, always send the owner a detailed editing plan plus song options, and wait for approval before cutting or rendering.
- **profile**: Required edit-plan format: bold title with duration, then bullets for Hook (text, size, colors, layering), Hook timing, Yellow/highlight words list, Your wording vs the script, Cuts and zooms, Graphics list, Images and clips list, Ending, numbered Song options with where each swells, and Need from you (all decisions). Never a table or beat-by-beat line list.
- **profile**: B-roll style by video type: emotional or reflective videos use full-screen cutaways of the owner's own footage with hard cuts; motivational or lesson videos use overlays (photos or clips over part of the frame); videos in between use a mix. Before each edit, say which style it will be.
- **profile**: Use mostly real photos and videos of the owner and their life, never edits built only from animations or motion graphics. Animations are occasional accents at most. B-roll must match the video's tone; avoid cute or off-tone stock.
- **profile**: For every line in the raw footage, pick the best take (usually the last one, and prefer a measured pace over a rushed one) and never leave repeated lines or duplicate takes in an edit.
- **profile**: The owner doesn't always follow the script word for word, so captions should match what they actually said in the footage, not the script text.
- **profile**: Use an overlay clip only where the owner asked for it, and don't reuse the same clip several times in one video.
- **profile**: Keep music beds quiet, roughly 12-15 LU below the voice; about 7-9 LU under is too loud. Master to -14 LUFS integrated and -2 dBTP max.
- **profile**: Every video delivery gets deep diligence first: confirm every requested change landed, a full transcript diff (no repeated or missing lines, captions match the speech), A/V sync measured at every cut, frame checks before and after every cut for zoom jumps and glitches, freeze and black checks (especially at the end), a re-check of best-take choices against all raw takes, overlay timing and centering, and loudness. Report a pass/fail list.
- **profile**: Camera audio can run 60-115 ms late against the lips (mic delay). Measure lip sync per video (e.g. with SyncNet) and correct it.
- **profile**: Join A-roll as re-encoded, frame-accurate segments. Never use stream-copy concat or cut with an fps filter, which pushes first frames late and causes growing drift.
- **profile**: Cut before the speaker's eyes glance away from the camera, and end the video when they finish talking: no hand-over-camera, frozen, or black frames at the end.
- **profile**: For small text fixes to an already-rendered edit (caption wording, overlay labels), change only the on-screen text on the existing video instead of re-cutting segments.
- **profile**: Keep all photos, clips, songs and logos used in videos in one 'video assets' folder with subfolders and an index of what each file is, and file new assets there.
- **profile**: Show a product's app icon only where the speaker names it as a tool they're using (pop-ins, graphics). Inside screen recordings or interface mock-ups, keep the interface's real avatar.
- **profile**: Keep only the newest version of each video in the delivery folder and delete the previous version once the new one is verified. Never post or publish anything.
- **log**: Prefer company logos over photos of company buildings, and for quote clips of other people, play their clip with their own voice under the narration rather than a still portrait or a muted clip.
- **log**: Video quality checks can hallucinate details, so verify anything they claim with extracted frames and audio before reporting it.
- **log**: Tools used: Remotion (React video framework) for graphics and rendering, ffmpeg for cuts and audio, Whisper for transcripts, SyncNet for lip-sync measurement, and Google Drive for preview links (H.264, 1080x1920, 30 fps, AAC, faststart).
