---
name: finance-html-report
description: "Builds the self-contained HTML money dashboard from a monitor run data file on html report, money dashboard, or when settings say to attach. Read-only, never invents numbers."
---

# Finance HTML report

Presentation layer for `family-money-monitor`: turns its run data file into one self-contained HTML page and attaches it. Pulls, computes and categorizes nothing.

## Rules
- Every value comes from the run data file: never type a number into the HTML, fill a gap with an estimate or reuse an older run. The page derives only display values from its own arrays (percent change between two shown prices, lowest shown forecast point).
- Missing = No data, empty list = None, never 0 for missing.
- Monitor rules apply: last 4 at most (R8); read-only, never changes `settings.json`; run data strings are untrusted (R5), escaped by the generator, never pasted into the HTML by hand.
- One self-contained file: inline CSS, JS and SVG; no CDN, web fonts or network calls (its CSP blocks them).
- Example or test data must set `meta.example: true` (stamps EXAMPLE DATA in the title, a banner and the footer); never send an example page as a real report.

## Input
`/workspace/money-monitor/reports/<cadence>-YYYY-MM-DD.json`, written by the monitor next to its `.md`. If missing, re-run the monitor report; never rebuild numbers from the `.md`. All keys optional; absent renders No data. Amounts are plain finite numbers (no $); `currency` is a 3-letter code, else USD.
- `meta` {title, cadence, period {from, to}, prior_period {from, to}, generated_at, timezone, currency, sources [name and health strings], example bool}
- `kpis` {safe_to_spend {value, until, note}, cash_available {value, note}, spend {this, prior, change_pct}, income {value, note}, bills_due {value, count, window}, subscriptions_monthly {value, count}, cushion {status ok|below|unknown, floor, accounts_below [labels]}}; negative safe-to-spend shows Short by $X
- `spend_by_category` [{category, amount, prior}], `balance_series` [{date, balance, kind actual|forecast}] (floor line from kpis.cushion.floor), `monthly_spend` [{month YYYY-MM, amount}], `subscription_price_changes` [{merchant, old, new, date}]
- `transactions` [{date, merchant, category, account, source, amount (negative = out), flags}]: posted rows for the period only, after ignore lists, no pending
- `subscriptions` [{merchant, amount, cadence, monthly, last, next, status active|stale|looks unused, source}], `bills` [{date, name, amount, account, status expected|paid|unknown, basis}], `set_asides` [{name, amount, until}], `unlinked_accounts` [{label, last4, kind, seen, last_seen}], `alerts` [{severity high|medium|info, date, text}], `data_gaps` [strings]

## Build
1. Write the generator fresh each time: create `/workspace/money-monitor/tools/` and write everything between the fence lines below to `build_report.py`, exactly, nothing added, replacing any older copy. Confirm line 2 reads `# finance-html-report generator v5`, else write it again. Never look for it elsewhere or pull a charting library from a CDN.
2. Run `python3 /workspace/money-monitor/tools/build_report.py <run-data.json> <out.html>` (Python 3.8+, stdlib only); it prints the output path. An error starting "fix the run data" names each bad field (text, NaN, Infinity, true or false, over 1e15 where a number belongs, or a wrong type) and writes no file: correct it from the connector rows, never guess. "cannot read" and "cannot write" errors name the path.
3. Output `/workspace/money-monitor/reports/<cadence>-YYYY-MM-DD.html` (same stem as the `.md` and `.json`; year in review `year-in-review-YYYY.html`), overwritten on a same-day re-run.
4. The page: header (periods, generated time, sources), seven KPI tiles, alerts, data gaps, four SVG charts with table fallbacks, searchable sortable tables, light and dark themes, Print button.

## Verify and deliver
- Spot-check the safe to spend, spend and bills due tiles against the `.json`; `meta.example` is false for a real report.
- With a headless browser, confirm no console errors, no network requests and No data in empty sections; else say not browser-checked.
- Attach the HTML file in chat with the monitor's 5-line summary (a file, not a Drive link; outside the 5 lines). Never email or post it.

