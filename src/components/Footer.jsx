
import { Container, Button } from 'react-bootstrap';
import { profile } from '../data/portfolio.js';

function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches ? 'instant' : 'smooth'
    });
  }

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-content">
          <div>
            <strong>{profile.shortName}</strong>
            <p>
              {profile.role} · {profile.institution}
            </p>
          </div>

          <div className="footer-links">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de GitHub"
            >
              <i className="bi bi-github" aria-hidden="true" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Enviar correo electrónico"
            >
              <i
                className="bi bi-envelope"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.shortName}
          </span>

          <span>
            Desarrollado con React y Bootstrap
          </span>
        </div>
      </Container>

      <Button
        type="button"
        className="scroll-top-button"
        onClick={scrollToTop}
        aria-label="Volver al inicio"
        title="Volver al inicio"
      >
        <i
          className="bi bi-arrow-up"
          aria-hidden="true"
        />
      </Button>
    </footer>
  );
}

export default Footer;
