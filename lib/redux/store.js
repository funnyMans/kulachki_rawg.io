import { configureStore } from '@reduxjs/toolkit';

import planetsReducer from './features/planets/planetsSlice';
import globalThemeReducer from './features/globalTheme/globalThemeSlice';
import gamelistOrderReducer from './features/gamelistOrder/gamelistOrderSlice';
import gamelistFiltersReducer from './features/gamelistFilters/gamelistFiltersSlice';
import gamelistGlobalSearchReducer from './features/gamelistGlobalSearch/gamelistGlobalSearchSlice';

export const store = configureStore({
  reducer: {
    planets: planetsReducer,
    globalTheme: globalThemeReducer,
    gamelistOrder: gamelistOrderReducer,
    gamelistFilters: gamelistFiltersReducer,
    gamelistGlobalSearch: gamelistGlobalSearchReducer,
  },
});
