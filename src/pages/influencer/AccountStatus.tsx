import React from "react";
import { Container, Card, Typography, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useSessionContext } from "../../contexts/SessionContext";

const statusBackendToFront = {
  ACTIVE: "ativo",
  INACTIVE: "inativo",
  PENDING: "em análise",
};

const AccountStatus: React.FC = () => {
  const { userData } = useSessionContext();
  const status =
    statusBackendToFront[userData.status as "ACTIVE" | "INACTIVE" | "PENDING"];

  const statusStyles: { [key: string]: any } = {
    "em análise": { color: "orange" },
    ativo: { color: "green" },
    inativo: { color: "gray" },
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card variant="outlined" sx={{ textAlign: "center", p: 3 }}>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <InfoIcon fontSize="large" />
        </Box>
        <Typography variant="h5" component="div">
          Status da Conta
        </Typography>
        <Typography variant="body1" component="p" sx={{ my: 2 }}>
          Seu status atual é <span style={statusStyles[status]}>{status}</span>.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Informações detalhadas sobre o status da sua conta serão exibidas aqui.
        </Typography>
      </Card>
    </Container>
  );
};

export default AccountStatus;
