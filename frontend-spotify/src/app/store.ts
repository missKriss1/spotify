import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { artistsReducer } from '../features/artists/artistsSlice.ts';
import { albumReducer } from '../features/albums/albumsSlice.ts';
import { tracksReducer } from '../features/tracks/tracksSlice.ts';
import { userReducer } from '../features/users/userSlice.ts';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE, PERSIST } from 'redux-persist';

const userPersistConfig = {
  key: 'store:users',
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumReducer,
  tracks: tracksReducer,
  users: persistReducer(userPersistConfig, userReducer),
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;