import React from 'react';
import Slider from 'react-slick/lib/slider';
import { ListImage } from '../../assets/images';
import ItemFeatured from '../featured/ItemFeatured';
var settings = {
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
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    },
  ],
};
const data = [
  {
    image: ListImage.featuredImg1,
  },
  {
    image: ListImage.featuredImg2,
  },
  {
    image: ListImage.featuredImg3,
  },
  {
    image: ListImage.featuredImg4,
  },
  {
    image: ListImage.featuredImg5,
  },
  {
    image: ListImage.featuredImg1,
  },
  {
    image: ListImage.featuredImg2,
  },
  {
    image: ListImage.featuredImg2,
  },
  {
    image: ListImage.featuredImg2,
  },
  {
    image: ListImage.featuredImg2,
  },
  {
    image: ListImage.featuredImg2,
  },
  {
    image: ListImage.featuredImg2,
  },
  {
    image: ListImage.featuredImg2,
  },
  {
    image: ListImage.featuredImg2,
  },
  {
    image: ListImage.featuredImg2,
  },
  {
    image: ListImage.featuredImg2,
  },
];
export default function CarouselFeatured() {
  return (
    <>
      <div className='carousel-header  p-l-r-12'>
        <div className='tittle-section'>
          <h2 className='tittle'>Featured Listings</h2>
        </div>
      </div>

      <Slider {...settings}>
        {data.map((item, index) => (
          <ItemFeatured key={index} item={item}></ItemFeatured>
        ))}
      </Slider>
    </>
  );
}
