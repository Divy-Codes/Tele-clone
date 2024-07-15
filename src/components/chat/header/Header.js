import React, { useState } from 'react';
import './header.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import { HiDotsVertical } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { CgDarkMode } from 'react-icons/cg';

export default function Header({ toggleDarkMode = (f) => f, theme }) {
  const { backgroundColor, initials, username } = useSelector(
    (state) => state.messagesData
  );
  // const [theme, setTheme] = useState('dark');
  // const dispatch = useDispatch();

  // const handleToggleTheme = () => {
  //   dispatch(toggleTheme());
  // };

  // const toggleDarkMode = () => {
  //   // Trigger wave animation first
  //   const wave = document.getElementById('wave');
  //   wave.classList.add('wave-animate');

  //   // Toggle dark mode after animation
  //   setTimeout(() => {
  //     // setTheme(theme === 'dark' ? 'light' : 'dark');
  //     handleToggleTheme();
  //     wave.classList.remove('wave-animate');
  //   }, 500); // Adjust timing as per your animation duration
  // };

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

        <div className='theme'>
          <button onClick={toggleDarkMode} className='toggle-button'>
            {theme === 'light' ? (
              <MdOutlineLightMode size={21} />
            ) : (
              <MdLightMode size={21} />
            )}
            {/* <CgDarkMode size={21} /> */}
          </button>
        </div>
      </div>
    </div>
  );
}
