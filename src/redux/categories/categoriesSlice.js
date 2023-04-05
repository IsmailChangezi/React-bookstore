import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'Categories',
  type: 'CHECKED_STATUS',
  reducers: {
    showCategories: (state = [], action = {}) => {
      switch (action.type) {
        case 'CHECKED_STATUS':
          return 'under construction';
        default:
          return state;
      }
    },
  },
});

export const { showCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
