import styles from "./CtaSection.module.css";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import ButtonOutline from "@/components/ui/ButtonOutline";

export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.content}>
        <Heading
          subText="Contact"
          mainText="お問い合わせ・ご相談"
          textAlign="isCenter"
        />
        <p className={styles.description}>
          サービスに関することならお気軽にご相談ください。
          <br />
          無料相談はオンラインでも対面でも承っております。
        </p>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <Button href="/contact/" text="お問い合わせする" />
          </div>
          <div className={styles.button}>
            <ButtonOutline href="tel:050-0000-0000" text="TEL: 050-0000-0000" />
          </div>
        </div>
      </div>
    </section>
  );
}
