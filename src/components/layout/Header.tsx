"use client";

import styles from "./Header.module.css";
import HamburgerIcon from "@/components/ui/HamburgerIcon";
import Link from "next/link";

import { useState } from "react";

import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={`${styles.header} ${isOpen && styles.isOpen}`}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="Flow Meister"
            width={228}
            height={32}
          />
        </Link>

        <div className={styles.content}>
          <nav className={styles.nav}>
            <ul className={styles.lists}>
              <li className={styles.list}>
                <Link href="/" className={styles.link}>
                  ホーム
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/news/" className={styles.link}>
                  お知らせ
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/service/" className={styles.link}>
                  サービス
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.info}>
            <div className={styles.tel}>
              <p className={styles.number}>TEL: 050-0000-0000</p>
              <p className={styles.hours}>営業時間: 9:00〜18:00</p>
            </div>
            <Link href="/contact/" className={styles.button}>
              お問い合わせ
            </Link>
          </div>

          <div className={styles.hamburger}>
            <HamburgerIcon isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
