import Image from 'next/image';
import Link from 'next/link';
import user from '../../assets/images/user.png';
import { useState, useRef } from 'react';
import { UserOutlined } from '@ant-design/icons';

export default function DropdownUser() {
  const [isActive, setIsActive] = useState(false);
  const targetRef = useRef();
  const handleDropdownUser = (e) => {
    e.preventDefault();
    setIsActive(!isActive);

    if (!isActive) {
      setTimeout(() => {
        targetRef.current.classList.remove('collapse');
        targetRef.current.classList.add('collapsing');
      }, 100);
      setTimeout(() => {
        targetRef.current.style.height = '326px';
      }, 150);
      setTimeout(() => {
        targetRef.current.classList.remove('collapsing');
        targetRef.current.classList.add('collapse');
        targetRef.current.classList.add('show');
        targetRef.current.style.height = null;
      }, 400);
    } else {
      targetRef.current.style.height = '326px';

      setTimeout(() => {
        targetRef.current.style.height = null;

        targetRef.current.classList.add('collapsing');
      }, 100);
      setTimeout(() => {
        targetRef.current.classList.remove('collapse');
        targetRef.current.classList.remove('show');
      }, 200);
      setTimeout(() => {
        targetRef.current.classList.add('collapse');
        targetRef.current.classList.remove('collapsing');
      }, 400);
    }
  };
  return (
    <>
      <Link href='/'>
        <a className='user' onClick={handleDropdownUser}>
          <Image src={user} alt='image'></Image>
        </a>
      </Link>
      <div ref={targetRef} className='user-account-wrapper collapse'>
        <h6 className='ac-title'>User Account</h6>
        <ul className='ac-list'>
          <li className='ac-item'>
            <Link href='/'>
              <a>
                <UserOutlined />
                My Account
              </a>
            </Link>
          </li>
          <li className='ac-item'>
            <Link href='/'>
              <a>
                <UserOutlined />
                My Account
              </a>
            </Link>
          </li>
          <li className='ac-item'>
            <Link href='/'>
              <a>
                <UserOutlined />
                My Account
              </a>
            </Link>
          </li>
          <li className='ac-item'>
            <Link href='/'>
              <a>
                <UserOutlined />
                My Account
              </a>
            </Link>
          </li>
          <li className='ac-item'>
            <Link href='/'>
              <a>
                <UserOutlined />
                My Account
              </a>
            </Link>
          </li>
          <li className='ac-item'>
            <Link href='/'>
              <a>
                <UserOutlined />
                My Account
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
