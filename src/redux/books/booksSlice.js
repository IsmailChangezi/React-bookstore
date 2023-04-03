import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.items.push(action.payload);
    },
    removeBook: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});
export const { addBook, removeBook } = booksSlice.actions;
