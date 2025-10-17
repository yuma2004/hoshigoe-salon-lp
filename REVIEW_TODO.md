# レビューTODO

## 進行中のレビュー作業
- [x] ドキュメント／設定ファイルの整合性確認 (`README.md`, `PLAN.md`, `TODO.md`, `package.json`, `tsconfig.json`, `.gitignore`)
- [x] ルーティングおよびカスタムフックの挙動確認 (`src/index.tsx`, `src/router/RouterProvider.tsx`, `src/hooks/useRevealOnScroll.ts`)
- [x] UI セクションと CTA の動作・アクセシビリティ点検 (`src/components` 配下)
- [x] 予約フォーム (`ReserveForm.tsx`) のバリデーション・送信処理・ナビゲーション確認
- [x] CSS Modules / グローバルスタイルの構成と副作用調査
- [x] テストコード（`src/App.test.tsx`, `src/components/__tests__`）のカバレッジ評価
- [x] デプロイ／外部サービス連携（Formspree・トラッキング）のリスク評価

## レビュー結果反映（後続タスク用）
- [ ] 高優先度の修正提案を個別Issue/TODOへ切り出し
- [ ] 追加で確認が必要な点を質問リスト化

## 改善アクション候補
- [x] 文字化けしている日本語コンテンツを UTF-8 で復元し、主要ファイルを再コミットする (`README.md`, `public/index.html`, `src/components/*`)
- [x] `build/` と `.next/` のコミット追跡を解除し、`.gitignore` を更新する
- [x] 予約フォームへのアンカーまたはルーティングを整備し、CTA の誘導を機能させる (`src/components/Reviews.tsx`)
- [ ] `acsKeep` スクリプトの必要性・運用ルールを整理し、必要なら同意取得後にロードする仕組みを追加する (`public/index.html`)
- [x] クイック日付ボタン押下でバリデーションを再実行するよう調整する (`src/components/ReserveForm.tsx`)
