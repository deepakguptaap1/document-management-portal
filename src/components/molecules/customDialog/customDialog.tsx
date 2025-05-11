import React from "react";
import styles from "./customDialog.module.scss";
import CustomButton from "@/components/atom/customButton/cutomButton";
import { CustomDialogProps } from "@/interfaces/moelcules/molecules";

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  title,
  children,
  footerContent,
}) => {
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <header className={styles.header}>
          {title ? <h3>{title}</h3> : <h3></h3>}
          <CustomButton
            onClick={onClose}
            className={styles.closeIcon}
            variant="secondary"
          >
            ✖
          </CustomButton>
        </header>

        <main className={styles.content}>{children}</main>

        <footer
          className={
            footerContent
              ? styles.footerWithContent
              : styles.footerWithoutContent
          }
        >
          {footerContent ? footerContent : ""}
        </footer>
      </div>
    </div>
  );
};

export default CustomDialog;
