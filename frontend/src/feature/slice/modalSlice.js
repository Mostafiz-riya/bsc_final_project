import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    item: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.item = action.payload;
    },
    closeModal: (state) => {
      state.item = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
