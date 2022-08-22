import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
import { ListImage } from '../../assets/images';

export default function Footer() {
  return (
    <footer className='page-footer'>
      <div className='footer-wrapper'>
        <div className='footer-padding'>
          <div className='row p-l-r-12 justify-content-between'>
            <div className='col-3 col-lg-3  p-l-r-12'>
              <div className='footer-widget'>
                <div className='footer-tittle2'>
                  <div className='footer-logo'>
                    <Image src={ListImage.logo2} alt="image"></Image>
                  </div>
                  <ul className='listing-logo'>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        <EnvironmentOutlined className='icon-footer' />
                        631 Elgin St. Celina, Delaware
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        <PhoneOutlined className='icon-footer' />
                        (702) 555-0122
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        <MailOutlined className='icon-footer' />
                        Xgenious@mail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-2 p-l-r-12'>
              <div className='footer-widget'>
                <div className='footer-tittle-content'>
                  <h4 className='footer-tittle'>Categories</h4>
                  <ul className='listing'>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Electionics
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Mobile
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Vehicles
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Appliances
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Fashions
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Education
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Property
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-2 p-l-r-12'>
              <div className='footer-widget'>
                <div className='footer-tittle-content'>
                  <h4 className='footer-tittle'>About</h4>
                  <ul className='listing'>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        About Us
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Blog
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Press
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Jobs
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        In Press
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Terms & Conditions
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-2 p-l-r-12'>
              <div className='footer-widget'>
                <div className='footer-tittle-content'>
                  <h4 className='footer-tittle'>Help & support</h4>
                  <ul className='listing'>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Contact
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Faq
                      </a>
                    </li>
                    <li className='list-item fade-in-up'>
                      <a href='' className='link-item'>
                        Safety Informations
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-3 col-lg-6 p-l-r-12'>
              <div className='footer-widget'>
                <div className='footer-tittle-content'>
                  <h4 className='footer-tittle'>Newsletter</h4>
                  <div className='footer-description'>
                    <p className='description-content'>
                      Be the first one to know news, offers and events weekly in
                      your. Unsubscribe whenever you like with one click.
                    </p>
                  </div>
                  <div className='footer-form'>
                    <div className='form-row'>
                      <form>
                        <input type='email' name='email' placeholder='Your Email Address' />
                        <div className='btn-wrapper'>
                          <button className='btn btn-submit'>Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
