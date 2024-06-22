import React, { createContext, useState, ReactNode, useContext } from "react";
import RequestSaveCompany from "../types/requestSaveCompany";
import RequestSaveInfluencer from "../types/requestSaveInfluencer";

interface RegisterContextData {
  typeUser: string;
  setTypeUser: React.Dispatch<React.SetStateAction<string>>;
  influencerData: RequestSaveInfluencer;
  setInfluencerData: React.Dispatch<
    React.SetStateAction<RequestSaveInfluencer>
  >;
  companyData: RequestSaveCompany;
  setCompanyData: React.Dispatch<React.SetStateAction<RequestSaveCompany>>;
}

const RegisterContext = createContext<RegisterContextData>(
  {} as RegisterContextData
);

const useRegisterContext = () => useContext(RegisterContext);

const RegisterContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [typeUser, setTypeUser] = useState<string>("influencer");

  const [influencerData, setInfluencerData] = useState(
    {} as RequestSaveInfluencer
  );
  const [companyData, setCompanyData] = useState({} as RequestSaveCompany);

  const value = {
    typeUser,
    setTypeUser,
    influencerData,
    setInfluencerData,
    companyData,
    setCompanyData,
  };

  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterContextProvider, useRegisterContext };
