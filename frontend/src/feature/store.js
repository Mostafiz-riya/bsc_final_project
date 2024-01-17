import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slice/messageSlice.js";
import modalReducer from "./slice/modalSlice.js";

export default configureStore({
  reducer: {
    modal: modalReducer,
    message: messageReducer,
  },
});
