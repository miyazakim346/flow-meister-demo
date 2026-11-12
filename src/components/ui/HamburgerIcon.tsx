"use client";

import styles from "./HamburgerIcon.module.css";

type ButtonOutlineProps = {
  isOpen: boolean;

  onClick: () => void;
};

export default function HamburgerIcon({
  isOpen = false,
  onClick,
}: ButtonOutlineProps) {
  return (
    <button
      className={`${styles.hamburger}  ${isOpen && styles.isOpen} `}
      type="button"
      aria-label="メニューを開閉"
      onClick={onClick}
    >
      <span className={styles.bar1}></span>
      <span className={styles.bar2}></span>
      <span className={styles.bar3}></span>
    </button>
  );
}
