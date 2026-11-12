import styles from "./NewsCard.module.css";
import Image from "next/image";
import Link from "next/link";

type NewsCardProp = {
  src: string;
  id: number;
  title: string;
  excerpt: string;
  date: string;
  categories: {
    id: number;
    name: string;
  }[];
};

export default function NewsCard({
  src,
  id,
  title,
  excerpt,
  date,
  categories,
}: NewsCardProp) {
  return (
    <div className={styles.card}>
      <Link href={`/news/${id}/`} className={styles.image}>
        <Image
          className={styles.thumbnail}
          src={src}
          alt=""
          width="1024"
          height="576"
        />
      </Link>
      <div className={styles.body}>
        <Link href={`/news/${id}/`} className={styles.title}>
          {title}
        </Link>
        <p className={styles.excerpt}>{excerpt}</p>
        <p className={styles.date}>{date}</p>
        <div className={styles.categories}>
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                className={styles.category}
                href={`/news/category/${category.id}/`}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
