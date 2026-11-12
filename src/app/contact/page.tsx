import styles from "./Contact.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import OneColumn from "@/components/layout/OneColumn";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Form from "@/components/layout/Form";

import type { Metadata } from "next";
import { defaultOpenGraph, siteName } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "おい合わせ",
  description: "おい合わせページです。",
  openGraph: {
    ...defaultOpenGraph,
    title: `おい合わせ | ${siteName}`,
    url: "/contact/",
  },
};

export default function Contact() {
  const breadcrumbItems = [
    {
      href: "/",
      text: "ホーム",
    },
    {
      href: "/contact/",
      text: "お問い合わせ",
    },
  ];
  return (
    <>
      <PageFirstView
        subText="Contact"
        mainText="お問い合わせ"
        textAlign="isCenter"
      />

      <OneColumn isSlime={true}>
        <p className={styles.text}>
          サービスに関するご相談やお問い合わせは、必要事項を入力の上、お問い合わせください。
          <br />
          2～3営業日以内に、担当よりメールにて返信いたします。
        </p>
        <Form />
      </OneColumn>
      <Breadcrumb items={breadcrumbItems} />
    </>
  );
}
