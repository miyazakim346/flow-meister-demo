import styles from "./FeatureCard.module.css";
import Image from "next/image";
import clsx from "clsx";

type FeatureCardProps = {
  point: string;
  heading: string;
  text: string;
  src: string;
  isReverse: boolean;
};

export default function FeatureCard({
  point,
  heading,
  text,
  src,
  isReverse = false,
}: FeatureCardProps) {
  return (
    <div className={clsx(styles.card, isReverse && styles.isReverse)}>
      <div className={styles.box}>
        <p className={styles.point}>{point}</p>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.imageBox}>
        <Image
          className={styles.image}
          src={src}
          alt=""
          width={456}
          height={304}
        />
      </div>
    </div>
  );
}
