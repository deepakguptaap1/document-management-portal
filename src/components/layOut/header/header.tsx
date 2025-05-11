import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import clsx from "clsx";
import { HeaderProps } from "@/interfaces/layout/layout";

const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  isAdmin,
  onLogout,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">DocPortal</Link>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        <nav
          className={clsx(styles.nav, {
            [styles.open]: isMenuOpen,
          })}
        >
          {!isAuthenticated ? (
            <>
              <Link href="/register" className={styles.link}>
                Sign Up
              </Link>
              <Link href="/login" className={styles.link}>
                Login
              </Link>
            </>
          ) : (
            <>
              <Link href="/documents" className={styles.link}>
                Documents
              </Link>
              <Link href="/ingestion" className={styles.link}>
                Ingestion
              </Link>
              <Link href="/qa" className={styles.link}>
                Q&A
              </Link>
              {isAdmin && (
                <Link href="/admin/users" className={styles.link}>
                  User Management
                </Link>
              )}
              <button
                className={clsx(styles.link, styles.logout)}
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
