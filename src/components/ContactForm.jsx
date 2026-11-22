
import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert
} from 'react-bootstrap';

function ContactForm({ onAddRecommendation }) {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const nombreLimpio = nombre.trim();
    const mensajeLimpio = mensaje.trim();

    if (!mensajeLimpio) {
      return;
    }

    const nuevaRecomendacion = {
      id: crypto.randomUUID(),
      nombre: nombreLimpio || 'Anónimo',
      mensaje: mensajeLimpio
    };

    onAddRecommendation(nuevaRecomendacion);

    setNombre('');
    setMensaje('');
    setEnviado(true);
  }

  return (
    <section id="contacto" className="contact-section">
      <Container>
        <div className="contact-panel">
          <div className="section-heading text-center">
            <span className="section-eyebrow">
              PARTICIPA
            </span>

            <h2 className="section-title">
              Deja una recomendación
            </h2>

            <p className="section-description mx-auto">
              Comparte un comentario para probar
              la interacción de esta aplicación React.
            </p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col xs={12} md={5}>
                <Form.Group controlId="nombre">
                  <Form.Label>
                    Nombre (opcional)
                  </Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Escribe tu nombre"
                    value={nombre}
                    maxLength={80}
                    onChange={(event) => {
                      setNombre(event.target.value);
                      setEnviado(false);
                    }}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={7}>
                <Form.Group controlId="mensaje">
                  <Form.Label>
                    Recomendación
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Escribe tu recomendación..."
                    value={mensaje}
                    maxLength={500}
                    required
                    onChange={(event) => {
                      setMensaje(event.target.value);
                      setEnviado(false);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="form-actions">
              <Button
                type="submit"
                className="btn-primary-custom"
              >
                <i
                  className="bi bi-send me-2"
                  aria-hidden="true"
                />
                Enviar recomendación
              </Button>
            </div>

            {enviado && (
              <Alert
                variant="success"
                className="form-success mt-3"
                role="status"
              >
                Tu recomendación fue agregada
                correctamente a la página.
              </Alert>
            )}

            <p className="form-note">
              Esta demostración no guarda los
              mensajes en una base de datos.
              Al recargar la página se restablecen.
            </p>
          </Form>
        </div>
      </Container>
    </section>
  );
}

export default ContactForm;
