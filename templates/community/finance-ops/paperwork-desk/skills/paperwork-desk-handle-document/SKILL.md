---
name: paperwork-desk-handle-document
description: "Use when the owner sends or forwards a bill, notice, lease, renewal, medical bill, tax letter, warranty, or any paperwork, or asks what's due, wants a reply drafted, or wants to mark an item done or snoozed (also used by setup to install the paperwork tool)."
---

# Paperwork Desk: handle a document

You do the reading and judging. The `paperwork.py` tool pulls text from files and keeps the deadline ledger at `~/paperwork-desk/ledger.json`. Never send, pay, submit, or sign anything; drafts only, and every send needs the owner's explicit yes.

## 1. Make sure the tool is installed
If `~/paperwork-desk/paperwork.py` is missing, write the source from the last section of this skill to that path exactly, then run `chmod +x`. Check that `pdftotext` exists (`command -v pdftotext`). If it doesn't, try `sudo apt-get install -y poppler-utils` quietly; if that fails, carry on. Text PDFs may still work, and you can read scanned pages as images.

## 2. Read the document
- For a file (PDF, .txt, .eml, .html), run `python3 ~/paperwork-desk/paperwork.py extract FILE`. For an email with attachments, add `--save-attachments /tmp/pd_att` and extract each attachment too.
- For a photo or screenshot, or when you get `IMAGE_FILE` (exit 3) or `ERROR:NO_TEXT_LAYER` (exit 4), read the image yourself.
- For a forwarded email or pasted text, save it to a temporary .txt file and extract it, or just read it.
- Use only what the document says. Never guess an amount or a date. If something is unclear, say so and ask.

## 3. Tell the owner, briefly
Lead with the answer in plain words. Cover:
- what it is and who it's from
- the amount owed, if any
- the due date or deadline
- what they need to do
- what happens if they miss it
- whether a reply is needed

Flag red flags plainly: final notice, collections, lapse or cancellation, a rent or premium increase (with old and new amounts and the percentage if both are shown), an auto-renew that needs opting out, or signs of a scam such as a strange payment method, urgent pressure, or a mismatched sender. Never repeat a full account number; use the last 4 digits only.

## 4. Save it to the ledger
Build a JSON item and run `python3 ~/paperwork-desk/paperwork.py add --json '<item>'`. Fields:
- Required: `title`, `doc_type` (bill, renewal, lease, medical, tax, insurance, warranty, legal, other), `due_date` (YYYY-MM-DD or "none"), and `action`.
- Optional: `sender`, `amount` (only money the owner actually owes or must pay, as a string like "142.37"; leave it out for offers such as a new rent figure), `currency` ("USD"), `reference_last4`, `reply_needed` (true/false), `consequence` (what happens if missed, such as a late fee or shutoff), `source_file`, `notes`, and `reminders_days` (default [7,2,0]).
- The duplicate check matches sender, title, due date, and amount, so run `list --open` first and skip anything already tracked under a slightly different title.

If there are several deadlines, add one item per deadline. `DUPLICATE` means it's already tracked, so say so. On `ERROR:VALIDATION <field>`, fix that field and retry. Confirm with the item id and the reminder days.

## 5. Calendar
- If a calendar connector is connected and the owner opted in, create an all-day event on the due date with the title, amount, and action, and a reminder.
- Otherwise, offer `python3 ~/paperwork-desk/paperwork.py ics ID --out /tmp/pd_ics` and attach the .ics file it prints. It carries one alarm (the earliest reminder); the other reminders come from the daily check.

## 6. Draft replies
When a reply is needed or asked for, write a short, polite draft that covers:
- the reference (last 4 digits only)
- the request (a payment plan, a dispute, cancelling auto-renew, asking for an itemized bill, accepting or declining a renewal)
- the owner's contact line, left as a placeholder unless it's known

Show the draft and stop. If an email connector is connected, create a draft only after the owner says so, and send only after an explicit "send it". Don't give legal or tax advice; for disputes, deadlines with legal effect, or anything over their head, suggest checking with the right professional.

## 7. Everyday commands
Tell the owner about these in plain words; don't make them type commands.
- **What's due?** `list --open` (add `--within 14` for the next 2 weeks) or `weekly`.
- **Paid or done:** `done ID`
- **Remind me later:** `snooze ID DAYS`
- **Remove it:** `remove ID`
- **Daily reminder routine:** `due`. It prints nothing when nothing is due, so stay quiet.

