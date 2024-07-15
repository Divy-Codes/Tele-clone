import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  allChatsData: [],
  error: null,
  loading: false,
};

export const getAllChats = createAsyncThunk(
  'allChats/getAllChats',
  async () => {
    try {
      const { data } = await axios.get(
        'https://devapi.beyondchats.com/api/get_all_chats?page=1'
      );
      console.log(`data:`, data);
      console.log(`data.data:`, data.data);
      return {
        data: data.data,
      };
    } catch (error) {
      return { error: error.response.data };
    }
  }
);

// export const getSubscriptionStatus = createAsyncThunk(
//   'channelInfo/getSubscriptionStatus',
//   async (id, { getState }) => {
//     try {
//       const { data } = await axios.get('/subscriptions', {
//         params: {
//           part: 'snippet',
//           forChannelId: id,
//           mine: true,
//         },
//         headers: {
//           Authorization: `Bearer ${getState().authObject.accessToken}`,
//         },
//       });
//       return {
//         subscriptionStatus: data.items.length !== 0,
//       };
//     } catch (error) {
//       return { error: error.response.data };
//     }
//   }
// );

const allChatsSlice = createSlice({
  name: 'allChats',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllChats.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(getAllChats.fulfilled, (state, action) => {
        console.log(`returned data:`, action.payload.data.data);
        return {
          ...state,
          loading: false,
          allChatsData: action.payload.data.data,
        };
      })
      .addCase(getAllChats.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload.error };
      });
  },
});

export default allChatsSlice.reducer;
