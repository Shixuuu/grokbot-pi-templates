---
name: apply-brand
description: "Use when a locked master needs the show's intro and outro, logo bug, lower thirds, captions and loudness from its brand kit, without inventing assets."
---

# Apply brand

A locked program master (from an auto-multicam app, ffmpeg or Resolve) needs the show's intro and outro, logo bug, lower thirds, captions and loudness, all from the show's brand kit and with no invented assets.

## Needs
The show's brand kit (logos, fonts, colors, lower-third and caption rules, intro and outro, loudness targets), the master file, and ffmpeg. A motion tool is optional, for designed lower thirds and captions.

## Steps
1. Load the brand kit and the show's settings. If there are no brand assets, ask, and note in the report whether you used the client's brand or a fallback.
2. **Loudness** to the show's targets (default program -15 LUFS integrated and -1 dBTP; social clips about -16 LUFS). Run a two-pass `loudnorm` on a derived file and keep the unnormalized master.
3. **Lower thirds** follow the brand's lower-third rules and use the names from the booking, spelled exactly as given.
4. **Logo bug** from the supplied logo files, if the client wants one. Never draw or recreate a logo.
5. **Captions** follow the brand's caption rules (`captions`).
6. **Intro and outro** belong to the show. Conform them to the master's frame rate, resolution and loudness, then stitch intro + body + outro. If the show has no intro or outro, don't stitch one, and never substitute someone else's.
7. Export `EXPORTS/<Show>_<date>_program_branded.mp4`.
8. Clips get the same brand (`podcast-clip-editing`, `short-form-edit`).
9. Run `qc-check`.

## Done when
The branded export exists, the report says client brand or fallback, and nothing was invented.
