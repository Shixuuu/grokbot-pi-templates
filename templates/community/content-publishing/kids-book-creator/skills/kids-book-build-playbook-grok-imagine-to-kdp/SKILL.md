---
name: kids-book-build-playbook-grok-imagine-to-kdp
description: "Use this when starting, rebuilding, or fixing any children's picture book (art, layout, back cover, review packet, KDP upload) so it passes margins and the owner's taste in one pass instead of many rounds."
---

# Kids book build playbook: do it right in one pass
Follow in order. Pair with the checklist skill `Kids book ready-to-publish checklist`.

## 0. Ground rules
- Author name on every book: the name saved in getting started. Expanded Distribution OFF.
- Only the owner typing their approval phrase in chat authorizes: KDP upload/resubmit, publish, price change, ad spend, outgoing messages. Never type a password; never enter tax/bank info. If the KDP session dies, stop, leave the draft, tell the owner once.
- Keep the exact words of the story. If art does not fit the page, extend it to full bleed; do not regenerate the scene. Avoid green or blurry border frames, pictures stacked on pictures, and pasted-on extensions.
- Every kids book teaches ONE clear lesson (warm, not preachy), not repeated from an earlier book.

## 1. Specs (8.5x8.5 paperback, full bleed)
- Interior page: 8.625 wide x 8.75 tall in, 400 dpi = 3450 x 3500 px. Min 24 pages. Pages after the story are real coloring and activity pages, never blanks or flat fills.
- Bleed 0.125 in on top, bottom, and the OUTSIDE edge only.
- Text safety: KDP hard minimum 0.375 in inside the trim. Aim for 0.5 in on every side including the inside edge.
- Cover wrap = bleed + trim + spine + trim + bleed wide, 8.75 tall. Spine width from the KDP calculator (24 pages ~0.056 in); no spine text under 79 pages. Barcode reserve: white 2.0 x 1.2 in box on the back cover, bottom-right, 0.25 in inside trim.

## 2. Art recipe: full-bleed SQUARE pages with Grok Imagine in the browser
Why: the GenerateImage tool ignores square (always 16:9) and ignores reference images. Cropping, stretching, mirroring edges, blurred fills and repainting all look wrong. Only Grok Imagine's 1:1 mode extends art naturally.
1. Make a character reference image first (the cast together, art style set). For every page, in Grok Imagine upload that reference, set the aspect ratio to 1:1 BEFORE generating, and prompt with the scene plus the exact page text. When two reference images are attached the aspect-ratio control can disappear: merge them into one reference sheet and set 1:1 after attaching.
2. Delegate to a browser helper (one at a time) at https://grok.com/imagine, download each full-size result (1408x1408). If Imagine asks the owner to sign in, hand them the screen.
3. Page prompt template: "Square 1:1 children's picture book page in the same soft watercolor style and the same characters as the reference image. SCENE. The page shows this text exactly, in a big friendly hand-lettered font, in a clear area, spelled exactly as written and nothing else: TEXT. Keep the whole scene and all lettering well inside the picture, at least 12 percent away from every edge, and fill the border with more soft background so it looks like one seamless full-bleed painting. No frame, no border, no page numbers." For art you already have, use the ZOOM-OUT prompt: "Make this a square 1:1 image. Shrink the whole picture to about 84 percent, centered, and fill the new border all around with more of the same scenery so it looks like one seamless painting. Keep every character, object and every word of the text exactly the same, unchanged and not moved relative to each other. Same style and colors. No frame, no border, no new text." (Add "keep the night colors" for night scenes.)
4. Save results to `<bookdir>/art/` as `cover.png`, `back.png`, `01.png`, `02.png` and so on, in page order. The back cover picture has NO text.
5. Check EVERY page for: duplicated characters (fix with a second Imagine edit "remove the extra character so only ONE remains, refill with the same background"), changed or misspelled words, missing objects, glossy/3D drift, clothing mismatches against the character sheet.
6. Edits like removing text or a duplicate character also run in Imagine at 1:1, naming what to remove and "keep everything else exactly the same". Verify no ghost or smudge remains.
7. COLORING AND ACTIVITY PAGES for the back of the book (to reach 24 pages without blanks): prompt Imagine for "Square 1:1 children's coloring book page, clean black outlines only on a pure white background, no shading, no gray, no text, cute friendly characters in the same designs as the reference, big simple shapes easy for a toddler to color, everything at least 12 percent away from every edge." Make coloring scenes with the cast, border frames with a big EMPTY white center (for puzzles), and single stickers (banana, apple, face) to cut out. Put the puzzles in the frames with code so they are correct: connect the dots, a maze (generate a perfect maze in code, verify a solution by search, corridors at least 0.5 in), counting (draw N stickers, record N), odd one out, match the shadow, trace the path, draw-your-own frame, and a certificate. Keep puzzle content at least 0.5 in inside the trim. Save as `art/end01.png`, `art/end02.png`, ... in page order; the build script appends them after the story pages.

