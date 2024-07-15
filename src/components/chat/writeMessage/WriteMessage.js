import React, { useState } from 'react';
import './writeMessage.css';
import { FaRegSmile } from 'react-icons/fa';
import { HiOutlinePaperClip } from 'react-icons/hi';
import { IoMdMic } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';

export default function WriteMessage() {
  const [text, setText] = useState('');
  return (
    <div className='writeMessageContainer'>
      <div className='writeMessageLeftContainer'>
        <span className='emoji'>
          <FaRegSmile size={25} />
        </span>
        <input
          type='text'
          placeholder='Message'
          className='messageInput'
          onChange={(e) => setText(e.target.value)}
        />
        <HiOutlinePaperClip size={25} />
      </div>
      <div className='mic'>
        {text ? <FaTelegramPlane size={20} /> : <FaMicrophone size={20} />}
      </div>
    </div>
  );
}
