# 爆速スクープジェネレーター

## セットアップ手順

### GitHub Pagesでのデプロイ

1. **GitHub Secretsの設定**
   - リポジトリの Settings → Secrets and variables → Actions
   - 「New repository secret」をクリック
   - Name: `OPENROUTER_API_KEY`
   - Secret: あなたのOpenRouter APIキー

2. **GitHub Pagesの有効化**
   - リポジトリの Settings → Pages
   - Source: 「GitHub Actions」を選択

3. **デプロイ**
   - mainブランチにプッシュすると自動的にデプロイされます
   - Actions タブでデプロイの進行状況を確認できます

### ローカル開発

1. `config.js`ファイルを作成し、APIキーを設定
2. ローカルサーバーを起動してテスト