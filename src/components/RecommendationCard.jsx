
import { Card } from 'react-bootstrap';

function RecommendationCard({ nombre, mensaje }) {
  return (
    <Card className="recommendation-card h-100">
      <Card.Body className="d-flex flex-column">
        <div className="quote-icon">
          <i
            className="bi bi-quote"
            aria-hidden="true"
          />
        </div>

        <Card.Text className="recommendation-text">
          {mensaje}
        </Card.Text>

        <div className="recommendation-author mt-auto">
          <span className="author-avatar" aria-hidden="true">
            <i className="bi bi-person" />
          </span>

          <span>{nombre}</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default RecommendationCard;
