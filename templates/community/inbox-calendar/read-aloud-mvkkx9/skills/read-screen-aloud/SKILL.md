---
name: read-screen-aloud
description: "Use this when the user asks you to read something aloud: their screen, a web page in any browser, highlighted text, a file (PDF, Word, ebook, email), a video, a link or pasted text, as a natural, human-sounding voice memo, in full, in parts, summarized, or translated."
---

# Read anything aloud, like a person would

Goal: voice memos that sound like a thoughtful friend reading to you, not a screen reader. The app picks the voice and speed; the human feel comes from how you write the script.

## 0. Check preferences first
Look in memory for this user's reading preferences (skip transcripts, summary vs full, pace/simplicity, language, read quiz options or not, chunk length). Apply them. When the user states a new lasting preference ("always skip video transcripts", "simpler words"), save it to memory.

## 1. Work out what to read
- "Read what I highlighted / selected" -> selected text (step 2c).
- A link, or "read this page" -> the open browser tab (2a). If the link is public and no tab is open, WebFetch it instead. For sign-in pages, always read from the user's open tab.
- A file path or attached file -> 2d.
- A video -> 2f.
- A message from a phone or tablet, or a phone screenshot -> 2g.
- Pasted text -> read it directly.
- "Read my screen" or a non-browser app -> 2a if a browser is frontmost, otherwise screenshot (2b).

