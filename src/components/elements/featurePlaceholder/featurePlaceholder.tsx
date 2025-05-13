import React from "react";
import styles from "./featurePlaceholder.module.scss";
import { FeaturePlaceholderProps } from "@/interfaces/elements/elements";

const FeaturePlaceholder: React.FC<FeaturePlaceholderProps> = ({
  featureName,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{featureName}</h2>
      <p className={styles.message}>This feature will be implemented later.</p>
    </div>
  );
};

export default FeaturePlaceholder;
