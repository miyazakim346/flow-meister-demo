import styles from "./FirstView.module.css";
import Button from "@/components/ui/Button";

export default function FirstView() {
  return (
    <div className={styles.fv}>
      <div className={styles.content}>
        <p className={styles.catch}>
          タスク管理が変わる
          <br />
          チームの働き方が変わる
        </p>
        <p className={styles.description}>
          直感的な操作性とリアルタイム共有で、業務効率を最大化。
          <br />
          情報の断絶をなくし、チーム全員が同じゴールを目指せます。
        </p>
        <div className={styles.button}>
          <Button href="/contact/" text="お問い合わせ" />
        </div>
      </div>
    </div>
  );
}
