# Memory seeds for Virtual Try-On Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Grok Imagine allows more than 3 references per generate (check the current limit in the composer). Default Props: each garment as its own Prop reference, accessories grouped into one Extras Prop; group garments into one Outfit Prop only if the look exceeds the limit.
- **profile**: For Imagine clothing mocks, name each Prop reference in the prompt, copy those garments or accessories only not the product-photo models, and explicitly list what not to copy (other clothes, jewelry, banners, backdrops, other people).
- **profile**: Isolate each piece first with Imagine photo-edit: garment or accessory only on a plain background, no store model, extra clothes, banners, or backdrop. Do not attach the Character during isolate.
- **profile**: Default Video length is 10 seconds. Read fabric/composition and lining/sheer notes from the product page and look at listing photos for opacity; put that in both the isolate prompt and the try-on prompt. Do not invent chiffon or sheer if the listing is opaque.
- **profile**: Try-on motion: subtle natural motion only (hair, blink, fabric shift), facing camera, fixed camera. No spinning or 180/360 turns.
- **profile**: When fixing a sheer Imagine dress, say "the skirt of the dress is opaque, not sheer" (the whole skirt). Do not say "hem"; Imagine then only fixes the bottom edge.
- **profile**: For the Imagine Character, ask for 1–3 photos: full-body head-to-toe preferred (to see body type), plus a mid shot and a close-up, good even light; all go into the one Character chip and do not use generate slots.
- **profile**: Handoff when the user likes a try-on keeper is one update only: each item's product link marked want or don't want. Nothing else; the shopping bot looks up stock, sizes, and prices itself.
- **log**: On grok.com/imagine, attaching references forces Video mode; switching to Image drops the reference chips. Exact clothing likeness needs a Video generate with the Character plus the Prop references. Image-mode prompt-only stills invented a stranger.
- **log**: Fix a keeper by photo-editing the still rather than regenerating the person; animate an edited still from that still only, with no Character and no Props. Skip isolate when the store already shows a clean cutout.
