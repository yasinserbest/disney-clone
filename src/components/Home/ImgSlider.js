import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ImgSlider.css";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider className="carousel" {...settings}>
      <div className="wrap">
        <a className="wrap__item">
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </div>
      <div className="wrap">
        <a className="wrap__item">
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </div>
      <div className="wrap">
        <a className="wrap__item">
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </div>
      <div className="wrap">
        <a className="wrap__item">
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </div>
    </Slider>
  );
};
export default ImgSlider;
