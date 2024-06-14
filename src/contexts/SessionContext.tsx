import { createContext, ReactNode, useContext, useState } from "react";
import { usersType } from "../types/users";

interface SessionContextData {
  typeUser: usersType;
  setTypeUser: React.Dispatch<React.SetStateAction<usersType>>;
}

const SessionContext = createContext({} as SessionContextData);

const useSessionContext = () => useContext(SessionContext);

const SessionContextProvider = ({ children }: { children: ReactNode }) => {
  const [typeUser, setTypeUser] = useState<usersType>("nonLogged");

  const value = {
    typeUser: typeUser,
    setTypeUser: setTypeUser,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export { useSessionContext, SessionContextProvider };
