import { Container, Typography, Box, useMediaQuery, useTheme } from '@mui/material';

const PrivacyPolicy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container >
      <Box mt={isMobile ? 2 : 5} mb={isMobile ? 2 : 5}>
        <Typography variant="h3" gutterBottom tabIndex={0}>
          Política de Privacidade
        </Typography>
        <Typography variant="body1" textAlign={'justify'} paragraph tabIndex={0}>
          Bem-vindo ao Influence Connect. Nós levamos sua privacidade a sério e esta política explica como coletamos, usamos, e protegemos suas informações.
        </Typography>
        <Typography variant="h5" gutterBottom tabIndex={0}>
          Informações que coletamos
        </Typography>
        <Typography variant="body1" paragraph textAlign={'justify'} tabIndex={0}>
          Coletamos informações que você nos fornece diretamente, como quando você cria uma conta, atualiza seu perfil, ou entra em contato conosco. Também coletamos informações automaticamente sobre sua interação com nosso site.
        </Typography>
        <Typography variant="h5" gutterBottom tabIndex={0}>
          Como usamos suas informações
        </Typography>
        <Typography variant="body1" paragraph textAlign={'justify'} tabIndex={0}>
          Usamos suas informações para fornecer, manter e melhorar nossos serviços, além de comunicar com você sobre atualizações, ofertas e outras informações relevantes.
        </Typography>
        <Typography variant="h5" gutterBottom tabIndex={0}>
          Compartilhamento de informações
        </Typography>
        <Typography variant="body1" paragraph textAlign={'justify'} tabIndex={0}>
          Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
        </Typography>
        <Typography variant="h5" gutterBottom tabIndex={0}>
          Segurança
        </Typography>
        <Typography variant="body1" paragraph textAlign={'justify'} tabIndex={0}>
          Implementamos medidas de segurança para proteger suas informações contra acesso, uso ou divulgação não autorizados.
        </Typography>
        <Typography variant="h5" gutterBottom tabIndex={0}>
          Alterações nesta política
        </Typography>
        <Typography variant="body1" paragraph textAlign={'justify'} tabIndex={0}>
          Podemos atualizar esta política de privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política em nosso site.
        </Typography>
        <Typography variant="body1" paragraph textAlign={'justify'} tabIndex={0}>
          Se você tiver alguma dúvida sobre nossa política de privacidade, entre em contato conosco.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
