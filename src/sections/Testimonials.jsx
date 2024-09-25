import { Container } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonPrimary from "../components/ButtonPrimary";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className=" text-center">What are our fans saying?</h2>
      <p className="testimonials__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat. Fusce non nibh luctus.
      </p>
      <div className="testimonials-wrapper-img">
        <img
          src="images/testimonials/testimonials-image-1.png"
          alt="Image 1"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-2.png"
          alt="Image 2"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-3.png"
          alt="Image 3"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-4.png"
          alt="Image 4"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-5.png"
          alt="Image 5"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-6.png"
          alt="Image 6"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-7.png"
          alt="Image 7"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-8.png"
          alt="Image 8"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-9.png"
          alt="Image 9"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-10.png"
          alt="Image 10"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-11.png"
          alt="Image 11"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-12.png"
          alt="Image 12"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-13.png"
          alt="Image 13"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-14.png"
          alt="Image 14"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-15.png"
          alt="Image 15"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-16.png"
          alt="Image 16"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-17.png"
          alt="Image 17"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-18.png"
          alt="Image 18"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-19.png"
          alt="Image 19"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-20.png"
          alt="Image 20"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-21.png"
          alt="Image 21"
          className="testimonials-image"
        />
        <img
          src="images/testimonials/testimonials-image-22.png"
          alt="Image 22"
          className="testimonials-image"
        />
      </div>
      <Container className="testimonials-reviews-wrapper">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={true}
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
            <div className="testimonial-content">
              <div className="d-flex align-items-center">
                <div className="testimonial-avatar"></div>
                <div className="mx-3">
                  <div className="stars text-warning">★★★★★</div>
                  <span>- Jane S.</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
                eget aliquet mi.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-content">
              <div className="d-flex align-items-center">
                <div className="testimonial-avatar"></div>
                <div className="mx-3">
                  <div className="stars text-warning">★★★★★</div>
                  <span>- Jane S.</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
                eget aliquet mi. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Pellentesque sed sollicitudin dolor, non
                sodales.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-content">
              <div className="d-flex align-items-center">
                <div className="testimonial-avatar"></div>
                <div className="mx-3">
                  <div className="stars text-warning">★★★★★</div>
                  <span>- Jane S.</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed sollicitudin dolor, non sodales justo. Aenean
                eget aliquet mi.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="d-flex flex-column align-items-center mt-5">
          <ButtonPrimary description="Customize Your Outfit" />
          <div className="mt-2 customer-reviews">
            <span role="img" aria-label="star">
              ⭐️⭐️⭐️⭐️⭐️
            </span>
            <span> Over 500+ 5 Star Reviews Online</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
