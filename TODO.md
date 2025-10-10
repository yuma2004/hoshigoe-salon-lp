# TODO

## Phase 1: 基盤整備
- [x] `public/index.html` にブランド用タイトル・メタ・OGPを追加
- [x] `README.md` をLP運用ドキュメントへ書き換え
- [x] `tsconfig.json` のターゲット/ライブラリ設定を最新化
- [x] Stagewise Toolbar を開発専用ロードへ制限または除去
- [x] 依存バージョン整合を確認し、必要に応じて更新（React 19 と CRA5 の相性課題を確認。Phase 2 完了後に移行方針を再検討）

## Phase 2: ルーティング整理
- [x] 依存追加なしの軽量ルーターを実装
- [x] `App.tsx` をルートベースに再構築（ハッシュ遷移廃止）
- [x] スクロール復帰・reveal処理をカスタムフックで共通化

## Phase 3: コンポーネントとフォーム改善
- [x] CTAコンポーネントと定数定義の追加
- [x] IntersectionObserver ロジックを `useRevealOnScroll` へ移行
- [x] `ReserveForm` を `react-hook-form` + `zod` で再実装
- [x] Formspree送信処理とサンクスページ遷移を安定化

## Phase 4: アクセシビリティと計測
- [x] 見出し階層・aria属性を監査して修正
- [x] 画像の `loading="lazy"` と `sizes` を最適化
- [x] `reportWebVitals` で計測・ログ出力を実装

## Phase 5: テスト・仕上げ
- [x] フォーム・ルート・CTAのRTLテストを追加
- [x] LintスクリプトとCI前提の設定を更新
- [x] README/TODO/PLANの最終反映とビルド確認
