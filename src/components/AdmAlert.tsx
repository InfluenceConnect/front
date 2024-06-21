import { ButtonBase, Typography } from "@mui/material";
import { useSessionContext } from "../contexts/SessionContext";

const AdmAlert = () => {
  const { userType } = useSessionContext();
  if (userType != "adm") return <></>;

  return (
    <ButtonBase disabled>
      <Typography color="error" sx={{ fontWeight: "bold" }}>
        ADM
      </Typography>
    </ButtonBase>
  );
};

export default AdmAlert;
