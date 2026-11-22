
import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from './SkillCard.jsx';
import { skills } from '../data/portfolio.js';

function SkillsSection() {
  return (
    <section id="habilidades" className="content-section">
      <Container>
        <div className="section-heading">
          <span className="section-eyebrow">
            TECNOLOGÍAS
          </span>

          <h2 className="section-title">
            Habilidades técnicas
          </h2>

          <p className="section-description">
            Herramientas y tecnologías que utilizo
            en mis actividades y proyectos de aprendizaje.
          </p>
        </div>

        <Row className="g-3">
          {skills.map((skill) => (
            <Col
              key={skill.id}
              xs={6}
              md={4}
              lg={2}
            >
              <SkillCard
                nombre={skill.nombre}
                experiencia={skill.experiencia}
                icono={skill.icono}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default SkillsSection;
