import React from 'react';
import './messages.css';
import { timeString } from '../../../utils/helperMethods';
import WriteMessage from '../writeMessage/WriteMessage';

export default function Messages({ messages }) {
  //   const TextWithLinks = ({ text }) => {
  //     // Find [[anytext]] and the link
  //     // const linkRegex = /\[\[([^\]]+)\]\]\s*(http[s]?:\/\/[^\s]+)/g;
  //     let linkRegex = /\[\[[A-Za-z0-9]bc\]\]\([A-Za-z0-9]+\)/i;

  //     const replaceWithLink = (text) => {
  //       return text.replace(linkRegex, '<a href="$2">[$1]</a>');
  //     };

  //     const createMarkup = () => {
  //       return { __html: replaceWithLink(text) };
  //     };

  //     return (
  //       <div>
  //         <div dangerouslySetInnerHTML={createMarkup()} />
  //       </div>
  //     );
  //   };

  return (
    <div className='messagesContainer'>
      {messages.map((message) => {
        return (
          <div
            className={`messageWrapper ${
              message.sender_id === 1 ? 'right' : 'left'
            }`}
            key={message.id}
            data-sender-id={message.sender_id}
          >
            <div className='message'>
              {/* <div className='text'>
                {<TextWithLinks text={message.message} />}
              </div> */}
              <div className='text'>{message.message}</div>
              <div className='date'>{timeString(message.updated_at)}</div>
              {/* <div className='date'>{message.is_corrected}</div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
