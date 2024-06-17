import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  ButtonGroup,
} from "@mui/material";
import { IMaskInput } from "react-imask";

const states = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

interface TextMaskCustomProps {
  mask: string;
  inputRef: React.Ref<HTMLInputElement>;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, TextMaskCustomProps>(
  function TextMaskCustom(props, ref) {
    const { mask, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask={mask}
        definitions={{
          "#": /[0-9]/,
        }}
        inputRef={ref}
      />
    );
  }
);

const UpdateInfluencer: React.FC = () => {
  const [userType, setUserType] = useState<string>("creatingInfluencer");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [state, setState] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<string>('Em análise');
  const [isEditable, setIsEditable] = useState<boolean>(false);

  useEffect(() => {
    // Simulate loading user data
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsEditable(status === 'Ativo');
    }, 1000);
  }, [status]);

  const handlePictureChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setProfilePicture(file);
    if (file) {
      setLoadingImage(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setLoadingImage(false);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleStatusChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newStatus = event.target.value as string;
    setStatus(newStatus);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    // "Realizar validação"
    // Simular envio de dados para o backend"
    setTimeout(() => {
      setLoading(false);
      alert("Dados enviados com sucesso!"); 
    }, 1500);
  };

  const renderInfluencerFields = () => (
    <>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="name"
          label="Nome"
          name="name"
          autoComplete="name"
          disabled={!isEditable}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="cpf"
          name="cpf"
          label="CPF"
          InputProps={{
            inputComponent: TextMaskCustom as any,
            inputProps: { mask: "000.000.000-00" },
          }}
          disabled={!isEditable}
        />
        {errors.cpf && <Typography color="error">{errors.cpf}</Typography>}
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth required>
          <InputLabel id="state-label">Estado</InputLabel>
          <Select
            labelId="state-label"
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value as string)}
            label="Estado"
            disabled={!isEditable}
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          autoComplete="email"
          disabled={!isEditable}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="birthdate"
          label="Data de Nascimento"
          name="birthdate"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          disabled={!isEditable}
        />
      </Grid>
    </>
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" fontWeight="bold">
          Editar Perfil
        </Typography>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button
            variant={userType === "creatingInfluencer" ? "contained" : "outlined"}
            onClick={() => setUserType("creatingInfluencer")}
          >
            Influenciador
          </Button>
          <Button
            variant={userType === "creatingCompany" ? "contained" : "outlined"}
            onClick={() => setUserType("creatingCompany")}
            disabled
          >
            Empresa
          </Button>
        </ButtonGroup>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="profilePicture"
                type="file"
                onChange={handlePictureChange}
                disabled={loadingImage || !isEditable}
              />
              <label
                aria-disabled={loadingImage || !isEditable}
                htmlFor="profilePicture"
                style={{ textAlign: "center" }}
              >
                {loadingImage ? (
                  <div style={{ width: 100, height: 100, textAlign: "center" }}>
                    {loadingImage && (
                      <CircularProgress style={{ justifyContent: "center" }} />
                    )}
                  </div>
                ) : (
                  <Avatar
                    src={preview || undefined}
                    sx={{ width: 100, height: 100, cursor: isEditable ? "pointer" : "default" }}
                  />
                )}
              </label>
            </Grid>
            {renderInfluencerFields()}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={status}
                  onChange={(e) => handleStatusChange(e)}
                  variant="outlined"
                  disabled={userType === "creatingInfluencer" ? !isEditable : false}
                >
                  <MenuItem value="Em análise">Em análise</MenuItem>
                  <MenuItem value="Ativo">Ativo</MenuItem>
                  <MenuItem value="Inativo">Inativo</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
                disabled={loading || !isEditable}
              >
                {loading && <CircularProgress sx={{ position: "absolute" }} />}
                Salvar Alterações
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                  setIsEditable(false);
                  setStatus('Em análise');
                }}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default UpdateInfluencer;
