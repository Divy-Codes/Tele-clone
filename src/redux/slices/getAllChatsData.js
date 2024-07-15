import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  chatIds: [],
  //   allChatsData: {},
  error: null,
  loading: false,
  lastMessages: {},
};

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

const getAllChatsSlice = createSlice({
  name: 'getAllChatsSlice',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllChatsData.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(getAllChatsData.fulfilled, (state, action) => {
        const { length } = action.payload.messagesData;
        return {
          ...state,
          loading: false,
          messagesData: action.payload.messagesData,
          selectedChatId: action.payload.selectedChatId,
          //   allChatsData: {
          //     ...state.allChatsData,
          //     [action.payload.selectedChatId]: action.payload.messagesData,
          //   },
          //   lastMessages: [
          //     ...new Set([
          //       ...state.lastMessages,
          //       action.payload.messagesData[length - 1].message,
          //     ]),
          //   ],
          lastMessages: {
            ...state.lastMessages,
            [action.payload.selectedChatId]:
              action.payload.messagesData[length - 1].message,
          },
        };
      })
      .addCase(getAllChatsData.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload.error };
      });
  },
});

export default getAllChatsSlice.reducer;
