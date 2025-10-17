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

### Formspree 設定（重要）
**Formspree のダッシュボードで以下を確認してください：**

1. **Project Settings > Restrict to Domain**
   - このサイトが公開されている全ドメインを登録する必要があります
   - 現在: `yuma2004.github.io` を登録してください
   - ローカル開発時: `localhost:3000` も追加すると便利です

2. **受信メールアドレス確認**
   - Dashboard から予約フォーム送信内容を確認できます
   - 必要に応じて転送先を設定してください

### CORS エラーが発生した場合
**症状：** Network タブで OPTIONS リクエストが失敗し、`Access-Control-Allow-Origin` ヘッダーがない

**原因：**
- Formspree 側で送信元ドメインが許可されていない
- または API エンドポイントの URL が二重になっている

**解決手順：**
1. DevTools > Network タブを開く
2. フォーム送信してエラーを確認
3. OPTIONS リクエストのレスポンスヘッダーを確認
4. Formspree ダッシュボード > Project Settings > Restrict to Domain に、現在のドメイン（例：`yuma2004.github.io`）を追加
5. フォーム送信を再試行

---

## 今後の改善
フェーズ別の詳細な改善内容と進捗は `PLAN.md` と `TODO.md` を参照してください。
