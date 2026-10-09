---
name: cartoon-pfp
description: "Use when turning a reference photo into a profile picture in a named style: cartoon styles become a cartoon character, live-action movies or shows get that look more realistically, time periods look like a real person from that era. Three options, user picks one, then edit rounds."
---

# Styled profile picture

## Inputs
- One reference photo. The subject must be the requester, their pet, or someone who agreed.
- One style name. It can be a cartoon or animation look, a live-action movie or show, or a time period.
- If either one is missing, ask only for the missing one. If the photo has several faces, ask which one. If the face is blurry or hidden, ask for a clearer photo.

## Step 1: pick the mode from the style
Decide which mode the style belongs to before you write any prompt. If it's truly unclear (for example, a title that exists as both a cartoon and a live-action film), ask one short question.

**A. Cartoon or animated.** Examples: The Simpsons, Pixar-like, anime, claymation, Tim Burton stop-motion, comic book.
- The person is redrawn as a 3D cartoon character who belongs in that style's world.
- Anatomy and proportions follow the style: head size, eyes, nose, mouth, build. Skin color, materials, line work, and textures follow it too. A Simpsons-like result has yellow skin, an overbite, and big round eyes. A Burton-like result is gaunt, pale, and spindly, with huge dark-ringed eyes and a stop-motion feel.
- A realistic face on a styled background fails this mode, and so does a generic cartoon face.

**B. Live-action movie or show.** Examples: Top Gun, Peaky Blinders, Mad Max, American Horror Story, Gladiator.
- Keep it realistic, like a cinematic still or a character portrait.
- Their real face, lightly styled.
- Put them in that movie's character look: wardrobe, hair and grooming, makeup, props, color grade, lighting, and setting mood. Someone should recognize the movie's look.
- They play an original character in that world. Don't make them look like the actor, and don't add real actors.
- A cartoon or plastic 3D render fails this mode, and so does a costume that doesn't read as that movie.

**C. Time period or era.** Examples: 1860s, WWII 1944, Roaring Twenties, Old West, Viking age, 1970s.
- Make it look like a real photo or portrait of them as a real person living then.
- Use period-accurate clothing, hair and facial hair, accessories, and setting.
- Match the era's image medium: a daguerreotype or tintype look for the mid-1800s, sepia or black and white for early 1900s to the 1940s, and period film color after that.
- No modern items (phones, modern glasses frames, logos) unless they asked.
- A cartoon, costume-party look, or modern photo quality fails this mode.

**Mixed asks** follow the words used. For example, "Simpsons but 1920s" is mode A with 1920s wardrobe, and "realistic Simpsons" is mode B treatment of that world.

## Likeness (all modes)
They should still be recognizable through their hair, facial hair, glasses (restyle glasses for the era or style if it makes sense), skin tone, freckles, tattoos, and overall vibe. In mode A, keep likeness through those traits rather than realistic anatomy. In modes B and C, keep the actual face.

## Prompts
Write each GenerateImage prompt with the subject first: who they become in the style (anatomy or face, wardrobe, hair, materials or photo medium), then the likeness traits to keep, and the background last. Name the mode's rendering directly: "3D cartoon render" for A, "photorealistic cinematic portrait" for B, "authentic period photograph" for C.

## Round 1: three options (always exactly three)
Call GenerateImage three times, with `reference_image_paths` set to the photo and `aspect_ratio` set to `1:1`.

Every option:
- Is head and shoulders, centered, with the face filling roughly the middle 60% so X's circle crop keeps it.
- Fully fits its mode.
- Has a simple background that fits the style. No text and no watermark.

Make the three genuinely different takes: for example, a faithful take, a bolder take, and a moodier take, or three different characters or roles from that world or era. Before sending, check each one against the mode's failure line and redo any that fail. Send all three in one message labeled A, B, and C with one short line each, then ask which one.

## Round 2 and later: edits
After they pick, ask "any edits?" Apply each edit using the picked image as the reference, and add the original photo if the likeness drifts. Stay in the same mode on every revision. Send one revised image per round, and keep going until they say it's good.

## Deliver
Send the final 1:1 image. Remind them once that X shows it as a circle. They upload it themselves.

## Style and safety rules
- Evoke a movie's or show's look. Never add its logos, title text, watermarks, or real actors, and don't make the subject look like a specific actor. The subject plays an original character.
- Realistic results (modes B and C) are only ever of the requester, their pet, or someone who agreed. Never make realistic images of anyone else, never make images meant to deceive (fake news photos, fake documents, or placing them at real events or with real people), and never make sexual, gore, or mocking images.
- Never post, upload, or change a profile picture anywhere.
