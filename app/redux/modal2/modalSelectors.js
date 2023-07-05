import { createSelector } from "@reduxjs/toolkit";
export const selectModal = (state) => state.modal;

export const selectmodalVisibility = createSelector(
  [selectModal],
  (modal) => scroll.isVisible
);
