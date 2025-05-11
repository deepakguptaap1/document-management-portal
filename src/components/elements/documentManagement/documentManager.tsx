import React, { useState } from "react";
import styles from "./documentManager.module.scss";
import DocumentViewer from "@/components/molecules/documentViewer/documentViewer";
import CustomButton from "@/components/atom/customButton/cutomButton";
import DocumentUploader from "@/components/molecules/documentUploader/documentUploader";
import { UploadedDocument } from "@/interfaces/moelcules/molecules";

const DocumentManager = () => {
  const [documents, setDocuments] = useState<UploadedDocument[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<UploadedDocument | null>(null);
  const [isUpload, setIsUpload] = useState<boolean>(false);

  const handleUpload = (files: File[]) => {
    const newDocs: UploadedDocument[] = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toLocaleString(),
      file,
    }));
    setDocuments((prev) => [...prev, ...newDocs]);
    handleUploadDialog();
  };

  const removeDocument = (index: number) => {
    setDocuments((prev) => prev.filter((_, i) => i !== index));
  };

  const downloadDocument = (doc: UploadedDocument) => {
    const url = URL.createObjectURL(doc.file);
    const a = document.createElement("a");
    a.href = url;
    a.download = doc.name;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleUploadDialog = () => {
    setIsUpload((prev) => !prev);
  };

  return (
    <>
      <h2 className={styles.heading}>Document Upload & Management</h2>
      <div className={styles.documentManager}>
        <div className={styles.uploadNewDocBtn}>
          <CustomButton
            className={styles.button}
            onClick={handleUploadDialog}
            variant="primary-medium"
          >
            Upload Documents
          </CustomButton>
        </div>
        {documents.length === 0 ? (
          <p>No documents uploaded.</p>
        ) : (
          <>
            <h3 className={styles.docListHeading}>All Uploaded Document</h3>
            <ul className={styles.documentList}>
              {documents.map((doc, index) => (
                <li key={index}>
                  <div>
                    <strong>{doc.name}</strong> ({(doc.size / 1024).toFixed(2)}{" "}
                    KB)
                    <br />
                    <small>{doc.uploadedAt}</small>
                  </div>
                  <div className={styles.actions}>
                    <CustomButton
                      className={styles.button}
                      onClick={() => setSelectedDoc(doc)}
                      variant="primary-medium"
                    >
                      View
                    </CustomButton>
                    <CustomButton
                      className={styles.button}
                      onClick={() => downloadDocument(doc)}
                      variant="success-medium"
                    >
                      Download
                    </CustomButton>
                    <CustomButton
                      className={styles.button}
                      onClick={() => removeDocument(index)}
                      variant="danger-medium"
                    >
                      Remove
                    </CustomButton>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      {selectedDoc && (
        <DocumentViewer
          document={selectedDoc}
          onClose={() => setSelectedDoc(null)}
        />
      )}
      {isUpload && (
        <DocumentUploader
          handleUpload={handleUpload}
          handleClose={handleUploadDialog}
        />
      )}
    </>
  );
};

export default DocumentManager;
