import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import scrollReducer from "./modal/scrollReducer";
import modalReducer from "./modal2/modalReducer";

const combinedReducers = combineReducers({
  scroll: scrollReducer,
  modal: modalReducer,
});

const store = configureStore({
  reducer: combinedReducers,
});

export default store;
