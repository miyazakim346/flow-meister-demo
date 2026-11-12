
import {
  WP_REST_API_Posts,
  WP_REST_API_Post,
  WP_REST_API_Categories,
  WP_REST_API_Category,
} from "wp-types";

// 投稿記事
const WORDPRESS_POST_URL = process.env.WORDPRESS_POST_URL;
// カテゴリー
const WORDPRESS_CATEGORIES_URL = process.env.WORDPRESS_CATEGORIES_URL;

// 各関数

// 記事一覧の取得（TOPページのnewsセクション・news/記事一覧ページ）

// 表示する記事の数と、ページ番号を渡すことで、現在のページの記事情報を取得

export async function getPosts(
  perPage: number,
  page: number = 1,
): Promise<WP_REST_API_Posts> {
  const response = await fetch(
    `${WORDPRESS_POST_URL}?_embed&per_page=${perPage}&page=${page}`,
  );

  if (response.status === 400 || response.status === 404) {
    return [];
  }

  const posts = await response.json();

  return posts;
}

// 投稿詳細ページの関数
// 現在の投稿詳細ページのIDを渡すことで、現在の記事情報を取得
export async function getPost(id: number): Promise<WP_REST_API_Post> {
  const response = await fetch(`${WORDPRESS_POST_URL}/${id}?_embed`, {
  });

  if (response.status === 400 || response.status === 404) {
    return null;
  }

  const post = await response.json();

  return post;
}

// サイドバーのコンテンツで使用：pickup記事（wordpressのタグと紐づけ）

// Wordpressのピックアップ（タグ）のIDと、表示する記事の数を渡すことで、pickup記事を取得

export async function getTagPosts(
  tagIds: number | number[],
  perPage: number,
): Promise<WP_REST_API_Posts> {
  const tagsString = Array.isArray(tagIds)
    ? tagIds.join(",")
    : tagIds.toString();

  const response = await fetch(
    `${WORDPRESS_POST_URL}?_embed&per_page=${perPage}&tags=${tagsString}`,
  );

  if (response.status === 400 || response.status === 404) {
    return [];
  }

  const posts = await response.json();

  return posts;
}

// サイドバーのコンテンツで使用：全てのカテゴリーのリンク
export async function getAllCategories(): Promise<WP_REST_API_Categories> {
  const categoryResponse = await fetch(WORDPRESS_CATEGORIES_URL);
  const categories = await categoryResponse.json();
  return categories;
}

// カテゴリーページの関数

// 現在のカテゴリーページの記事一覧を取得

export async function getCategoryPosts(
  categoryIds: number | number[],
  perPage: number,
  page: number = 1,
): Promise<WP_REST_API_Posts> {
  const categoryString = Array.isArray(categoryIds)
    ? categoryIds.join(",")
    : categoryIds.toString();

  const response = await fetch(
    `${WORDPRESS_POST_URL}?_embed&per_page=${perPage}&categories=${categoryString}&page=${page}`,
  );

  if (response.status === 400 || response.status === 404) {
    return [];
  }

  const posts = await response.json();

  return posts;
}


// 「${category.name}」の記事の分部を取得
export async function getCategoryFromId(
  id: number,
): Promise<WP_REST_API_Category> {
  const response = await fetch(`${WORDPRESS_CATEGORIES_URL}/${id}`);
  const category = await response.json();

  return category;
}

// ページネーションで使用：投稿のページの総数を取得する関数


export async function getTotalPages(perPage: number): Promise<number> {
  const response = await fetch(
    `${WORDPRESS_POST_URL}?_embed&per_page=${perPage}`,
  );

  const totalPages = parseInt(response.headers.get("X-WP-TotalPages")) || 0;

  return totalPages;
}

// カテゴリーページのページネーション：投稿のページの総数を取得する関数

export async function getCategoryTotalPages(
  categoryIds: number | number[],
  perPage: number,
): Promise<number> {
  const categoryString = Array.isArray(categoryIds)
    ? categoryIds.join(",")
    : categoryIds.toString();

  const response = await fetch(
    `${WORDPRESS_POST_URL}?_embed&per_page=${perPage}&categories=${categoryString}`,
  );
  const totalPages = parseInt(response.headers.get("X-WP-TotalPages")) || 0;

  return totalPages;
}
