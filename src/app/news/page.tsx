
import styles from "./News.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import Breadcrumb from "@/components/layout/Breadcrumb";
import NewsCard from "@/components/ui/NewsCard";
import Link from "next/link";

import { stripHtmlTags } from "@/utils/string";

import { formatDate } from "@/utils/date";

import { getPosts, getTotalPages } from "@/lib/wordpress";

import { FeaturedMedia, Term } from "@/types/wordpress";

import type { Metadata } from "next";
import { defaultOpenGraph, siteName } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "お知らせ一覧ページです。",
  openGraph: {
    ...defaultOpenGraph,
    title: `お知らせ | ${siteName}`,
    url: "/news/",
  },
};

export default async function News() {
  const perPage = 9;

  const posts = await getPosts(perPage);

  const currentPage = 1;

  const totalPages = await getTotalPages(perPage);

  const breadcrumbItems = [
    {
      href: "/",
      text: "ホーム",
    },
    {
      href: "/news/",
      text: "お知らせ",
    },
  ];

  return (
    <>
      <PageFirstView subText="News" mainText="お知らせ" textAlign="isCenter" />

      <TwoColumn>
        <div className={styles.news}>
          <p className={styles.title}>すべての記事</p>
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
                    pageNumber === 1 ? "/news/" : `/news/page/${pageNumber}/`;

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
