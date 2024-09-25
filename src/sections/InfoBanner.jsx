import { Container, Row, Col } from "react-bootstrap";

export default function InfoBanner() {
  return (
    <section className="infoBanner-section">
      <Container className="text-center py-3">
        <h2 className="mb-5">Our total green impact</h2>
        <Row>
          <Col className="infoBanner__item" md={4}>
            <div className="mb-3">
              <img src="icons/infoBanner-icon-1.svg" alt="icon" />
            </div>
            <h4>3,927 kg</h4>
            <p>of CO2 saved</p>
          </Col>
          <Col className="infoBanner__item" md={4}>
            <div className="mb-3">
              <img src="icons/infoBanner-icon-2.svg" alt="icon" />
            </div>
            <h4>2,546,167 days</h4>
            <p>of drinking water saved</p>
          </Col>

          <Col className="infoBanner__item" md={4}>
            <div className="mb-3">
              <img src="icons/infoBanner-icon-3.svg" alt="icon" />
            </div>
            <h4>7,321 kWh</h4>
            <p>of energy saved</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
