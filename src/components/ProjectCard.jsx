
import { Card, Badge } from 'react-bootstrap';

function ProjectCard({ nombre, descripcion, tecnologias }) {
  return (
    <Card className="project-card h-100">
      <Card.Body>
        <Card.Title className="project-title">
          {nombre}
        </Card.Title>

        <Card.Text>{descripcion}</Card.Text>

        <div className="d-flex flex-wrap gap-2">
          {tecnologias.map((tecnologia) => (
            <Badge
              key={tecnologia}
              bg="light"
              text="dark"
              className="border"
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
