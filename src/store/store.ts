import {
  AppContextProps,
  storeProps,
  UpdateContextPayloadProps,
} from "@/interfaces/store/store";
import { createContext, useContext } from "react";
import { initialStore } from "./initialState";

export const AppContext = createContext<AppContextProps>({
  store: initialStore,
  setStore: () => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  const { store, setStore } = context;

  const updateStore = (payLoad: UpdateContextPayloadProps) => {
    setStore((prev: storeProps) => ({ ...prev, ...payLoad }));
  };

  const getStore = () => {
    return store;
  };

  return { getStore, updateStore };
};
