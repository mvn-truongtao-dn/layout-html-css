import { MessageOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import user from '../../assets/images/user.png';
import { useState } from 'react';
export default function ChatButton() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button className='btn btn-chat' onClick={() => setIsActive(!isActive)}>
        <MessageOutlined />
        <span className='btn-chart-content'>Chat</span>
      </button>
      <div className={`chat-list-wrapper ${isActive ? 'active' : ''}`}>
        <h6 className='chat-title'>All Message</h6>
        <ul className='chat-list'>
          <li className='chat-item'>
            <div className='chat-item-flex'>
              <div className='item-icon'>
                <Image src={user} alt="image"></Image>
              </div>
              <div className='chat-contents'>
                <Link href='/'>
                  <a className='list-title'>Rupak</a>
                </Link>
                <span className='list-sub'>4 hours ago</span>
              </div>
            </div>
          </li>
          <li className='chat-item'>
            <div className='chat-item-flex'>
              <div className='item-icon'>
                <Image src={user} alt="image"></Image>
              </div>
              <div className='chat-contents'>
                <Link href='/'>
                  <a className='list-title'>Rupak</a>
                </Link>
                <span className='list-sub'>4 hours ago</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
