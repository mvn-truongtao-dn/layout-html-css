import {
  CloseOutlined,
  DashOutlined,
  DownOutlined,
  HeartOutlined,
  MenuOutlined,
  MessageOutlined,
  PlusSquareOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
import logo from '../../assets/images/logo1.png';
import Dropdown from '../dropdown/Dropdown';
import ChatButton from '../chat-dropdown';
import Link from 'next/link';
import user from '../../assets/images/user.png';
import DropdownNationality from '../dropdown-nationality';
import { useState, useRef } from 'react';
import DropdownUser from '../dropdown_user';
export default function Header() {
  const [active, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const targetRef = useRef();
  const handleClickRightContent = (e) => {
    e.preventDefault();
    setActive(!active);
  };
  const handleOpenMenu = () => {
    setActiveMenu(true);
    setTimeout(() => {
      targetRef.current.classList.remove('collapse');
      targetRef.current.classList.add('collapsing');
    }, 100);
    setTimeout(() => {
      targetRef.current.style.height = '270px';
    }, 150);
    setTimeout(() => {
      targetRef.current.classList.remove('collapsing');
      targetRef.current.classList.add('collapse');
      targetRef.current.classList.add('show');
      targetRef.current.style.height = null;
    }, 400);
  };
  const handleCloseMenu = () => {
    setActiveMenu(false);
    targetRef.current.style.height = '270px';

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
  };
  return (
    <header className='page-header'>
      <nav className='navbar'>
        <div className='container'>
          <div className='wrapper'>
            <div className='responsive-mobile-menu'>
              <div className='logo'>
                <Image src={logo} alt='images'></Image>
              </div>
              <Link href='/'>
                <a
                  className='click-show-icon'
                  onClick={handleClickRightContent}
                >
                  <DashOutlined />
                </a>
              </Link>
              <span className='navbar-toggle'>
                {activeMenu ? (
                  <CloseOutlined onClick={handleCloseMenu} />
                ) : (
                  <>
                    <MenuOutlined onClick={handleOpenMenu} />
                  </>
                )}
              </span>
            </div>
            <div className='nav-wrapper'>
              <Dropdown />
              <div ref={targetRef} className={`collapse navbar-collapse`}>
                <ul className='navbar-nav'>
                  <li>
                    <a href=''>All Ads</a>
                  </li>
                  <li>
                    <a href=''>About Us</a>
                  </li>
                  <li>
                    <Link href=''>
                      <a>
                        Pages
                        <DownOutlined />
                      </a>
                    </Link>
                    <ul className='sub-menu'>
                      <li>
                        <Link href=''>
                          <a>Home One</a>
                        </Link>
                      </li>
                      <li>
                        <Link href=''>
                          <a>Home One</a>
                        </Link>
                      </li>
                      <li>
                        <Link href=''>
                          <a>Home One</a>
                        </Link>
                      </li>
                      <li>
                        <Link href=''>
                          <a>Home One</a>
                        </Link>
                      </li>
                      <li>
                        <Link href=''>
                          <a>Home One</a>
                        </Link>
                      </li>
                      <li>
                        <Link href=''>
                          <a>Home One</a>
                        </Link>
                      </li>
                      <li>
                        <Link href=''>
                          <a>Home One</a>
                        </Link>
                      </li>
                      <li>
                        <Link href=''>
                          <a>Home One</a>
                        </Link>
                      </li>
                      <li>
                        <Link href=''>
                          <a>Home One</a>
                        </Link>
                      </li>
                      <li>
                        <Link href=''>
                          <a>Home One</a>
                        </Link>
                      </li>
                      <li>
                        <Link href=''>
                          <a>Home One</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href=''>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`nav-right-content ${active ? 'active' : ''}`}>
              <ul className='header-cart'>
                <li className='single char-bar'>
                  <ChatButton></ChatButton>
                </li>
                <li className='single'>
                  <Link href='/'>
                    <a className='btn btn-heart'>
                      <HeartOutlined />
                    </a>
                  </Link>
                </li>
                <li className='single user-account'>
                  {/* <a className='user'>
                    <Image src={user} alt="image"></Image>
                  </a>
                  <div className='user-account-wrapper'>
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
                    </ul>
                  </div> */}
                  <DropdownUser />
                </li>
                <li className='single'>
                  <Link href='/'>
                    <a href='' className='btn popup-modal'>
                      <PlusSquareOutlined />
                    </a>
                  </Link>
                </li>
                <li className='single'>
                  <DropdownNationality
                    btn_content={
                      <>
                        English <DownOutlined />
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