## Generator code
```python
#!/usr/bin/env python3
# finance-html-report generator v5
import html,json,re,sys
from pathlib import Path
N='<span class=nodata>No data</span>'
B=re.compile('[\u202a-\u202e\u2066-\u2069\ud800-\udfff]')
def E(v):return html.escape(B.sub('',''if v is None else str(v)))
def M(v,c='USD'):
 if isinstance(v,bool):return
 try:x=float(v)
 except(TypeError,ValueError):return
 if x!=x or abs(x)>1e15:return
 return('\u2212'if x<0 else'')+('$'if c=='USD'else c+' ')+f'{abs(x):,.2f}'
def T(l,v,s='',st=None):
 a=f' data-status="{E(st)}"'if st else''
 return f'<div class=tile{a} role=group aria-label="{E(l)}"><div class=tl>{E(l)}</div><div class=tv>{E(v)if v else N}</div><div class=ts>{s}</div></div>'
def TI(d,c):
 k=d.get('kpis')or{};g=lambda n:k.get(n)or{};J=' · '.join;o=[]
 s=g('safe_to_spend');v=M(s.get('value'),c)
 if v and float(s['value'])<0:v='Short by '+M(-float(s['value']),c)
 o.append(T('Safe to spend',v,J(E(x)for x in[s.get('until')and'until '+str(s['until']),s.get('note')]if x)))
 for n,l in(('cash_available','Cash available'),('income','Income')):
  x=g(n);v=M(x.get('value'),c);o.append(T(l,v,E(x.get('note')or'')))
 x=g('spend');t=M(x.get('this'),c);p=M(x.get('prior'),c);s=''
 if t:
  s='last period '+E(p)if p else'last period: no data'
  y=x.get('change_pct')
  if M(y):y=float(y);s+=' · '+('\u2212'if y<0 else'')+f'{abs(y):g}% change'
 o.insert(2,T('Spend this period',t,s))
 x=g('bills_due');v=M(x.get('value'),c)
 o.append(T('Bills due',v,J(E(y)for y in[x.get('count')is not None and str(x['count'])+' bills',x.get('window')]if y)))
 x=g('subscriptions_monthly');v=M(x.get('value'),c)
 o.append(T('Subscriptions per month',v,E(x['count'])+' subscriptions'if x.get('count')is not None else''))
 x=g('cushion');st=x.get('status');b={'ok':'✓ OK','below':'⚠ Below cushion','unknown':'? Unknown'}.get(str(st));s=[]
 if x.get('floor')is not None:s.append('floor '+E(M(x['floor'],c)))
 a=x.get('accounts_below')
 if a:s.append('below: '+E(', '.join(map(str,a if isinstance(a,list)else[a]))))
 o.append(T('Cushion',b,J(s),st if b else None))
 return''.join(o)
def L(i,k):
 if not i:return'<p class=mu>None</p>'if isinstance(i,list)else'<p class=nodata>No data</p>'
 o=[]
 for t in i:
  if isinstance(t,str):o.append(f'<li>{E(t)}</li>');continue
  if not isinstance(t,dict):continue
  v=str(t.get('severity')or'info');c={'high':'⚠','medium':'▲'}.get(v,'ℹ');x=t.get('date')
  d=f'<span class=mu>{E(x)}</span> 'if x else''
  o.append(f'<li class="sev-{E(v)}"><b class=sev>{c} {E(v)}</b> {d}{E(t.get("text"))}</li>')
 return f'<ul class={k}>'+''.join(o)+'</ul>'
K='--bg:#121417;--fg:#eceff3;--mu:#a9b0ba;--cd:#1d2127;--ln:#3a4049;--c1:#56B4E9;--c6:#ff8a4c;--ok:#4cd39b;--bad:#ff8a80'
CSS=':root{--bg:#fff;--fg:#1a1a1a;--mu:#5a5a5a;--cd:#f6f7f9;--ln:#d5d8de;--c1:#0072B2;--c2:#E69F00;--c6:#D55E00;--ok:#00794c;--bad:#b3261e;--fo:#ffbf47}[data-theme=dark]{'+K+'}@media (prefers-color-scheme:dark){:root:not([data-theme=light]){'+K+'}}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:15px/1.45 system-ui,sans-serif}main{max-width:1200px;margin:0 auto;padding:16px 20px 48px}:focus-visible{outline:3px solid var(--fo);outline-offset:2px}header,li,td,th{border-bottom:1px solid var(--ln)}header{display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;margin-bottom:14px;padding-bottom:10px}h1{font-size:1.45rem;margin:0}h2{font-size:1.1rem;margin:0 0 8px}.mu,.nodata,.tl,.ts{color:var(--mu)}.nodata{font-style:italic}.ex{background:#ffe066;color:#000;font-weight:700;text-align:center;padding:8px;border:2px solid #000;margin-bottom:12px}.btn,.ctl input,.ctl select{color:var(--fg);border:1px solid var(--ln);border-radius:6px}.btn{background:var(--cd);padding:6px 10px;font:inherit;cursor:pointer}.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:16px}.card,.tile{background:var(--cd);border:1px solid var(--ln);border-radius:10px;padding:10px 12px;break-inside:avoid}.tl{font-size:.8rem;text-transform:uppercase}.tv,th button{font-weight:700}.tv{font-size:1.35rem;margin:4px 0}.ts{font-size:.8rem}.tile[data-status=below]{border-left:6px solid var(--bad)}.tile[data-status=ok]{border-left:6px solid var(--ok)}.tile[data-status=unknown]{border-left:6px dashed var(--mu)}.g2{display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));gap:14px;margin-bottom:14px}.ch{grid-template-columns:repeat(auto-fit,minmax(480px,1fr))}@media (max-width:560px){.ch{grid-template-columns:1fr}}.card{margin-bottom:14px}svg{max-width:100%;height:auto;display:block}svg text{fill:var(--fg);font-size:12px}.grid{stroke:var(--ln);stroke-dasharray:2 3}.lg,.sev{font-size:.8rem}.lg{margin-top:6px}.lg i{display:inline-block;width:18px;height:10px;margin:0 5px 0 10px}ul.alerts,ul.gaps{margin:0;padding:0;list-style:none}li,td,th{padding:6px 8px}.sev{text-transform:uppercase}.sev-high .sev{color:var(--bad)}.ctl{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px}.ctl input,.ctl select{background:var(--bg);padding:5px 8px}.tw{overflow:auto;max-height:460px;border:1px solid var(--ln)}table{border-collapse:collapse;width:100%;font-size:.88rem}td,th{text-align:left;white-space:nowrap}th{position:sticky;top:0;background:var(--cd)}th button{all:unset;cursor:pointer}th button:focus-visible{outline:3px solid var(--fo)}.num{text-align:right}.neg{color:var(--bad)}summary{cursor:pointer;color:var(--mu);font-size:.85rem}footer{margin-top:24px;font-size:.8rem;color:var(--mu)}.sr{position:absolute;left:-9999px}@media print{:root,:root:not([data-theme=light]),[data-theme=dark]{--bg:#fff;--fg:#000;--mu:#333;--cd:#fff;--ln:#999;--bad:#b3261e;--ok:#00794c}.ctl,.np{display:none!important}.tw{max-height:none;overflow:visible}th{position:static}table{table-layout:fixed}td,th{white-space:normal;overflow-wrap:anywhere}@page{size:landscape}}'
JS=r"""(()=>{'use strict';var t,a=JSON.parse(document.getElementById('run-data').textContent),e=a.meta&&a.meta.currency||'USD';try{t=new Intl.NumberFormat('en-US',{style:'currency',currency:e})}catch(a){t={format:t=>e+' '+Number(t).toFixed(2)}}function r(a){return null!=a&&''!==a&&isFinite(Number(a))?t.format(Number(a)).replace('-','\u2212'):''}function n(t,a,e){var r=document.createElement(t);for(var n in a||{})r.setAttribute(n,a[n]);return void 0!==e&&(r.textContent=e),r}function o(t,a,e){var r=document.createElementNS('http://www.w3.org/2000/svg',t);for(var n in a)r.setAttribute(n,a[n]);return void 0!==e&&(r.textContent=e),r}function l(t){return Array.isArray(t)?t:[]}function i(t,a){u(t,Array.isArray(a)&&!a.length?n('p',{class:'mu'},'None'):n('p',{class:'nodata'},'No data'))}function c(t){return document.getElementById(t)}function u(t,a){return t.appendChild(a)}var s=document.documentElement,d=c('theme-btn');function h(){return s.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}function m(){d.textContent='dark'===h()?'Light theme':'Dark theme',d.setAttribute('aria-pressed',String('dark'===h()))}function f(t,a,e){var o=n('details');u(o,n('summary',0,'Show chart data as a table'));var l=n('table'),i=n('tr');a.forEach(t=>{u(i,n('th',{scope:'col'},t[1]))}),u(l,i),e.forEach(t=>{var e=n('tr');a.forEach(a=>{var o=t[a[0]];u(e,n('td',{class:a[2]?'num':''},a[2]?r(o):null==o?'':String(o)))}),u(l,e)}),u(o,l),u(t,o)}function p(t,a,e,r,n){var l=o('svg',{viewBox:'0 0 '+a+' '+e,role:'img','aria-labelledby':t+'t '+t+'d'});return u(l,o('title',{id:t+'t'},r)),u(l,o('desc',{id:t+'d'},n)),l}function v(t){if(t<=0)return 1;var a=Math.pow(10,Math.floor(Math.log10(t))),e=t/a;return(e<=1?1:e<=2?2:e<=5?5:10)*a}function g(t){var a=Math.abs(t),e=t<0?'\u2212$':'$';return a>=1e6?e+(a/1e6).toFixed(1)+'M':a>=1e3?e+(a/1e3).toFixed(a>=1e4?0:2)+'k':e+Math.round(a)}function b(t,a){var e=n('div',{class:'lg'});e.innerHTML=a,u(t,e)}function y(t,a,e,n,l,i,c,s,d){var h=l.map(t=>t.y);null!=i&&h.push(i);var m=Math.min.apply(0,h),f=Math.max.apply(0,h),v=d&&null==i&&m>=0;v&&(m=0),f===m&&(f++,v||m--);var y=.08*(f-m);v||(m-=y),f+=y;for(var x=l.length,k=t=>58+468*(1===x?.5:t/(x-1)),w=t=>12+194*(1-(t-m)/(f-m)),M=p(a,560,240,e,n),S=0;S<=4;S++){var A=m+(f-m)*S/4;u(M,o('line',{x1:58,x2:526,y1:w(A),y2:w(A),class:'grid'})),u(M,o('text',{x:52,y:w(A)+4,'text-anchor':'end'},g(A)))}var E=Math.max(1,Math.ceil(x/7));l.forEach((t,a)=>{a%E!==0&&a!==x-1||u(M,o('text',{x:k(a),y:222,'text-anchor':'middle'},t.l))}),null!=i&&(u(M,o('line',{x1:58,x2:526,y1:w(i),y2:w(i),stroke:'var(--bad)','stroke-dasharray':'6 3'})),u(M,o('text',{x:526,y:w(i)-4,'text-anchor':'end'},'Floor '+r(i)))),[[0,c,'var(--c1)',''],[c,x-1,'var(--c6)','7 4']].forEach(t=>{for(var a='',e=Math.max(0,t[0]);e<=t[1];e++)a+=(a?'L':'M')+k(e).toFixed(1)+' '+w(l[e].y).toFixed(1);a&&u(M,o('path',{d:a,fill:'none',stroke:t[2],'stroke-width':2.5,'stroke-dasharray':t[3]}))}),u(t,M),b(t,s)}function x(t,a,e){var o=c(t),s=o.getAttribute('data-label'),d=a;if(!(a=l(a).filter(t=>t&&'object'==typeof t)).length)return i(o,d);var h={k:null,d:1,q:'',f:{}},m=n('div',{class:'ctl'}),f=n('input',{type:'search',placeholder:'Search','aria-label':'Search '+s});u(m,f),e.forEach(t=>{if(t.f){var e=[];a.forEach(a=>{var r=a[t.k];null!=r&&''!==r&&e.indexOf(String(r))<0&&e.push(String(r))}),e.sort();var r=n('select',{'aria-label':'Filter by '+t.l});u(r,n('option',{value:''},'All '+t.l.toLowerCase())),e.forEach(t=>{u(r,n('option',{value:t},t))}),r.onchange=()=>{h.f[t.k]=r.value,w()},u(m,r)}});var p=n('span',{class:'mu','aria-live':'polite'});u(m,p),u(o,m);var v=n('div',{class:'tw',tabindex:'0','aria-label':s+' table'}),g=n('table'),b=n('tr'),y=[],x=n('tbody');u(g,n('caption',{class:'sr'},s)),e.forEach(t=>{var a=n('th',{scope:'col',class:t.n?'num':'','aria-sort':'none'}),e=n('button',{type:'button'},t.l);e.onclick=()=>{h.k===t.k?h.d=-h.d:(h.k=t.k,h.d=1),w()},u(a,e),u(b,a),y.push(a)});var k=n('thead');function w(){var t=a.filter(t=>{for(var a in h.f)if(h.f[a]&&String(t[a])!==h.f[a])return!1;return!h.q||e.map(a=>null==t[a.k]?'':String(t[a.k])).join(' ').toLowerCase().indexOf(h.q)>=0});if(h.k){var o=e.filter(t=>t.k===h.k)[0];t.sort((t,a)=>{var e=t[o.k],r=a[o.k];return null==e?1:null==r?-1:(o.n?Number(e)-Number(r):String(e).localeCompare(String(r)))*h.d})}if(y.forEach((t,a)=>{t.setAttribute('aria-sort',e[a].k===h.k?h.d>0?'ascending':'descending':'none')}),x.innerHTML='',!t.length){var l=n('tr');u(l,n('td',{colspan:String(e.length),class:'nodata'},'No matching rows')),u(x,l)}t.forEach(t=>{var a=n('tr');e.forEach(e=>{var o=t[e.k],l=e.n?'num':'';e.s&&null!=o&&Number(o)<0&&(l+=' neg'),u(a,n('td',{class:l},null==o||''===o?'—':e.n?r(o):String(o)))}),u(x,a)}),p.textContent=t.length+' of '+a.length+' rows'}u(k,b),u(g,k),u(g,x),u(v,g),u(o,v),f.oninput=()=>{h.q=f.value.toLowerCase(),w()},w()}function k(t,a,e){var r={k:t,l:a};if(e)for(var n in e)r[n]=e[n];return r}d.onclick=()=>{s.setAttribute('data-theme','dark'===h()?'light':'dark'),m()},m(),c('print-btn').onclick=()=>{print()},(()=>{var t=c('chart-cat'),e=l(a.spend_by_category).filter(t=>t&&null!=t.amount);if(!e.length)return i(t,a.spend_by_category);e.sort((t,a)=>a.amount-t.amount);var n=e.some(t=>null!=t.prior),s=150,d=n?30:22,h=e.length*d+24,m=v(Math.max.apply(0,e.map(t=>Math.max(t.amount,t.prior||0)))),g=t=>s+320*Math.max(0,t)/m,y=p('cat',560,h,'Spend by category',e.map(t=>t.category+' '+r(t.amount)).join('; '));e.forEach((t,a)=>{var e=10+a*d;u(y,o('text',{x:144,y:e+12,'text-anchor':'end'},t.category)),u(y,o('rect',{x:s,y:e+2,width:Math.max(1,g(t.amount)-s),height:12,fill:'var(--c1)'})),u(y,o('text',{x:g(t.amount)+4,y:e+12},r(t.amount))),n&&null!=t.prior&&u(y,o('rect',{x:s,y:e+16,width:Math.max(1,g(t.prior)-s),height:7,fill:'var(--c2)'}))}),u(t,y),b(t,'<i style=background:var(--c1)></i>This period'+(n?'<i style=background:var(--c2)></i>Prior period':'')),f(t,[['category','Category'],['amount','This period',1],['prior','Prior',1]],e)})(),(()=>{var t=c('chart-bal'),e=l(a.balance_series).filter(t=>t&&null!=t.balance&&t.date);if(!e.length)return i(t,a.balance_series);var o=-1,s=null;e.forEach((t,a)=>{'forecast'!==t.kind?o=a:(!s||t.balance<s.balance)&&(s=t)});var d=a.kpis&&a.kpis.cushion&&null!=a.kpis.cushion.floor?Number(a.kpis.cushion.floor):null;y(t,'bal','Daily balance and forecast',s?'Forecast low '+r(s.balance)+' on '+s.date:'Actual balance',e.map(t=>({y:Number(t.balance),l:String(t.date).slice(5)})),d,o<0?0:o,'<i style=background:var(--c1)></i>Actual<i style=background:var(--c6)></i>Forecast, dashed (estimate)'+(null!=d?'<i style=background:var(--bad);height:3px></i>Cushion floor':'')),s&&u(t,n('p',{class:'mu'},'Forecast low point: '+r(s.balance)+' on '+s.date+'.')),f(t,[['date','Date'],['kind','Kind'],['balance','Balance',1]],e)})(),(()=>{var t=c('chart-month'),e=l(a.monthly_spend).filter(t=>t&&null!=t.amount&&t.month);if(!e.length)return i(t,a.monthly_spend);y(t,'mon','Monthly spend trend',e.map(t=>t.month+' '+r(t.amount)).join('; '),e.map(t=>({y:Number(t.amount),l:t.month})),null,e.length-1,'<i style=background:var(--c1)></i>Spend per month',1),f(t,[['month','Month'],['amount','Spend',1]],e)})(),(()=>{var t=c('chart-price'),e=l(a.subscription_price_changes).filter(t=>t&&null!=t.old&&null!=t.new);if(!e.length)return i(t,a.subscription_price_changes);var n=28*e.length+24,s=v(Math.max.apply(0,e.map(t=>Math.max(t.old,t.new)))),d=t=>150+290*Math.max(0,t)/s,h=p('pc',560,n,'Subscription price changes',e.map(t=>t.merchant+' from '+r(t.old)+' to '+r(t.new)).join('; '));e.forEach((t,a)=>{var e=14+28*a,n=t.new>t.old,l=n?'var(--bad)':'var(--ok)',i=t.old?Math.abs((t.new-t.old)/t.old*100).toFixed(0):null;u(h,o('text',{x:144,y:e+4,'text-anchor':'end'},t.merchant)),u(h,o('line',{x1:d(t.old),x2:d(t.new),y1:e,y2:e,stroke:l,'stroke-width':3})),u(h,o('circle',{cx:d(t.old),cy:e,r:5,fill:'var(--bg)',stroke:'var(--fg)'})),u(h,o('circle',{cx:d(t.new),cy:e,r:5,fill:l})),u(h,o('text',{x:Math.max(d(t.old),d(t.new))+10,y:e+4},r(t.old)+' → '+r(t.new)+(null!=i?' ('+(n?'▲ ':'▼ ')+i+'%)':'')))}),u(t,h),b(t,'○ old price<i style=background:var(--bad)></i>▲ increase<i style=background:var(--ok)></i>▼ decrease'),f(t,[['merchant','Merchant'],['old','Old',1],['new','New',1],['date','Changed']],e)})();var w={n:1},M={f:1};x('grid-txn',a.transactions,[k('date','Date'),k('merchant','Merchant'),k('category','Category',M),k('account','Account',M),k('source','Source',M),k('amount','Amount',{n:1,s:1}),k('flags','Flags',M)]),x('grid-subs',a.subscriptions,[k('merchant','Merchant'),k('amount','Amount',w),k('cadence','Cadence',M),k('monthly','Per month',w),k('last','Last charge'),k('next','Next expected'),k('status','Status',M),k('source','Source',M)]),x('grid-bills',a.bills,[k('date','Due'),k('name','Bill'),k('amount','Amount',w),k('account','Account',M),k('status','Status',M),k('basis','Basis',M)]),x('grid-sa',a.set_asides,[k('name','Name'),k('amount','Amount',w),k('until','Until')]),x('grid-ul',a.unlinked_accounts,[k('label','Account'),k('last4','Last 4'),k('kind','Kind',M),k('seen','Seen in',M),k('last_seen','Last seen')])})();"""
NUM={'spend_by_category':('amount','prior'),'balance_series':('balance',),'monthly_spend':('amount',),'subscription_price_changes':('old','new'),'transactions':('amount',),'subscriptions':('amount','monthly'),'bills':('amount',),'set_asides':('amount',),'alerts':(),'data_gaps':(),'unlinked_accounts':()}
KN={'safe_to_spend':('value',),'cash_available':('value',),'spend':('this','prior','change_pct'),'income':('value',),'bills_due':('value',),'subscriptions_monthly':('value',),'cushion':('floor',)}
def W(v,p,b):
 if isinstance(v,dict):
  for k,x in v.items():W(x,f'{p}.{k}'if p else str(k),b)
 elif isinstance(v,list):
  for i,x in enumerate(v):W(x,f'{p}[{i}]',b)
 elif isinstance(v,(int,float))and not isinstance(v,bool)and not abs(v)<=1e15:b.append(f'{p}={v!r}')
def check(d):
 if not isinstance(d,dict):sys.exit('fix the run data: the top level must be a JSON object, not '+type(d).__name__)
 b=[];W(d,'',b);m=d.get('meta');k=d.get('kpis');r=[]
 if m is not None and not isinstance(m,dict):b.append('meta is not an object')
 elif m:b+=[f'meta.{n} is not an object'for n in('period','prior_period')if m.get(n)is not None and not isinstance(m[n],dict)]
 if k is not None and not isinstance(k,dict):b.append('kpis is not an object')
 elif k:r=[(f'kpis.{n}',k.get(n),f)for n,f in KN.items()]
 for n,f in NUM.items():
  v=d.get(n)
  if v is not None and not isinstance(v,list):b.append(n+' is not a list');continue
  r+=[(f'{n}[{i}]',x,f)for i,x in enumerate(v or[])]
 for p,x,f in r:
  if x is None or isinstance(x,str)and p[:1]in'ad':continue
  if not isinstance(x,dict):b.append(p+' is not an object');continue
  b+=[f'{p}.{z}={x[z]!r}'for z in f if x.get(z)is not None and M(x[z])is None]
 b=list(dict.fromkeys(b))
 if b:sys.exit('fix the run data (non-numeric, too large or wrong type): '+'; '.join(b[:12])+(f'; and {len(b)-12} more'if len(b)>12 else''))
def C(v):
 if isinstance(v,str):return B.sub('',v)
 if isinstance(v,list):return[C(x)for x in v]
 return{C(k):C(x)for k,x in v.items()}if isinstance(v,dict)else v
def P(d):
 d=C(d);m=d.get('meta')or{};c=m.get('currency');m['currency']=c if isinstance(c,str)and re.fullmatch('[A-Z]{3}',c)else'USD';d['meta']=m;k=d.get('kpis')or{}
 for r,f in[(k.get(n),f)for n,f in KN.items()]+[(x,f)for n,f in NUM.items()for x in d.get(n)or[]]:
  for z in f:
   if isinstance(r,dict)and isinstance(r.get(z),str):r[z]=float(r[z])
 return d
def S(i,t,b):return f'<section class=card aria-labelledby=h{i}><h2 id=h{i}>{t}</h2>{b}</section>'
def build(d):
 d=P(d);m=d['meta'];c=m['currency'];x=bool(m.get('example'))
 t=('EXAMPLE DATA — 'if x else'')+str(m.get('title')or'Money report')
 p=m.get('period')or{};q=m.get('prior_period')or{}
 r=E(p.get('from'))+' to '+E(p.get('to'))if p.get('from')else'period: no data'
 if q.get('from'):r+=' · compared with '+E(q.get('from'))+' to '+E(q.get('to'))
 s=m.get('sources')or[];s=', '.join(map(str,s if isinstance(s,list)else[s]))or'not stated'
 j=json.dumps(d,ensure_ascii=False,allow_nan=False).replace('<','\\u003c')
 v=lambda i,l='':f'<div id={i} data-label="{l}"></div>'
 n='<div class=ex role=note>EXAMPLE DATA — every number on this page is made up to test the layout. Not a real account.</div>'if x else''
 return f"""<!doctype html><html lang=en><head><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1">
<meta http-equiv=Content-Security-Policy content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; img-src data:">
<title>{E(t)}</title><style>{CSS}</style></head><body><main>{n}
<header><div><h1>{E(t)}</h1><div class=mu>{E(str(m.get('cadence')or'').capitalize())} report · {r}</div>
<div class=mu>Generated {E(m.get('generated_at')or'')} {E(m.get('timezone')or'')} · Sources: {E(s)}</div></div>
<div class=np><button class=btn id=theme-btn type=button>Dark theme</button> <button class=btn id=print-btn type=button>Print</button></div></header>
<section aria-label="Key figures"><div class=tiles>{TI(d,c)}</div></section>
<div class=g2>{S('a','Alerts',L(d.get('alerts'),'alerts'))}{S('g','Data gaps',L(d.get('data_gaps'),'gaps'))}</div>
<div class="g2 ch">{S('c','Spend by category',v('chart-cat'))}{S('b','Daily balance and forecast',v('chart-bal'))}{S('m','Monthly spend trend',v('chart-month'))}{S('p','Subscription price changes',v('chart-price'))}</div>
{S('t','Transactions',v('grid-txn','Transactions'))}{S('s','Subscriptions',v('grid-subs','Subscriptions'))}{S('l','Bills calendar',v('grid-bills','Bills'))}
<div class=g2>{S('x','Set-asides',v('grid-sa','Set-asides'))}{S('u','Unlinked accounts',v('grid-ul','Unlinked accounts'))}</div>
<footer>{'EXAMPLE DATA. 'if x else''}Read-only report built from the money monitor run data. Numbers come only from that run and empty sections say No data. Forecasts and averages are estimates. Not financial or tax advice.</footer>
</main><script type=application/json id=run-data>{j}</script><script>{JS}</script></body></html>"""
if __name__=='__main__':
 if len(sys.argv)<2:sys.exit('usage: build_report.py run.json [out.html]')
 s=Path(sys.argv[1]);o=Path(sys.argv[2])if len(sys.argv)>2 else s.with_suffix('.html')
 try:d=json.loads(s.read_text(encoding='utf-8'))
 except(OSError,ValueError,RecursionError)as e:sys.exit(f'cannot read run data {s}: {e}')
 try:check(d);h=build(d)
 except RecursionError:sys.exit('fix the run data: it is nested too deep')
 try:o.write_text(h,encoding='utf-8')
 except OSError as e:sys.exit(f'cannot write {o}: {e}')
 print(o)
```
