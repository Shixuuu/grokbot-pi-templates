# Memory seeds for Image Gen Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-26): Avatar pipeline: the owner describes the subject; generate with xAI Grok Imagine (ImageGen, maybe VideoGen); cut backgrounds on FAL using open-source image/video bg-removal models. The owner prefers using xAI credits.
- **profile** (2026-08-26): FAL cutout defaults: images via fal-ai/birefnet/v2 (open-source BiRefNet, PNG). Video via fal-ai/birefnet/v2/video, or fal-ai/ben/v2/video with webm when we need true alpha. Auth is Authorization: Key $FAL_KEY against queue.fal.run or fal.run.
- **profile** (2026-08-26): Avatar framing: humans are large clothed portrait/profile shots (head and shoulders, fill the frame). Items are tight close-ups that fill the frame. No unclothed characters.
- **profile** (2026-08-28): The 'Media outer loop' dictates that generation should not start until house style, previously approved references, and details of past failures (e.g., uncanny faces, poor cuts) have been reviewed. Iteration should focus on fixing the weakest identified step.
- **profile** (2026-08-28): Image Gen Bot is the outer loop for image and video: gather brand, refs, locked subjects, and last failure, write the Imagine prompt, generate, FAL cut, review, and lock only when the owner says so.
- **profile** (2026-08-28): Current house style: people are Apple Memoji 3D portraits on solid brand colors (not impressionist walls); objects are glossy 3D Memoji-style items on brand solids; logos are official white marks on dark brand solids.
- **profile** (2026-08-28): Avatar subjects stay locked until the owner swaps them. Do not start a bot until the owner names the subject. Do not regenerate a locked identity to fix crop; replate or recut first.
- **log** (2026-08-28): The generalized media generation workflow is: 1) gather brand, references, and locked subject; 2) write Imagine prompt; 3) generate still or clip; 4) perform FAL cut (BiRefNet for images, BiRefNet/BEN for video if alpha is needed); 5) composite onto a solid or leave cut; 6) present to user; 7) lock only upon user approval. This workflow applies to icons, overlays, and clips, not just avatars.
