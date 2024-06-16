import React, { createContext, useState, ReactNode } from "react";
import RequestSaveCompany from "../types/RequestSaveCompany";
import RequestSaveInfluencer from "../types/requestSaveInfluencer";

interface RegisterContextData {
  typeUser: string;
  setTypeUser: React.Dispatch<React.SetStateAction<string>>;
  influencerData: RequestSaveInfluencer;
  setInfluencerData: React.Dispatch<
    React.SetStateAction<RequestSaveInfluencer>
  >;
}

const RegisterContext = createContext<RegisterContextData>(
  {} as RegisterContextData
);

const RegisterContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [typeUser, setTypeUser] = useState<string>("influencer");

  const [influencerData, setInfluencerData] = useState<RequestSaveInfluencer>({
    email: "",
    password: "",
    name: "",
    birthdate: "",
    status: "pending",
    cpf: "",
    profilePhoto: "",
    stateId: 0,
    nicheIds: [],
    influencerSocialMedia: [],
    });
  //const [companyData, setCompanyData] = useState<any>();


  return (
    <RegisterContext.Provider
      value={{ typeUser, setTypeUser, influencerData, setInfluencerData }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterContextProvider };
