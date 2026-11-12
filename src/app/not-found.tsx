import styles from "./NotFound.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import OneColumn from "@/components/layout/OneColumn";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Image from "next/image";
import ButtonOutline from "@/components/ui/ButtonOutline";

import type { Metadata } from "next";
import { defaultOpenGraph, siteName } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "404",
  description: "ページが存在しません",
  openGraph: {
    ...defaultOpenGraph,
    title: `404 | ${siteName}`,
    url: "/404/",
  },
};

export default function NotFound() {
  const breadcrumbItems = [
    {
      href: "/",
      text: "ホーム",
    },
    {
      href: "/404/",
      text: "404",
    },
  ];
  return (
    <>
      <PageFirstView subText="Not Found" mainText="404" textAlign="isCenter" />

      <OneColumn>
        <div className={styles.thanks}>
          <p className={styles.lead}>Not Found</p>
          <p className={styles.text}>
            申し訳ございませんが、ページが存在しません。
          </p>
          <Image
            src="/thanks.png"
            alt="Thank you!"
            width="320"
            height="160"
            loading="lazy"
            decoding="async"
            className={styles.image}
          />
          <div className={styles.button}>
            <ButtonOutline href="/" text="ホームへ戻る" />
          </div>
        </div>
      </OneColumn>
      <Breadcrumb items={breadcrumbItems} />
    </>
  );
}
