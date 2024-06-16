import { createContext, ReactNode, useContext, useState } from "react";
import { usersType } from "../types/users";

interface SessionContextData {
  userType: usersType;
  setUserType: React.Dispatch<React.SetStateAction<usersType>>;
  handleChangeUserType: (userRole: string, status: string) => string | undefined;
}

const SessionContext = createContext({} as SessionContextData);

const useSessionContext = () => useContext(SessionContext);

const SessionContextProvider = ({ children }: { children: ReactNode }) => {
  // const [userType, setUserType] = useState<usersType>("creatingInfluencer");
  const [userType, setUserType] = useState<usersType>("adm");

  const handleChangeUserType = (userRole: string, status: string) => {
    const userRole_LC = userRole.toLowerCase();

    if (userRole_LC == "influencer") {
      if (status == "inactive" || status == "pending") {
        setUserType("inactiveInfluencer");
        return "inactiveInfluencer";
      }
    }

    setUserType(userRole_LC as "influencer" | "adm" | "company");
    return userRole_LC;
  };

  const value = {
    userType: userType,
    setUserType: setUserType,
    handleChangeUserType: handleChangeUserType,
  };

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export { useSessionContext, SessionContextProvider, SessionContext };
