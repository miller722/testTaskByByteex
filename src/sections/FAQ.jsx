import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from "../components/ButtonPrimary";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <Container>
        <Row>
          <Col xxl={{ span: 7 }}>
            <h2 className="mb-5">Frequently asked questions.</h2>
            <ul>
              {faqs.map((faq, index) => (
                <li key={index} className="faq-item">
                  <div
                    className="faq-question d-flex justify-content-between align-items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="toggle-symbol">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  {openIndex === index && (
                    <div className="faq-answer mt-2">{faq.answer}</div>
                  )}
                </li>
              ))}
            </ul>
          </Col>

          <Col xxl={{ span: 4, offset: 1 }}>
            <div>
              <img
                src="images/FAQ-img.png"
                alt="Image 1"
                className="image faq-image"
              />
            </div>
            <div className="faq__button">
              <ButtonPrimary description="Customize Your Outfit" />
              <div className="mt-2 customer-reviews">
                <span role="img" aria-label="star">
                  ⭐️⭐️⭐️⭐️⭐️
                </span>
                <span> Over 500+ 5 Star Reviews Online</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
