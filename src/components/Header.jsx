
import { Container, Nav, Navbar } from 'react-bootstrap';
import { profile } from '../data/portfolio.js';

function Header() {
  return (
    <header className="site-header">
      <Navbar
        expand="lg"
        className="portfolio-navbar"
        aria-label="Navegación principal"
      >
        <Container>
          <Navbar.Brand
            href="#inicio"
            className="brand d-flex align-items-center gap-3"
          >
            <span className="brand-symbol" aria-hidden="true">
              {'</>'}
            </span>

            <span className="brand-copy">
              <span className="brand-name">
                {profile.shortName}
              </span>
              <span className="brand-role">
                Desarrollo de Software
              </span>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="portfolio-navigation"
            aria-label="Abrir menú de navegación"
          />

          <Navbar.Collapse id="portfolio-navigation">
            <Nav className="ms-auto align-items-lg-center gap-lg-2">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#habilidades">Habilidades</Nav.Link>
              <Nav.Link href="#proyectos">Proyectos</Nav.Link>
              <Nav.Link href="#recomendaciones">
                Recomendaciones
              </Nav.Link>

              <Nav.Link
                className="nav-contact"
                href={`mailto:${profile.email}`}
              >
                Contacto
                <i
                  className="bi bi-arrow-up-right ms-2"
                  aria-hidden="true"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
