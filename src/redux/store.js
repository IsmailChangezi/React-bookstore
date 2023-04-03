import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksSlice, { addBook } from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const rootReducers = combineReducers({
  booksReducers: booksSlice,
  categoriesReducer: categoriesSlice,
});

const store = configureStore({
  reducer: rootReducers,
});

store.dispatch(addBook({ id: 1, item: 'new boooks' }));
