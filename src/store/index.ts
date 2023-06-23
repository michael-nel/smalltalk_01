import {
  Action,
  combineReducers,
  configureStore,
  PreloadedState,
  ThunkAction,
} from '@reduxjs/toolkit';

import { apiSlice } from '../services/apiSlice';
import { foodApiSlice } from '../services/foodSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [foodApiSlice.reducerPath]: apiSlice.reducer
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: true
        }
      }).concat(apiSlice.middleware)
  });
};
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
