import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  missions: missionsReducer,
  // rockets: rocketsReducer,
});

const preloadedState = {
  missions: [],
  // rockets: [],
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [logger, thunk, ...getDefaultMiddleware()],
  preloadedState,
});

export default store;
