import React from "react";
import styles from "./documentViewer.module.scss";
import { DocumentViewerProps } from "@/interfaces/moelcules/molecules";
import CustomDialog from "../customDialog/customDialog";
import CustomImage from "@/components/atom/image/customImage";
import CustomIframe from "@/components/atom/iframe/customIframe";

const DocumentViewer: React.FC<DocumentViewerProps> = ({
  document,
  onClose,
}) => {
  let fileUrl = "";
  if (document.file instanceof Blob) {
    fileUrl = URL?.createObjectURL(document.file);
  } else {
    alert("Invalid Documnet or File");
    onClose();
    return null;
  }

  return (
    <CustomDialog open={true} onClose={onClose} title={document.name}>
      {document.type.includes("image") ? (
        <CustomImage
          src={fileUrl}
          alt={document.name}
          className={styles.previewImage}
        />
      ) : document.type === "application/pdf" ? (
        <CustomIframe src={fileUrl} title={document.name} />
      ) : (
        <p>Preview not supported for this file type.</p>
      )}
    </CustomDialog>
  );
};

export default DocumentViewer;
