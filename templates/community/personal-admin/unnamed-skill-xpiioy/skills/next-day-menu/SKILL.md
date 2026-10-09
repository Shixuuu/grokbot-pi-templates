---
name: next-day-menu
description: "ユーザーが今日食べたものの写真（1枚でも複数枚でも）や説明を送ってきたときに使う。1日分の栄養の目安をまとめ、次の日の朝ごはん・ランチ・夜ごはんに合うX上のレシピポストを1食1件ずつ、スクショ付きで提案する。"
---

# 次の日の献立：今日の食事写真から明日の朝・昼・夜のレシピポストを提案する

ユーザーが今日食べたものの写真（1〜3枚、またはそれ以上）や説明を送ってきたら、次の流れで返答する。返答はユーザーの言語で、あたたかく読みやすく。

## 1. 写真をまとめて受け取る
- 写真は複数枚が続けて届くことがある。同じターンに届いた写真はすべて「今日の食事」としてまとめて扱う。
- どの写真が朝・昼・夜かは、ユーザーの説明、写真の内容、送られた時刻から自然に判断する。分からなければ無理に分けず「今日の食事」としてまとめてよい。
- 1枚だけでも、その1食をもとに明日の3食を提案してよい（写っていない食事は分からないので、分かる範囲で判断したと一言添える）。

## 2. 今日の食事と栄養を推定する
- 写真ごとに、写っている料理と具材を見えたとおりに短く書く。自信がないものは「〜のように見えます」と添える。地域の料理（例: きしめん、ほうとう）は似た料理と取り違えないよう注意する。
- 1日分をまとめて、カロリーの合計の目安（幅をもたせる。例: 1,600〜1,900kcal）、たんぱく質のおおよその量、塩分の目安（汁物はつゆを全部飲んだ場合）、野菜の量、炭水化物・脂質の多い少ないをひとことずつ。
- 数値は写真からの推定なので「目安」であることを必ず一言添える。

## 3. 明日の方向性を決める
- 今日足りなかったもの（野菜、たんぱく質、食物繊維、魚など）と多かったもの（塩分、脂質、糖質など）から、明日の方向性を1〜2文で示す。
- ユーザーがメモリーに残しているアレルギー、苦手な食材、目標（減量、筋トレ、減塩など）、紹介件数の好みがあれば、それを優先する。
- 朝・昼・夜で、主な食材や調理法がかぶらないようにする（例: 3食とも卵、にしない）。朝は手軽なもの、昼は1皿で完結しやすいもの、夜は主菜と野菜がとれるもの、が目安。

## 4. X上のレシピポストを朝・昼・夜それぞれ探す
- Xコネクターの投稿検索（search_posts_all）を、朝・昼・夜で別々に使う。ユーザーの言語で、食事名と補いたい栄養・食材を組み合わせたクエリを作る。
  - 例（朝）: `(朝ごはん OR 朝食) レシピ (野菜 OR たんぱく質 OR 減塩) lang:ja -is:retweet -is:reply has:media`
  - 例（昼）: `(ランチ OR 昼ごはん) レシピ (野菜たっぷり OR 食物繊維) lang:ja -is:retweet -is:reply has:media`
  - 例（夜）: `(夜ごはん OR 夕食 OR 晩ご飯) レシピ (魚 OR 鮭 OR 鯖) 野菜 lang:ja -is:retweet -is:reply has:media`
  - sort_order は relevancy、max_results は20程度。post.fields に public_metrics,created_at,author_id、expansions に author_id、user.fields に username,name を指定すると投稿者名が取れる。
- 検索が「429 Too Many Requests」で失敗したら、少し待ってから同じ検索をやり直す。
- 各食事につき、実際にレシピや具体的な作り方・献立が書かれていて、補いたいポイントに合うポストを**1件だけ**選ぶ（合計3件）。広告色の強いもの、関係の薄いもの、健康上の根拠が怪しい主張をしているものは避ける。いいねやブックマークが多いものは優先してよいが、小さなアカウントの良いポストも積極的に紹介する。できれば3件とも違う投稿者にする。
- 合うものが見つからなければ、クエリを少し変えて1〜2回だけ検索し直す。それでもなければ、その食事は正直に「見つからなかった」と伝え、簡単なメニューの考え方だけ伝える。
- ポストの内容や数値を作り話で補わない。紹介するのは実際に検索で見つかったポストだけ。

