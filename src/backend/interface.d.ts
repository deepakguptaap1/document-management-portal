import { UploadedDocument } from "@/interfaces/moelcules/molecules";

export interface UsersDataProps {
  fullName: string;
  email: string;
  mobile: string;
  role: string;
  id: string;
  password?: string;
  files?: UploadedDocument[];
}

export interface UsersDataApiProps {
  message: string;
  data: UsersDataProps[] | UsersDataProps;
}
