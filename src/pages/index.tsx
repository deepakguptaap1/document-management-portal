import React from "react";
import styles from "./index.module.scss";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Document Management Portal</h1>
        <p>
          A centralized platform for securely storing, accessing, and managing
          all your business documents. From upload to retrieval, everything is
          designed for ease and efficiency.
        </p>
        <div className={styles.infoBox}>
          Navigate to the <strong>Documents</strong> section to upload and
          organize your files. Use the <strong>Ingestion</strong> panel to track
          processing status, or visit <strong>Q&A</strong> for smart search.
        </div>
      </section>

      <section className={styles.features}>
        <h2>Why Choose Our Portal?</h2>
        <ul>
          <li>
            <strong>Easy Uploads:</strong> Upload PDFs, images, and text
            documents in seconds.
          </li>
          <li>
            <strong>Real-time Search:</strong> Use Q&A to find relevant
            information instantly using AI.
          </li>
          <li>
            <strong>Ingestion Tracking:</strong> Monitor the progress of
            document ingestion pipelines.
          </li>
          <li>
            <strong>Role-Based Access:</strong> Ensure only authorized users can
            access or manage sensitive files.
          </li>
          <li>
            <strong>Responsive Design:</strong> Access the portal from any
            device, anywhere.
          </li>
        </ul>
      </section>

      <section className={styles.note}>
        <h3>Note:</h3>
        <p>
          This portal is best suited for internal teams that deal with a large
          number of digital documents, such as legal firms, insurance agencies,
          and enterprise-level organizations.
        </p>
        <p>
          For admin users, a user management section is available to assign
          roles and monitor activity.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
