import {
  StarFilled,
  StarOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
import { ListImage } from '../../assets/images/index';
const TestimonialItem = () => {
  return (
    <div className='testimonial-item'>
      <ul className='ratting-list'>
        <li className='list-item'>
          <StarFilled />
        </li>
        <li className='list-item'>
          <StarFilled />
        </li>
        <li className='list-item'>
          <StarFilled />
        </li>
        <li className='list-item'>
          <StarFilled />
        </li>
        <li className='list-item'>
          <StarFilled />
        </li>
      </ul>
      <div className='testimonial-description'>
        <p className='description-content'>
          Xgenious is a great place to sell pre-loved and new items. I sold more
          than $80,000 on this platform. my all buyers are extremely happy
        </p>
      </div>
      <div className='testimonial-client'>
        <div className='client-image'>
          <Image src={ListImage.client1} alt='image'></Image>
        </div>
        <div className='client-text'>
          <span className='client-name'>Harman Preet</span>
          <p className='client-description'>Xgenious seller</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialItem;
