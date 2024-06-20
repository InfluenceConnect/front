import React from "react";
import {
  Modal,
  Box,
  Typography,
  CardMedia,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSessionContext } from "../../contexts/SessionContext";
import Campaign from "../../types/campaign";

// Props do componente Modal de detalhes da campanha
interface CampaignDetailModalProps {
  campaign: Campaign | null; // Campanha a ser exibida no modal
  open: boolean; // Estado de abertura do modal
  onClose: () => void; // Função para fechar o modal
}

// Estilos personalizados para o modal
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// Componente funcional para o modal de detalhes da campanha
const CampaignDetailModal: React.FC<CampaignDetailModalProps> = ({
  campaign,
  open,
  onClose,
}) => {
  const { userType } = useSessionContext(); // Obtém o tipo de usuário do contexto de sessão

  // Se não houver campanha selecionada, retorna null para não renderizar nada
  if (!campaign) return null;

  return (
    <Modal
      open={open} // Define se o modal está aberto ou fechado
      onClose={onClose} // Função para fechar o modal ao clicar fora dele
      aria-labelledby="campaign-modal-title" // ID do elemento que descreve o título do modal
      aria-describedby="campaign-modal-description" // ID do elemento que descreve o conteúdo do modal
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {/* Botão para fechar o modal */}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        {/* Imagem da campanha */}
        <CardMedia
          component="img"
          alt={campaign.name}
          height="200"
          image={campaign.image}
        />
        {/* Título da campanha */}
        <Typography id="campaign-modal-title" variant="h5" component="div">
          {campaign.name}
        </Typography>
        {/* Descrição da campanha */}
        <Typography variant="body2" color="text.secondary" id="campaign-modal-description">
          {campaign.description}
        </Typography>
        {/* Status da campanha */}
        <Typography variant="body2" color="text.secondary">
          Status: {campaign.status}
        </Typography>
        {/* Data de início da campanha */}
        <Typography variant="body2" color="text.secondary">
          Data de Início: {campaign.startDate}
        </Typography>
        {/* Data de término da campanha */}
        <Typography variant="body2" color="text.secondary">
          Data de Término: {campaign.endDate}
        </Typography>
        {/* Orçamento da campanha */}
        <Typography variant="body2" color="text.secondary">
          Orçamento: R$ {campaign.budget.toFixed(2)}
        </Typography>
        {/* Opções adicionais para administradores */}
        {userType === "adm" && (
          <Stack spacing={2} direction={"row"} marginTop={1}>
            {/* Botão para editar a campanha (comentado) */}
            {/* <Button variant="contained">Editar</Button> */}
            {/* Botão para desativar a campanha */}
            <Button variant="outlined" color="error">
              Desativar
            </Button>
          </Stack>
        )}
      </Box>
    </Modal>
  );
};

export default CampaignDetailModal;
