import { ReactNode, useState } from "react";
import { AppContext } from "./store";
import { initialStore } from "./initialState";
import { storeProps } from "@/interfaces/store/store";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [store, setStore] = useState<storeProps>(initialStore);

  return (
    <AppContext.Provider value={{ store, setStore }}>
      {children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
