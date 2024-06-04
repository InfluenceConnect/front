import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <header>
      <Navbar expand="sm" className="bg-dark" data-bs-theme="dark">
        <Container className="justify-content-between">
          <Navbar.Brand href="#home">Influence Connect</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            {/*Para ajustar o espaçamento e lugar desses Nav.Link
             https://getbootstrap.com/docs/5.0/utilities/spacing/ */}
            <Nav className="ms-auto">
              <Nav.Link>Contato</Nav.Link>
              <Nav.Link href="#link">Sobre</Nav.Link>
              <Nav.Link href="#home">Suporte</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
