import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <div className="header">
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <span className="me-3">
            CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)
          </span>
          <span className="me-3">|</span>
          <span className="me-3 shipping">
            FREE SHIPPING on orders &gt; $200
          </span>
          <span className="me-3">|</span>
          <span>easy 45 day return window.</span>
        </div>
      </Container>
    </div>
  );
}
