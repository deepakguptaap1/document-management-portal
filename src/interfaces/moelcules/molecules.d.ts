export interface UploadedDocument {
  name: string;
  size: number;
  type: string;
  uploadedAt: string;
  file: File;
}

export interface DocumentViewerProps {
  document: {
    name: string;
    type: string;
    file: File;
  };
  onClose: () => void;
}

export interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footerContent?: ReactNode;
}

export interface DocumentUploaderProps {
  handleUpload: (files: File[]) => void;
  handleClose: () => void;
}

export interface SeoProps {
  title?: string;
  description?: string;
}
