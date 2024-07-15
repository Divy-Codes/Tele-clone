import React from 'react';
import Header from './header/Header';
import './chat.css';
import Messages from './messages/Messages';
import WriteMessage from './writeMessage/WriteMessage';
import { useSelector } from 'react-redux';

export default function Chat({ theme, toggleDarkMode = (f) => f }) {
  const messages = useSelector((state) => state.messagesData.messagesData);

  return (
    <div
      className={`chatContainer ${
        theme === 'light' ? 'lightBackground' : 'darkBackground'
      }`}
    >
      <div className='headerWrapper'>
        <Header toggleDarkMode={toggleDarkMode} theme={theme} />
      </div>
      <div className='chatWrapper'>
        <Messages messages={messages} />
      </div>
      <div className='writeTextContainer'>
        <WriteMessage />
      </div>
    </div>
  );
}
