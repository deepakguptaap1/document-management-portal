import Image from "next/image";
import React from "react";
import styles from "./customImage.module.scss";
import clsx from "clsx";
import { CustomImageProps } from "@/interfaces/atoms/atom";

const CustomImage: React.FC<CustomImageProps> = ({
  className,
  rounded = false,
  shadow = false,
  border = false,
  alt = "image",
  src = "",
  width = 100,
  height = 100,
}) => {
  const combinedClassName = clsx(
    className,
    rounded && styles.rounded,
    shadow && styles.shadow,
    border && styles.border
  );

  return (
    <Image
      className={combinedClassName}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default CustomImage;