## 3. Build (self-contained script)
Save the script below as `/workspace/books/_toolkit/generic/build_book.py` (create the folder) if it is not already there. Put the square Imagine results in `<bookdir>/art/` named `cover.png` (front), `back.png` (back cover picture, no text), then `01.png`, `02.png`, ... story pages in order, and `end01.png`... coloring/activity pages. Run `python3 build_book.py <bookdir> "Title" "Author Name"`. It writes `interior.pdf` (8.625 x 8.75 in, 24 pages with title and copyright pages; it warns loudly if it had to pad with blanks), `cover.pdf` (wrap with spine and a white barcode box 0.25 in inside the back trim), `review.pdf` (the complete labeled review PDF: front cover, title page, copyright page, every page with label and book page number, back cover) and `cover_wrap_review.jpg`. The spine width in the script (0.056 in) is for 24 pages; after KDP shows the real spine width for the page count, edit `SPINE`. Needs Python with Pillow. It takes about 2 minutes: run it with nohup in the background and poll.

```python
#!/usr/bin/env python3
import sys, glob, os, datetime
from PIL import Image, ImageDraw, ImageFont
Image.MAX_IMAGE_PIXELS = None
DPI, TRIM, BLEED, SPINE = 400, 8.5, 0.125, 0.056
PW, PH = int((TRIM+BLEED)*DPI), int((TRIM+2*BLEED)*DPI)   # 3450 x 3500
root, title, author = sys.argv[1], sys.argv[2], sys.argv[3]
def font(sz):
    for p in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf','/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf']:
        if os.path.exists(p): return ImageFont.truetype(p, sz)
    return ImageFont.load_default()
def fill(im, w, h):  # square art -> fill w x h by centered crop
    im = im.convert('RGB'); s = max(w/im.width, h/im.height)
    im = im.resize((round(im.width*s), round(im.height*s)), Image.LANCZOS)
    x, y = (im.width-w)//2, (im.height-h)//2
    return im.crop((x, y, x+w, y+h))
def text_page(lines, size, bg=(255, 247, 228)):
    pg = Image.new('RGB', (PW, PH), bg); d = ImageDraw.Draw(pg); y = PH//2 - len(lines)*size
    for t in lines:
        f = font(size); w = d.textlength(t, font=f); d.text(((PW-w)/2, y), t, fill=(40, 40, 40), font=f); y += int(size*1.6)
    return pg
A = lambda n: Image.open(glob.glob(os.path.join(root, 'art', n+'.*'))[0])
story = sorted(f for f in glob.glob(os.path.join(root, 'art', '[0-9]*.*')))
pages = [text_page([title, '', 'by '+author], 150),
         text_page(['Copyright %d %s' % (datetime.date.today().year, author), 'All rights reserved.'], 90)]
ends = sorted(glob.glob(os.path.join(root, 'art', 'end*.*')))   # coloring/activity pages for the back of the book
pages += [fill(Image.open(f), PW, PH) for f in story + ends]
story = story + ends
if len(pages) < 24: print('WARNING: padding %d blank pages. Add art/end01.png... coloring or activity pages instead; blank trailing pages fail the preflight.' % (24-len(pages)))
while len(pages) < 24: pages.append(Image.new('RGB', (PW, PH), (255, 247, 228)))
if len(pages) % 2: pages.append(Image.new('RGB', (PW, PH), (255, 247, 228)))
pages[0].save(root+'/interior.pdf', save_all=True, append_images=pages[1:], resolution=DPI, quality=92)
pw = round((BLEED+TRIM)*DPI); sp = round(SPINE*DPI); W = pw*2+sp
back = fill(A('back'), pw, PH); front = fill(A('cover'), pw, PH)
cov = Image.new('RGB', (W, PH)); cov.paste(back, (0, 0)); cov.paste(front, (pw+sp, 0))
col = back.crop((pw-1, 0, pw, PH)).resize((sp, PH)); cov.paste(col, (pw, 0))
d = ImageDraw.Draw(cov); bx1 = pw-round(0.25*DPI); by1 = PH-round((BLEED+0.25)*DPI)
d.rectangle((bx1-round(2.0*DPI), by1-round(1.2*DPI), bx1, by1), fill='white')   # barcode reserve
cov.save(root+'/cover.pdf', resolution=DPI, quality=92)
def lab(im, text):
    t = im.resize((900, round(900*im.height/im.width))); bar = 70
    c = Image.new('RGB', (t.width, t.height+bar), 'white'); c.paste(t, (0, bar))
    ImageDraw.Draw(c).text((12, 18), text, fill=(30, 90, 30), font=font(30)); return c
N = len(pages)
rv = [lab(cov.crop((pw+sp, 0, W, PH)), 'FRONT COVER'), lab(pages[0], 'INSIDE - title page (book page 1 of %d)' % N), lab(pages[1], 'INSIDE - copyright page (book page 2 of %d)' % N)]
rv += [lab(p, 'INSIDE - story page %d (book page %d of %d)' % (i+1, i+3, N)) for i, p in enumerate(pages[2:2+len(story)])]
rv.append(lab(cov.crop((0, 0, pw, PH)), 'BACK COVER (white box = barcode)'))
rv[0].save(root+'/review.pdf', save_all=True, append_images=rv[1:], resolution=100)
lab(cov, 'COVER WRAP: back | spine | front').save(root+'/cover_wrap_review.jpg', quality=90)
print('pages', len(pages), 'story', len(story))
```

