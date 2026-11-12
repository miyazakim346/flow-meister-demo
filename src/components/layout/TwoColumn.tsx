import styles from "./TwoColumn.module.css";
import Sidebar from "@/components/layout/Sidebar";

type TwoColumnProps = {
  children: React.ReactNode;
};

export default function TwoColumn({ children }: TwoColumnProps) {
  return (
    <div className={styles.twoColumn}>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>
        <aside className={styles.aside}>
          <div className={styles.widgets}>
            <Sidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}
