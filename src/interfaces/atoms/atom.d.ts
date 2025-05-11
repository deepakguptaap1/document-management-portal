import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface CustomButtonProps {
  children: string;
  variant?:
    | "primary"
    | "primary-medium"
    | "primary-small"
    | "secondary"
    | "secondary-medium"
    | "secondary-small"
    | "danger"
    | "danger-medium"
    | "danger-small"
    | "success"
    | "success-medium"
    | "success-small";
  fullWidth?: boolean;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface CustomInputProps {
  label?: string;
  name: string;
  type: "text" | "number" | "date" | "password" | "email" | "file";
  isMultiple?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  placeholder?: string;
  inputValue: string | number;
  ref?: MutableRefObject<HTMLDivElement | null>;
}

export interface CustomImageProps {
  className?: string;
  rounded?: boolean;
  shadow?: boolean;
  border?: boolean;
  alt: string;
  src: string | StaticImport;
  width?: number;
  height?: number;
}

export interface CustomIframeProps {
  src: string;
  title: string;
  className?: string;
  allowFullScreen?: boolean;
}

export interface CustomDropdownProps {
  options: User["role"][];
  value: string;
  onChange: (value: User["role"]) => void;
  placeholder?: string;
  label?: string;
}

export interface CustomLinkProps {
  href: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  text?: string;
}
