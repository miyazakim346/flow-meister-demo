
import styles from "./post.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

import { stripHtmlTags } from "@/utils/string";

import { getPost } from "@/lib/wordpress";

import { FeaturedMedia, Term } from "@/types/wordpress";

import { formatDate } from "@/utils/date";

import { notFound } from "next/navigation";


type NewsProps = {
  params: Promise<{ id: string }>;
};

import type { Metadata } from "next";
import { defaultOpenGraph, siteName } from "@/lib/metadata";

// APIで動的出力している動的ページのmeta設定
export async function generateMetadata({
  params,
}: NewsProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(parseInt(id));

  const featuredMedia = (post?._embedded?.["wp:featuredmedia"]?.[0] ?? {
    source_url: "/thumbnail0.jpg",
  }) as FeaturedMedia;

  return {
    title: post.title.rendered,
    description: stripHtmlTags(post.excerpt.rendered),
    openGraph: {
      ...defaultOpenGraph,
      title: `${post.title.rendered} | ${siteName}`,
      url: `/news/${id}/`,
      type: "article",
      images: [
        {
          url: featuredMedia.source_url,
          width: 598,
          height: 399,
        },
      ],
    },
  };
}

export default async function News({ params }: NewsProps) {
  const { id } = await params;

  const post = await getPost(parseInt(id));

  if (!post) {
    notFound();
  }

  const featuredMedia = (post?._embedded?.["wp:featuredmedia"]?.[0] ?? {
    source_url: "/thumbnail0.jpg",
  }) as FeaturedMedia;

  const categories = (post?._embedded?.["wp:term"]?.[0] ?? []) as Term[];

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
      href: `/news/${id}`,
      text: post.title.rendered,
    },
  ];

  return (
    <>
      <PageFirstView subText="News" mainText="お知らせ" textAlign="isCenter" />

      <TwoColumn>
        <div className={styles.post}>
          <h2 className={styles.title}>{post.title.rendered}</h2>
          <div className={styles.meta}>
            <p className={styles.date}>{formatDate(post.date)}</p>
            <div className={styles.categories}>
              {categories.map((category) => {
                return (
                  <Link
                    className={styles.category}
                    href={`/news/category/${category.id}`}
                    key={category.id}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <Image
            className={styles.thumbnail}
            src={featuredMedia.source_url}
            alt=""
            width="700"
            height="377"
          />

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
          <div className={styles.pagination}>
            <div className={styles.list}>
              <Link href="/news/" className={styles.listButton}>
                記事一覧
              </Link>
            </div>
          </div>
        </div>
      </TwoColumn>
      <Breadcrumb items={breadcrumbItems} />
    </>
  );
}
