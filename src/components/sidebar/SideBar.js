import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllChats } from '../../redux/slices/getAllChats';
import { getAllChatsData } from '../../redux/slices/getAllChatsData';
import AllChats from './allChats/AllChats';
import SearchBar from './searchBar/SearchBar';

export default function SideBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllChats());
  }, [dispatch]);

  const allChats = useSelector((state) => state.allChats);
  const { allChatsData } = allChats;

  useEffect(() => {
    if (allChats) {
      const chatIds = [];
      allChatsData.forEach((chat) => chatIds.push(chat.id));
      chatIds.forEach((id) => {
        dispatch(getAllChatsData(id));
      });
    }
  }, [allChats, dispatch]);

  const { lastMessages } = useSelector((state) => state.allChatsMessages);
  console.log(`last messages:`, lastMessages);

  return (
    <div className='sidebarContainer' style={{ height: '100vh' }}>
      <SearchBar />
      <AllChats allChatsData={allChatsData} lastMessages={lastMessages} />
    </div>
  );
}
