import { DownOutlined, MenuOutlined, PhoneOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { data } from '../../utils/data';
export default function Dropdown() {
  const [isActive, setIsActive] = useState(false);
  const dropdown_content = useRef();
  // const handleOpenDropdown = () => {
  //   dropdown_content.current.style.overflow = 'auto';
  //   if (isActive === false) {
  //     dropdown_content.current.style.height = '445px';
  //   } else {
  //     dropdown_content.current.style.height = '0';
  //   }
  //   setIsActive(!isActive);
  //   setTimeout(() => {
  //     dropdown_content.current.style.height = null;
  //     dropdown_content.current.style.display = 'block';

  //     dropdown_content.current.style.overflow = null;
  //   }, 1000);
  // };
  const handleOpenDropdown = () => {
    setIsActive(!isActive);

    if (!isActive) {
      setTimeout(() => {
        dropdown_content.current.classList.remove('collapse');
        dropdown_content.current.classList.add('collapsing');
      }, 100);
      setTimeout(() => {
        dropdown_content.current.style.height = '445px';
      }, 150);
      setTimeout(() => {
        dropdown_content.current.classList.remove('collapsing');
        dropdown_content.current.classList.add('collapse');
        dropdown_content.current.classList.add('show');
        dropdown_content.current.style.height = null;
      }, 400);
    } else {
      dropdown_content.current.style.height = '445px';

      setTimeout(() => {
        dropdown_content.current.classList.add('collapsing');
        dropdown_content.current.style.height = null;

      }, 100);
      setTimeout(() => {
        dropdown_content.current.classList.remove('collapse');
        dropdown_content.current.classList.remove('show');
      }, 300);
      setTimeout(() => {
        dropdown_content.current.classList.add('collapse');
        dropdown_content.current.classList.remove('collapsing');
      }, 400);
    }
  };

  return (
    <div className='sidebar-wrapper'>
      <div className='dropdown'>
        <button
          className='btn btn-white'
          type='button'
          data-bs-toggle='dropdown'
          onClick={handleOpenDropdown}
        >
          <MenuOutlined />
          <span className='btn-content'>All Categories</span>
          <DownOutlined />
        </button>
        <ul
          ref={dropdown_content}
          // ${isActive ? 'active' : ''}
          className={`collapse dropdown-menu `}
        >
          {data.map((item) => (
            <li className='dropdown-item' key={item.id}>
              <Link href='/'>
                <a className='dropdown-link'>
                  <span className='icon-link'>
                    <PhoneOutlined />
                  </span>
                  {item.title}
                  {item.icon2 && (
                    <span className='icon-dropdown-menu'>{item.icon2}</span>
                  )}
                </a>
              </Link>
              {item.subMenu && (
                <div className='dropdown-submenu'>
                  {item.subMenu.map((submenu) => (
                    <div key={submenu.id} className='item-submenu'>
                      <h5 className='submenu-title'>{submenu.subTitle}</h5>
                      <ul className='product-items'>
                        {submenu.items.map((subitem) => (
                          <li key={subitem.id}>
                            <Link href='/'>
                              <a className='item-link'>{subitem.text}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {item.items && (
                <div className='dropdown-submenu'>
                  {item.items.map((submenu) => (
                    <div key={submenu.id} className='item-submenu'>
                      <div className='product-item'>
                        <div className='product-img'>
                          <Link href='/'>
                            <a>
                              <Image
                                src={submenu.image}
                                width={100}
                                height={80}
                              ></Image>
                            </a>
                          </Link>
                        </div>
                        <div className='product-content'>
                          <h4>
                            <Link href='/'>
                              <a className='submenu-title'>
                                {submenu.subTitle}
                              </a>
                            </Link>
                          </h4>
                          <div className='price'>
                            <h4 className='new-price'>{submenu.newPrice}</h4>
                            <span className='old-price'>
                              {submenu.oldPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
