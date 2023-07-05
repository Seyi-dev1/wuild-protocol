import { createSlice } from "@reduxjs/toolkit";
const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    amount: 0,
  },
  reducers: {
    changeAmount: (state, action) => {
      state.amount = action.payload;
      console.log(state.amount);
    },
  },
});
export const { changeAmount } = scrollSlice.actions;
export default scrollSlice.reducer;
