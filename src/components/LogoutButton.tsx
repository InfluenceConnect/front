import { Button } from "@mui/material";
import { useSessionContext } from "../contexts/SessionContext";
import UserData from "../types/userData";
import { setUserLocalStorage, setUserSessionStorage } from "../utils/storage";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const sessionCtx = useSessionContext();
  const { userType } = sessionCtx;
  const navigate = useNavigate();

  const handleLoggout = () => {
    sessionCtx.setUserType("creatingInfluencer");
    sessionCtx.setUserData({} as UserData);
    sessionCtx.setUserData((p) => {
      console.log(p);
      return p;
    });
    setUserLocalStorage({} as UserData);
    setUserSessionStorage({} as UserData);

    navigate("/");
  };

  //Não mostra na página de login nem na de registro
  if (userType == "creatingInfluencer" || userType == "creatingCompany") return <></>;

  return (
    <Button color="primary" onClick={handleLoggout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
