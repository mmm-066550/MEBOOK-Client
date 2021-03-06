import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "../assets/style/home-hero-slider.sass";
import { Link } from "react-router-dom";
import tech_bg from "../assets/img/hero/tech.webp";
import fiction from "../assets/img/hero/fiction.webp";
import medical from "../assets/img/hero/medical.webp";

export default function HomeHeroSlider() {
  return (
    <div className="hero-slider">
      <div className="slider-btns-container d-none d-md-flex">
        <div className="container">
          <button className="slider-btns-next">
            <i className="fal fa-arrow-left"></i>
          </button>
          <button className="slider-btns-prev">
            <i className="fal fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="swiper-pagination d-md-none"></div>
      <Swiper
        speed={2000}
        loop={true}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="home-hero-swiper"
        spaceBetween={0}
        autoplay={{ delay: 6000 }}
        slidesPerView={1}
        navigation={{
          nextEl: ".slider-btns-next",
          prevEl: ".slider-btns-prev",
        }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
      >
        <SwiperSlide className="hero-swiper-slide">
          <img className="slide-bg-img" src={fiction} alt="bg" />
          <div className="overlay"></div>
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="text-center offset-md-1 col-md-5 col-12 ms-5_X">
                  <div className="slide-info">
                    <h1>
                      bestselling <span>fiction</span> books
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link to={"/shop/category/literature-and-fiction"}>
                      Explore now
                      <i className="fal fa-arrow-right ms-4"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero-swiper-slide">
          <img className="slide-bg-img" src={tech_bg} alt="bg" />
          <div className="overlay"></div>
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="text-center offset-md-1 col-md-5 col-12 ms-5_X">
                  <div className="slide-info">
                    <h1>
                      bestselling <span>Tech</span> books
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link to={"/shop/category/computer-and-technology"}>
                      Explore now
                      <i className="fal fa-arrow-right ms-4"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero-swiper-slide">
          <img className="slide-bg-img" src={medical} alt="bg" />
          <div className="overlay"></div>
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="text-center offset-md-1 col-md-5 col-12 ms-5_X">
                  <div className="slide-info">
                    <h1>
                      bestselling <span>medical</span> books
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link to={"/shop/category/medical-books"}>
                      Explore now
                      <i className="fal fa-arrow-right ms-4"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
