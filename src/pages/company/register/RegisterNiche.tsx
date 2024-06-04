
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function RegisterNicheCompany() {


    return (
        
        <Container   className='d-flex align-content-center '>
    
         <Row className="justify-content-md-center">

        <Col xs lg="2">
        <Form>
      <div className="mb-3 checkbox-container" style={{ border: '1px solid black' ,padding:5, gap:5, borderRadius:5,margin:10}}>
        <Form.Check
          type="checkbox"
          id="esportes"
          label="Esportes"
        />
      </div>

      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="moda"
          label="Moda"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="negocios"
          label="Negócios"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="tecnologia"
          label="Tecnologia"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="culinaria"
          label="Culinária"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="games"
          label="Games"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="automoveis"
          label="Automóveis "
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="pets"
          label="Pet's"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="politica-ativismo"
          label="Política e Ativismo"
        />
      </div>
    </Form>



        </Col>
        {/* <Col md="auto"></Col> */}


        <Col xs lg="2">
        <Form>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="musica"
          label="Música"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="saude-bem-estar"
          label="Saúde e Bem Estar"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="design-interiores"
          label="Design Interiores"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="fotografia"
          label="Fotografia"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="educacao"
          label="Educação"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="sustentabilidade"
          label="Sustentabilidade"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="viagens"
          label="Viagens "
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="vida"
          label="Vida"
        />
      </div>
      <div className="mb-3 checkbox-container">
        <Form.Check
          type="checkbox"
          id="outros"
          label="Outros"
        />
      </div>
    </Form>
        </Col>
      </Row>
      <Button variant="info" >Avançar</Button>
      
      
      </Container>
      
    
    
    );
  }
  
  export default RegisterNicheCompany;



  

