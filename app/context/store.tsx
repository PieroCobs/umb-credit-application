"use client";

import { Credit } from "@/types/credit";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  isModalVisible: boolean;
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
  creditApplications: Credit[];
  setCreditApplications: Dispatch<SetStateAction<Credit[]>>;
}

const GlobalContext = createContext<ContextProps>({
  isModalVisible: false,
  setModalVisibility: (): boolean => false,
  creditApplications: [],
  setCreditApplications: (): Credit[] => [],
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [creditApplications, setCreditApplications] = useState<Credit[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        isModalVisible,
        setModalVisibility,
        creditApplications,
        setCreditApplications,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
