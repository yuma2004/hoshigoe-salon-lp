# Rêve beauty salon LP

大阪・南船場のメンズ専門サロン「Rêve beauty salon（レーヴ）」のランディングページです。無料カウンセリング予約フォームとサロンの魅力を分かりやすく伝えるコンテンツを React + TypeScript で実装しています。

## 主なコンテンツ
- ファーストビューから予約フォームへ誘導する CTA
- サロンの特徴 / 料金案内 / 実績（口コミ） / FAQ / ギャラリー
- Formspree を利用した無料カウンセリング予約フォーム
- 送信完了ページとハッシュベースの簡易ルーティング

## 技術スタック
- React 19 + TypeScript（Create React App ベース）
- CSS Modules によるセクション単位のスタイリング
- react-hook-form + zod によるフォームバリデーション
- Formspree API 連携
- GitHub Pages へのデプロイ（`gh-pages` パッケージ）

## セットアップ
```bash
npm install
```

## 開発
```bash
npm start
```
`http://localhost:3000` が自動で立ち上がります。ホットリロード対応済みです。

## Lint / テスト / ビルド
```bash
npm run lint   # ESLint（Phase 5 で導入済み）
npm test       # Jest + React Testing Library
npm run build  # 静的ファイルを build/ 配下に出力
```

## デプロイ
GitHub Pages を利用して公開しています。
```bash
npm run deploy
```
`npm run build` 実行後、`build/` ディレクトリの成果物を `gh-pages` ブランチへデプロイします。

## Formspree 連携
- フォーム ID: `xnngbzkp`
- 送信成功時にサンクスページへ遷移します（ルーターで制御）
- Formspree ダッシュボードの **Project Settings > Restrict to Domain** に `yuma2004.github.io` と `localhost:3000` を登録してください

### CORS エラーが発生した場合
1. DevTools > Network でフォーム送信リクエストを確認
2. OPTIONS リクエストの `Access-Control-Allow-Origin` をチェック
3. Formspree の許可ドメインに現在のドメインを追加
4. 送信を再試行

## ディレクトリ構成（抜粋）
```
├─ public/          静的アセットと HTML テンプレート
├─ src/
│  ├─ assets/       画像などのアセット
│  ├─ components/   セクション単位の React コンポーネント
│  ├─ hooks/        カスタムフック（スクロールアニメーション等）
│  ├─ router/       ハッシュベースの簡易ルーター
│  ├─ App.tsx       画面構成（Phase 2 でルーター化済み）
│  └─ index.tsx     エントリーポイント
├─ PLAN.md          長期的な改善計画
└─ TODO.md          実行タスク管理
```

## ライセンス
クライアント案件につきライセンスは未定義です。再利用時は担当者に確認してください。
