import styles from "./NewsSection.module.css";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import NewsCard from "@/components/ui/NewsCard";

import { stripHtmlTags } from "@/utils/string";

import { formatDate } from "@/utils/date";

import { getPosts } from "@/lib/wordpress";

import { FeaturedMedia, Term } from "@/types/wordpress";

export default async function NewsSection() {

  const posts = await getPosts(3);

  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <Heading subText="News" mainText="お知らせ" textAlign="isCenter" />
        {posts.length === 0 ? (
          <p className={styles.textNotFound}>記事が存在しません。</p>
        ) : (
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
          </div>
        )}

        <div className={styles.button}>
          <Button href="/news/" text="すべてのお知らせを見る" />
        </div>
      </div>
    </div>
  );
}
