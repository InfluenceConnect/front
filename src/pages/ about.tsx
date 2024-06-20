import { useState } from 'react';
import { Container, Typography, Box, useMediaQuery, useTheme, Tabs, Tab, Theme } from '@mui/material';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const theme = useTheme<Theme>();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState<number>(0);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box mt={isMobile ? 2 : 5} mb={isMobile ? 2 : 5}>
        <Typography variant="h3" gutterBottom  tabIndex={0}>
          Sobre Nós
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          variant={isMobile ? 'scrollable' : 'standard'}
          scrollButtons="auto"
        >
          <Tab label="Objetivo" aria-label="Objetivo da empresa Info4"  tabIndex={0}/>
          <Tab label="Visão da Empresa" aria-label="Visão da empresa Info4" tabIndex={0} />
          <Tab label="Nossa Missão" aria-label="Missão da empresa Info4"  tabIndex={0}/>
        </Tabs>
        <Box mt={2}>
          {value === 0 && (
            <Typography variant="body1" textAlign={'justify'} paragraph tabIndex={0}>
              Este site foi desenvolvido como um requisito da empresa Info4, com o objetivo de conectar influenciadores e empresas através de campanhas. Nosso projeto é voltado para criar um ambiente onde influenciadores podem encontrar oportunidades de trabalho e empresas podem encontrar os influenciadores ideais para suas campanhas de marketing.
            </Typography>
          )}
          {value === 1 && (
            <Typography variant="body1" textAlign={'justify'} paragraph tabIndex={0}>
              A Info4, uma empresa comprometida com a inovação e soluções tecnológicas, identificou a necessidade de uma plataforma eficiente que facilitasse a comunicação e colaboração entre influenciadores e empresas. A partir dessa visão, o Influence Connect foi criado para atender a essas demandas, seguindo uma série de regras e requisitos rigorosos para garantir seu funcionamento correto e seguro.
            </Typography>
          )}
          {value === 2 && (
            <Typography variant="body1" textAlign={'justify'} paragraph tabIndex={0}>
              Nosso objetivo é fornecer uma plataforma robusta e segura que atenda às necessidades de nossos usuários, promovendo conexões valiosas e ajudando a impulsionar campanhas de marketing eficazes. Acreditamos no poder da colaboração e estamos dedicados a oferecer a melhor experiência possível para nossos usuários.
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default About;
