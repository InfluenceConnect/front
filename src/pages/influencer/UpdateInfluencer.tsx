import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, MenuItem, CircularProgress } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#14C0DE",
      contrastText: "#fff"
    },
    secondary: {
      main: "#343a40",
      contrastText: "#fff"
    }
  },
  typography: {
    fontSize: 12
  }
});

interface UserProfile {
  name: string;
  cpf: string;
  state: string;
  email: string;
  niche: string;
  birthdate: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  status: string;
  profilePic?: File | null;
}

const checkboxOptions = [
  { name: 'esporte', label: 'Esportes' },
  { name: 'musica', label: 'Música' },
  { name: 'moda', label: 'Moda' },
  { name: 'saude-bem-estar', label: 'Saúde e bem estar' },
  { name: 'negocios', label: 'Negócios' },
  { name: 'design-interior', label: 'Design de interiores' },
  { name: 'tecnologia', label: 'Tecnologia' },
  { name: 'fotografia', label: 'Fotografia' },
  { name: 'culinaria', label: 'Culinária' },
  { name: 'educacao', label: 'Educação' },
  { name: 'games', label: 'Games' },
  { name: 'sustentabilidade', label: 'Sustentabilidade' },
  { name: 'automoveis', label: 'Automóveis' },
  { name: 'viagens', label: 'Viagens' },
  { name: 'pets', label: 'Pets' },
  { name: 'vida', label: 'Vida' },
  { name: 'politica-ativismo', label: 'Política e Ativismo' },
  { name: 'outros', label: 'Outros' },
];

const UpdateInfluencer: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    cpf: '',
    state: '',
    email: '',
    niche: '',
    birthdate: '',
    facebook: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    status: 'active',
    profilePic: null,
  });

  const [profilePicPreview, setProfilePicPreview] = useState<string | null>(null);
  const [loadingImage, setLoadingImage] = useState<boolean>(false);
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfilePicChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setLoadingImage(true);
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicPreview(reader.result as string);
        setProfile({ ...profile, profilePic: file });
        setLoadingImage(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProfile({ ...profile, status: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Simular envio para o backend
    console.log('Profile:', profile);
    console.log('Profile Pic:', profile.profilePic);

    // Limpar formulário após envio bem-sucedido
    setProfile({
      name: '',
      cpf: '',
      state: '',
      email: '',
      niche: '',
      birthdate: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      youtube: '',
      status: 'active',
      profilePic: null,
    });
    setProfilePicPreview(null);
    setSelectedNiches([]);
  };

  const isEditable = profile.status === 'active';

  return (
    <ThemeProvider theme={lightTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={{ marginTop: lightTheme.spacing(8), display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="profilePicture"
            type="file"
            onChange={handleProfilePicChange}
            disabled={loadingImage || !isEditable}
          />
          <label htmlFor="profilePicture" style={{ textAlign: 'center' }}>
            {loadingImage ? (
              <CircularProgress style={{ width: 100, height: 100 }} />
            ) : (
              <Avatar
                alt="Profile Picture"
                src={profilePicPreview || undefined}
                sx={{ width: 100, height: 100, cursor: isEditable ? 'pointer' : 'default' }}
              />
            )}
          </label>
          <Typography component="h1" variant="h5">
            Editar Perfil
          </Typography>
          <form style={{ width: '100%', marginTop: lightTheme.spacing(3) }} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  name="name"
                  autoComplete="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="cpf"
                  label="CPF"
                  name="cpf"
                  autoComplete="cpf"
                  value={profile.cpf}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="state"
                  label="Estado"
                  name="state"
                  autoComplete="state"
                  value={profile.state}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="birthdate"
                  label="Data de nascimento"
                  name="birthdate"
                  autoComplete="birthdate"
                  value={profile.birthdate}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="facebook"
                  label="Facebook"
                  name="facebook"
                  autoComplete="facebook"
                  value={profile.facebook}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="instagram"
                  label="Instagram"
                  name="instagram"
                  autoComplete="instagram"
                  value={profile.instagram}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="tiktok"
                  label="Tiktok"
                  name="tiktok"
                  autoComplete="tiktok"
                  value={profile.tiktok}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="youtube"
                  label="Youtube"
                  name="youtube"
                  autoComplete="youtube"
                  value={profile.youtube}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  select
                  id="status"
                  label="Status"
                  name="status"
                  value={profile.status}
                  onChange={handleStatusChange}
                >
                  <MenuItem value="active">Ativo</MenuItem>
                  <MenuItem value="inactive">Inativo</MenuItem>
                  <MenuItem value="pending">Em análise</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="niche"
                  label="Nicho de atuação"
                  name="niche"
                  select
                  SelectProps={{
                    multiple: true,
                    value: selectedNiches,
                    onChange: (e) => setSelectedNiches(e.target.value as string[]),
                    renderValue: (selected) => (selected as string[]).join(', '),
                  }}
                  disabled={!isEditable}
                >
                  {checkboxOptions.map(option => (
                    <MenuItem key={option.name} value={option.name}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: lightTheme.spacing(3) }}
              disabled={!isEditable}
            >
              Salvar
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Direitos Autorais © '}
            <Link color="inherit" href="https://mui.com/">
              Seu Site
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UpdateInfluencer;

                 

