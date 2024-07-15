import React from 'react';
import Header from './header/Header';
import './chat.css';
import Messages from './messages/Messages';
import WriteMessage from './writeMessage/WriteMessage';
import { useSelector } from 'react-redux';

export default function Chat() {
  const messages = useSelector((state) => state.messagesData.messagesData);

  return (
    <div className='chatContainer'>
      <div className='headerWrapper'>
        <Header />
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
