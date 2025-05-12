import Footer from "../layOut/footer/footer";
import Header from "../layOut/header/header";
import styles from "./pageLayout.module.scss";
import Seo from "../molecules/seo/seo";
import { useAppContext } from "@/store/store";
import { useRouter } from "next/router";

const PageLayout: React.FC<{
  children: React.ReactNode;
  className: string;
}> = ({ children, className }) => {
  const router = useRouter();
  const { getStore, updateStore } = useAppContext();
  const { isAuthenticated, role } = getStore();
  const handleLogout = () => {
    updateStore({ isAuthenticated: false });
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
