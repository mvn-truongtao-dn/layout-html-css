import { CheckOutlined } from '@ant-design/icons';
import React from 'react';

export default function PricingCardItem() {
  return (
    <div className='pricing-card-item'>
      <h4 className='price-title'>Free</h4>
      <ul className='listing'>
        <li className='list-item'>
          <CheckOutlined />
          Your ad will be promoted for 3 days
        </li>
        <li className='list-item'>
          <CheckOutlined />
          Your ad will be promoted for 3 days
        </li>
        <li className='list-item'>
          <CheckOutlined />
          Your ad will be promoted for 3 days
        </li>
      </ul>
      <span className='price'>
        $0
        <span className='sub-title'> /For Lifetime</span>
      </span>
      <div className='btn-wrapper'>
        <a className='btn btn-outline1'>Get Started</a>
      </div>
    </div>
  );
}
