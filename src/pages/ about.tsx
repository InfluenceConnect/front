
import { Container, Typography, Box, useMediaQuery, useTheme } from '@mui/material';


  
       



 const  About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
        <Container>
      <Box mt={isMobile ? 2 : 5} mb={isMobile ? 2 : 5}>
        <Typography variant="h3" gutterBottom>
          Sobre Nós
        </Typography>
        <Typography variant="body1" textAlign={'justify'} paragraph>
          Este site foi desenvolvido como um requisito da empresa Info4, com o objetivo de conectar influenciadores e empresas através de campanhas. Nosso projeto é voltado para criar um ambiente onde influenciadores podem encontrar oportunidades de trabalho e empresas podem encontrar os influenciadores ideais para suas campanhas de marketing.
        </Typography>
        <Typography variant="body1" textAlign={'justify'} paragraph>
          A Info4, uma empresa comprometida com a inovação e soluções tecnológicas, identificou a necessidade de uma plataforma eficiente que facilitasse a comunicação e colaboração entre influenciadores e empresas. A partir dessa visão, o Influence Connect foi criado para atender a essas demandas, seguindo uma série de regras e requisitos rigorosos para garantir seu funcionamento correto e seguro.
        </Typography>
        <Typography variant="body1" textAlign={'justify'} paragraph>
          Nosso objetivo é fornecer uma plataforma robusta e segura que atenda às necessidades de nossos usuários, promovendo conexões valiosas e ajudando a impulsionar campanhas de marketing eficazes. Acreditamos no poder da colaboração e estamos dedicados a oferecer a melhor experiência possível para nossos usuários.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;

   
