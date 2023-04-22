import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  planets: [],
};

export const planetsSlice = createSlice({
  name: 'gamelistGlobalSearch',
  initialState,
  reducers: {
    reset: () => initialState,
    setPlanets: (state, action) => {
      state.planets = action.payload;
    },
    addPlanet: (state, action) => {
      state.planets = [...state.planets, action.payload];
    },
    removePlanet: (state, action) => {
      state.planets = state.planets.filter(
        (planet) => planet.id !== action.payload.id
      );
    },
  },
});

export const { setPlanets, addPlanet, removePlanet, reset } =
  planetsSlice.actions;

export const selectGamelistGlobalSearch = (state) =>
  state.planetsSlice.searchField;

export default planetsSlice.reducer;
