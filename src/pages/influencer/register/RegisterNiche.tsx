import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

interface CheckboxOption {
  name: string; 
  label: string; 
}

function RegisterNicheInfluencer() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const checkboxOptions: CheckboxOption[] = [
    { name: 'esporte', label: 'Esportes' },
    { name: 'musica', label: 'Música' },
    { name: 'moda', label: 'Moda' },
    { name: 'saude-bem-estar', label: 'Saúde e bem estar' },
    { name: 'negocios', label: 'Negócios' },
    { name: 'design-interior', label: 'Design de interiores' },
    { name: 'tecnologia', label: 'Técnologia' },
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxName = event.target.name;
    const selected = event.target.checked;

    if (selected) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxName]);
      console.log(selectedCheckboxes)    // somente pra verificar 
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((name) => name !== checkboxName));
     
    }
  };


  return (
    <Box sx={{ width: '50%', margin: '0 auto', marginTop:5, textAlign:'center'}}>
         <h1> Escolha seus Nichos de Atuação</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }} justifyContent={'center'}>
        {checkboxOptions.map((option) => (
          <Grid item xs={'auto' } sm={6} md={6}  key={option.name}>
            <Item>
              <label>
                <Checkbox
                  name={option.name}
                  onChange={handleChange}
                  checked={selectedCheckboxes.includes(option.name)}
                />
                {option.label}
              </label>
            </Item>
          </Grid>
        ))}
      </Grid>

      <Stack spacing={2} direction="row" justifyContent={'center'} marginTop={5} marginBottom={5}>
     
      <Button variant="contained" sx={{width:'100%'}}>Avançar</Button>
    
    </Stack>
    </Box>
  );
}

export default  RegisterNicheInfluencer;
