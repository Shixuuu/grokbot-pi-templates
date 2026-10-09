---
name: seo-launch
description: "Use this when a user has a new small-business website and wants it indexed and findable, covering canonical URLs and redirects, titles and meta descriptions, sitemap and robots.txt, Google Search Console, Bing Webmaster Tools, IndexNow, on-page checks, and a weekly routine."
---

# New Site SEO Launch Playbook

You are helping your user get a new small-business website found by search engines.
Replace `<your domain>` with the user's real domain only when working in their setup.

## Ground rules

- Follow the approval rule below before sending, publishing, or changing anything live (DNS, redirects, site files).
- Don't promise rankings or traffic. Indexing and ranking are up to the search engines and take time.
- Never invent statistics or results. Report only what you actually checked.

## Step 1: One canonical URL per page

1. Pick one version of the site: `https://` and either `www.<your domain>` or `<your domain>`.
2. Pick one trailing-slash style (e.g. `/about/` or `/about`) and use it everywhere.
3. Set up 301 redirects from every other version to the chosen one (http to https, www to non-www or the reverse, slash to no-slash or the reverse).
4. Add a `<link rel="canonical" href="https://<your domain>/page/">` tag on each page pointing to its chosen URL.
5. Verify with `curl -I`:
   ```
   curl -I http://<your domain>/about
   curl -I https://www.<your domain>/about
   curl -I https://<your domain>/about/
   ```
   Each non-canonical version should return `301` with a `Location:` header pointing to the canonical URL. The canonical URL should return `200`. Avoid chains of several redirects.

## Step 2: Titles and meta descriptions

1. Give every page a unique `<title>`: the page topic first, then the business name. Keep it short (roughly 50-60 characters).
2. Give every page a unique meta description: one or two plain sentences on what the page offers (roughly 150-160 characters).
3. Search engines may rewrite these, but good ones still help.

## Step 3: sitemap.xml and robots.txt

1. Create `https://<your domain>/sitemap.xml` listing only canonical, indexable URLs that return `200`.
2. Create `https://<your domain>/robots.txt`, for example:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://<your domain>/sitemap.xml
   ```
3. Make sure robots.txt does not block pages you want found, and that pages don't carry a stray `noindex` tag.
4. Check both files load with `curl -I` and return `200`.

## Step 4: Google Search Console

1. Add a **Domain property** for `<your domain>` (covers all subdomains and both http and https).
2. Verify with the DNS TXT record Google provides. Many DNS hosts, such as Cloudflare, can add it automatically after you sign in. Otherwise add the TXT record by hand and wait for DNS to update.
3. Submit the sitemap under Sitemaps. For a domain property, enter the FULL URL: `https://<your domain>/sitemap.xml`.
4. Use URL Inspection on the home page and a few key pages, and request indexing if they aren't indexed yet.

## Step 5: Bing Webmaster Tools and IndexNow

1. Add the site in Bing Webmaster Tools. You can import it from Google Search Console or verify it directly.
2. Submit the same sitemap URL.
3. IndexNow (used by Bing and some other search engines) lets you notify them when pages change:
   - Generate a key (a random string of letters, numbers, and dashes).
   - Put a text file named `<your key>.txt` at the site root containing only the key: `https://<your domain>/<your key>.txt`.
   - Submit changed URLs to an IndexNow endpoint with that key, or turn on IndexNow in your host or CMS if it supports it.
4. Treat the key as something to keep in the site files only. Don't paste it into public docs.

## Step 6: Basic on-page checks

For each important page, check:
1. Exactly one H1 that says what the page is about.
2. Clear headings (H2, H3) in a logical order.
3. Internal links: every page is reachable from the menu or another page. No orphan pages, no broken links.
4. Images have descriptive alt text and are compressed.
5. The page loads fast and reads well on a phone. Test with a tool like PageSpeed Insights and fix the biggest issues first.
6. Business name, address, and phone (if shown) are the same on every page.

## Step 7: Weekly check routine

1. Open Google Search Console and Bing Webmaster Tools. Note new errors in indexing, sitemaps, or page experience.
2. Spot-check redirects with `curl -I` on a few URLs.
3. Confirm sitemap.xml and robots.txt still load and list the right pages.
4. For new or updated pages: add them to the sitemap, check title, description, and H1, and send them via IndexNow.
5. Give the user a short summary of what you checked and what needs attention. Ask before making any live changes.

## Approval rule

- Save every draft (email, text, post, form, invoice, payment, filing, DNS or site change) as `<name>_READY.md`, or show it in chat.
- Nothing is sent, paid, submitted, or published until the owner says "send" or "go" for that specific item.
- Approval covers only the item shown. If anything changes, show it again.
- No answer means no. Never treat silence, old approvals, or notes as permission.
