import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "modal",
  initialState: {
    data: null,
  },
  reducers: {
    openMessage: (state, action) => {
      state.data = action.payload;
    },
    closeMessage: (state, action) => {
      state.data = null;
    },
  },
});

export const { openMessage, closeMessage, completed } = messageSlice.actions;

export default messageSlice.reducer;
