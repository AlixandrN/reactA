// components/features/memberSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentMember: {
    name: null,
    password: null,
  },
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action) => {
      state.currentMember = action.payload;
    },
  },
});

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;
