import styles from "./CaseCard.module.css";
import Image from "next/image";

type CaseCardProps = {
  src: string;
  comment: string;
  company: string;
};

export default function CaseCard({ src, comment, company }: CaseCardProps) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={src}
        alt=""
        width="248"
        height="140"
      />
      <div className={styles.body}>
        <p className={styles.comment}>{comment}</p>
        <p className={styles.company}>{company}</p>
      </div>
    </div>
  );
}
