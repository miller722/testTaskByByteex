import { Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from "../components/ButtonPrimary";

export default function Final() {
  return (
    <section className="final-section">
      <h2>Find something you love.</h2>
      <p className="final-mobile">Click below to browse our collection!</p>
      <p className="final-desktop">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat.
      </p>
      <div className="final-wrapper-img">
        <img src="images/Final-img.png" className="image" alt="image" />
      </div>
      <div className="final-mobile">
        <ButtonPrimary description="Customize Your Outfit" />
        <div className="mt-2 customer-reviews">
          <span role="img" aria-label="star">
            ⭐️⭐️⭐️⭐️⭐️
          </span>
          <span> Over 500+ 5 Star Reviews Online</span>
        </div>
      </div>
      <div className="final-desktop">
        <ButtonPrimary description="Customize Your Outfit" />
        <div className="mt-2 customer-reviews align-items-center">
          <img src="icons/clock-icon.svg" alt="icon" />
          <span className="pay-label">Ships in 1-2 Days</span>
          <img src="images/pay-img.png" alt="image" />
        </div>
      </div>
      <div className="final-desktop">
        <div className="d-flex">
          <div className="final-footer__item">
            <img src="icons/footer-icon-1.svg" alt="icon" />

            <p>
              FREE Shipping on <br /> Orders over $200
            </p>
          </div>
          <div className="final-footer__item">
            <img src="icons/footer-icon-2.svg" alt="icon" />

            <p>
              Over 500+ 5 Star <br /> Reviews Online
            </p>
          </div>
          <div className="final-footer__item">
            <img src="icons/footer-icon-3.svg" alt="icon" />

            <p>
              Made ethically
              <br /> and responsibly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
