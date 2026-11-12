import styles from "./StorySection.module.css";
import Image from "next/image";
import Heading from "@/components/ui/Heading";

export default function StorySection() {
  return (
    <div className={styles.story}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Heading
            subText="Story"
            mainText="生産性を最大化したい"
            textAlign="isLeft"
          />
          <p className={styles.text}>
            私たちは、「ツールを使いこなすために時間を費やすのではなく、業務の生産性を最大化してほしい」と考えています。Flow
            Meisterは、必要な機能を必要なだけ、シンプルに提供することで、操作に迷わず本来の業務に集中できる環境を実現しました。また、SlackやGoogle
            Workspaceなどの主要ツールとシームレスに連携することで、情報共有のスピードを加速。リモートワークでもチーム全員が同じ情報をリアルタイムで共有でき、一体感のあるチームワークを築けます。
          </p>
        </div>
        <div className={styles.imageArea}>
          <Image
            className={styles.image}
            src="/story.png"
            alt=""
            width="1024"
            height="576"
          />
          <div className={styles.box}>
            <Image
              className={styles.logo}
              src="/logo.png"
              alt="Flow Meister"
              width="143"
              height="20"
            />
            <p className={styles.name}>創業者 田中一郎</p>
          </div>
        </div>
      </div>
    </div>
  );
}
