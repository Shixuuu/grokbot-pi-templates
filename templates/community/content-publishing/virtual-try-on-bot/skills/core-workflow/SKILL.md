---
name: core-workflow
description: "Use this whenever the job is turning items the user likes into a Grok Imagine try-on video of them on their Character. Shopping, stock, sizes, prices, cart, and checkout go to a separate shopping bot."
---

# Core workflow

This bot turns items the user likes into a Grok Imagine video of the user wearing them. Its job ends when the user likes a keeper. Everything about buying (stock, sizes, prices, cart, checkout) belongs to the shopping bot.

The Character is a saved Imagine reference (1–3 photos of the user inside one chip), not a prompt word.

## Inputs

Product photos or links the user drops in chat, or a look the shopping bot sends over.

## Own vs hand off vs never

**Own:** Character setup, fabric notes from the product page, isolating each item on a plain background, the Prop references (one per garment, accessories grouped), the 10s try-on video, a still when asked, and small edits on that still.

**Hand off:** when the user likes a keeper, send the shopping bot one update: each item's product link, marked want or don't want. Nothing else, because the shopping bot looks up stock, sizes, and prices itself.

**Never:** add to cart, pick sizes, price a look out, or buy. Never post anything publicly. Never change Character details (face, hair, glasses, anything in the reference photos) unless the user asks. Never use someone else's photos as the Character without their say-so.

## Hard limits (Imagine)

- A Character holds at most 3 images. Those photos live inside the Character. Do not attach them as separate generate chips.
- Imagine now allows more than 3 references per generate. Check the current limit in the composer; saved refs and uploads share it, and chips past it are ignored.
- Attaching a reference forces Video. Switching to Image drops every chip and likeness is lost.
- Default Video: 10 seconds, 720p, 9:16.
- Do not attach the Character while isolating product photos.

## Path

1. **Character.** Ask for 1–3 photos: full body head to toe, a mid shot, and the face, in good even light. Imagine, then References, then a new Character (not Prop or Style); put all photos into that one Character and save it. Skip if they already have a Character they like.
2. **Fabric.** For each item, read composition, lining, sheer yes/no, and stretch from the product page, and check the listing photos for opacity. This line goes into the isolate and try-on prompts so weight and opacity animate right. Never invent sheer or chiffon.
3. **Isolate (Image mode, no Character).** One product photo at a time. The item alone on a plain white background, with no model, other clothes, or banners. For a dress that isn't sheer, say "the skirt of the dress is opaque, not sheer" (never "hem", which only fixes the bottom edge). Skip when the listing is already a clean cutout.
4. **Props.** Save each cleaned garment (top, bottom, dress, outerwear) as its own Reference under Props. Group the accessories (shoes, bags, jewelry, glasses) side by side on white into one Extras Prop. If the look has more pieces than the reference limit allows, group the garments into one Outfit Prop as a fallback.
5. **Try-on (Video, 10s).** Attach the Character, each garment Prop, and the Extras Prop. Confirm every chip is attached before submitting. The user faces the camera with subtle natural motion (hair, blink, fabric shift), the camera stays fixed, and there are no spins or turns. The prompt names each reference, copies those items only, and includes the fabric line. If a submit comes back empty, resubmit with the same chips.
6. **Keeper.** Pull a still if asked. Make small fixes by editing that frame instead of regenerating the person. If they want the edited still in motion, animate from that still only (no Character, no Props), same facing-camera motion.
7. **Handoff.** When the user likes a keeper, send the shopping bot the update below, tell the user the shopping bot has it, and stop. If they never say they like it, hand off nothing.

## Handoff update (shape)

```
Try-on keeper the user liked:
- [product link] | want
- [product link] | don't want
```

## Decision rules

- Likeness needs Video with the Character chip. Prompt-only Image mode invents a stranger.
- Separate garment refs keep cut, print, and fabric sharper; accessories stay grouped because they're small and it saves slots.
- Isolate first so the try-on prompt doesn't need "ignore the model" lines.
- One look at a time. If two items compete for the same slot, the user picks, or you pick and show it before generating.
- Don't redo a look the user already called perfect.
- Questions about sizes, prices, stock, or buying go to the shopping bot.

## Prompt skeletons

Isolate:

```
Isolate this exact [item] on a plain seamless white background. Remove the model, body, hair, face, arms, legs, other clothes, shoes, bags, jewelry, banners, and backdrop. Keep only this item, same color, print, and silhouette. [Fabric/opacity line from the listing.]
```

Try-on:

```
@[Character] is the person. Same face, body, hair, and anything else in the reference photos. Do not change likeness.

@[Garment 1 Prop] is the [garment]. Fabric: [exact line from the product page].

@[Garment 2 Prop] is the [garment]. Fabric: [exact line from the product page].

@[Extras Prop] is these accessories: [list].

Copy those items only. Do not copy product-photo models, other clothes, jewelry, banners, backdrops, or other people.

Full-body studio shot, white seamless background, standing facing the camera, 9:16. Subtle natural motion only: slight hair movement, a blink, fabric shift. Fixed camera. No turn or spin.
```

Animate an edited still:

```
Animate this exact photo. Keep the face, body, hair, outfit, pose, camera, and studio background identical. Subtle natural motion only: slight hair movement, a blink, fabric shift. Facing the camera. Fixed camera. Do not restyle or change clothes. Do not turn or spin.
```
