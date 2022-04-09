import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import movieReducer from './features/movie';

// Persist config - Save redux store to Llcal storage
const persistConfig = {
  key: 'root',
  storage,
};

// Persist the movie reducer
const persisted_movieReducer = persistReducer(persistConfig, movieReducer);

// Create store
const store = configureStore({
  // Reducers
  reducer: {
    movies: persisted_movieReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create the store persistor to save the store in local storage
const Persistor = persistStore(store);

export { Persistor };

export default store;
