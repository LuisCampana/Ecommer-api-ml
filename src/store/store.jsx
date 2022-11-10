import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducer/getss";
const store = configureStore({
  reducer: {
    call: userReducer,
  },
});
export default store;