## 5. 選んだ3件のスクショを撮る
- ユーザーが見た目をイメージしやすいよう、各ポストのスクショ画像を作って返答に貼る。X公式の埋め込み表示（ログイン不要）をヘッドレスChromeで撮影する。
- スクリプトは `/home/box/tools/x-post-shot/shot` を使う。使い方は `shot <ポストURL> <出力.png>`（1件2〜3秒）。出力先は必ず絶対パスで指定する（例: `/workspace/shots/breakfast.png`）。3件を並行して撮ってよい。
- スクリプトがなければ、最初に一度だけ次の手順で用意する（Chromeは `/usr/bin/google-chrome` にある前提。なければ `CHROME_PATH` で指定するか、Chromeを入れる。日本語が文字化けする場合は `fonts-noto-cjk` と `fonts-noto-color-emoji` を入れる）。
  1. `mkdir -p /home/box/tools/x-post-shot && cd /home/box/tools/x-post-shot && npm init -y && npm install puppeteer-core`
  2. `shot` に `#!/usr/bin/env bash` と `exec node "$(dirname "$(readlink -f "$0")")/shot.js" "$@"` の2行を書き、`chmod +x shot`。
  3. `shot.js` に次を書く。
```js
const puppeteer = require('puppeteer-core');
(async () => {
  const [src, out] = process.argv.slice(2);
  const id = (String(src).match(/(\d{10,})/) || [])[1];
  if (!id || !out) { console.error('usage: shot <post_url> <out.png>'); process.exit(2); }
  const b = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'], env: { ...process.env, TZ: process.env.SHOT_TZ || 'Asia/Tokyo' } });
  try {
    const p = await b.newPage();
    await p.setViewport({ width: 550, height: 1400, deviceScaleFactor: 1 });
    await p.goto(`https://platform.twitter.com/embed/Tweet.html?id=${id}&lang=ja&dnt=true`, { waitUntil: 'networkidle2', timeout: 30000 });
    await p.waitForSelector('article', { timeout: 20000 });
    await p.evaluate(async () => { await Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; setTimeout(r, 8000); }))); });
    const el = await p.evaluateHandle(() => { const a = document.querySelector('article'); let e = a; while (e.parentElement && e.parentElement !== document.body && e.parentElement.getBoundingClientRect().height - a.getBoundingClientRect().height < 150) e = e.parentElement; return e; });
    await el.screenshot({ path: out });
    console.log(out);
  } catch (e) { console.error('failed:', e.message); process.exitCode = 1; } finally { await b.close(); }
})();
```
- `SHOT_TZ` はユーザーのタイムゾーンに合わせる（例: `Asia/Tokyo`）。
- 撮った画像は一度自分で開いて、真っ白や読めない状態でないか確認してから貼る。撮影に失敗したポストは、URLだけで紹介する（スクショのために別のポストに差し替えない）。

## 6. 返答の形
1. 今日の食事のまとめ：何を食べたかと、1日分のカロリー・栄養の目安（2〜3文）
2. 明日の方向性（1文）
3. 🌅 朝ごはん、🍛 ランチ、🌙 夜ごはん の順に、それぞれ「料理名（投稿者名さん）」、なぜおすすめか1〜2文、ポストのURL。今日の食事を踏まえた小さなコツ（例: 塩分が多かった日は味噌を控えめに）があれば添える。
4. 最後に「数値は写真からの推定なので目安です」と一言。
- 3件のスクショは、朝・昼・夜の順でこの返答メッセージに画像として一緒に添付する（別メッセージに分けない）。

## 注意
- 医療的な診断や治療のアドバイスはしない。持病や妊娠中など特別な事情がある場合は、医師や管理栄養士への相談をすすめる。
- ユーザーを責める言い方はしない。「明日でちょっと整えよう」という前向きな言い方にする。
- ユーザーが気に入ったポストの投稿者に、いいねやリプライで感想を伝えることをときどき軽くすすめてよい（ただしBotが勝手に投稿・いいね・リプライはしない）。
