
import { Card } from 'react-bootstrap';

function SkillCard({ nombre, experiencia, icono }) {
  return (
    <Card className="skill-card h-100 text-center">
      <Card.Body>
        <i
          className={`bi ${icono} skill-icon`}
          aria-hidden="true"
        ></i>

        <Card.Title className="mt-3">
          {nombre}
        </Card.Title>

        <Card.Text>
          {experiencia}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SkillCard;
