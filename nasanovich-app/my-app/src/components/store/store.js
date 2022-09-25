// components/store/store.js
import { configureStore } from "@reduxjs/toolkit";
// import { loger } from "../../middleware/loger";
import { setMemberInLS } from "../../middleware/setMemberInLS";
import memberSlice from "../features/memberSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    member: memberSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(setMemberInLS),
});
