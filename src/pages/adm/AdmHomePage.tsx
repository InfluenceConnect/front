import { Stack, Typography } from "@mui/material";

const AdmHomePage = () => {
  return (
    <Stack
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"calc(100vh - 65px)"}
    >
      <Typography variant={"h1"} color={"error"} fontWeight={"900"}>
        ADM
      </Typography>
    </Stack>
  );
};

export default AdmHomePage;
