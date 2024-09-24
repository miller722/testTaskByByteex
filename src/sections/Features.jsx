import { Container, Row, Col, Image } from "react-bootstrap";
import ButtonPrimary from "../components/ButtonPrimary";

export default function Features() {
  return (
    <section id="features" className="features-section">
      <Container>
        <h4 className="features-brands__heading">as aeen in</h4>
        <Row className="features-brands__wrapper">
          <Col xs={6} md={2}>
            <Image src="images/eco-stylist-logo.png" alt="Eco Stylist" fluid />
          </Col>
          <Col xs={6} md={2}>
            <Image
              src="images/canadian-living-logo.png"
              alt="Canadian Living"
              fluid
            />
          </Col>
          <Col xs={6} md={2}>
            <Image
              src="images/jillian-harris-logo.png"
              alt="Jillian Harris"
              fluid
            />
          </Col>
          <Col xs={6} md={2}>
            <Image src="images/the-eco-hub-logo.png" alt="The Eco Hub" fluid />
          </Col>
          <Col xs={6} md={2}>
            <Image src="images/trendhunter-logo.png" alt="Trendhunter" fluid />
          </Col>
        </Row>
        <h2 className="features-title">Loungewear you can be proud of.</h2>
        <Row className="features-content-wrapper">
          <Col xxl={{ span: 5 }}>
            <div className="features-list">
              <div className="mb-4">
                <div className="features-img-heading-box">
                  <img
                    src="icons/icon-2.svg"
                    className="features-icon"
                    alt="icon"
                  />
                  <h5 className="features-descriptions__heading">
                    Ethically sourced.
                  </h5>
                </div>
                <p className="features-descriptions text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
              <div className="mb-4">
                <div className="features-img-heading-box">
                  <img
                    src="icons/icon-4.svg"
                    className="features-icon"
                    alt="icon"
                  />
                  <h5 className="features-descriptions__heading">
                    Responsibly made.
                  </h5>
                </div>
                <p className="features-descriptions text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
              <div className="mb-4">
                <div className="features-img-heading-box">
                  <img
                    src="icons/icon-1.svg"
                    className="features-icon"
                    alt="icon"
                  />
                  <h5 className="features-descriptions__heading">
                    Made for living in.
                  </h5>
                </div>
                <p className="features-descriptions text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
              <div className="mb-4">
                <div className="features-img-heading-box">
                  <img
                    src="icons/icon-3.svg"
                    className="features-icon"
                    alt="icon"
                  />
                  <h5 className="features-descriptions__heading">
                    Unimaginably comfortable.
                  </h5>
                </div>
                <p className="features-descriptions text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>
              </div>
              <div className="features-button">
                <ButtonPrimary description="Customize Your Outfit" />
              </div>
            </div>
          </Col>
          <Col xxl={{ span: 4, offset: 3 }}>
            <div className="image__wrapper">
              <img
                src="images/section-features-img.png"
                className="image"
                alt="Loungewear"
              />
              <p>White Robe</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
