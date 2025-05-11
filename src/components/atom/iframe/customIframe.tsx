import React from "react";
import styles from "./customIframe.module.scss";
import clsx from "clsx";
import { CustomIframeProps } from "@/interfaces/atoms/atom";

const CustomIframe: React.FC<CustomIframeProps> = ({
  src,
  title,
  className,
  allowFullScreen = true,
}) => {
  return (
    <iframe
      src={src}
      title={title}
      className={clsx(styles.iframe, className)}
      allowFullScreen={allowFullScreen}
    />
  );
};

export default CustomIframe;
