
import { Container, Row, Col, Button } from 'react-bootstrap';
import { profile } from '../data/portfolio.js';

function About() {
  return (
    <section id="inicio" className="about-section">
      <Container>
        <Row className="align-items-center g-5">
          <Col xs={12} lg={5}>
            <div className="hero-visual">
              <div className="avatar-frame">
                <img
                  src="/images/avatar.png"
                  alt="Ilustración de un desarrollador trabajando"
                  className="about-avatar"
                />
              </div>

              <div className="hero-floating-label">
                <i
                  className="bi bi-code-slash"
                  aria-hidden="true"
                />
                Aprendiz ADSO
              </div>
            </div>
          </Col>

          <Col xs={12} lg={7}>
            <div className="hero-content">
              <span className="eyebrow">
                <i
                  className="bi bi-mortarboard me-2"
                  aria-hidden="true"
                />
                {profile.role}
              </span>

              <h1 className="hero-title">
                Hola, soy{' '}
                <span className="gradient-text">
                  Michael.
                </span>
              </h1>

              <h2 className="hero-headline">
                {profile.headline}
              </h2>

              <p className="hero-description">
                {profile.description}
              </p>

              <div className="hero-meta">
                <span>
                  <i
                    className="bi bi-geo-alt"
                    aria-hidden="true"
                  />
                  {profile.location}
                </span>

                <span>
                  <i
                    className="bi bi-book"
                    aria-hidden="true"
                  />
                  {profile.institution} · ADSO
                </span>
              </div>

              <div className="hero-actions">
                <Button
                  as="a"
                  href="#proyectos"
                  className="btn-primary-custom"
                >
                  Ver proyectos
                  <i
                    className="bi bi-arrow-down-right ms-2"
                    aria-hidden="true"
                  />
                </Button>

                <Button
                  as="a"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-custom"
                >
                  <i
                    className="bi bi-github me-2"
                    aria-hidden="true"
                  />
                  GitHub
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
