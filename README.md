# Rêve beauty salon LP

大阪・南船場のメンズ専門サロン「Rêve beauty salon」のランディングページです。無料カウンセリング予約フォームとサロン紹介コンテンツを中心に構成されています。

## 主な機能
- トップセクションから予約フォームへの誘導CTA
- サロンの特徴／口コミ／FAQ／ギャラリーセクション
- Formspree を利用した無料カウンセリング予約フォーム
- GitHub Pages（`https://yuma2004.github.io/hoshigoe-salon-lp/`）への静的デプロイ

## 技術スタック
- React + TypeScript（Create React App ベース）
- CSS Modules によるセクション別スタイリング
- Formspree API を利用したフォーム送信
- GitHub Pages へのデプロイ（`gh-pages` パッケージ）

## セットアップ
```bash
npm install
```

## 開発
```bash
npm start
```
ブラウザで `http://localhost:3000` が自動的に開きます。ホットリロードが有効です。

## Lint / テスト / ビルド
```bash
npm run lint   # （今後 Phase 5 で導入予定）
npm test       # Jest + React Testing Library
npm run build  # 静的ファイルを build/ に出力
```

## デプロイ
GitHub Pages を利用して公開しています。

```bash
npm run deploy
```

上記コマンドは `npm run build` を実行した後、`build/` ディレクトリを `gh-pages` ブランチへデプロイします。

## ディレクトリ構成（抜粋）
```
├─ public/          静的アセットとHTMLテンプレート
├─ src/
│  ├─ assets/       画像などのアセット
│  ├─ components/   セクション単位のReactコンポーネント
│  ├─ App.tsx       画面構成（Phase 2 でルーター化予定）
│  └─ index.tsx     エントリーポイント
├─ PLAN.md          改善計画
└─ TODO.md          実装タスク管理
```

## フォーム連携について
- Formspree フォームID: `xnngbzkp`
- 送信成功時はサンクスページへ遷移する設計です（Phase 2/3 でルーター整備予定）。
- 送信内容は Formspree ダッシュボードで確認してください。

## 今後の改善
フェーズ別の詳細な改善内容と進捗は `PLAN.md` と `TODO.md` を参照してください。
