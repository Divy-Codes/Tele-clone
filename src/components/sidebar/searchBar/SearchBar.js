import React from 'react';
import './searchBar.css';
import { IoMenu } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';

export default function SearchBar() {
  return (
    <div className='searchBarContainer'>
      <span className='menuButton'>
        <IoMenu size={25} />
      </span>
      <div className='inputContainer'>
        {/* <span className='searchButton'> */}
        <IoIosSearch size={20} />
        {/* </span> */}
        <input className='searchInput' type='text' placeholder='Search'></input>
      </div>
    </div>
  );
}
