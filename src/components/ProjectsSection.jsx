
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/portfolio.js';

function ProjectsSection() {
  return (
    <section id="proyectos" className="py-5">
      <Container>
        <h2 className="section-title mb-4">
          Proyectos
        </h2>

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={4}>
              <ProjectCard
                nombre={project.nombre}
                descripcion={project.descripcion}
                tecnologias={project.tecnologias}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProjectsSection;
