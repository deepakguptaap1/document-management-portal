import { UsersDataProps } from "@/backend/interface";
import { LoginFormDataProps, SignUpFormDataProps } from "./elements";

export interface storeProps {
  signupData: SignUpFormDataProps;
  loginData: LoginFormDataProps;
  isAuthenticated: boolean;
  usersData: UsersDataProps[];
  role: string;
  currentUser: UsersDataProps;
}

export interface AppContextProps {
  store: storeProps;
  setStore: React.Dispatch<React.SetStateAction<StoreProps>>;
}

export interface UpdateContextPayloadProps {
  [key: keyof storeProps]:
    | SignUpFormDataProps
    | LoginFormDataProps
    | UsersDataProps[]
    | UsersDataProps
    | boolean;
}
