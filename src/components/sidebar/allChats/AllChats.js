import React, { useState } from 'react';
import './allChats.css';
import { getRandomColor, getInitials } from '../../../utils/helperMethods';
import { useDispatch } from 'react-redux';
import { selectChat } from '../../../redux/slices/selectChat';

export default function AllChats({ allChatsData, lastMessages }) {
  const dispatch = useDispatch();
  let [activeChatId, setActiveChatId] = useState(null);
  const openChat = (id, username, color, initials) => {
    setActiveChatId(id);
    dispatch(selectChat({ id, username, color, initials }));
  };

  return (
    <div className='allChatsContainer'>
      {allChatsData?.map((chat, i) => {
        let color = getRandomColor();
        let username = chat.creator.name || 'Unknown name in database';
        let initials = getInitials(username);
        return (
          <div
            key={chat.id}
            className={`chat ${chat.id == activeChatId && 'active'}`}
            data-id={chat.id}
            onClick={(e) => {
              openChat(e.currentTarget.dataset.id, username, color, initials);
            }}
          >
            <div
              className='profilePic'
              // style={{ backgroundColor: getRandomColor() }}
              style={{ backgroundColor: color }}
            >
              {/* {chat.creator.name
                ? getInitials(chat.creator.name)
                : getInitials('Unknown name in database')} */}
              {initials}
            </div>
            <div className='userName'>
              {/* {chat.creator.name
                ? chat.creator.name
                : 'Unknown name in database'} */}
              <div>{username}</div>
              <div className='lastMessageContainer'>
                <div className='lastMessage'>{lastMessages[chat.id]}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
