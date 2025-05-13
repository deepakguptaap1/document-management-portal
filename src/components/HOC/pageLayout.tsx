import Footer from "../layOut/footer/footer";
import Header from "../layOut/header/header";
import styles from "./pageLayout.module.scss";
import Seo from "../molecules/seo/seo";
import { useAppContext } from "@/store/store";
import { useRouter } from "next/router";
import { getCurrentUser, removeCurrentUser } from "@/utils/helper";
import { useEffect } from "react";

const PageLayout: React.FC<{
  children: React.ReactNode;
  className: string;
}> = ({ children, className }) => {
  const router = useRouter();
  const { getStore, updateStore } = useAppContext();
  const { isAuthenticated, role, currentUser } = getStore();

  useEffect(() => {
    if (
      router.isReady &&
      !isAuthenticated &&
      router.pathname !== "/" &&
      router.pathname !== "/login" &&
      router.pathname !== "/register" &&
      router.pathname !== "/about" &&
      router.pathname !== "/privacy" &&
      router.pathname !== "/contact"
    ) {
      router.push("/login");
    } else if (
      router.isReady &&
      isAuthenticated &&
      (router.pathname === "/login" || router.pathname === "/register")
    ) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (!currentUser.id) {
      const currUser = getCurrentUser();
      if (currUser)
        updateStore({
          currentUser: currUser,
          isAuthenticated: true,
          role: currUser.role,
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const handleLogout = () => {
    updateStore({ isAuthenticated: false });
    removeCurrentUser();
    router.push("/login");
  };

  return (
    <>
      <Seo />
      <div className={` ${className} ${styles.wrapper} `}>
        <Header
          isAuthenticated={isAuthenticated}
          isAdmin={role === "Admin"}
          onLogout={handleLogout}
        />
        <div className={styles.mainSection}>{children}</div>
        <Footer />
      </div>
    </>
  );
};
export default PageLayout;
