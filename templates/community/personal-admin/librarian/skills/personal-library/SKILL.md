---
name: personal-library
description: "Use this when building or restyling a personal library site from shelf photos, snippets, contradictions, or handed books."
---

# Personal library

Use this when someone wants a personal library site from their actual shelves: cataloging photos, snippets, contradictions, handed books, or restyling the library.

Build a static site the reader can host (default: Cloudflare Pages). Do not invent a GitHub repo or Vercel deploy unless they ask. Keep their existing catalog records when updating.

## Brief

White paper, `#111` ink, Avenir (fall back Helvetica), lowercase, lots of air, 1px rules. No cards, no shadows, no Inter, no purple gradients. Copy is lowercase, short, in the owner's voice. Use the impeccable design skill for any layout pass.

## Thinking structure (this is the product)

- **Shelves**, not Dewey as the front. Default hundreds: `000 tech`, `100 mind`, `200 spirit`, `300 world`, `400 money`, `600 work`, `700 making`, `800 writing`, `900 lives`. Novels sit with writing on 800. The owner can rename a shelf; keep the numbered hundreds.
- **Snippets are the unit.** A snippet is a line pulled from a book, or a photo of an underlined passage. Connections attach to snippets, not just books.
- **Contradictions first**, talks-to second. Disagreement is the interesting connection. A thin line between each contradiction pair. Related snippets nest under their parent with a thin left rule; each related snippet is its own row with its book title under it.
- **Handed** is "the books i always hand people to read." Mark `handed: true` when they name a book. A small black dot sits in front of the word handed (nav, filters, section header) and in front of any handed title. No stamp on the cover. The handed page explains the dot. Each numbered shelf lists handed books first.
- **Owner's note** is a boxed 1px `#111` section on the book page, titled `{name}'s note` in lowercase, above snippets.
- **Search** is a scrollable A–Z list by title (empty query shows the whole shelf).
- **Author pages:** clicking an author opens that author's shelf.
- **Buy** is a quiet Google search for author + title. No Amazon lock-in.

Default nav: catalog · search · snippets · contradictions · handed.

Default homepage line (they can rewrite): "these are the books on my actual shelves. just because i read them doesn't mean i agree with them. different perspectives help me connect dots i otherwise couldn't see."

Default contradictions intro: "whenever i read something i try to understand what the opposite view might be. this is my experiment to connect the contradictions in what i read."

Default handed intro: "the books i always hand people to read. the little black dot marks them."

Catalog heading: `on the shelf - N books` with the live count.

## Layout

Each shelf is one horizontal swipeable row. Titles sit under covers (not over them). Covers are large enough to read: about 180px tall on desktop, 165px on mobile, 240px on the book page.

## Cataloging from photos

When they send shelf photos, read spines. Do not invent titles, authors, or quotes. First-pass catalog is fine: title, author, a sensible shelf, a one-line blurb, a cover if you can find a real one (Open Library / ISBN). Status `shelf` for books they have. Look up ISBN/year from a real source. If a spine is cut off, ask rather than guess. Don't duplicate a title+author already in the catalog.

Handed only when they say so.

## Data

`books.json` records include: `id`, `title`, `author`, `isbn`, `isbn13`, `shelf`, `status`, `blurb`, `cover`, `year`, optional `handed`, optional `ownerNote`.

`snippets.json` records include: `id`, `bookId`, `text`, optional `photo`, `kind` (`text` or `photo`), `source` (e.g. `underline`), optional `talksTo` / `disagreesWith` (arrays of snippet ids), optional page.

Keep all existing records when adding. Don't fabricate snippet text.

## Site files (typical)

Pages: `index.html` (catalog), `search.html`, `book.html`, `author.html`, `snippet.html`, `snippets.html`, `contradictions.html`, `handed.html`. Shared `css/site.css` and `js/library.js`. Covers in `covers/{isbn}.jpg`.

## Hosting

Zip the site (exclude private pass notes and raw shelf-photo dumps). Deploy as a Production Direct Upload to an existing Cloudflare Pages project when they already have one. Do not create a new project or change domains unless they ask. After deploy, hard-reload and screenshot.

## After a visual change

Look at the real page. If related snippets are still a comma run, a truncated soup, or missing book context, fix it before calling it done.
