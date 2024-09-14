import React, { useState, useEffect } from "react";
import TestimonialData from "./TestimonialData";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './Arrow';

export default function Achievements() {
  const [showArrows, setShowArrows] = useState(window.innerWidth > 600);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [slidesToScroll, setSlidesToScroll] = useState(1);

  const handleResize = () => {
    setShowArrows(window.innerWidth > 600);
    if (window.innerWidth > 1200) {
      setSlidesToShow(3);
      setSlidesToScroll(3);
    } else if (window.innerWidth > 800) {
      setSlidesToShow(2);
      setSlidesToScroll(2);
    } else {
      setSlidesToShow(1);
      setSlidesToScroll(1);
    }
  };

  useEffect(() => {
    handleResize(); // Initialize the slidesToShow and slidesToScroll based on initial screen width
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: showArrows ? <NextArrow /> : null,
    prevArrow: showArrows ? <PrevArrow /> : null,
  };

  return (
    <div className="achievement-container">
      <h4>Testimonial</h4>
      <h3 className="achievement-title">What The People Think About Us</h3>
      <div className="testimonial-card-container">
        <Slider {...settings}>
          {TestimonialData.map((item, index) => {
            return (
              <div className="testimonial-card" key={index}>
                <p className="testimonial-text">{item.text}</p>
                <h5 className="testimonial-name">-{item.name}</h5>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
