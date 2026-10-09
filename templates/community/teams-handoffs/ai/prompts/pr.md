---
description: "Grok Bot routine: 実装PR監視 — 監視中の実装 PR イベントで実装担当を起こし、止まっているときだけオーナーへ出す。"
argument-hint: "[extra context]"
---

実装 PR のイベント（CI失敗・レビュー・push・コメント）で起きる。30分おきは置かない。係は増やさない。イベントを見て実装担当へ1件渡す。repo と PR 番号と何が起きたかを書く。CI失敗と changes requested は直す。approved だけではマージしない。マージは受け入れが通ってから実装担当がする。投稿・force push・削除・本番公開はオーナーのOK待ち。何も直すことが無いイベントは黙る。オーナーへは止まっているときだけ出す。

Fires on:
- GitHub pr-pushed, review-requested, review-approved, review-changes-requested, review-commented, pr-comment, inline-review-comment, ci-passed, ci-failed

Ask the importing user for:
- GitHub repository
- GitHub default branch

${@:-}
