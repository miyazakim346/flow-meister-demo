import styles from "./OneColumn.module.css";
import clsx from "clsx";

type OneColumnProps = {
  isSlime?: boolean;
  children: React.ReactNode;
};

export default function OneColumn({
  children,
  isSlime = false,
}: OneColumnProps) {
  return (
    <div className={styles.oneColumn}>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={clsx(styles.content, isSlime && styles.isSlime)}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
