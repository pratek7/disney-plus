import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className=" mt-5   ">
      <div>
        <img src="/images/slider-badag.jpg" alt="" className="sliderImg " />
      </div>
      <div>
        <img src="/images/slider-badging.jpg" alt="" className="sliderImg" />
      </div>
      <div>
        <img src="/images/slider-scale.jpg" alt="" className="sliderImg" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
