import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3 className={styles.logo}>DocPortal</h3>
          <p className={styles.description}>
            Securely manage and retrieve your important documents with ease.
          </p>
        </div>

        <div className={styles.right}>
          <nav className={styles.nav}>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} DocPortal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
