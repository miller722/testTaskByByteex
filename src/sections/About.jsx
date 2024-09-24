import { Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from "../components/ButtonPrimary";

export default function About() {
  return (
    <section className="about-section">
      <Container>
        <h2>Be your best self.</h2>
        <Row>
          <Col xxl={{ span: 4 }}>
            <div className="image__wrapper">
              <img
                src="images/about-img.png"
                alt="Loungewear"
                className="image"
              />
            </div>
          </Col>
          <Col xxl={{ offset: 2, span: 6 }}>
            <div className="about-content">
              <div className="about-description">
                <p>
                  Hi! My name’s [Insert Name], and I founded [Insert] in ____.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis sapien facilisis tincidunt pellentesque. In eget
                  ipsum et felis finibus consequat.
                </p>

                <p>
                  Fusce non nibh luctus, dignissim risus quis, bibendum dolor.
                  Donec placerat volutpat ligula, ac consectetur felis varius
                  non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque
                  est. Vivamus id arcu congue, faucibus libero nec, placerat
                  ligula.
                </p>

                <p>
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
                </p>

                <p>
                  Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
                  mattis, sapien eget lobortis fringilla, eros ipsum tristique
                  tellus, ac convallis urna massa at nibh.
                </p>

                <p>
                  Duis non fermentum augue. Vivamus laoreet aliquam risus, sed
                  euismod leo aliquam ut. Vivamus in felis eu lacus feugiat
                  aliquam nec in sapien.
                </p>

                <p>Cras mattis varius mollis.</p>
              </div>

              <ButtonPrimary description="Customize Your Outfit" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
