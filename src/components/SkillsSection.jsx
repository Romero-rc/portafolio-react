
import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from './SkillCard.jsx';
import { skills } from '../data/portfolio.js';

function SkillsSection() {
  return (
    <section id="habilidades" className="py-5">
      <Container>
        <h2 className="section-title mb-4">
          Habilidades
        </h2>

        <Row className="g-4">
          {skills.map((skill) => (
            <Col key={skill.id} xs={12} sm={6} md={4} lg={3}>
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
