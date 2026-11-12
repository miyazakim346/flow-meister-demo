"use client";

import styles from "./CaseSection.module.css";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import CaseCard from "./CaseCard";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CaseSection() {
  const slides = [
    {
      src: "/case1.png",
      comment: "会議の頻度を半減しチームの一体感を高まりました",
      company: "株式会社サンプル商事",
    },
    {
      src: "/case2.png",
      comment: "プロジェクト進捗を見える化して納期遅れを防ぐ",
      company: "サンプル物流株式会社",
    },
    {
      src: "/case3.png",
      comment: "導入初月から業務効率を25％向上",
      company: "株式会社サンプル工業",
    },
    {
      src: "/case4.png",
      comment: "情報共有のスピードが3倍に",
      company: "サンプルデザイン株式会社",
    },
    {
      src: "/case5.png",
      comment: "会議時間を40％削減して業務効率が向上",
      company: "株式会社サンプル食品",
    },
    {
      src: "/case6.png",
      comment: "情報共有のスピードが3倍に",
      company: "サンプル建設株式会社",
    },
    {
      src: "/case7.png",
      comment: "タスクの抜け漏れをゼロにしてプロジェクト遅延を削減",
      company: "株式会社サンプル情報システム",
    },
    {
      src: "/case8.png",
      comment: "リモートワークでの情報共有がスムーズに",
      company: "サンプル教育株式会社",
    },
    {
      src: "/case9.png",
      comment: "タスク管理の手間を50％削減して生産性を向上",
      company: "株式会社サンプル不動産",
    },
    {
      src: "/case10.png",
      comment: "会議時間を42％削減して業務効率が向上",
      company: "サンプル医療株式会社",
    },
    {
      src: "/case11.png",
      comment: "情報共有のスピードが2倍に",
      company: "株式会社サンプル旅行",
    },
    {
      src: "/case12.png",
      comment: "タスク管理の手間を52％削減して生産性を向上",
      company: "サンプルフーズ株式会社",
    },
    {
      src: "/case13.png",
      comment: "導入初月から業務効率を27％向上",
      company: "株式会社サンプルエネルギー",
    },
  ];

  return (
    <div className={styles.case}>
      <div className={styles.container}>
        <Heading
          subText="Cases"
          mainText="100万社以上の導入実績"
          textAlign="isCenter"
        />
        <div className={styles.slider}>
          <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            // カードの間の余白
            spaceBetween={20}
            // spのカード枚数
            //見切れるwidthは小数点で挿入
            slidesPerView={1.5}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
            }}
            loop={true}

            breakpoints={{
              // 768px以上
              768: {
                slidesPerView: 3.5,
              },
              // 1240px以上
              1240: {
                slidesPerView: 5.5,
              },
            }}
          >
            {slides.map((slide) => {
              return (
                <SwiperSlide key={slide.src}>
                  <CaseCard
                    src={slide.src}
                    comment={slide.comment}
                    company={slide.company}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={styles.button}>
          <Button href="#" text="導入事例をすべて見る" />
        </div>
      </div>
    </div>
  );
}
