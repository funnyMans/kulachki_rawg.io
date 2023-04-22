import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: '',
};

export const gamelistOrderSlice = createSlice({
  name: 'gamelistOrder',
  initialState,
  reducers: {
    reset: () => initialState,
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { setOrder, reset } = gamelistOrderSlice.actions;

export const selectGamelistOrder = (state) => state.gamelistOrder.order;
export default gamelistOrderSlice.reducer;
