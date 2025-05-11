"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./customLink.module.scss";
import { CustomLinkProps } from "@/interfaces/atoms/atom";

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  onClick,
  className,
  text,
}) => {
  return (
    <Link
      href={href}
      className={clsx(styles.link, className)}
      onClick={onClick}
    >
      {text ? text : children}
    </Link>
  );
};

export default CustomLink;
