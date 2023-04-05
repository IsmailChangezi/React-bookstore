import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: [
      {
        id: 'item1',
        title: 'The Great Gatsby',
        author: 'John Smith',
        category: 'Fiction',
      },
      {
        id: 'item2',
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        category: 'Fiction',
      },
      {
        id: 'item3',
        title: 'The Selfish Gene',
        author: 'Richard Dawkins',
        category: 'Nonfiction',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      const newItem = action.payload;
      const updatedItems = [...state.items, newItem];
      return { ...state, items: updatedItems };
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      const updatedItems = state.items.filter((item) => item.id !== itemId);
      return { ...state, items: updatedItems };
    },
  },
});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
