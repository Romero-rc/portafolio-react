
import { Card } from 'react-bootstrap';

function RecommendationCard({ nombre, mensaje }) {
  return (
    <Card className="recommendation-card h-100">
      <Card.Body>
        <Card.Text>
          <i className="bi bi-quote me-2" aria-hidden="true"></i>
          {mensaje}
        </Card.Text>

        <Card.Footer className="bg-transparent border-0">
          <small className="text-muted">
            — {nombre}
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default RecommendationCard;
