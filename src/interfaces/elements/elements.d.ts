export interface SignUpFormDataProps {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword?: string;
}

export interface LoginFormDataProps {
  email: string;
  password: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: "Admin" | "User" | "Manager";
}

export interface FeaturePlaceholderProps {
  featureName: string;
}
