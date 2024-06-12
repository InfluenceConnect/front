import React, { createContext, useState, ReactNode } from "react";

interface RegisterContextData {
    typeUser: string;
    setTypeUser: React.Dispatch<React.SetStateAction<string>>;
}


const RegisterContext = createContext<RegisterContextData>({
  typeUser: "",
  setTypeUser: () => {},
});


const RegisterContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
 
  const [typeUser, setTypeUser] = useState<string>("");

  return (
    <RegisterContext.Provider value={{typeUser, setTypeUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterContextProvider };
