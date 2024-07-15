import React from 'react';
import './header.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { HiDotsVertical } from 'react-icons/hi';
import { useSelector } from 'react-redux';

export default function Header() {
  const { backgroundColor, initials, username } = useSelector(
    (state) => state.messagesData
  );

  return (
    <div className='headerContainer'>
      <div className='headerTitle'>
        <div
          className='profilePic'
          style={{
            backgroundColor: backgroundColor,
            height: '3rem',
            width: '3rem',
          }}
        >
          {initials}
        </div>
        <div className='userName'>{username}</div>
      </div>

      <div className='headerMenu'>
        <div className='searchHeader'>
          <FaMagnifyingGlass size={21} />
        </div>
        <div className='options'>
          <HiDotsVertical size={21} />
        </div>
      </div>
    </div>
  );
}
