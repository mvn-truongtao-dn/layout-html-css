import Image from 'next/image';
import React from 'react';
import logo from '../../assets/images/logo1.png'
export default function Header() {
  return (
    <header>
      <nav className='navbar'>
        <div className='container'>
          <div className="logo">
            <Image src={logo} alt="images"></Image>
          </div>
        </div>
      </nav>
    </header>
  );
}
