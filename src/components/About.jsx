
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <section id="inicio" className="about-section py-5">
      <Container>
        <Row className="align-items-center g-4">
          <Col xs={12} md={4} className="text-center">
            <Image
              src="/images/avatar.png"
              alt="Avatar de presentación"
              fluid
              className="about-avatar"
            />
          </Col>

          <Col xs={12} md={8}>
            <h1 className="about-title">
              ¡Hola! Soy desarrollador de software 👋
            </h1>

            <p>
              Soy estudiante de Análisis y Desarrollo de
              Software. Me interesa el desarrollo web,
              la programación y la construcción de
              aplicaciones funcionales.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
