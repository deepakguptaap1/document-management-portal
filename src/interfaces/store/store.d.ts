import { LoginFormDataProps, SignUpFormDataProps } from "./elements";

export interface storeProps {
  signupData: SignUpFormDataProps;
  loginData: LoginFormDataProps;
}

export interface AppContextProps {
  store: storeProps;
  setStore: React.Dispatch<React.SetStateAction<StoreProps>>;
}

export interface UpdateContextPayloadProps {
  [key: keyof storeProps]: SignUpFormDataProps | LoginFormDataProps;
}
