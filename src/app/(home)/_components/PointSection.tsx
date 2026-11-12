import styles from "./PointSection.module.css";
import PointCard from "./PointCard";

export default function PointSection() {
  return (
    <div className={styles.point}>
      <div className={styles.container}>
        <p className={styles.lead}>
          タスク管理を<span className="em">直感的</span>で
          <br className="spOnly" />
          <span className="em">シンプル</span>にすることで、
          <br />
          <span className="em">生産性の向上</span>や
          <br className="spOnly" />
          <span className="em">情報共有の円滑化</span>を実現します
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <PointCard
              src="/point1.png"
              title="会議時間の削減"
              percent="30"
              description="リアルタイムでタスクの進捗を共有できるため、会議での進捗確認が不要になります。これにより、会議時間を最大30％削減し、本来の業務に集中できます。"
            />
          </div>
          <div className={styles.card}>
            <PointCard
              src="/point2.png"
              title="情報共有のスピードUP"
              percent="200"
              description="SlackやGoogle Workspaceとシームレスに連携することで、情報の確認・共有がスムーズになり、情報共有のスピードが従来の2倍に向上します。"
            />
          </div>
          <div className={styles.card}>
            <PointCard
              src="/point3.png"
              title="タスクの抜け漏れ"
              percent="30"
              description="リマインダー機能とガントチャートによって、タスクの進捗を可視化できます。抜け漏れをゼロにして、チーム全体でスムーズなプロジェクト管理が可能です。"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
