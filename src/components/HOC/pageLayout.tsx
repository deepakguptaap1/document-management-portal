import Footer from "../layOut/footer/footer";
import Header from "../layOut/header/header";
import styles from "./pageLayout.module.scss";
import Seo from "../molecules/seo/seo";

const PageLayout: React.FC<{
  children: React.ReactNode;
  className: string;
}> = ({ children, className }) => {
  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <>
      <Seo />
      <div className={` ${className} ${styles.wrapper} `}>
        <Header
          isAuthenticated={true}
          isAdmin={false}
          onLogout={handleLogout}
        />
        <div className={styles.mainSection}>{children}</div>
        <Footer />
      </div>
    </>
  );
};
export default PageLayout;
