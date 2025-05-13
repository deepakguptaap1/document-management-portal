import React, { useState } from "react";
import styles from "./header.module.scss";
import clsx from "clsx";
import { HeaderProps } from "@/interfaces/layout/layout";
import CustomButton from "@/components/atom/customButton/cutomButton";
import ClickAwayListener from "@/components/molecules/clickAwayListener/clickAwayListener";
import CustomLink from "@/components/atom/link/customLink";

const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  isAdmin,
  onLogout,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLogOut = () => {
    onLogout();
    setIsMenuOpen(false);
  };

  const handleCloseMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <CustomLink
            href="/"
            text={"DocPortal"}
            className={styles.headerLogo}
          />
        </div>
        <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
          <CustomButton
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            ☰
          </CustomButton>
          <nav
            className={clsx(styles.nav, {
              [styles.open]: isMenuOpen,
            })}
          >
            <CustomLink
              href="/"
              className={styles.link}
              text="Home"
              onClick={handleCloseMenu}
            />
            {!isAuthenticated ? (
              <>
                <CustomLink
                  href="/register"
                  className={styles.link}
                  onClick={handleCloseMenu}
                  text={"Sign Up"}
                />
                <CustomLink
                  href="/login"
                  className={styles.link}
                  onClick={handleCloseMenu}
                  text={"Login"}
                />
              </>
            ) : (
              <>
                {isAdmin && (
                  <CustomLink
                    href="/user"
                    className={styles.link}
                    onClick={handleCloseMenu}
                    text={"User Management"}
                  />
                )}
                <CustomLink
                  href="/documents"
                  className={styles.link}
                  onClick={handleCloseMenu}
                  text={"Documents"}
                />
                <CustomLink
                  href="/ingestion"
                  className={styles.link}
                  onClick={handleCloseMenu}
                  text="Ingestion"
                />
                <CustomLink
                  href="/qa"
                  className={styles.link}
                  onClick={handleCloseMenu}
                  text="Q&A"
                />
                <CustomButton
                  className={clsx(styles.link, styles.logout)}
                  onClick={handleLogOut}
                >
                  Logout
                </CustomButton>
              </>
            )}
          </nav>
        </ClickAwayListener>
      </div>
    </header>
  );
};

export default Header;
