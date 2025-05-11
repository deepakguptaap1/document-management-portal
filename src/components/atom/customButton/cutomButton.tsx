import React from "react";
import styles from "./customButton.module.scss";
import clsx from "clsx";
import { CustomButtonProps } from "@/interfaces/atoms/atom";

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = "",
  fullWidth = false,
  className,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        fullWidth && styles.fullWidth,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
