import React from 'react';
import Slider from 'react-slick/lib/slider';
import TestimonialItem from '../../testimonials/TestimonialItem';
var setting1 = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  adaptiveHeight: true,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const data2 = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14];

export default function CarouselTestimonial() {

  return (
    <>
      <div className='carousel-header  p-l-r-12'>
        <div className='tittle-section'>
          <h2 className='tittle'>Testimonials</h2>
        </div>
      </div>

      <Slider {...setting1}>
        {data2.map((item) => (
          <TestimonialItem key={item} />
        ))}
      </Slider>
    </>
  );
}
