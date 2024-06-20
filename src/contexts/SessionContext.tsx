import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { usersType } from "../types/users";
import UserData from "../types/userData";
import { getUserLocalStorage, getUserSessionStorage } from "../utils/storage";

interface SessionContextData {
  userType: usersType;
  setUserType: React.Dispatch<React.SetStateAction<usersType>>;
  handleChangeUserType: (userRole: string, status: string) => string | undefined;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const SessionContext = createContext({} as SessionContextData);

const useSessionContext = () => useContext(SessionContext);

const SessionContextProvider = ({ children }: { children: ReactNode }) => {
  const  currentUser: usersType = "adm" //USAR ADM PARA TESTAR, NO FINAL TROCAR PARA "creatingUser" console.log()
  const [userType, setUserType] = useState<usersType>(currentUser);

  const [userData, setUserData] = useState({} as UserData);

  //pegar dados armazenados em cache localstorage or session storage
  //toda vez que da load na página
  useEffect(() => {
    const storagedUser = getUserLocalStorage() ?? getUserSessionStorage() ?? null;
    
    if(!!storagedUser) {
      setUserData(storagedUser)
      
      setUserType(storagedUser.userType??currentUser)
    };
  }, []);

  const handleChangeUserType = (userRole: string, status: string) => {
    const userRole_LC = userRole.toLowerCase();

    if (userRole_LC == "influencer") {
      if (status == "INACTIVE" || status == "PENDING") {
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
    userData: userData,
    setUserData: setUserData,
  } as SessionContextData;

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export { useSessionContext, SessionContextProvider, SessionContext };
