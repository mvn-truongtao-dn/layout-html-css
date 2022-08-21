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
import Carousel from '../components/carousel';
import Link from 'next/link';
import { ListImage } from '../assets/images';
import ListRecent from '../components/recent/ListRecent';
import TestimonialItem from '../components/testimonials/TestimonialItem';
import Footer from '../components/layout/Footer';
import { useEffect, useRef } from 'react';
export default function Home() {
  const targetRef = useRef();
  const targetMoveMouse1 = useRef();
  const targetMoveMouse2 = useRef();

  useEffect(() => {
    const height = document.querySelector('#__next').offsetHeight;
    window.addEventListener('scroll', function () {
      const height_scroll = window.pageYOffset;
      if (height_scroll > 100) {
        targetRef.current.classList.add('show');
      } else {
        targetRef.current.classList.remove('show');
      }

      const percent = (window.pageYOffset * 100) / (height - 800);
      targetRef.current.style.backgroundImage = `conic-gradient(
        #F76631 ${percent}%,
      #d0d0d4 0
    )`;
    });
    window.addEventListener('mousemove', (e) => {
      // const location1 = e.target
      console.log(e);
      targetMoveMouse1.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      targetMoveMouse1.current.style.visibility = 'visible';
      targetMoveMouse2.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      targetMoveMouse2.current.style.visibility = 'visible';
    });
  }, []);
  return (
    <div>
      <Header></Header>
      <main>
        <div className='slider-area'>
          <div className='container wrapper'>
            <div className='slider-right'>
              <div className='hero-caption'>
                <h1 className='title'>
                  <span className='title-lg'>Buy and sell</span>
                  <br></br>
                  <span className='line-brack'>anything you want</span>
                </h1>
                <p className='sub-title'>
                  Countrys most loved and trusted classified ad listing website
                  classified ad.randomised words which don't look even slightly
                  Browse thousand of items near you.
                </p>
              </div>
              <form className='search-box'>
                <DropdownNationality
                  class_name={'btn btn-custom'}
                  btn_content={
                    <>
                      <AimOutlined />
                      <span className='btn-country-content'>New York, USA</span>
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
              <div className='hero-man'>
                <Image src={hero_man} alt='image' />
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
            <Carousel
              section_title='Featured listings'
              nameclass='listing-featured'
            ></Carousel>
          </div>
        </div>
        <div className='about-area'>
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
                    form, by injected humo or randomised words which don't look
                    even slightlys
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
              <div className='about-right'>
                <Image src={ListImage.about} className='about-image'></Image>
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
            <Carousel
              section_title='Post and Promote Your Listings'
              nameclass='pricing-card'
            ></Carousel>
          </div>
        </div>
        <div className='testimonials'>
          <div className='container'>
            <div className='section-padding'>
              <Carousel
                section_title='Testimonials'
                nameclass='testimonials'
              ></Carousel>
            </div>
          </div>
        </div>
        <div></div>
      </main>
      <Footer></Footer>
      <div className='mouse-cursor cursor-outer' ref={targetMoveMouse1}></div>
      <div className='mouse-cursor cursor-inner' ref={targetMoveMouse2}></div>
      <div className='progress per-25' ref={targetRef}>
        <div className='inner'>
          <ArrowUpOutlined />
        </div>
      </div>
    </div>
  );
}
