// import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import { ListImage } from '../../assets/images';
// import ItemFeatured from '../featured/ItemFeatured';
// import { useRef, useState, useEffect } from 'react';
// const data = [
//   {
//     image: ListImage.featuredImg1,
//   },
//   {
//     image: ListImage.featuredImg2,
//   },
//   {
//     image: ListImage.featuredImg3,
//   },
//   {
//     image: ListImage.featuredImg4,
//   },
//   {
//     image: ListImage.featuredImg5,
//   },
//   {
//     image: ListImage.featuredImg1,
//   },
//   {
//     image: ListImage.featuredImg2,
//   },
//   {
//     image: ListImage.featuredImg2,
//   },
//   {
//     image: ListImage.featuredImg2,
//   },
//   {
//     image: ListImage.featuredImg2,
//   },
//   {
//     image: ListImage.featuredImg2,
//   },
//   {
//     image: ListImage.featuredImg2,
//   },
//   {
//     image: ListImage.featuredImg2,
//   },
//   {
//     image: ListImage.featuredImg2,
//   },
//   {
//     image: ListImage.featuredImg2,
//   },
//   {
//     image: ListImage.featuredImg2,
//   },
// ];
// export default function Carousel() {
//   const slick_track = useRef();
//   const location = useRef(0);
//   const [location1, setLocaiton1] = useState(0);
//   const handlePrevClick = () => {
//     console.log(location.current);
//     location.current = location.current - 340;
//     setLocaiton1(location1 - 340);
//     if (location.current < 0) {
//       console.log('return');
//       slick_track.current.style.transform = `4080px`;
//       location.current = 4080;
//     }
//     slick_track.current.style.transform = `translateX(-${location.current}px)`;
//   };
//   const handleNextClick = () => {
//     console.log(location.current);
//     location.current = location.current + 340;
//     setLocaiton1(location1 + 340);
//     if (location.current > 4080) {
//       console.log('return');
//       slick_track.current.style.transform = `translateX(0px)`;
//       location.current = 0;
//     } else {
//       slick_track.current.style.transform = `translateX(-${location.current}px)`;
//     }
//   };

//   useEffect(() => {
//     setInterval(handleNextClick, 5000);
//   }, []);
//   return (
//     <>
//       <div className='carousel-header  p-l-r-12'>
//         <div className='tittle-section'>
//           <h2 className='tittle'>Featured Listings</h2>
//         </div>
//         <div className='group-btn-slide'>
//           <div className='btn prev-icon' onClick={handlePrevClick}>
//             <LeftOutlined />
//           </div>
//           <div className='btn next-icon' onClick={handleNextClick}>
//             <RightOutlined />
//           </div>
//         </div>
//       </div>
//       <div className='slick-list'>
//         <div className='slick-track' ref={slick_track}>
//           {data.map((item, index) => (
//             <ItemFeatured key={index} item={item}></ItemFeatured>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { ListImage } from '../../assets/images';
import ItemFeatured from '../featured/ItemFeatured';
import { useRef, useState, useEffect } from 'react';
import PricingCardItem from '../pricing_card/PricingCardItem';
import TestimonialItem from '../testimonials/TestimonialItem';
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
const data2 = [1, 2, 3, 4, 5, 6, 78, 9, 10, 11, 12, 13, 14];
export default function Carousel(props) {
  const nameclass = props.nameclass;
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  const slick_track = useRef();
  const slick_track2 = useRef();

  const location = useRef(0);
  const location2 = useRef(0);
  const [location1, setLocaiton1] = useState(0);

  const handlePrevClick = (nameclass) => {
    if (nameclass === 'listing-featured') {
      console.log(location.current);
      location.current = location.current - 340;
      setLocaiton1(location1 - 340);
      if (location.current < 0) {
        console.log('return');
        slick_track.current.style.transform = `4080px`;
        location.current = 4080;
      }
      slick_track.current.style.transform = `translateX(-${location.current}px)`;
    }
    if (nameclass === 'pricing-card') {
      console.log(location.current);
      location2.current = location2.current - 340;
      if (location2.current < 0) {
        console.log('return');
        slick_track2.current.style.transform = `3062px`;
        location2.current = 3062;
      }
      slick_track2.current.style.transform = `translateX(-${location2.current}px)`;
    }
  };
  const handleNextClick = (nameclass) => {
    if (nameclass === 'listing-featured') {
      //   next_button(340, 4080);
      console.log(location.current);
      location.current = location.current + 340;
      setLocaiton1(location1 + 340);
      if (location.current > 4080) {
        console.log('return');
        slick_track.current.style.transform = `translateX(0px)`;
        location.current = 0;
      } else {
        slick_track.current.style.transform = `translateX(-${location.current}px)`;
      }
    }
    if (nameclass === 'pricing-card') {
      // next_button(316, 3600);
      console.log(location2.current);
      location2.current = location2.current + 340;
      if (location2.current > 3000) {
        console.log('return');
        slick_track2.current.style.transform = `translateX(0px)`;
        location2.current = 0;
      } else {
        slick_track2.current.style.transform = `translateX(-${location2.current}px)`;
      }
    }
  };
  const next_button = () => {
    console.log('auto');
    location.current = location.current + 340;
    if (location.current > 4080) {
      location.current = 0;
    }
    setValue(location.current);
  };
  const next_button2 = () => {
    console.log('auto');
    location2.current = location2.current + 340;
    if (location2.current > 2500) {
      location2.current = 0;
    }
    setValue2(location.current);
  };
  useEffect(() => {
    // const interval = setInterval(next_button, 5000);
    // const interval2 = setInterval(next_button2, 5000);

    // return () => {
    //   clearInterval(interval);
    //   clearInterval(interval2);
    // };
  }, []);
  console.log(value);

  return (
    <>
      <div className='carousel-header  p-l-r-12'>
        <div className='tittle-section'>
          <h2 className='tittle'>{props.section_title}</h2>
        </div>
        <div className='group-btn-slide'>
          <div
            className='btn prev-icon'
            onClick={() => handlePrevClick(nameclass)}
          >
            <LeftOutlined />
          </div>
          <div
            className='btn next-icon'
            onClick={() => handleNextClick(nameclass)}
          >
            <RightOutlined />
          </div>
        </div>
      </div>
      <div className='slick-list'>
        {nameclass === 'listing-featured' ? (
          <div
            className='slick-track'
            ref={slick_track}
            style={{
              width: '5540px',
              transform: `translateX(-${value}px)`,
            }}
          >
            {data.map((item, index) => (
              <ItemFeatured key={index} item={item}></ItemFeatured>
            ))}
          </div>
        ) : null}
        {nameclass === 'pricing-card' && (
          <div
            className='slick-track'
            ref={slick_track2}
            style={{ width: '4760px', transform: `translateX(-${value2}px)` }}
          >
            {data2.map((item) => (
              <PricingCardItem key={item} />
            ))}
          </div>
        )}
        {nameclass === 'testimonials' && (
          <div
            className='slick-track'
            ref={slick_track2}
            style={{ width: '4760px', transform: `translateX(-${value2}px)` }}
          >
            {data2.map((item) => (
              <TestimonialItem key={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// width='4760'
