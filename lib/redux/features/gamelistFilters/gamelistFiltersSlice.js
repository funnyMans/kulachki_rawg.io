import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    metacritic: [0, 100],
  },
};

export const gamelistFilters = createSlice({
  name: 'gamelistFilters',
  initialState,
  reducers: {
    reset: () => initialState,
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setFilters, reset } = gamelistFilters.actions;

export const selectGamelistFilters = (state) => state.gamelistFilters.filters;
export default gamelistFilters.reducer;
