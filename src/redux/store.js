import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksSlice from "./books/booksSlice";
import categoriesSlice from "./categories/categoriesSlice";

const store = configureStore({
  reducer: booksSlice,
});
export default store;
// I have added this line of code just for fixing a linter error
console.log(store);
