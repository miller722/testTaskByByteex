import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from "./components/ButtonPrimary";
import Header from "./components/Header";
import "./fonts/style.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section className="hero-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="hero-content">
              <img src="icons/logo.svg" className="logo" alt="logo" />
              <h1>Don’t apologize for being comfortable.</h1>
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
            <Col md={6} className="hero-image">
              <img
                src="images/section-hero-img.png"
                alt="Loungewear"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="features" className="features-section">
        <Container>
          <Row>
            <Col xxl={{ span: 5 }}>
              <h2 className="features-title">Loungewear You Can Be Proud Of</h2>

              <div className="features-list">
                <div className="mb-4">
                  <div className="d-flex align-items-center">
                    <img
                      src="icons/icon-2.svg"
                      className="features-img"
                      alt="icon"
                    />
                    <h5 className="features-descriptions__heading">
                      Ethically sourced.
                    </h5>
                  </div>
                  <p className="features-descriptions text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.
                  </p>
                </div>
                <div className="mb-4">
                  <div className="d-flex align-items-center">
                    <img
                      src="icons/icon-4.svg"
                      className="features-img"
                      alt="icon"
                    />
                    <h5 className="features-descriptions__heading">
                      Responsibly made.
                    </h5>
                  </div>
                  <p className="features-descriptions text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.
                  </p>
                </div>
                <div className="mb-4">
                  <div className="d-flex align-items-center">
                    <img
                      src="icons/icon-1.svg"
                      className="features-img"
                      alt="icon"
                    />
                    <h5 className="features-descriptions__heading">
                      Made for living in.
                    </h5>
                  </div>
                  <p className="features-descriptions text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.
                  </p>
                </div>
                <div className="mb-4">
                  <div className="d-flex align-items-center">
                    <img
                      src="icons/icon-3.svg"
                      className="features-img"
                      alt="icon"
                    />
                    <h5 className="features-descriptions__heading">
                      Unimaginably comfortable.
                    </h5>
                  </div>
                  <p className="features-descriptions text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce lobortis sapien facilisis tincidunt pellentesque. In
                    eget ipsum et felis finibus consequat.
                  </p>
                </div>
              </div>
            </Col>
            <Col xxl={{ span: 5, offset: 2 }}>
              <div className="features-image__wrapper">
                <img
                  src="images/section-features-img.png"
                  className="features-image"
                  alt="Loungewear"
                />
                <p>White Robe</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-section">
        <div className="about-image">
          <img src="loungewear.jpg" alt="Loungewear" />
        </div>
        <div className="about-content">
          <h1>Be your best self.</h1>
          <p>Hi! My name is [Insert Name], and I founded [Insert] in [Year].</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis finibus consequat.
          </p>
          <p>
            Fusce non nibh lacus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
          <button>Customize Your Outfit</button>
        </div>
      </section>
    </>
  );
}

export default App;
