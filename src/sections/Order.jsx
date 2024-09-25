import { Container } from "react-bootstrap";
import ButtonPrimary from "../components/ButtonPrimary";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Order() {
  return (
    <section className="order-section">
      <Container className="text-center my-5">
        <h2 className="order__title">Comfort made easy</h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          slidesPerView={1}
          spaceBetween={10}
          // Responsive breakpoints
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="order__card">
              <img
                src="icons/card-icon-1.svg"
                className="card-icon"
                alt="icon"
              />
              <h4>You save.</h4>
              <p>Browse our comfort sets and save 15% when you bundle.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="order__card card--pink">
              <img src="icons/card-icon-2.svg" alt="icon" />
              <h4>We ship.</h4>
              <p>We ship your items within 1-2 days of receiving your order.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="order__card">
              <img
                src="icons/card-icon-3.svg"
                className="card-icon"
                alt="icon"
              />
              <h4>You enjoy!</h4>
              <p>Wear hernest around the house, out on the town, or in bed.</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <ButtonPrimary description="Customize Your Outfit" />
        <div className="mt-2 customer-reviews">
          <span role="img" aria-label="star">
            ⭐️⭐️⭐️⭐️⭐️
          </span>
          <span> Over 500+ 5 Star Reviews Online</span>
        </div>
      </Container>
    </section>
  );
}
