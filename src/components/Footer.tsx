import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="bg-dark">
        <Container className=" text-white p-4 pt-5" data-bs-theme="dark">
          <Row>
            <Col lg="4" md="12" className="mb-md-0">
              <h5
                className="border-bottom border-secondary"
                style={{ width: "fit-content" }}
              >
                Influence Connect
              </h5>
              <p>
                Conecta empresas e influenciadores, otimiza campanhas em mídias
                sociais, oferece eficiência e controle total.
              </p>
            </Col>
            <Col lg="2" md="12" className="mb-md-0">
              <h5
                className="border-bottom border-secondary"
                style={{ width: "fit-content" }}
              >
                Links
              </h5>
              <ul className="list-unstyled d-flex gap-2 flex-column">
                <li>
                  <a href="#!" className="text-info">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-info">
                    Repositório
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg="2" md="12" className="mb-md-0">
              <h5
                className="border-bottom border-secondary"
                style={{ width: "fit-content" }}
              >
                Contatos
              </h5>
              <ul className="list-unstyled d-flex gap-2 flex-column">
                <li>
                  <a
                    href=""
                    target="_blanket"
                    className="d-flex gap-2 text-decoration-none text-info"
                  >
                    <BsFacebook size={20} color="light" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blanket"
                    className="d-flex gap-2 text-decoration-none text-info"
                  >
                    <BsWhatsapp size={20} />
                    <span>Whatsapp</span>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a
          className="text-dark"
          href="https://github.com/InfluenceConnect/"
          target="_blanket"
        >
          github.com/InfluenceConnect
        </a>
      </div>
    </footer>
  );
};

export default Footer;