Find the frontmost app on a Mac: `osascript -e 'tell application "System Events" to name of first process whose frontmost is true'` (if that's the chat app itself, check which browser has a window open).

## 2. Get the text (Shell on the user's computer, with its machineId)
Save outputs under the home folder, never /tmp (tmp paths may be refused).

### 2a. Browser page (full text, including same-origin iframes)
The JavaScript, used in every browser:
`(function(){var t=document.body.innerText;for(const f of document.querySelectorAll("iframe")){try{t+="\n---IFRAME---\n"+f.contentDocument.body.innerText}catch(e){}}return t;})()`
- Chrome, Brave, Edge, Arc, Vivaldi (Chromium): `tell application "<App Name>" to execute active tab of front window javascript "<js>"` (App names: "Google Chrome", "Brave Browser", "Microsoft Edge", "Arc", "Vivaldi"). Get the URL with `get URL of active tab of front window`.
  - Error "Executing JavaScript through AppleScript is turned off": ask the user to turn on View > Developer > Allow JavaScript from Apple Events in that browser.
- Safari: `tell application "Safari" to do JavaScript "<js>" in current tab of front window`; URL via `get URL of current tab of front window`.
  - If refused: ask the user to enable Safari Settings > Advanced > "Show features for web developers", then Develop > Allow JavaScript from Apple Events.
- Firefox has no scripting: fall back to screenshots (2b), scrolling if needed, or WebFetch for public pages.
Write the JS to a file and use `osascript` with escaped quotes, output redirected to `~/readaloud_page.txt`, then Read it. Confirm the URL matches any link the user sent.

### 2a+. Click through tabs and hidden sections (always, Chromium browsers on Mac)
Before reading a page, open everything hidden and read it too: numbered tabs or markers (1, 2, 3, 4), named tabs, page carousels ("Page 2 of 4"), carousels, accordions, and collapsed sections like "Hint" or "Expand to see the solution".
- The scripts are in the Appendix at the end of this skill. If `~/readaloud_full.sh` isn't on the user's Mac yet, write `readaloud.js`, `ra_tabs_prep.js`, `ra_tabs_click.js`, `ra_tabs_read.js`, and `readaloud_full.sh` to the home folder exactly as shown, then run `chmod +x ~/readaloud_full.sh`. For Brave, Edge, Arc, or Vivaldi, replace "Google Chrome" in the .sh file with that app's name.
- Run `~/readaloud_full.sh`. It opens every `<details>` and collapsed in-content accordion (skipping site navigation). It clicks each tab or page button, waits about 0.7 seconds, and captures that panel (using the tab's aria-controls panel or the visible tabpanel for named tabs). It then saves the full page text, with a "TAB CONTENTS" appendix, to `~/readaloud_page.txt`. Expect about 1.5 seconds per tab.
- When reading, put each tab's content where its tab group sits on the page, in order, not at the end. Don't say "tab 3 of 4". Just read the heading and content. Never press Submit, and never pick a quiz answer.
- Solutions and hints that you've expanded: read the hint where it sits. For "Expand to see the solution" next to a practice exercise, read the exercise first, then say "here's the worked solution" and read it. Exception: when a solution would reveal a graded knowledge-check answer, skip it.
- Before reading, check the page for a lone "1 2 3 4" row or a tab whose capture is only its label; if something wasn't opened, click it and capture it first. For other browsers, or if the script fails, read what's visible and name the hidden items.

### 2b. Screenshot (any app, or when scripting isn't available)
`screencapture -x ~/readaloud_screen.png && sips -Z 1800 ~/readaloud_screen.png`, then Read the image.
- "could not create image from display" = missing Screen Recording permission: ask the user to enable Grok Bot in System Settings > Privacy & Security > Screen Recording.
- If the chat window covers the content, hide the frontmost app via System Events (`set visible of (first process whose frontmost is true) to false`), wait a second, capture, then `tell application "Grok Bot" to activate`.

### 2c. Selected text
- In a browser: run `window.getSelection().toString()` with the same per-browser commands as 2a.
- In other apps: save the clipboard, send Cmd+C via System Events (`keystroke "c" using command down`), read `pbpaste`, then restore the old clipboard. This needs Accessibility permission for Grok Bot (System Settings > Privacy & Security > Accessibility); if it fails, ask the user to copy the text and say "read my clipboard", then read `pbpaste`.
- If nothing is selected, say so and offer to read the whole page.

### 2d. Files
- PDF: copy it to your box (CopyToBox from a home-folder path) and run `pdftotext -layout`; for scanned PDFs with no text, render pages to images (`pdftoppm -png -r 100`) and read the images.
- Word, RTF, Pages-exported docs, HTML: on the Mac, `textutil -convert txt -output ~/readaloud_doc.txt "<file>"`.
- EPUB: copy to your box, unzip, and read the chapter HTML in reading order (from the .opf spine), stripping tags.
- Email: read from the open mail tab (2a), or from the connected mail service if one exists.
Strip page numbers, running headers and footers, and reference lists unless asked.

### 2e. Windows computers
- Screenshot via PowerShell: `Add-Type -AssemblyName System.Windows.Forms,System.Drawing; $b=[System.Windows.Forms.Screen]::PrimaryScreen.Bounds; $bmp=New-Object System.Drawing.Bitmap $b.Width,$b.Height; $g=[System.Drawing.Graphics]::FromImage($bmp); $g.CopyFromScreen($b.Location,[System.Drawing.Point]::Empty,$b.Size); $bmp.Save("$env:USERPROFILE\readaloud_screen.png")`
- Clipboard: `Get-Clipboard`. Word files: read via `Get-Content` after saving as text, or copy to your box and use `pandoc`/`docx2txt`.
- Browser page text isn't scriptable on Windows: use screenshots, the clipboard ("select all, copy, then say read my clipboard"), or WebFetch for public pages.

### 2f. Videos
- A video the user attaches in chat: send it to a video-watching helper, ask for a detailed description and the spoken content, then write a spoken summary (or full narration if asked).
- A video on a web page (courses, YouTube): use its transcript if the page shows one (2a picks it up) and summarize that; otherwise say you can't watch it directly and offer to summarize from the transcript or captions if the user opens them.
- Never claim to have watched a video you didn't analyze.

### 2g. Phones and tablets (iOS and Android)
Phones can't be connected like a computer, so you can't read a phone's screen directly. Everything sent from a phone still works:
- Screenshot of the phone screen (iOS: Side + Volume Up; Android: Power + Volume Down), attached in chat: read the text from the image, and ask for more screenshots if the content runs past the screen.
- Shared link (Share button, then the chat app): open it with WebFetch if it's public; if it's behind a sign-in, ask for screenshots or copied text instead.
- Copied or pasted text, PDFs, docs, ebooks, photos of printed pages, and videos attached in chat: handle these exactly as on a computer (2d, 2f).
- "Read my Mac/PC screen" from the phone works when that computer is on and awake.
If the user asks "read my phone screen", tell them in one line to send a screenshot or share the page.

## 3. Choose the mode
- **Full** (default): the whole thing.
- **Summary** ("short version", "summarize it", "just the gist"): a spoken summary of about two minutes covering the main points in order, then offer the full reading.
- **Translate** ("read it in Spanish"): translate naturally, then read. By default read pages in their own language unless the user prefers another.
- **Chunks (never let audio get cut off)**: keep every spoken part at or under about 1,000 words (roughly 6 to 7 minutes). Longer memos get cut off in playback. Count the words of the full script first, then split it at section breaks into as many parts as needed (3, 4, 5 or more is fine; never cram to keep the count low). Send every part back to back in the same turn, with no waiting or confirmation between them. End each part except the last with a short "Pausing here at the end of part N of M." line. Save the position after each part so "keep going" can resume if the user stops partway. If a single section alone runs over the limit, split it mid-section at a paragraph break.

## 4. Write the script like a human reader
- Skip navigation, menus, buttons, cookie banners, ads, progress bars, "Skip to content", "Submit", "Next lesson", share links.
- Open with one line saying what it is ("This is the lesson on...", "This email is from...").
- Announce headings naturally ("Next up, ...", "Then there's a section on...").
- Tables: read row by row in sentences, not cell by cell.
- Video transcripts: smooth into flowing prose ("the hosts explain..."), dropping filler like "right?", "OK", "yeah".
- Images, charts, diagrams: describe them in a sentence or two (what it shows and the takeaway), using the image's alt text or a screenshot; mention when an image can't be seen.
- Numbers, money, dates, percentages: write them as spoken ("four point two million dollars", "eighteen percent").
- Acronyms: expand jargon the first time; keep ones people say as words; spell letter-by-letter ones with hyphens ("P-D-F", "A-P-I").
- Links: never read URLs; say "there's a link to the pricing page".
- Code: describe briefly unless asked to read it.
- Quizzes: read the question and every option, never reveal or hint at the answer.
- Collapsed or clickable sections: open and read them (2a+). Mention hidden items only when they couldn't be opened.
- Keep the author's words for real content; only smooth formatting artifacts.
- End with one short line on what's next ("Open the next page and say read").

## 5. Deliver
No text acknowledgement beforehand; each memo is a single text message with voice_memo enabled.
- **Track list for multi-part reads:** right before part one, send one short text message listing every part, one line each, like "Part 2 of 5: <short topic>". Start each memo with "Part N of M" as well. This is the only text sent before the memos.
- **No confirmations between parts:** never ask "want me to keep going?" and never send a continue widget. Send all parts as consecutive voice memos in one turn so the next part is always already queued in the chat. Whether the app auto-plays the next memo depends on its player; the user stops by pausing the audio or saying "stop", and "keep going" resumes from the saved position. If the user says a part got cut off, re-read the missing section right away as its own shorter memo.
- Clean up temporary files afterward if they contain private content.

## 6. Extras

### Study sessions (auto-read the next page)
- "Start studying" / "read as I go": resume the Read Aloud study-session routine and say so in one line. Record the current tab URL as already read.
- Each check: compare the frontmost browser tab URL (and page title) to the last one read, stored on the box in `/workspace/readaloud/state.json`. If it changed to a new page, read it per this skill and update state. If nothing changed, stay silent.
- Stop when the user says "stop studying", or after 30 minutes with no new page: pause the routine and say so briefly.

### Study helper (after a lesson)
- Offer: "Want a quick quiz?" Ask 3 to 5 of your own practice questions out loud in one memo, one at a time if the user prefers, and give feedback on their answers.
- Never answer or hint at the course's own graded quiz questions; your practice questions must be different.

### Key points recap and study notes
- At the end of each lesson read in full, close with a 30-second "key points" list (3 to 5 points).
- Append the lesson title, date, and those key points to a per-course notes file on the box: `/workspace/readaloud/notes/<course-name>.md`. On request, read back or share the notes file as an attachment.

### Listen-later queue
- "Save this for later" / "add to my queue": capture the page title, URL, and full text now (pages behind sign-in may not be readable later) and append to `/workspace/readaloud/queue.json`.
- The evening routine turns the queue into one combined memo (a short intro, then each item summarized in about a minute, or in full if the user prefers), then clears delivered items. Stay silent if the queue is empty.

### Bookmarks for long reads
- For books, long PDFs, and chunked reads, save the source and position (file path or URL, section or page, last sentence read) to `/workspace/readaloud/bookmarks.json`. "Keep going" or "continue my book" picks up from there, even days later.

### Memos for other people
- When asked to make a reading for someone else, write it for that listener (simpler words for a child, a gentler pace for an older parent) and send it to the user as a voice memo they can forward. Never send it to anyone directly.

## Appendix: tab-expansion scripts (Mac, home folder)

`~/readaloud.js`
```
(function(){var t=document.body.innerText;for(const f of document.querySelectorAll("iframe")){try{t+="\n---IFRAME---\n"+f.contentDocument.body.innerText}catch(e){}}return t;})()
```

`~/ra_tabs_prep.js`
```
(function(){
var docs=[document];document.querySelectorAll('iframe').forEach(function(f){try{if(f.contentDocument)docs.push(f.contentDocument)}catch(e){}});
var n=0,opened=0;
docs.forEach(function(d){
 d.querySelectorAll('details:not([open])').forEach(function(x){x.open=true;opened++;});
 d.querySelectorAll('[aria-expanded=false]').forEach(function(x){
   var l=(x.getAttribute('aria-label')||'')+' '+(x.className||'');
   if(/^(Lesson|Section|Topic) |Workspace|Support|Account|menu|awsui_button_m5h9f|LMC/i.test(l))return;
   if(x.closest('nav,header,.LMC,[class*=Menu],[class*=menu]'))return;
   try{x.click();opened++;}catch(e){}
 });
 var tabs=d.querySelectorAll('.HotSpotButton,.CurrentHotSpotButton,[role=tab],button[aria-label^="marker "],button[aria-label*=" of "][aria-label*="tab"],button[aria-label^="Page "][aria-label*=" of "]');
 var seen=new Set();
 tabs.forEach(function(t){if(seen.has(t))return;seen.add(t);t.setAttribute('data-ra',n++);});
});
window.__raDocs=docs;
return n+' '+opened;})();
```

`~/ra_tabs_click.js`
```
(function(){var i=window.__raI;var b=null;window.__raDocs.forEach(function(d){var x=d.querySelector('[data-ra="'+i+'"]');if(x)b=x;});if(!b)return 'none';b.click();return 'ok';})();
```

`~/ra_tabs_read.js`
```
(function(){var i=window.__raI;var b=null;window.__raDocs.forEach(function(d){var x=d.querySelector('[data-ra="'+i+'"]');if(x)b=x;});if(!b)return '';
var lbl=(b.getAttribute('aria-label')||b.innerText||'').replace(/\. selected\./,'.').trim();
var pc=b.getAttribute('aria-controls'),c=null;
if(pc){c=b.ownerDocument.getElementById(pc);}
if(!c&&b.getAttribute('role')=='tab'){var tl=b.closest('[role=tablist]');var root=tl?tl.parentElement:null;while(root&&!root.querySelector('[role=tabpanel]'))root=root.parentElement;if(root){var ps=[].slice.call(root.querySelectorAll('[role=tabpanel]')).filter(function(p){return !p.hidden&&p.offsetParent!==null;});c=ps[0]||null;}}
if(!c){var mn=/^Page /.test(lbl)?100:20;c=b.parentElement;while(c&&c.innerText.replace(/[\d\s]/g,'').length<mn)c=c.parentElement;}
var t=c?c.innerText.split('\n').filter(function(l){return !/^\s*\d+\s*$/.test(l);}).join('\n').trim():'';
return '[TAB '+lbl+']\n'+t;})();
```

`~/readaloud_full.sh`
```
#!/bin/bash
# Expands hidden sections and clicks through numbered tabs in Chrome, then saves page text plus tab contents.
run(){ osascript -e "tell application \"Google Chrome\" to execute active tab of front window javascript \"$1\""; }
runf(){ osascript -e "set js to read POSIX file \"$1\"" -e 'tell application "Google Chrome" to execute active tab of front window javascript js'; }
res=$(runf "$HOME/ra_tabs_prep.js"); n=${res%% *}
sleep 0.8
: > ~/readaloud_tabs.txt
for ((i=0;i<n;i++)); do
  run "window.__raI=$i;" >/dev/null
  runf "$HOME/ra_tabs_click.js" >/dev/null
  sleep 0.7
  runf "$HOME/ra_tabs_read.js" >> ~/readaloud_tabs.txt; echo >> ~/readaloud_tabs.txt
done
runf "$HOME/readaloud.js" > ~/readaloud_page.txt
printf "\n===== TAB CONTENTS (%s tabs) =====\n" "$n" >> ~/readaloud_page.txt
cat ~/readaloud_tabs.txt >> ~/readaloud_page.txt
echo "tabs=$n opened=${res#* }"; wc -w ~/readaloud_page.txt
```
