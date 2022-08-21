import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ListImage } from '../../assets/images';

export default function ItemRecent(props) {
  return (
    <div className='col-item-recent'>
      <div className='border-style style1'>
        <div className='item-recent mb-24'>
          <div className='recent-image'>
            <Image src={props.item}></Image>
          </div>
          <div className='featured-caption'>
            <h4>
              <Link href=''>
                <a className='featured-link'>Perian cat</a>
              </Link>
            </h4>
            <p className='featured-cap'>
              Los Angels, CA · <strong className='sub-cap'>12hrs ago</strong>
            </p>
            <span className='featured-price'>$139.40</span>
            <div className='btn-wrapper'>
              <span className='pro-btn1'>new</span>
              <span className='pro-btn2'>promted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
