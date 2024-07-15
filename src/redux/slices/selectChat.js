import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  selectedChatId: null,
  messagesData: [],
  error: null,
  loading: false,
  username: '',
  initials: '',
  backgroundColor: '#8774e1',
};

export const selectChat = createAsyncThunk(
  'selectChat/selectChat',
  // async ({ id, username, initials, color }) => {
  async (args) => {
    try {
      console.log(`args:`, args);
      const { id, username, initials, color } = args;
      console.log(`id,username,initials,color:`, id, username, initials, color);
      const { data } = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`
      );
      console.log(`data:`, data);
      // console.log(`data.data:`, data.data);
      return {
        messagesData: data.data,
        selectedChatId: id,
        username: username,
        backgroundColor: color,
        initials: initials,
      };
    } catch (error) {
      return { error: error.response.data };
    }
  }
);

export const getAllChatsData = createAsyncThunk(
  'getAllChats/getAllChatsData',
  async (id) => {
    try {
      const { data } = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`
      );
      return {
        messagesData: data.data,
        selectedChatId: id,
      };
    } catch (error) {
      return { error: error.response.data };
    }
  }
);

const selectChatSlice = createSlice({
  name: 'selectChat',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(selectChat.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(selectChat.fulfilled, (state, action) => {
        console.log(`returned data:`, action.payload.messagesData);
        return {
          ...state,
          loading: false,
          messagesData: action.payload.messagesData,
          selectedChatId: action.payload.selectedChatId,
          backgroundColor: action.payload.backgroundColor,
          username: action.payload.username,
          initials: action.payload.initials,
        };
      })
      .addCase(selectChat.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload.error };
      });
  },
});

export default selectChatSlice.reducer;
