import styles from "./FeatureSection.module.css";
import Heading from "@/components/ui/Heading";
import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
  const cards = [
    {
      point: "01.Easy",
      heading: "直感的な操作性で導入直後から使いこなせる",
      text: "Flow Meisterは、業界トップクラスの直感的なUIを採用しており、複雑な操作を一切必要としません。ITリテラシーに関係なく、チーム全員が導入直後からスムーズに利用を開始できます。学習コストを最小限に抑え、生産性の向上をすぐに実感できる点が選ばれる理由の一つです",
      src: "/feature1.jpg",
    },
    {
      point: "01.Easy",
      heading: "直感的な操作性で導入直後から使いこなせる",
      text: "Flow Meisterは、業界トップクラスの直感的なUIを採用しており、複雑な操作を一切必要としません。ITリテラシーに関係なく、チーム全員が導入直後からスムーズに利用を開始できます。学習コストを最小限に抑え、生産性の向上をすぐに実感できる点が選ばれる理由の一つです",
      src: "/feature2.jpg",
      isReverse: true,
    },
    {
      point: "01.Easy",
      heading: "直感的な操作性で導入直後から使いこなせる",
      text: "Flow Meisterは、業界トップクラスの直感的なUIを採用しており、複雑な操作を一切必要としません。ITリテラシーに関係なく、チーム全員が導入直後からスムーズに利用を開始できます。学習コストを最小限に抑え、生産性の向上をすぐに実感できる点が選ばれる理由の一つです",
      src: "/feature3.jpg",
    },
  ];

  return (
    <div className={styles.feature}>
      <div className={styles.container}>
        <Heading subText="Feature" mainText="3つの特徴" textAlign="isCenter" />
        <div className={styles.cards}>
          {cards.map((card) => {
            return (
              <div className={styles.card} key={card.src}>
                <FeatureCard
                  point={card.point}
                  heading={card.heading}
                  text={card.text}
                  src={card.src}
                  isReverse={card.isReverse}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
