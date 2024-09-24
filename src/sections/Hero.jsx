import { Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from "../components/ButtonPrimary";

export default function Hero() {
  return (
    <section className="hero-section py-5">
      <Container>
        <div className="logo-wrapper">
          <img src="icons/logo.svg" className="logo" alt="logo" />
        </div>
        <h1>Don’t apologize for being comfortable.</h1>
        <Row className="hero-content-wrapper">
          <Col md={6} className="hero-content">
            <ul className="hero-list">
              <li>
                <img src="icons/icon-1.svg" alt="icon" />
                Beautiful, comfortable loungewear for day or night.
              </li>
              <li>
                <img src="icons/icon-2.svg" alt="icon" />
                No wasteful extras, like tags or plastic packaging.
              </li>
              <li>
                <img src="icons/icon-3.svg" alt="icon" />
                Our signature fabric is incredibly comfortable—unlike anything
                you've ever felt.
              </li>
            </ul>
            <ButtonPrimary description="Customize Your Outfit" />
            {/* <div className="review mt-4">
                <p>
                  <strong>Amy P.</strong> Overjoyed with my Loungewear. I have
                  the jogger and the sweatsuit. Quality, comfort, and very warm.
                  From the compostable packaging to the supplied washing bag,
                  even the garments smell nice when taken out of the package.
                </p>
              </div> */}
          </Col>
          <Col md={6} className="image__wrapper">
            <img
              src="images/section-hero-img.png"
              alt="Loungewear"
              className="image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
