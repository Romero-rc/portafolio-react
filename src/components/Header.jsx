
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="portfolio-navbar"
    >
      <Container>
        <Navbar.Brand href="#inicio">
          <span className="fw-bold d-block">
            Mi Portafolio
          </span>
          <small>Desarrollador de Software</small>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-principal" />

        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Sobre mí</Nav.Link>
            <Nav.Link href="#habilidades">Habilidades</Nav.Link>
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            <Nav.Link href="#recomendaciones">
              Recomendaciones
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
