import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/SimpleSlider.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,  // 넘어가는 속도
    slidesToShow: 1,  // 몇장씩 보이게
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={process.env.PUBLIC_URL + '/ad1.jpg'}  width="100%" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/ad2.jpg'}  width="100%" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/ad3.jpg'}  width="100%" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/ad4.jpg'}  width="100%" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/ad5.jpg'}  width="100%" />
      </div>
    </Slider>
  );
}