import { configureStore } from '@reduxjs/toolkit';
import allChats from '../redux/slices/getAllChats';
import messagesData from './slices/selectChat';
import allChatsMessages from './slices/getAllChatsData';
export const store = configureStore({
  reducer: {
    allChats: allChats,
    messagesData: messagesData,
    allChatsMessages: allChatsMessages,
  },
});
