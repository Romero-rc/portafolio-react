
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/portfolio.js';

function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="content-section projects-section"
    >
      <Container>
        <div className="section-heading">
          <span className="section-eyebrow">
            EXPERIENCIA PRÁCTICA
          </span>

          <h2 className="section-title">
            Proyectos
          </h2>

          <p className="section-description">
            Algunos trabajos y ejercicios desarrollados
            durante mi formación en software.
          </p>
        </div>

        <Row className="g-4">
          {projects.map((project) => (
            <Col
              key={project.id}
              xs={12}
              md={6}
              lg={4}
            >
              <ProjectCard
                nombre={project.nombre}
                descripcion={project.descripcion}
                tecnologias={project.tecnologias}
                icono={project.icono}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProjectsSection;
