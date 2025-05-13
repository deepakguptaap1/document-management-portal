import React, { useEffect, useState } from "react";
import styles from "./documentManager.module.scss";
import DocumentViewer from "@/components/molecules/documentViewer/documentViewer";
import CustomButton from "@/components/atom/customButton/cutomButton";
import DocumentUploader from "@/components/molecules/documentUploader/documentUploader";
import { UploadedDocument } from "@/interfaces/moelcules/molecules";
import { useAppContext } from "@/store/store";
import { useRouter } from "next/router";

const DocumentManager = () => {
  const router = useRouter();
  const { getStore, updateStore } = useAppContext();
  const { currentUser } = getStore();
  const documents = (currentUser?.files ?? []) as UploadedDocument[];
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const [docViewer, setDocViewer] = useState<{
    isOpen: boolean;
    doc: UploadedDocument | null;
  }>({
    isOpen: false,
    doc: null,
  });

  useEffect(() => {
    const fetchDocumnets = async () => {
      try {
        console.log("Below Commented code Will implement it later");
        // const res = await fetch(`/api/documents?id=${currentUser.id}`);
        // const result = await res.json();
        // if (!res.ok) throw new Error(result.message);
        // updateStore({ currentUser: result.data });
      } catch (err) {
        console.error("Document fetch failed", err);
      }
    };
    if (!currentUser?.files?.length && router.isReady && currentUser?.id)
      fetchDocumnets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.id]);

  const handleUpload = async (files: File[]) => {
    const newDocs: UploadedDocument[] = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toLocaleString(),
      file,
    }));

    try {
      console.log("Below Commented code Will implement it later");
      // const res = await fetch("/api/documents", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     id: currentUser.id,
      //     files: [...documents, ...newDocs],
      //   }),
      // });

      // const formData = new FormData();
      // formData.append("id", currentUser.id);

      // newDocs.forEach((doc) => {
      //   formData.append("files", doc.file);
      // });

      // const res = await fetch("/api/documents", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     id: currentUser.id,
      //     files: [...documents, ...newDocs],
      //   }),
      // });

      // const result = await res.json();
      // if (!res.ok) throw new Error(result.message);
      // updateStore({
      //   currentUser: result.data,
      // });

      updateStore({
        currentUser: { ...currentUser, files: [...documents, ...newDocs] },
      });
      handleUploadDialog();
    } catch (err) {
      console.error("Document Upload failed", err);
    }
  };

  const removeDocument = async (index: number) => {
    try {
      const updatedFiles = documents.filter((_, i) => i !== index);
      console.log("Below Commented code Will implement it later");
      // const res = await fetch("/api/documents", {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     id: currentUser.id,
      //     files: files,
      //   }),
      // });
      // const result = await res.json();
      // if (!res.ok) throw new Error(result.message);
      // updateStore({
      //   currentUser: result.data,
      // });

      updateStore({
        currentUser: { ...currentUser, files: updatedFiles },
      });
    } catch (err) {
      console.error("Document Delete failed", err);
    }
  };

  const downloadDocument = (doc: UploadedDocument) => {
    if (doc.file instanceof Blob) {
      const url = URL.createObjectURL(doc.file);
      const a = document.createElement("a");
      a.href = url;
      a.download = doc.name;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      alert("Invalid Documnet or File");
    }
  };

  const handleUploadDialog = () => {
    setIsUpload((prev) => !prev);
  };

  const handleCloseDocViewer = () => {
    setDocViewer((prev) => ({ ...prev, isOpen: !prev.isOpen, doc: null }));
  };

  const hanldeDocView = (document: UploadedDocument) => {
    setDocViewer((prev) => ({ ...prev, isOpen: !prev.isOpen, doc: document }));
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
                      onClick={() => hanldeDocView(doc)}
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
      {docViewer.isOpen && docViewer.doc && (
        <DocumentViewer
          document={docViewer.doc}
          onClose={handleCloseDocViewer}
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
