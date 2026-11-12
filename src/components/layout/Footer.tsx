import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.info}>
            <Link href="/" className={styles.logoLink}>
              <Image
                className={styles.logo}
                src="/logo.png"
                alt="Flow Meister"
                width={228}
                height={32}
              />
            </Link>
            <p className={styles.company}>株式会社Flow Meister</p>
            <p className={styles.address}>
              〒000-0000　東京都〇〇区〇〇1-1-1 〇〇ビル 3F
            </p>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.lists1}>
              <li className={styles.list}>
                <Link href="/" className={styles.link}>
                  ホーム
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/features" className={styles.link}>
                  特徴
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/services" className={styles.link}>
                  サービス
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/pricing" className={styles.link}>
                  価格
                </Link>
              </li>
            </ul>
            <ul className={styles.lists2}>
              <li className={styles.list}>
                <Link href="/company" className={styles.link}>
                  会社情報
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/news" className={styles.link}>
                  お知らせ
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/blog" className={styles.link}>
                  ブログ
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/faq" className={styles.link}>
                  よくある質問
                </Link>
              </li>
            </ul>
            <ul className={styles.lists3}>
              <li className={styles.list}>
                <Link href="/contact" className={styles.link}>
                  お問い合わせ
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/privacy" className={styles.link}>
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <p className={styles.copyright}>© Flow Meister Inc. All Rights Reserved.</p>
    </footer>
  );
}
