// components/Student/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://cdn.pixabay.com/photo/2014/04/05/11/39/people-316506__480.jpg',
  'https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029__480.jpg',
  'https://media.istockphoto.com/id/1413233036/photo/successful-teacher-pointing-at-one-of-interracial-students-raising-hands.jpg?b=1&s=170667a&w=0&k=20&c=7wQsgIfTaapVWxd6JEQdUmQ-FUyirwCj0mlXG2UXOjU=',
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
