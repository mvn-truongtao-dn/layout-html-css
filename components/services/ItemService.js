import React from 'react';
import service1 from '../../assets/images/services1.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function ItemService(props) {
    const {image, title, quantity} = props.item
  return (
    <li className='item-service'>
      <div className='service-icon'>
        <Image src={image} alt="image"></Image>
      </div>
      <div className='service-cap'>
        <h4>
          <Link href=''>
            <a className='title'>{title}</a>
          </Link>
        </h4>
        <p className='info'>{quantity} items</p>
      </div>
    </li>
  );
}
