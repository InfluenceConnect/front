import React, { createContext, useState, ReactNode } from "react";
// Defina a interface para o contexto
interface RegisterContextData {
    typeUser: string;
    setTypeUser: React.Dispatch<React.SetStateAction<string>>;
}

// Crie o contexto
const RegisterContext = createContext<RegisterContextData>({
  typeUser: "",
  setTypeUser: () => {},
});

// Componente de provedor de contexto
const RegisterContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Estado para armazenar a string
  const [typeUser, setTypeUser] = useState<string>("");

  return (
    <RegisterContext.Provider value={{typeUser, setTypeUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterContextProvider };
