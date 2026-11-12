import styles from "./Breadcrumb.module.css";
import Link from "next/link";

type BreadcrumbProps = {
  items: {
    href: string;
    text: string;
  }[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.container}>
        <ul className={styles.lists}>
          {items.map((item) => {
            return (
              <li className={styles.list} key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
