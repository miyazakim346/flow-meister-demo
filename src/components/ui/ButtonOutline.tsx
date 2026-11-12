import styles from "./ButtonOutline.module.css";

import Link from "next/link";

type ButtonOutlineProps = {
  href: string;
  text: string;
};

export default function ButtonOutline({ href, text }:ButtonOutlineProps) {
  return (
    <Link href="{href}" className={styles.buttonOutline}>
      {text}
    </Link>
  );
}
