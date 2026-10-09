---
name: heckler-meme-sources
description: "Use this when you need an animated GIF that no memegen template covers, or a custom animated meme: the keyless reaction-GIF sources, their safe reaction names, the memegen custom-background trick, and how to verify the result."
---

# Heckler meme sources (beyond the template catalog)

Try a memegen template first (heckler-meme-library). Use these when no template fits the joke, or when you want a moving picture for a still-only joke.

## Keyless sources
| Source | What you get | Use as memegen background? |
|---|---|---|
| otakugifs.xyz | SFW anime reaction GIFs, by reaction name | **Yes**, for animated captions |
| nekos.best | SFW anime reaction GIFs, by category | **No** (returns 415), so post the raw GIF |
| memegen `custom` | Your captions on any background it can fetch | This is the trick itself |

## Safe reaction names (use only these)
- **otakugifs:** facepalm, shrug, confused, huh, sigh, smug, stare, angrystare, mad, no, stop, sorry, nervous, sweat, surprised, woah, tired, yawn, sleep, cry, sad, pout, slowclap, clap, thumbsup, celebrate, yay, laugh, evillaugh, run, sip, roll
- **nekos.best:** facepalm, shrug, confused, think, smug, stare, shocked, bored, yawn, sleep, nope, baka, bonk, tableflip, clap, thumbsup, laugh, cry, pout, sip, lurk, nod, teehee, bleh, run, salute
- **Never use** romantic, sexual, or violent reactions (kiss, cuddle, hug, lick, blush, bite, punch, kick, slap, shoot, and similar), even in Vulgar. Never keyword-search open image sites. They return explicit images and real disasters.

## Recipes
```bash
# otakugifs: random GIF for one reaction (list: /gif/allreactions)
bg=$(curl -s "https://api.otakugifs.xyz/gif?reaction=facepalm" | python3 -c 'import sys,json;print(json.load(sys.stdin)["url"])')

# nekos.best: raw GIF (list: /api/v2/endpoints)
curl -s "https://nekos.best/api/v2/facepalm?amount=1" | python3 -c 'import sys,json;print(json.load(sys.stdin)["results"][0]["url"])'

# memegen custom background: animated captions on the otakugifs GIF
u=$(curl -s -m 60 -X POST https://api.memegen.link/images/custom -H 'Content-Type: application/json' \
  -d "{\"background\":\"$bg\",\"text\":[\"said verified\",\"it 404s\"],\"extension\":\"gif\"}" \
  | python3 -c 'import sys,json;print(json.load(sys.stdin)["url"])')
code=$(curl -sL -m 150 -o meme.gif -w '%{http_code}' "$u")
[ "$code" = 200 ] && [ "$(stat -c %s meme.gif)" -gt 5120 ] && ! head -c 20 meme.gif | grep -qi doctype && echo ok || echo "FAILED ($code)"
```

## Checks that matter
- **Always check the HTTP status.** A background memegen can't use returns **HTTP 415 plus a gray striped placeholder GIF** (30 to 40 KB). It passes a size check but it's not your meme.
- A 567-byte "Application Error" page (HTTP 503) means memegen is overloaded. Wait 30 to 60 seconds and retry once.
- **Make one meme request at a time.** Animated renders take 5 to 20 seconds each, and parallel load has knocked the server over before.
- Download to the memes folder in your notes folder and attach the file. Links go alone in a code block.
- Imgflip's template list is keyless but static. Its images work as memegen backgrounds, but captioning on Imgflip itself needs an account, so don't sign up for anything.

## Fallback
If nothing here fits, render a still PNG from a memegen template. Use an image generator for custom art, and never with nudity, sexual imagery, or real people.
