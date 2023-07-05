import { createSelector } from "@reduxjs/toolkit";
export const selectScroll = (state) => state.scroll;

export const selectmodalVisibility = createSelector(
  [selectScroll],
  (scroll) => scroll.amount
);
