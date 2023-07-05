import { createSlice } from "@reduxjs/toolkit";
const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isVisible: false,
  },
  reducers: {
    changeVisibility: (state) => {
      state.isVisible = !state.isVisible;
      console.log(state.isVisible);
    },
  },
});
export const { changeVisibility } = modalSlice.actions;
export default modalSlice.reducer;