- Story text is baked into the art. No code text overlay. Page numbers: normally none; if the owner wants them, ONE style, ONE spot, every page, each shown once.
- Long shell jobs: run with nohup in the background and poll, since a foreground call dies after ~30 s.

## 4. Covers
- Front cover fills the entire page; title and byline inside the safe zone; byline "by <author>".
- Back cover = ONE full-bleed story picture (choose the funniest scene; if it has text, have Imagine paint the text out and blend). Never a picture on top of another picture. No blurb unless the owner asks; if a blurb, put it on a soft translucent panel on the same picture. Keep the white barcode box bottom-right.

## 5. Verify BEFORE showing the owner
- Draw the 0.375 in (and ideally 0.5 in) safe box in red on every page and the cover; look at the images; every word and face must be inside.
- Count characters on each page; compare against the character sheet.
- Confirm page order, no duplicate pages, page count, uniform numbering.

## 6. Review packet (the complete labeled review PDF is ALWAYS delivered, independent of KDP)
- At the very end of every build, deliver ONE complete labeled review PDF in chat (front cover, title page, copyright page, every interior page with label and book page number, back cover, in order), before and independent of any KDP step, so people who never publish still get a finished book.
- Labels are a preview aid only, not part of the print files. Also send the labeled cover-wrap image.
- Be honest about anything regenerated or upscaled. Short message, files attached under 25 MB.
- Wait for the owner's OK, then for their approval phrase before any upload.

## 6b. Preflight (mandatory, blocks every upload and the review PDF)
Save this as `/workspace/books/_toolkit/generic/preflight_pdf.py` and run `python3 preflight_pdf.py <bookdir>/interior.pdf 24` (needs poppler-utils, Pillow and numpy). The result must say PASS. It fails on any blank or solid-color page (flat green, cream or white), on a blank or solid LAST page, and on a wrong page count or size. It also lists pages with white edges so you can confirm they are meant to be white (coloring pages) and not art that fails to reach the bleed. Then look at the last 8 pages yourself.

