import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const rootReducers = combineReducers({
  booksReducers: booksSlice,
  categoriesReducer: categoriesSlice,
});

const store = configureStore({
  reducer: rootReducers,
});

// I have added this line of code just for fixing a linter error
store.getState();
