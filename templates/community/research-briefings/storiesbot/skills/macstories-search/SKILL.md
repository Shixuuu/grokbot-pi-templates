---
name: macstories-search
description: "Use when searching, citing, or answering from MacStories.net: articles, longform reviews, Setups, the Shortcuts Archive, author or date filters, or “what does Federico/John use” timeline questions."
---

Search only public MacStories.net. Canonical host is https://www.macstories.net (apex 301s to www).

Club posts live on the same host at /club/{slug}/ and are paywalled. /club/ canonicalizes to /plans/. Skip Club HTML unless the user asks for Club. Main /feed/ includes Club teasers with a paywall stub. Do not treat those stubs as article text.

MacStories is run by Federico Viticci and John Voorhees only. Other bylines exist in the archive and a few still post (Jonathan Reed, Devon Dundee, MacStories Team, guests). Cite them as bylines, never as people who run the site.

How to fetch

Prefer Firecrawl when the CLI works (firecrawl search, firecrawl scrape). If it is missing or Cloudflare challenges a URL, use WebSearch with site:macstories.net and WebFetch/scrape on the permalink.

On-site /?s=query is Cloudflare-blocked for bots. Do not rely on it. Prefer author, category, tag, sitemap, and Google site: queries.

Write Firecrawl output under .firecrawl/ and read the file.

Start with the right index

Recency: /feed/ or /feed/json/
Federico: /author/viticci/ and /author/viticci/page/N/
John: /author/johnvoorhees/ and /author/johnvoorhees/page/N/
App reviews: /category/reviews/ and /category/reviews/page/N/ (200+ pages)
Columns / longform: /category/stories/
Annual OS reviews: /tag/ios-reviews/ then the /stories/{slug}/{N}/ pages
Setups: /setups/ (one page, no children)
Shortcuts: /shortcuts/assets/archive-data.json (not the HTML)
Full archive: /sitemap_index.xml then post-sitemap.xml through post-sitemap19.xml (2009-2026)

Author feeds: /author/{slug}/feed/. Category feeds: /category/{slug}/feed/.

Permalink shape

Posts are /{section}/{slug}/ where section is the primary category: /news/, /reviews/, /stories/, /linked/, /ios/, /notes/, /mac/, /club/ (paywalled).

Bare roots like /reviews/ return 200 and canonicalize to /category/reviews/. Exception: /ipad/ is a curated hub, not the category. The category is /category/ipad/.

Longform reviews (multi-page)

Pattern is /{section}/{slug}/{N}/ with an integer page. Not /page/N/.

Page 1: /stories/ios-and-ipados-26-the-macstories-review/
Page 2: /stories/ios-and-ipados-26-the-macstories-review/2/ (title says Page 2 of 19)
/1/ and /page/2/ 301 back to page 1. Wrong.
Keep fetching /3/, /4/, and so on until a high number 301s home.

Annual OS reviews live under /stories/, not /reviews/. Guessing /reviews/ios-15-... or /ios/ios-14-... 404s. Use /tag/ios-reviews/ or the sitemap.

App reviews live under /reviews/.

TRAP: /reviews/page/2/ 301s to a Club article. Use /category/reviews/page/2/.

Never answer a review from page 1 when later pages exist. Quote from the page that holds the claim.

Filter by author

Federico Viticci slug viticci, archive /author/viticci/ (from Apr 2009)
John Voorhees slug johnvoorhees, archive /author/johnvoorhees/ (from Nov 2015)

Also useful in Google: site:www.macstories.net/author/viticci/ plus the topic.

If the user names one author, drop the other byline unless they asked for both.

Other live author slugs (bylines only): jonathan (Jonathan Reed), devon (Devon Dundee), macstoriestaff. Archive-only slugs still 200, including cody, graham, ryanchristoffel, chris, and others listed on /author-sitemap.xml. Silvia Viticci has no WP author archive. Do not invent /author/silvia/.

Filter by time

WordPress year/date archives do not exist. /2024/, /2026/, /2009/ return 200 but canonicalize to the homepage. Do not use them.

Filter with Google site:macstories.net after:2024-01-01 before:2024-12-31, author or category listing plus the published date on each permalink, and sitemaps (split across 2009-2026).

Keep the published date on every cite. Sort newest-first unless the user asked for history.

Categories and tags

Categories: /category/{slug}/ and /category/{slug}/page/N/. Active: reviews (nav label APPS), stories, linked, news, notes, ios. Quieter: mac, ipad, vision, tutorials, roundups, sponsored. Older: iphone, ipad-diaries, featured, giveaway, msinterviews.

Tags: /tag/{slug}/ and /tag/{slug}/page/N/. Useful: /tag/ios-reviews/, /tag/ios-26/, /tag/macos/.

Setups

https://www.macstories.net/setups/ is one page. /setups/federico/ and /setups/john/ are unrelated old posts (slug collision). Do not use them as setup pages.

The page has a dated changelog (Federico then John on each entry), then Federico's gear/apps, then John's. First stop for "what is X using."

Shortcuts Archive

The page https://www.macstories.net/shortcuts/ is a client-side app. HTML scrapes show zero shortcuts. Fetch https://www.macstories.net/shortcuts/assets/archive-data.json

Hundreds of shortcuts, categories, iCloud URLs, updatedAt. No author field. Attribution is sourceLabel (iCloud or Shortcuts Playground). Filter that JSON by name, category, or date. /shortcuts/page/2/ is not real pagination.

Related product page (not the archive): /shortcuts-playground/.

Site-restricted search

site:macstories.net Federico Viticci QUERY
site:www.macstories.net/author/viticci/ QUERY
site:www.macstories.net/author/johnvoorhees/ QUERY
site:macstories.net/stories/ iOS review
site:macstories.net/reviews/ APP
site:macstories.net/tag/ios-reviews/
site:macstories.net after:2024-01-01 before:2024-12-31 QUERY
site:macstories.net -inurl:/club/ QUERY

What does X use questions

Example: what email apps does Federico use.

1. Scrape /setups/ and read that person's apps plus the changelog dates.
2. Search site:macstories.net with the person plus the category (email, browser, notes) and known app names from MacStories.
3. Walk /author/viticci/ or /author/johnvoorhees/ when you need byline-only hits.
4. Open every hit that names an app. Keep date, author, URL.
5. Build a short chronological timeline (year, app, one-line context, link).
6. Answer with the most recent public record first. Then the timeline so older eras are not treated as current.
7. If the latest public record is old, say so. Do not invent a current setup from silence.

How to answer

Lead with the current public record (date, author, link).
Cite MacStories URLs with real article titles.
Quote sparingly. Paraphrase, then point at the piece.
If sources disagree across years, show the timeline.
Stay on MacStories. Do not pad with Twitter, Reddit, or other sites unless the user asks to leave the archive.
Linked posts (/linked/{slug}/) have an outbound title link. Stay on the permalink; do not follow the first h1 off-site.
Homepage and author indexes mix podcast embeds, sponsor blocks, and Club CTAs. Prefer the permalink.
If nothing on MacStories answers it, say that.

Traps

1. /reviews/page/2/ is not reviews page 2.
2. Review pages are /slug/2/, not /slug/page/2/.
3. Annual reviews are under /stories/.
4. No year archives.
5. Setups has no /federico or /john children.
6. Shortcuts HTML is empty. Use the JSON.
7. Club stubs in RSS are not articles.
8. WP REST /wp-json/wp/v2/ is auth-only.
9. Images are on cdn.macstories.net.