```python
#!/usr/bin/env python3
import sys, subprocess, tempfile, glob, re
import numpy as np
from PIL import Image
pdf = sys.argv[1]
exp_pages = int(sys.argv[2]) if len(sys.argv) > 2 else 24
exp_size = (float(sys.argv[3]), float(sys.argv[4])) if len(sys.argv) > 4 else (621.0, 630.0)
info = subprocess.run(['pdfinfo', pdf], capture_output=True, text=True).stdout
pages = int(re.search(r'Pages:\s+(\d+)', info).group(1))
m = re.search(r'Page size:\s+([\d.]+) x ([\d.]+)', info)
size = (float(m.group(1)), float(m.group(2)))
bad = []
if pages != exp_pages: bad.append('page count %d, expected %d' % (pages, exp_pages))
if abs(size[0]-exp_size[0]) > 1 or abs(size[1]-exp_size[1]) > 1: bad.append('page size %s pt, expected %s' % (size, exp_size))
d = tempfile.mkdtemp()
subprocess.run(['pdftoppm', '-r', '30', '-png', pdf, d+'/p'], check=True)
solid, edgewhite = [], []
for i, f in enumerate(sorted(glob.glob(d+'/p-*.png')), 1):
    im = Image.open(f).convert('RGB'); w, h = im.size
    a = np.asarray(im).astype(float); med = np.median(a.reshape(-1, 3), axis=0)
    frac = (np.sqrt(((a-med)**2).sum(2)) < 30).mean()
    if (frac > 0.9 and not med.min() > 225) or frac > 0.995: solid.append(i)
    e = max(1, int(min(w, h)*0.02)); white = 0; tot = 0
    for box in [(0,0,w,e),(0,h-e,w,h),(0,0,e,h),(w-e,0,w,h)]:
        s = np.asarray(im.crop(box).convert('L')); white += int((s > 245).sum()); tot += s.size
    if white/tot > 0.5: edgewhite.append(i)
print('pages', pages, 'size', size)
print('blank or solid-color pages:', solid or 'none')
print('pages with white edges, confirm these are meant to be white:', edgewhite or 'none')
if solid: bad.append('blank/solid pages %s' % solid)
if solid and max(solid) == pages: bad.append('LAST page is blank/solid: KDP will print it')
print('RESULT:', 'FAIL - ' + '; '.join(bad) if bad else 'PASS')
sys.exit(1 if bad else 0)
```

## 7. KDP upload (only after the approval phrase, and only after the preflight says PASS)
New title: kdp.amazon.com > Bookshelf > Create paperback. Fill title, author, description, 7 keywords, categories, print options (8.5x8.5, color, white paper), then upload `interior.pdf` and `cover.pdf` ("Upload a print-ready PDF cover"), launch the Previewer, screenshot it, and look at the LAST 8 pages and the page count; any margin or size warning, or any blank or solid page, means stop and fix. Set the price the owner gave, Expanded Distribution OFF, then Publish. Existing title: Edit paperback content, replace both files, do not touch metadata, ISBN, print options or price, and complete every step through the final submit.

## 7b. Post-submit verification (every time)
1. Right after Submit, confirm the bookshelf shows In review or Updates in review and that the Submitted on date is today. If the old date remains, the upload did NOT take: find the unfinished step, fix and resubmit (with the owner's approval phrase if it is a resubmit).
2. When it goes Live, confirm the last-updated date is new and open the Previewer again: page count correct and the last 8 pages are real content.
3. Write down the date submitted and what you checked, and tell the owner the result once.
4. For a title that has already sold copies, suggest ordering a proof or author copy to check the printed result.
5. Real lesson: a replacement upload was approved, but days later the live book still showed the old submit date, solid-green last pages and art that did not fill the page, so buyers received a defective print. The old file stays live until a new submission passes review, so an unchanged Submitted date is the warning. Never assume an upload replaced the live file.

## 8. Mistakes that cost the most rounds (avoid)
- Text within 0.375 in of trim (a common KDP rejection) and the wrong interior width (8.75 instead of 8.625).
- Duplicate last page and baked-in page numbers off by a few.
- Cropping/stretching/mirroring/blur-filling to fake bleed, and using GenerateImage for square art.
- A stacked image on the back cover; wrong back-cover picture; green or blurry frames.
- Padding the interior to 24 pages with flat green, cream or blank pages (KDP prints them), and assuming an upload replaced the live file without checking the Submitted date.
- Skipping the per-page duplicate-character check.
- Sending previews without labels or without checking them first.
