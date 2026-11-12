import styles from "../../../../News.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import Breadcrumb from "@/components/layout/Breadcrumb";
import NewsCard from "@/components/ui/NewsCard";
import Link from "next/link";

import { stripHtmlTags } from "@/utils/string";

import { formatDate } from "@/utils/date";

import {
  getCategoryPosts,
  getCategoryFromId,
  getCategoryTotalPages,
} from "@/lib/wordpress";

import { FeaturedMedia, Term } from "@/types/wordpress";

import { notFound } from "next/navigation";


type NewsProps = {
  params: Promise<{ id: string; page: string }>;
};
import type { Metadata } from "next";
import { defaultOpenGraph, siteName } from "@/lib/metadata";

// APIで動的出力している動的ページのmeta設定
export async function generateMetadata({
  params,
}: NewsProps): Promise<Metadata> {
  const { id, page } = await params;
  const currentCategoryId = parseInt(id);
  const category = await getCategoryFromId(currentCategoryId);

  return {
    title: `「${category.name}」の記事`,
    description: `「${category.name}」記事一覧ページです。`,
    openGraph: {
      ...defaultOpenGraph,
      title: `「${category.name}」の記事 | ${siteName}`,
      url: `/news/category/${id}/page/${page}`,
    },
  };
}

export default async function News({ params }: NewsProps) {
  const { id, page } = await params;

  const currentCategoryId = parseInt(id);
  const currentPage = parseInt(page);

  const perPage = 9;

  const posts = await getCategoryPosts(currentCategoryId, perPage, currentPage);


  const category = await getCategoryFromId(currentCategoryId);

  const totalPages = await getCategoryTotalPages(currentCategoryId, perPage);


  if (posts.length === 0) {
    notFound();
  }

  const breadcrumbItems = [
    {
      href: "/",
      text: "ホーム",
    },
    {
      href: "/news/",
      text: "お知らせ",
    },
    {
      href: `/news/category/${id}`,
      text: category.name,
    },
  ];

  return (
    <>
      <PageFirstView subText="News" mainText="お知らせ" textAlign="isCenter" />

      <TwoColumn>
        <div className={styles.news}>
          <p className={styles.title}>{`「${category.name}」の記事`}</p>
          <div className={styles.cards}>
            {posts.map((post) => {
              const featuredMedia = (post?._embedded?.[
                "wp:featuredmedia"
              ]?.[0] ?? { source_url: "/thumbnail0.jpg" }) as FeaturedMedia;

              const categories = (post?._embedded?.["wp:term"]?.[0] ??
                []) as Term[];

              return (
                <div className={styles.card} key={post.id}>
                  <NewsCard
                    src={featuredMedia.source_url}
                    id={post.id}
                    title={post.title.rendered}
                    excerpt={stripHtmlTags(post.excerpt.rendered)}
                    date={formatDate(post.date)}
                    categories={categories.map((category) => {
                      return { id: category.id, name: category.name };
                    })}
                  />
                </div>
              );
            })}
            <div className={styles.pagination}>
              <div className={styles.numbers}>
                {[...Array(totalPages)].map((_, i) => {
                  const pageNumber = i + 1;
                  const href =
                    pageNumber === 1
                      ? `/news/category/${currentCategoryId}/`
                      : `/news/category/${currentCategoryId}/page/${pageNumber}/`;

                  return (
                    <Link
                      href={href}
                      className={`${styles.number} ${currentPage === pageNumber && styles.isCurrent}`}
                      key={pageNumber}
                    >
                      {pageNumber}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </TwoColumn>
      <Breadcrumb items={breadcrumbItems} />
    </>
  );
}
