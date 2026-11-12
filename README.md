# flow-meister-demo（Flow Meister サンプルサイト）

> ※ データと API キーは含まれていないため、コードのみの公開です。

法人向けのサービスサイトを想定した、Next.js と WordPress（ヘッドレス）によるホームページです（自主制作）。

デザインカンプをもとに、フロントエンドの実装（Next.js・TypeScript）と、WordPress の REST API との連携を担当しました。

## 使用技術

Next.js（App Router） / React / TypeScript / CSS Modules / Swiper / WordPress（REST API） / ESLint / Prettier

## 主な機能

- トップページ（ファーストビュー・ポイント・導入事例のスライダー・特徴・ストーリー・お知らせ）
- お知らせの一覧・詳細・カテゴリー別の一覧・ページ送り・ピックアップ（WordPress REST API から取得）
- お問い合わせフォームと完了ページ
- 404 ページ・エラーページ

## フォルダ構成

| フォルダ | 役割 |
| --- | --- |
| `src/app` | ページ・ルーティング |
| `src/components` | 画面の部品（`layout/` と `ui/`） |
| `src/lib` | WordPress REST API との通信・メタ情報 |
| `src/types` `src/utils` | 型・汎用関数 |

## 動かすには

このリポジトリは、制作の内容を見ていただくための公開用です。**お知らせの取得先の WordPress は非公開のため、そのままではお知らせの部分が動きません。**

```bash
cp .env.example .env   # 各値は含まれていません
npm install
npm run dev
```

必要な環境変数の名前は `.env.example` にあります。`WORDPRESS_POST_URL`・`WORDPRESS_CATEGORIES_URL` に WordPress REST API の URL を入れると、お知らせが表示されます。