## 8. Errors
- `ERROR:FILE_NOT_FOUND` (2): ask the owner to resend the file. Exit 2 without that line is a usage mistake, so recheck the command against the list above.
- `IMAGE_FILE` (3): read the image yourself.
- `ERROR:NO_TEXT_LAYER` (4): it's a scanned PDF, so read the page images.
- `ERROR:EMPTY_FILE` (6): ask them to resend it.
- `ERROR:VALIDATION` (8): fix the field.
- `ERROR:NOT_FOUND` (10): run `list` to find the right id.
- Anything else: tell the owner plainly and keep helping without the tool.

## Tool source (`~/paperwork-desk/paperwork.py`)
```python
import argparse,email,json,os,re,secrets,shutil,subprocess,sys,tempfile
from datetime import date,datetime,timedelta,timezone
from decimal import Decimal,InvalidOperation,ROUND_HALF_UP
from email import policy
from html import unescape
from pathlib import Path
E={"FILE_NOT_FOUND":2,"IMAGE_FILE":3,"NO_TEXT_LAYER":4,"UNSUPPORTED_TYPE":5,"EMPTY_FILE":6,"EXTRACT_FAILED":7,"NO_PDFTOTEXT":7,"VALIDATION":8,"LEDGER_CORRUPT":9,"NOT_FOUND":10,"NO_DUE_DATE":11}
OK=set("title doc_type due_date action sender amount currency reference_last4 source_file notes consequence reply_needed reminders_days".split())
IMG={".jpg",".jpeg",".png",".gif",".webp",".heic",".tif",".tiff",".bmp"}
TXT={".txt",".md",".text"}
MAIL=set("from to cc subject date mime-version content-type reply-to sender received".split())
DR=re.compile(r"(?<!\d)(\d{4})-(\d{2})-(\d{2})(?!\d)")
PH=re.compile(
 "(?:(?<!\\d)\\+1 \\d{3} \\d{3} \\d{4}(?!\\d)(?! \\d)"
 "|(?<!\\d)\\+1-\\d{3}-\\d{3}-\\d{4}(?![\\d-])"
 "|(?<![\\d-])1-\\d{3}-\\d{3}-\\d{4}(?![\\d-])"
 "|(?<!\\d)\\(\\d{3}\\) \\d{3}-\\d{4}(?![\\d-])"
 "|(?<!\\d)\\(\\d{3}\\)\\d{3}-\\d{4}(?![\\d-])"
 "|(?<![\\d-])\\d{3}-\\d{3}-\\d{4}(?![\\d-])"
 "|(?<![\\d.])\\d{3}\\.\\d{3}\\.\\d{4}(?![\\d.])"
 "|(?<![\\d-])\\d{3}-\\d{4}(?![\\d-])"
 "|(?<![\\d.])\\d{3}\\.\\d{4}(?![\\d.]))")
RUN=re.compile(r"\d(?:[ \t-]*\d){5,}")
Q=Decimal("0.01")
PHOTO="PDF has no text layer; the bot should read the pages as images or ask the user for a photo of the document"
class X(Exception):
 pass
def die(c,m):
 print(f"ERROR:{c} {m}",file=sys.stderr)
 return E[c]
def bad(f,r):
 return die("VALIDATION",f"{f}: {r}")
def verr(f,r):
 bad(f,r)
 raise X()
def ymd(s):
 if not isinstance(s,str):raise ValueError("must be YYYY-MM-DD")
 m=re.fullmatch(r"(\d{4})-(\d{2})-(\d{2})",s.strip())
 if not m:raise ValueError("must be YYYY-MM-DD")
 try:return date(int(m[1]),int(m[2]),int(m[3]))
 except ValueError:raise ValueError("not a real calendar date")
def led(p):
 if p:return Path(p).expanduser()
 e=os.environ.get("PAPERWORK_LEDGER")
 return Path(e).expanduser() if e else Path.home()/"paperwork-desk"/"ledger.json"
def rd(p):
 if not p.exists():return {"version":1,"items":[]}
 try:d=json.loads(p.read_text(encoding="utf-8"))
 except (OSError,json.JSONDecodeError) as e:raise X(str(e))
 if type(d)is not dict or d.get("version")!=1 or type(d.get("items"))is not list:raise X("bad ledger")
 for it in d["items"]:
  if type(it)is not dict or "id" not in it:raise X("missing id")
 return d
def wr(p,d):
 p.parent.mkdir(parents=True,exist_ok=True)
 fd,n=tempfile.mkstemp(prefix=".ledger-",suffix=".tmp",dir=str(p.parent))
 t=Path(n)
 try:
  with os.fdopen(fd,"w",encoding="utf-8") as h:
   json.dump({"version":1,"items":d["items"]},h,indent=2,ensure_ascii=True)
   h.write("\n")
   h.flush()
   os.fsync(h.fileno())
  os.replace(t,p)
 except Exception:
  if t.exists():
   try:t.unlink()
   except OSError:pass
  raise
def grab(p):
 try:return rd(p),0
 except X as e:return None,die("LEDGER_CORRUPT",f"{p}: {e}")
def put(p,d):
 try:wr(p,d)
 except OSError as e:return die("EXTRACT_FAILED",f"write failed: {e}")
 return 0
def find(a,i):
 k=(i or "").strip().lower()
 for it in a:
  if str(it.get("id","")).lower()==k:return it
def nid(a):
 h={str(it.get("id","")).lower() for it in a}
 for _ in range(1000):
  c="pd-"+secrets.token_hex(2)
  if c not in h:return c
 raise RuntimeError("id")
def mask(s):
 if not s:return s,0
 K=[]
 def st(o):
  K.append(o)
  return chr(0xE000+len(K)-1)
 def pd(m):
  try:date(int(m[1]),int(m[2]),int(m[3]))
  except ValueError:return m[0]
  return st(m[0])
 s=PH.sub(lambda m:st(m[0]),DR.sub(pd,s))
 ch=0
 def rp(m):
  nonlocal ch
  d=re.sub(r"\D","",m[0])
  if len(d)<6:return m[0]
  ch=1
  return "****"+d[-4:]
 s=RUN.sub(rp,s)
 for i,o in enumerate(K):s=s.replace(chr(0xE000+i),o)
 return s,ch
def nref(v):
 c=re.sub(r"[^A-Za-z0-9]","",v)
 if not c:raise ValueError("has no alphanumeric characters")
 return c[-4:],len(c)>4
def namt(v):
 if type(v) not in (int,float,str):raise ValueError("must be a number or numeric string")
 raw=str(v) if type(v) in (int,float) else v.strip().replace(",","").replace(" ","").replace("$","")
 if not raw:raise ValueError("must be a number or numeric string")
 try:d=Decimal(raw)
 except InvalidOperation:raise ValueError("must be a number or numeric string")
 if not d.is_finite():raise ValueError("must be a finite number")
 if d<0:raise ValueError("must be >= 0")
 return format(d.quantize(Q,rounding=ROUND_HALF_UP),"f")
def check(o):
 if type(o)is not dict:verr("json","item must be a JSON object")
 u=sorted(k for k in o if k not in OK)
 if u:verr(u[0],"unknown field")
 for k in ("title","doc_type","due_date","action"):
  if k not in o:verr(k,"required")
 W=[]
 S={}
 def tx(k,req):
  v=o[k]
  if type(v)is not str:verr(k,"must be a string")
  t=v.strip()
  if req and not t:verr(k,"must be a non-empty string")
  if not t:return ""
  m,c=mask(t)
  if c:W.append("WARNING: masked digit run in "+k)
  return m
 S["title"]=tx("title",1)
 S["action"]=tx("action",1)
 dt=o["doc_type"]
 if type(dt)is not str or not dt.strip():verr("doc_type","must be a non-empty string")
 S["doc_type"]=dt.strip().lower()
 due=o["due_date"]
 if type(due)is not str:verr("due_date",'must be YYYY-MM-DD or "none"')
 if due.strip().lower()=="none":S["due_date"]="none"
 else:
  try:S["due_date"]=ymd(due).isoformat()
  except ValueError as e:verr("due_date",str(e) if str(e)=="not a real calendar date" else 'must be YYYY-MM-DD or "none"')
 for k in ("sender","notes","consequence"):
  if k in o:
   m=tx(k,0)
   if m:S[k]=m
 if "source_file" in o:
  src=o["source_file"]
  if type(src)is not str:verr("source_file","must be a string")
  src=src.strip()
  if src:S["source_file"]=src
 if "amount" in o:
  try:S["amount"]=namt(o["amount"])
  except ValueError as e:verr("amount",str(e))
 if "currency" in o:
  c=o["currency"]
  if type(c)is not str or not re.fullmatch("[A-Za-z]{3}",c.strip()):verr("currency","must be a 3-letter code")
  S["currency"]=c.strip().upper()
 elif "amount" in S:S["currency"]="USD"
 if "reference_last4" in o:
  r=o["reference_last4"]
  if type(r)is not str:verr("reference_last4","must be a string")
  try:a,tr=nref(r)
  except ValueError as e:verr("reference_last4",str(e))
  if tr:W.append("WARNING: reference masked to last 4")
  S["reference_last4"]=a
 if "reply_needed" in o:
  f=o["reply_needed"]
  if type(f)is not bool:verr("reply_needed","must be a JSON boolean")
  S["reply_needed"]=f
 else:S["reply_needed"]=False
 if "reminders_days" in o:
  ds=o["reminders_days"]
  if type(ds)is not list or not all(type(n)is int and n>=0 for n in ds):verr("reminders_days","must be a list of non-negative integers")
  S["reminders_days"]=sorted(set(ds),reverse=True)
 else:S["reminders_days"]=[7,2,0]
 return S,W
def ol(v):
 return re.sub(r"\s+"," ","" if v is None else str(v)).strip()
def money(it):
 return "-" if not it.get("amount") else f"{it.get('currency') or 'USD'} {it['amount']}"
def dkey(it):
 return ((it.get("sender") or "").strip().casefold(),(it.get("title") or "").strip().casefold(),it.get("due_date") or "none",it.get("amount"))
def dlab(due,td):
 if not due or due=="none":return "-"
 try:n=(ymd(due)-td).days
 except ValueError:return "?"
 return "today" if n==0 else f"in {n}d" if n>0 else f"{-n}d late"
def skey(it):
 due=it.get("due_date") or "none"
 c=it.get("created_at") or ""
 i=str(it.get("id") or "")
 return (1,"",c,i) if due=="none" else (0,due,c,i)
def rdays(it):
 raw=it.get("reminders_days")
 if type(raw)is not list:return [7,2,0]
 ds=[n for n in raw if type(n)is int and n>=0]
 return ds if ds or raw==[] else [7,2,0]
def why(it,td):
 if (it.get("status") or "open")!="open":return
 due=it.get("due_date")
 if type(due)is not str or due=="none":return
 try:dd=ymd(due)
 except ValueError:return
 sn=it.get("snoozed_until")
 if type(sn)is str and sn.strip():
  try:sd=ymd(sn)
  except ValueError:sd=None
  if sd:
   if sd>td:return
   if sd==td:return "SNOOZE ENDED"
 n=(dd-td).days
 if n<0:
  k=-n
  return f"OVERDUE BY {k} DAY" if k==1 else f"OVERDUE BY {k} DAYS"
 if n in rdays(it):return "DUE TODAY" if n==0 else "DUE TOMORROW" if n==1 else f"DUE IN {n} DAYS"
def dline(w,it):
 r="yes" if it.get("reply_needed") else "no"
 return f"{w} | id={it.get('id','')} | amount={money(it)} | sender={ol(it.get('sender') or '-')} | title={ol(it.get('title') or '')} | action={ol(it.get('action') or '')} | reply={r}"
def htext(s):
 s=re.sub(r"(?is)<(script|style)\b[^>]*>.*?</\1>"," ",s)
 s=re.sub(r"(?i)<br\s*/?>|</tr>","\n",s)
 s=re.sub(r"(?i)<t[dh]\b[^>]*>"," | ",s)
 s=re.sub(r"(?i)<(?:p|div|h[1-6]|li|tr|table|blockquote|section|article|header|footer|pre)\b[^>]*>","\n",s)
 s=unescape(re.sub(r"(?s)<[^>]+>","",s))
 out=[]
 for ln in s.splitlines():
  ln=re.sub(r"[ \t]{2,}"," ",ln).strip()
  if ln.startswith("| "):ln=ln[2:].strip()
  if ln:out.append(ln)
 return "\n".join(out)
def pb(part):
 p=part.get_payload(decode=True)
 return p if type(p)is bytes else p.encode() if type(p)is str else b""
def pt(part):
 try:
  c=part.get_content()
  return c if type(c)is str else str(c)
 except Exception:return pb(part).decode("utf-8","replace")
def sname(n):
 c=(n or "").replace("\\","/").split("/")[-1].replace("\x00","")
 c=re.sub(r"[^A-Za-z0-9._ -]+","_",c).strip(" .")
 return (c if c not in ("",".","..") else "attachment")[:180]
def upath(d,fn):
 c=d/fn
 if not c.exists():return c
 for i in range(2,1000):
  a=d/f"{c.stem}-{i}{c.suffix}"
  if not a.exists():return a
 raise OSError(fn)
def eml(data,save):
 m=email.message_from_bytes(data,policy=policy.default)
 L=[f"{k}: {m.get(k,'') or ''}" for k in ("From","To","Date","Subject")]+[""]
 plain=html=None
 atts=[]
 def cons(part,top):
  nonlocal plain,html
  if part.is_multipart():return
  ct,fn=part.get_content_type(),part.get_filename()
  if part.get_content_disposition()=="attachment" or (fn and ct not in ("text/plain","text/html")):
   atts.append(part)
   return
  if ct=="text/plain" and plain is None:plain=pt(part)
  elif ct=="text/html" and html is None:html=pt(part)
  elif top and plain is None and html is None and ct.startswith("text/"):plain=pt(part)
 (m.is_multipart() and [cons(part,0) for part in m.walk()]) or cons(m,1)
 body=plain.strip() if plain and plain.strip() else htext(html) if html and html.strip() else ""
 L+=[body,""]
 if not atts:L.append("Attachments: none")
 else:
  L.append("Attachments:")
  if save is not None:save.mkdir(parents=True,exist_ok=True)
  for part in atts:
   fn,b=part.get_filename() or "attachment",pb(part)
   L.append(f"- {ol(fn)} ({part.get_content_type()}, {len(b)} bytes)")
   if save is not None:
    dest=upath(save,sname(fn))
    dest.write_bytes(b)
    L.append(f"Saved: {dest.resolve()}")
 return "\n".join(L).strip()
def sniff(data):
 s=data[3:] if data.startswith(b"\xef\xbb\xbf") else data
 st=s.lstrip()
 if st.startswith(b"%PDF"):return "pdf"
 head=s[:4096].decode("utf-8","replace").lstrip("\ufeff")
 lines=head.splitlines()
 first=lines[0] if lines else ""
 if ":" in first and first.split(":",1)[0].strip().lower() in MAIL:return "eml"
 low=st[:64].lower()
 if low.startswith((b"<html",b"<!doctype html")):return "html"
 try:t=data.decode()
 except UnicodeDecodeError:return "bin"
 if "\0" in t or (t and sum(ch<" " and ch not in "\n\r\t\f" for ch in t)/len(t)>.05):return "bin"
 return "txt"
def pdf(path,data):
 tool=shutil.which("pdftotext")
 if not tool:return die("NO_PDFTOTEXT","pdftotext is not installed")
 arg=str(path)
 if arg[:1]=="-":arg="./"+arg
 try:proc=subprocess.run([tool,"-layout","-enc","UTF-8","-eol","unix","-nopgbrk","-q",arg,"-"],capture_output=True)
 except OSError as e:return die("EXTRACT_FAILED",str(e))
 text=proc.stdout.decode("utf-8","replace")
 if text.strip():return text
 if data.lstrip().startswith(b"%PDF"):return ""
 err=proc.stderr.decode().strip()
 return die("EXTRACT_FAILED",err or "file does not appear to be a readable PDF")
def pull(path,save):
 if not path.exists():return die("FILE_NOT_FOUND",f"no such file: {path}")
 if not path.is_file():return die("UNSUPPORTED_TYPE",f"not a regular file: {path}")
 try:data=path.read_bytes()
 except OSError as e:return die("EXTRACT_FAILED",str(e))
 if not data:return die("EMPTY_FILE",f"file is empty: {path}")
 ext=path.suffix.lower()
 if ext in IMG:
  print("NOTICE:IMAGE_FILE")
  print(f"IMAGE_FILE: {path.resolve()} - no text layer; the bot should read this image directly with its vision capability.")
  return 3
 kind={".pdf":"pdf",".eml":"eml",".html":"html",".htm":"html"}.get(ext) or ("txt" if ext in TXT else sniff(data))
 try:
  text={"pdf":lambda:pdf(path,data),"txt":lambda:data.decode("utf-8-sig","replace"),"html":lambda:htext(data.decode("utf-8-sig","replace")),"eml":lambda:eml(data,save)}.get(kind)
  if not text:return die("UNSUPPORTED_TYPE",f"cannot extract: {path}")
  text=text()
 except Exception as e:return die("EXTRACT_FAILED",str(e))
 if type(text)is int:return text
 if kind!="eml":text=text.replace("\r\n","\n").replace("\r","\n")
 text=text.strip()
 if not text.strip():return die("NO_TEXT_LAYER",PHOTO) if kind=="pdf" else die("EMPTY_FILE",f"file is empty or whitespace-only: {path}")
 print(text)
 return 0
def esc(t):
 return t.replace("\\","\\\\").replace("\r\n","\n").replace("\r","\n").replace("\n","\\n").replace(";","\\;").replace(",","\\,")
def fold(line):
 b=line.encode()
 if len(b)<=75:return line
 parts=[]
 lim=75
 while b:
  c=min(len(b),lim)
  while c and c<len(b) and b[c]&0xC0==0x80:c-=1
  c=c or 1
  parts.append((b"" if lim==75 else b" ")+b[:c])
  b=b[c:]
  lim=74
 return b"\r\n".join(parts).decode()
def alarm(it):
 p=[n for n in rdays(it) if n>0]
 return max(p) if p else 1
def mkics(it):
 due=ymd(str(it["due_date"]))
 end=due+timedelta(days=1)
 stamp=datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
 amt=f"Amount: {it.get('currency') or 'USD'} {it['amount']}" if it.get("amount") else "Amount: none"
 desc="\n".join((f"Action: {it.get('action') or ''}",amt,f"Sender: {it.get('sender') or '-'}",f"Reference: {it.get('reference_last4') or '-'}",f"Consequence: {it.get('consequence') or '-'}"))
 sm="Deadline: "+str(it.get("title") or "")
 lines="BEGIN:VCALENDAR|VERSION:2.0|PRODID:-//Paperwork Desk//EN|CALSCALE:GREGORIAN|METHOD:PUBLISH|BEGIN:VEVENT".split("|")
 lines+=[
  f"UID:{it['id']}@paperwork-desk", f"DTSTAMP:{stamp}",
  f"DTSTART;VALUE=DATE:{due:%Y%m%d}", f"DTEND;VALUE=DATE:{end:%Y%m%d}",
  "SUMMARY:"+esc(sm), "DESCRIPTION:"+esc(desc),
  "BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:"+esc(sm),
  f"TRIGGER:-P{alarm(it)}D", "END:VALARM", "END:VEVENT", "END:VCALENDAR"]
 phys=[]
 for ln in lines:phys+=fold(ln).split("\r\n")
 return ("\r\n".join(phys)+"\r\n").encode()
def payload(a):
 if a.item_json and a.item_file:return None,bad("json","provide only one of --json or --file")
 if not a.item_json and not a.item_file:return None,bad("json","provide --json or --file")
 raw=a.item_json
 if a.item_file:
  fp=Path(a.item_file).expanduser()
  if not fp.exists():return None,die("FILE_NOT_FOUND",f"no such file: {fp}")
  if not fp.is_file():return None,die("UNSUPPORTED_TYPE",f"not a regular file: {fp}")
  try:raw=fp.read_text(encoding="utf-8-sig")
  except OSError as e:return None,die("EXTRACT_FAILED",str(e))
 try:return json.loads(raw),0
 except json.JSONDecodeError:return None,bad("json","invalid JSON")
def js(o):
 print(json.dumps(o,indent=2,ensure_ascii=True))
def cmd_ex(a,*_):
 save=Path(a.save_attachments).expanduser() if a.save_attachments else None
 return pull(Path(a.path).expanduser(),save)
def cmd_add(a,td,lg):
 p,c=payload(a)
 if c:return c
 try:S,W=check(p)
 except X:return 8
 for ln in W:print(ln,file=sys.stderr)
 d,c=grab(lg)
 if c:return c
 for ex in d["items"]:
  if dkey(ex)==dkey(S):
   print("DUPLICATE: "+ex["id"])
   return 0
 st=datetime.now().isoformat(timespec="microseconds")
 it={"id":nid(d["items"]),"title":S["title"],"doc_type":S["doc_type"],"due_date":S["due_date"],"action":S["action"]}
 for k in ("sender","amount","currency","reference_last4","source_file","notes","consequence"):
  if k in S:it[k]=S[k]
 it.update(reply_needed=S["reply_needed"],reminders_days=S["reminders_days"],status="open",created_at=st,updated_at=st,snoozed_until=None,done_at=None)
 order="id title doc_type due_date action sender amount currency reference_last4 source_file notes consequence reply_needed reminders_days status created_at updated_at snoozed_until done_at".split()
 it={k:it[k] for k in order if k in it}
 d["items"].append(it)
 c=put(lg,d)
 if c:return c
 print(f"ADDED {it['id']} | {ol(it['title'])} | due {it['due_date']} | {money(it)} | {ol(it.get('sender') or '-')}")
 return 0
def table(h,rows):
 rows=[[ol(c) for c in r] for r in rows]
 w=[len(x) for x in h]
 for r in rows:
  for i,c in enumerate(r):w[i]=max(w[i],len(c))
 def fmt(cs):return "  ".join(c.ljust(n) for c,n in zip(cs,w)).rstrip()
 return "\n".join([fmt(h),fmt("-"*n for n in w)]+[fmt(r) for r in rows])
def cmd_ls(a,td,lg):
 if a.within is not None and a.within<0:return bad("within","must be a non-negative integer")
 d,c=grab(lg)
 if c:return c
 items=list(d["items"]) if a.all else [it for it in d["items"] if (it.get("status") or "open")!="done"]
 if a.within is not None:
  kept=[]
  for it in items:
   due=it.get("due_date")
   if type(due)is not str or due=="none":continue
   try:n=(ymd(due)-td).days
   except ValueError:continue
   if n<=a.within:kept.append(it)
  items=kept
 items.sort(key=skey)
 if a.json:
  js(items)
  return 0
 if not items:
  print("No items.")
  return 0
 rows=[[
  it.get("id") or "", it.get("due_date") or "none", dlab(it.get("due_date"),td),
  it.get("status") or "open", money(it), it.get("sender") or "-",
  it.get("title") or "", "yes" if it.get("reply_needed") else "no",
 ] for it in items]
 print(table("ID DUE DAYS STATUS AMOUNT SENDER TITLE REPLY".split(),rows))
 return 0
def cmd_due(a,td,lg):
 d,c=grab(lg)
 if c:return c
 pairs=[(w,it) for it in d["items"] if (w:=why(it,td))]
 pairs.sort(key=lambda p:skey(p[1]))
 if not pairs:
  if a.json:print("[]")
  return 0
 if a.json:
  js([{**it,"reason":w} for w,it in pairs])
  return 0
 for w,it in pairs:print(dline(w,it))
 return 0
def sums(items):
 t={}
 for it in items:
  if it.get("amount"):
   c=it.get("currency") or "USD"
   t[c]=t.get(c,Decimal(0))+Decimal(it["amount"])
 return t
def smap(b):
 return {c:format(b[c].quantize(Q,rounding=ROUND_HALF_UP),"f") for c in sorted(b)}
def stext(b):
 r=smap(b)
 return "none" if not r else ", ".join(f"{c} {a}" for c,a in r.items())
def cmd_wk(a,td,lg):
 d,c=grab(lg)
 if c:return c
 ov,wk,nx,flo=[],[],[],[]
 H=getattr(a,"days",14) or 14
 for it in d["items"]:
  if (it.get("status") or "open")=="done":continue
  due=it.get("due_date")
  if type(due)is not str or due=="none":
   flo.append(it)
   continue
  try:n=(ymd(due)-td).days
  except ValueError:continue
  if n>=H:continue
  (ov if n<0 else wk if n<7 else nx).append(it)
 ov.sort(key=skey)
 wk.sort(key=skey)
 nx.sort(key=skey)
 listed=ov+wk+nx
 if not listed:
  print(f"Nothing due in the next {H} days.")
  if flo:print(f"NO DEADLINE: {len(flo)}")
  return 0
 def show(title,rows):
  if not rows:return
  print(title)
  for it in rows:
   r="yes" if it.get("reply_needed") else "no"
   print(f"  {it.get('id')}  {it.get('due_date')}  {dlab(it.get('due_date'),td)}  {money(it)}  {ol(it.get('sender') or '-')}  {ol(it.get('title') or '')}  reply={r}")
   print("    action: "+ol(it.get("action") or ""))
  print()
 show("OVERDUE",ov)
 show("THIS WEEK",wk)
 show("NEXT WEEK",nx)
 rep=sum(1 for it in listed if it.get("reply_needed"))
 print(f"NO DEADLINE: {len(flo)}")
 print("TOTALS: "+stext(sums(listed)))
 print("OVERDUE TOTALS: "+stext(sums(ov)))
 print(f"REPLIES NEEDED: {rep}")
 return 0
def need(p,i):
 d,c=grab(p)
 if c:return c
 it=find(d["items"],i)
 return die("NOT_FOUND",f"unknown id: {i}") if it is None else (d,it)
def stamp():
 return datetime.now().isoformat(timespec="microseconds")
def cmd_dn(a,td,lg):
 got=need(lg,a.id)
 if type(got)is int:return got
 d,it=got
 it["status"]="done"
 if not it.get("done_at"):it["done_at"]=stamp()
 it["updated_at"]=stamp()
 c=put(lg,d)
 return c or (print("DONE "+it["id"]) or 0)
def cmd_sn(a,td,lg):
 if not re.fullmatch(r"[0-9]+",str(a.days)) or int(a.days)<=0:return bad("days","must be a positive integer")
 try:until=td+timedelta(days=int(a.days))
 except OverflowError:return bad("days","too large")
 got=need(lg,a.id)
 if type(got)is int:return got
 d,it=got
 it["snoozed_until"]=until.isoformat()
 it["updated_at"]=stamp()
 c=put(lg,d)
 return c or (print(f"SNOOZED {it['id']} UNTIL {until.isoformat()}") or 0)
def cmd_rm(a,td,lg):
 got=need(lg,a.id)
 if type(got)is int:return got
 d,it=got
 d["items"]=[o for o in d["items"] if o is not it]
 c=put(lg,d)
 return c or (print("REMOVED "+it["id"]) or 0)
def cmd_ic(a,td,lg):
 got=need(lg,a.id)
 if type(got)is int:return got
 d,it=got
 due=it.get("due_date")
 if type(due)is not str or due=="none":return die("NO_DUE_DATE",f"{it['id']} has no due date")
 try:ymd(due)
 except ValueError as e:return bad("due_date",str(e))
 out=Path(a.out).expanduser() if a.out else lg.parent/"ics"
 try:
  out.mkdir(parents=True,exist_ok=True)
  dest=out/f"{it['id']}.ics"
  dest.write_bytes(mkics(it))
 except OSError as e:return die("EXTRACT_FAILED",str(e))
 print(dest.resolve())
 return 0
def parser():
 p=argparse.ArgumentParser(prog="paperwork.py")
 p.add_argument("--ledger")
 p.add_argument("--today",dest="today_global")
 s=p.add_subparsers(dest="command",required=True)
 def A(n):return s.add_parser(n)
 e=A("extract")
 e.add_argument("path",metavar="FILE")
 e.add_argument("--save-attachments",metavar="DIR")
 a=A("add")
 a.add_argument("--json",dest="item_json")
 a.add_argument("--file",dest="item_file")
 ls=A("list")
 g=ls.add_mutually_exclusive_group()
 g.add_argument("--open",action="store_true")
 g.add_argument("--all",action="store_true")
 ls.add_argument("--within",type=int)
 ls.add_argument("--today")
 ls.add_argument("--json",action="store_true")
 du=A("due")
 du.add_argument("--today")
 du.add_argument("--json",action="store_true")
 w=A("weekly")
 w.add_argument("--today")
 w.add_argument("--days",type=int,default=14)
 A("done").add_argument("id")
 z=A("snooze")
 z.add_argument("id")
 z.add_argument("days")
 z.add_argument("--today")
 A("remove").add_argument("id")
 c=A("ics")
 c.add_argument("id")
 c.add_argument("--out",metavar="DIR")
 return p
CM={"extract":cmd_ex,"add":cmd_add,"list":cmd_ls,"due":cmd_due,"weekly":cmd_wk,"done":cmd_dn,"snooze":cmd_sn,"remove":cmd_rm,"ics":cmd_ic}
def today_of(a):
 raw=getattr(a,"today",None) or getattr(a,"today_global",None)
 if not raw:return date.today()
 try:return ymd(raw)
 except ValueError as e:
  bad("today",str(e) if str(e)=="not a real calendar date" else "must be YYYY-MM-DD")
  return None
def main(argv=None):
 if argv is None:argv=sys.argv[1:]
 try:a=parser().parse_args(argv)
 except SystemExit as e:
  c=e.code
  if c is None or c==0:return 0
  if type(c)is int:return c
  print(c,file=sys.stderr)
  return 1
 td=today_of(a)
 return 8 if td is None else CM[a.command](a,td,led(a.ledger))
if __name__=="__main__":sys.exit(main())
```
