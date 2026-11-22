
import { Card } from 'react-bootstrap';

function SkillCard({ nombre, experiencia, icono }) {
  return (
    <Card className="skill-card h-100">
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <div className="skill-icon-wrapper">
          <i
            className={`bi ${icono}`}
            aria-hidden="true"
          />
        </div>

        <Card.Title className="skill-name">
          {nombre}
        </Card.Title>

        <Card.Text className="skill-description">
          {experiencia}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SkillCard;
