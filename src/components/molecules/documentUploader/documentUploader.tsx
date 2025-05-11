import React, { useState } from "react";
import styles from "./documentUploader.module.scss";
import CustomButton from "@/components/atom/customButton/cutomButton";
import CustomInput from "@/components/atom/customInput/customInput";
import CustomDialog from "../customDialog/customDialog";
import { DocumentUploaderProps } from "@/interfaces/moelcules/molecules";

const DocumentUploader: React.FC<DocumentUploaderProps> = ({
  handleUpload,
  handleClose,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const onUpload = () => {
    handleUpload(files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;
    setFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
  };

  return (
    <CustomDialog
      open={true}
      onClose={handleClose}
      title="Upload Document"
      footerContent={
        <CustomButton
          onClick={onUpload}
          className={styles.uploadBtn}
          variant="primary-medium"
        >
          Upload
        </CustomButton>
      }
    >
      <div className={styles.uploader}>
        <CustomInput
          type="file"
          isMultiple={true}
          onChange={handleFileChange}
          name="fileUploader"
          inputValue={""}
        />
        {files?.length > 0 && (
          <div className={styles.fileUploadSection}>
            <div className={styles.filesName}>
              {files.map((file, index) => (
                <div key={file.name}>{`${index + 1}. ${file.name}`}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </CustomDialog>
  );
};
export default DocumentUploader;
