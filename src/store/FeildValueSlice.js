import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from: "INR",
  to: "USD",
};

export const inputFeildVlaueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    inputFeildVlaue: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { inputFeildVlaue } = inputFeildVlaueSlice.actions;

export default inputFeildVlaueSlice.reducer;
