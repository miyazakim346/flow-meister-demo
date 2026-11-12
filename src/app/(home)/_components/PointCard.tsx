import styles from "./PointCard.module.css";
import Image from "next/image";

type PointCardProps = {
  src: string;
  title: string;
  percent: string;
  description: string;
};

export default function PointCard({
  src,
  title,
  percent,
  description,
}: PointCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          className={styles.image}
          src={src}
          alt=""
          width="294"
          height="221"
        />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.result}>
        <span className={styles.number}>{percent}</span>
        <span className={styles.percentage}>%</span>
      </p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
