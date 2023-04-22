import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'dark',
};

export const globalThemeSlice = createSlice({
  name: 'globalTheme',
  initialState,
  reducers: {
    reset: () => initialState,
    setGlobalTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setGlobalTheme, reset } = globalThemeSlice.actions;

export const selectGlobalTheme = (state) => state.globalTheme.currentTheme;
export default globalThemeSlice.reducer;
