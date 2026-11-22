
import { Container, Row, Col } from 'react-bootstrap';
import RecommendationCard from './RecommendationCard.jsx';

function RecommendationsSection({ recommendations }) {
  return (
    <section id="recomendaciones" className="py-5">
      <Container>
        <h2 className="section-title mb-4">
          Recomendaciones
        </h2>

        <Row className="g-4">
          {recommendations.map((recommendation) => (
            <Col key={recommendation.id} xs={12} md={6} lg={4}>
              <RecommendationCard
                nombre={recommendation.nombre}
                mensaje={recommendation.mensaje}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default RecommendationsSection;
