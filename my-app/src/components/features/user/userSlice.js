// components/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirst: (state, action) => {
      state.first = action.payload;
    },
  },
});

export const { setFirst } = userSlice.actions;
export default userSlice.reducer;
