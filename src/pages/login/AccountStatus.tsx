import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { BsInfoCircle } from 'react-icons/bs';

const AccountStatus: React.FC = () => {
  const status = "em análise"; //apenas provisorio ate ter a api 

  const statusClasses: { [key: string]: string } = {
    "em análise": "warning",
    "recusada": "danger",
    "desativada": "secondary"
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center">
            <Card.Header>
              <BsInfoCircle size={24} /> {/* Ícone moderno do Bootstrap */}
            </Card.Header>
            <Card.Body>
              <Card.Title>Status da Conta</Card.Title>
              <Card.Text>
                Seu status atual é <span className={`text-${statusClasses[status]}`}>{status}</span>.
              </Card.Text>
              <Card.Text>
                Informações detalhadas sobre o status da sua conta serão exibidas aqui.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountStatus;
