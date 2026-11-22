
import { Container, Row, Col } from 'react-bootstrap';
import RecommendationCard from './RecommendationCard.jsx';

function RecommendationsSection({ recommendations }) {
  return (
    <section
      id="recomendaciones"
      className="content-section"
    >
      <Container>
        <div className="section-heading">
          <span className="section-eyebrow">
            ACTIVIDAD ACADÉMICA
          </span>

          <h2 className="section-title">
            Recomendaciones
          </h2>

          <p className="section-description">
            Apartado de recomendaciones del portafolio.
            Los textos iniciales son demostrativos.
          </p>
        </div>

        <Row className="g-4" aria-live="polite">
          {recommendations.map((recommendation) => (
            <Col
              key={recommendation.id}
              xs={12}
              md={6}
              lg={4}
            >
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
