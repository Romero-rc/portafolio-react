
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ContactForm({ onAddRecommendation }) {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

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
  }

  return (
    <section id="contacto" className="py-5">
      <Container>
        <h2 className="section-title text-center mb-4">
          Deja una recomendación
        </h2>

        <Form
          onSubmit={handleSubmit}
          className="contact-form mx-auto"
        >
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre (opcional)</Form.Label>

            <Form.Control
              type="text"
              placeholder="Escribe tu nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="mensaje">
            <Form.Label>Mensaje</Form.Label>

            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Escribe tu recomendación"
              value={mensaje}
              onChange={(event) => setMensaje(event.target.value)}
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" className="submit-button">
              Enviar recomendación
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}

export default ContactForm;
