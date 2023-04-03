import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    item: [],
    status: 'Under Construction',
  },
  reducers: {
    showCategories: (state) => state.status,
  },
});

export const { showCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
