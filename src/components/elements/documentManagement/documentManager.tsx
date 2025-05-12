import React, { useEffect, useState } from "react";
import styles from "./documentManager.module.scss";
import DocumentViewer from "@/components/molecules/documentViewer/documentViewer";
import CustomButton from "@/components/atom/customButton/cutomButton";
import DocumentUploader from "@/components/molecules/documentUploader/documentUploader";
import { UploadedDocument } from "@/interfaces/moelcules/molecules";
import { useAppContext } from "@/store/store";

const DocumentManager = () => {
  const { getStore, updateStore } = useAppContext();
  const { currentUser } = getStore();
  const documents = currentUser?.files ?? [];
  const [selectedDoc, setSelectedDoc] = useState<UploadedDocument | null>(null);
  const [isUpload, setIsUpload] = useState<boolean>(false);

  useEffect(() => {
    const fetchDocumnets = async () => {
      console.log(`/api/documents?id=${currentUser.id}`);
      try {
        const res = await fetch(
          `/api/documents?id=${encodeURIComponent(currentUser.id)}`
        );
        const result = await res.json();
        if (!res.ok) throw new Error(result.message);
        updateStore({ currentUser: result.data });
      } catch (err) {
        console.error("Document fetch failed", err);
      }
    };
    if (!currentUser?.files?.length) fetchDocumnets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpload = async (files: File[]) => {
    const newDocs: UploadedDocument[] = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toLocaleString(),
      file,
    }));

    try {
      const res = await fetch("/api/documents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: currentUser.id,
          files: [...documents, ...newDocs],
        }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      updateStore({
        currentUser: result.data,
      });
      handleUploadDialog();
    } catch (err) {
      console.error("Document Upload failed", err);
    }
  };

  const removeDocument = async (index: number) => {
    const files = documents.filter((_, i) => i !== index);
    try {
      const res = await fetch("/api/documents", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: currentUser.id,
          files: files,
        }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      updateStore({
        currentUser: result.data,
      });
    } catch (err) {
      console.error("Document Delete failed", err);
    }
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
        {documents?.length === 0 ? (
          <p>No documents uploaded.</p>
        ) : (
          <>
            <h3 className={styles.docListHeading}>All Uploaded Document</h3>
            <ul className={styles.documentList}>
              {documents?.map((doc, index) => (
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
