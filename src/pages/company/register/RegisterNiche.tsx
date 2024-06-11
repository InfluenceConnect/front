import { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

interface CheckboxOption {
  name: string;
  label: string;
}

function RegisterNicheCompany() {
  const navigate = useNavigate();
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const checkboxOptions: CheckboxOption[] = [
    { name: "esporte", label: "Esportes" },
    { name: "musica", label: "Música" },
    { name: "moda", label: "Moda" },
    { name: "saude-bem-estar", label: "Saúde e bem estar" },
    { name: "negocios", label: "Negócios" },
    { name: "design-interior", label: "Design de interiores" },
    { name: "tecnologia", label: "Técnologia" },
    { name: "fotografia", label: "Fotografia" },
    { name: "culinaria", label: "Culinária" },
    { name: "educacao", label: "Educação" },
    { name: "games", label: "Games" },
    { name: "sustentabilidade", label: "Sustentabilidade" },
    { name: "automoveis", label: "Automóveis" },
    { name: "viagens", label: "Viagens" },
    { name: "pets", label: "Pets" },
    { name: "vida", label: "Vida" },
    { name: "politica-ativismo", label: "Política e Ativismo" },
    { name: "outros", label: "Outros" },
  ];

  const handleChange = (checkboxName: string) => {
    let selected: boolean = selectedCheckboxes.indexOf(checkboxName) != -1;

    if (selected) {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((name) => name !== checkboxName)
      );

      //console.log(selectedCheckboxes); // somente pra verificar
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxName]);
    }
  };

  return (
    <Box
      sx={{
        width: { md: "50%", xs: "80%" },
        margin: "0 auto",
        marginTop: 5,
        textAlign: "center",
      }}
    >
      <h1> Escolha seus Nichos de Atuação</h1>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 2 }}
        justifyContent={"center"}
      >
        {checkboxOptions.map((option) => (
          <Grid item xs={12} sm={6} md={6} key={option.name}>
            <Button
              tabIndex={0}
              aria-label={`botão nicho ${option.name}`}
              onClick={() => handleChange(option.name)}
              sx={{ width: "100%" }}
            >
              <Item sx={{ width: "100%" }} elevation={3}>
                <label
                  onClick={(evt) => {
                    evt.preventDefault();
                    handleChange(option.name);
                  }}
                >
                  <Checkbox
                    tabIndex={-1} //Remove o tab index pois já existe no button pai
                    name={option.name}
                    checked={selectedCheckboxes.includes(option.name)}
                  />
                  {selectedCheckboxes.includes(option.name) ? (
                    <strong style={{ fontSize: "110%" }}>{option.name}</strong>
                  ) : (
                    option.name
                  )}
                </label>
              </Item>
            </Button>
          </Grid>
        ))}
      </Grid>

      <Stack
        spacing={2}
        direction="row"
        justifyContent={"center"}
        marginTop={5}
        marginBottom={5}
      >
        {/* obs: Somente navegando sem passar os dados */}

        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() => navigate("/registerSocialMedia")}
        >
          Avançar
        </Button>
      </Stack>
    </Box>
  );
}

export default RegisterNicheCompany;
