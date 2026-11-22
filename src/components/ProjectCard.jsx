
import { Card, Badge } from 'react-bootstrap';

function ProjectCard({
  nombre,
  descripcion,
  tecnologias,
  icono
}) {
  return (
    <Card className="project-card h-100">
      <Card.Body>
        <div className="project-icon">
          <i
            className={`bi ${icono}`}
            aria-hidden="true"
          />
        </div>

        <Card.Title className="project-title">
          {nombre}
        </Card.Title>

        <Card.Text className="project-description">
          {descripcion}
        </Card.Text>

        <div
          className="project-technologies"
          aria-label="Tecnologías utilizadas"
        >
          {tecnologias.map((tecnologia) => (
            <Badge
              key={tecnologia}
              className="technology-badge"
            >
              {tecnologia}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
