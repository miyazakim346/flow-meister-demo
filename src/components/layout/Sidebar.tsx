import styles from "./Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";

import { getTagPosts, getAllCategories } from "@/lib/wordpress";

import { stripHtmlTags } from "@/utils/string";

import { formatDate } from "@/utils/date";

import { FeaturedMedia } from "@/types/wordpress";

export default async function Sidebar() {
  const tagPosts = await getTagPosts(7, 5);
  const categories = await getAllCategories();

  return (
    <div className={styles.sidebar}>
      <div className={styles.widget}>
        <h2 className={styles.widgetTitle}>運営会社</h2>
        <div className={styles.profile}>
          <Image
            src="/profile.jpg"
            className={styles.profileImage}
            alt=""
            width="356"
            height="160"
          />
          <div className={styles.profileBody}>
            <p className={styles.profileName}>株式会社Flow Meister</p>
            <p className={styles.profileDescription}>
              進捗・タスク・情報共有をひとつにまとめる業務効率化ツール「Flow Meister」を提供しています。チーム全員の仕事の流れを整えます。
            </p>
          </div>
          <div className={styles.profileButton}>
            <Link href="/contact/" className={styles.button}>
              ご相談はこちら
              <svg
                className={styles.buttonIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <path
                  d="M17.6223 8.62216C18.1246 8.11993 18.1246 7.3043 17.6223 6.80207L11.1938 0.3735C10.6915 -0.128732 9.87589 -0.128732 9.37366 0.3735C8.87143 0.875732 8.87143 1.69136 9.37366 2.19359L13.6125 6.42841H1.28571C0.574554 6.42841 0 7.00296 0 7.71413C0 8.42529 0.574554 8.99984 1.28571 8.99984H13.6085L9.37768 13.2347C8.87545 13.7369 8.87545 14.5525 9.37768 15.0548C9.87991 15.557 10.6955 15.557 11.1978 15.0548L17.6263 8.62618L17.6223 8.62216Z"
                  fill="white"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>ピックアップ記事</h3>
        {tagPosts.length === 0 ? (
          <p className={styles.textNotFound}>記事が存在しません。</p>
        ) : (
          <div className={styles.cards}>
            {tagPosts.map((tagPost) => {
              const featuredMedia = (tagPost?._embedded?.[
                "wp:featuredmedia"
              ]?.[0] ?? { source_url: "/thumbnail0.jpg" }) as FeaturedMedia;

              return (
                <Link
                  href={`/news/${tagPost.id}/`}
                  className={styles.card}
                  key={tagPost.id}
                >
                  <Image
                    className={styles.cardImage}
                    src={featuredMedia.source_url}
                    alt=""
                    width="110"
                    height="96"
                  />
                  <div className={styles.cardBody}>
                    <time
                      className={styles.cardDate}
                      dateTime={formatDate(tagPost.date, "-")}
                    >
                      {formatDate(tagPost.date)}
                    </time>
                    <p className={styles.cardTitle}>{tagPost.title.rendered}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>メニュー</h3>
        <ul className={styles.lists}>
          {categories.map((category) => {
            return (
              <li className={styles.list} key={category.id}>
                <Link
                  className={styles.link}
                  href={`/news/category/${category.id}`}
                >
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
