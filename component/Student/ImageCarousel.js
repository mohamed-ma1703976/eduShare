// components/Student/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://via.placeholder.com/1200x300/FF5733',
  'https://via.placeholder.com/1200x300/FFC300',
  'https://via.placeholder.com/1200x300/DAF7A6',
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '300px' }} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
