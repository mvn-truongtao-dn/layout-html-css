import {
  AimOutlined,
  ArrowUpOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import Head from 'next/head';
import Image from 'next/image';
import DropdownNationality from '../components/dropdown-nationality';
import Header from '../components/layout/Header';
import hero_man from '../assets/images/hero-man.jpeg';
import heroShape1 from '../assets/images/heroShape1.png';
import heroShape2 from '../assets/images/heroShape2.png';
import heroShape3 from '../assets/images/heroShape3.png';
import ListServices from '../components/services/ListServices';
import Link from 'next/link';
import { ListImage } from '../assets/images';
import ListRecent from '../components/recent/ListRecent';
import Footer from '../components/layout/Footer';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

import { useEffect, useRef } from 'react';
import ItemFeatured from '../components/featured/ItemFeatured';
import CarouselFeatured from '../components/carousel/carousel_featured';
import CarouselPriceCard from '../components/carousel/carousel_pricecard';
import CarouselTestimonial from '../components/carousel/carousel_testimonial';
export default function Home() {
  const targetRef = useRef();
  const targetMoveMouse1 = useRef();
  const targetMoveMouse2 = useRef();
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);

  const target = useRef();

  useEffect(() => {
    const height = document.querySelector('#__next').offsetHeight;
    window.addEventListener('scroll', function (e) {
      const height_scroll = window.pageYOffset;
      if (height_scroll > 100) {
        targetRef.current.classList.add('show');
      } else {
        targetRef.current.classList.remove('show');
      }
      // console.log((height_scroll+document.querySelector('.page-footer').offsetHeight)/(height/100));

      const percent =
        (height_scroll / (document.body.clientHeight - window.innerHeight)) *
        100;
      console.log(percent);
      targetRef.current.style.backgroundImage = `conic-gradient(
        #F76631 ${percent}%,
      #d0d0d4 0
    )`;
      if (window.pageYOffset > 500) {
        const array = document.querySelectorAll(
          '.listing-services .item-service:nth-child(2n+1)'
        );
        for (let i = 0; i < array.length; i++) {
          array[i].style.animation = 'show1 0.5s linear 1';
        }
        const array1 = document.querySelectorAll(
          '.listing-services .item-service:nth-child(2n)'
        );
        for (let i = 0; i < array1.length; i++) {
          array1[i].style.animation = 'show5 0.5s linear 1';
        }
      }
      if (target.current.offsetTop < window.pageYOffset) {
        document.querySelector('.about-area .tittle-section').style.animation =
          'show1 0.5s linear 1';
        console.log(document.querySelector('.about-area .tittle-section'));
      }
    });
    window.addEventListener('mousemove', (e) => {
      // const location1 = e.target
      targetMoveMouse1.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      targetMoveMouse1.current.style.visibility = 'visible';
      targetMoveMouse2.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      targetMoveMouse2.current.style.visibility = 'visible';
    });
    const heightImage = imageRef.current.clientHeight;
    const widthImage = imageRef.current.clientWidth;
    const hoverImage = (e,target) => {
      const xVal = e.layerX;
      const yVal = e.layerY;
      const yRotation = -15 * ((xVal - widthImage / 4) / widthImage);

      /* Calculate the rotation along the X-axis */
      const xRotation = 15 * ((yVal - heightImage / 4) / heightImage);

      const string =
        'perspective(500px) rotateX(' +
        xRotation +
        'deg) rotateY(' +
        yRotation +
        'deg)';

        target.style.transform = string;
    };
    imageRef.current.addEventListener('mousemove', (e) => {
      hoverImage(e, imageRef.current);
    });
    imageRef2.current.addEventListener('mousemove', (e) => {
      hoverImage(e, imageRef2.current);
    });
    imageRef.current.addEventListener('mouseout', (e) => {
      imageRef.current.style.transform =
        'perspective(300px) scale(1) rotateX(0) rotateY(0)';
    });
    imageRef2.current.addEventListener('mouseout', (e) => {
      imageRef.current.style.transform =
        'perspective(300px) scale(1) rotateX(0) rotateY(0)';
    });
    console.log(target.current.offsetTop);
  }, []);
  const myRef = useRef(null);

  const handleMoveHeaderPage = () => {
    window.scrollTo({
      top: myRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div ref={myRef}>
      <Header></Header>
      <main>
        <div className='slider-area'>
          <div className='container'>
            <div className='wrapper'>
              <div className='slider-right'>
                <div className='hero-caption'>
                  <h1 className='title'>
                    <span className='title-lg'>Buy and sell</span>
                    <br></br>
                    <span className='line-brack'>anything you want</span>
                  </h1>
                  <p className='sub-title'>
                    Countrys most loved and trusted classified ad listing
                    website classified ad.ran-domised words which don&apos;t
                    look even slightly Browse thousand of items near you.
                  </p>
                </div>
                <form className='search-box'>
                  <DropdownNationality
                    class_name={'btn btn-custom'}
                    btn_content={
                      <>
                        <AimOutlined />
                        <span className='btn-country-content'>
                          New York, USA
                        </span>
                        <DownOutlined />
                      </>
                    }
                    content_dropdown={
                      <>
                        <input type='text' />
                        <ul className='list'>
                          <li className='option selected focus'>English</li>
                          <li className='option'>Arabic</li>
                        </ul>
                      </>
                    }
                  />
                  {/* <div className='select-form'>
                  <a href='' className='btn-dropdown-country'>
                    <AimOutlined />
                    <span className='btn-country-content'>New York, USA</span>
                    <DownOutlined />
                  </a>
                  <div className='dropdown-country-content'></div>
                </div> */}
                  <div className='search-box-wrapper'>
                    <input type='text' placeholder='Search...' />
                  </div>
                  <div className='search-form'>
                    <button className='btn'>
                      <SearchOutlined className='icon' />
                    </button>
                  </div>
                </form>
              </div>
              <div className='slider-left'>
                <div ref={imageRef} className='hero-man'>
                  <Image
                    src={hero_man}
                    alt='image'
                    className='image-animation'
                  />
                  <div className='shape-hero shape-hero1'>
                    <Image src={heroShape1} alt='image' />
                  </div>
                  <div className='shape-hero shape-hero2'>
                    <Image src={heroShape2} alt='image' />
                  </div>
                  <div className='shape-hero shape-hero3'>
                    <Image src={heroShape3} alt='image' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='our-services p-l-r-12'>
          <div className='container'>
            <div className='tittle-section text-center'>
              <h2 className='tittle'>Explore Categories</h2>
            </div>
            <div className='list-our-services'>
              <ListServices></ListServices>
            </div>
          </div>
        </div>
        <div className='listing-featured p-l-r-12'>
          <div className='container'>
            {/* <Carousel
              section_title='Featured listings'
              nameclass='listing-featured'
            ></Carousel> */}
            <CarouselFeatured />
          </div>
        </div>
        <div ref={target} className='about-area'>
          <div className='container'>
            <div className='wrapper p-l-r-12'>
              <div className='about-left'>
                <div className='tittle-section'>
                  <h2 className='tittle'>
                    Earn cash by selling
                    <br></br>
                    or Find anything you desire
                  </h2>
                  <p className='sub-tittle'>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humo or randomised words which don&apos;t
                    look even slightlys
                  </p>
                </div>
                <div className='btn-wrapper'>
                  <Link href='/'>
                    <a className='btn btn2'>Post your ad</a>
                  </Link>
                  <Link href=''>
                    <a className='btn btn3'>Browse ads</a>
                  </Link>
                </div>
              </div>
              <div ref={imageRef2} className='about-right'>
                <Image
                  src={ListImage.about}
                  className='about-image'
                  alt='image'
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className='recent-listings'>
          <div className='container'>
            <div className='section-padding'>
              <div className='tittle-section p-l-r-12'>
                <h2 className='tittle'>Recent Listings</h2>
              </div>
              <div className='list-recent'>
                <ListRecent />
              </div>
            </div>
          </div>
        </div>
        <div className='pricing-card'>
          <div className='container'>
            {/* <Carousel
              section_title='Post and Promote Your Listings'
              nameclass='pricing-card'
            ></Carousel> */}
            <CarouselPriceCard />
          </div>
        </div>
        <div className='testimonials'>
          <div className='container'>
            <div className='section-padding'>
              {/* <Carousel
                section_title='Testimonials'
                nameclass='testimonials'
              ></Carousel> */}
              <CarouselTestimonial />
            </div>
          </div>
        </div>
        <div></div>
      </main>
      <Footer></Footer>
      <div className='mouse-cursor cursor-outer' ref={targetMoveMouse1}></div>
      <div className='mouse-cursor cursor-inner' ref={targetMoveMouse2}></div>
      <div
        className='progress per-25'
        ref={targetRef}
        onClick={handleMoveHeaderPage}
      >
        <div className='inner'>
          <ArrowUpOutlined />
        </div>
      </div>
    </div>
  );
}
