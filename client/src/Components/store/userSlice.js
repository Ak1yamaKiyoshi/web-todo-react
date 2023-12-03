/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: -1,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
      id: []
  },
  reducers: {
      setUserId: (state, val) => {
          state.id = val.payload;
      },
      getUserId: (state) => {
          return state.id;
      }
  }
});


export const { setUserId, getUserId } = userSlice.actions;
export default userSlice.reducer;