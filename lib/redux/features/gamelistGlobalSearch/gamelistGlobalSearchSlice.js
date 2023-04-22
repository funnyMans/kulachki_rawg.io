import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchField: '',
};

export const gamelistGlobalSearch = createSlice({
  name: 'gamelistGlobalSearch',
  initialState,
  reducers: {
    reset: () => initialState,
    setGlobalSearch: (state, action) => {
      state.searchField = action.payload;
    },
  },
});

export const { setGlobalSearch, reset } = gamelistGlobalSearch.actions;

export const selectGamelistGlobalSearch = (state) =>
  state.gamelistGlobalSearch.searchField;

export default gamelistGlobalSearch.reducer;
