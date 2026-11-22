
import { Button } from 'react-bootstrap';

function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <footer>
      <Button
        type="button"
        className="scroll-top-button"
        onClick={scrollToTop}
        aria-label="Volver al inicio"
        title="Volver al inicio"
      >
        <i className="bi bi-arrow-up" aria-hidden="true"></i>
      </Button>
    </footer>
  );
}

export default Footer;
