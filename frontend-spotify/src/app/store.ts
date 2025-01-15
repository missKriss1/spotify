import { configureStore } from "@reduxjs/toolkit";
import { artistsReducer } from '../features/artists/artistsSlice.ts';
import { albumReducer } from '../features/albums/albumsSlice.ts';
import { tracksReducer } from '../features/tracks/tracksSlice.ts';

export const store = configureStore({
  reducer: {
    artists: artistsReducer,
    albums: albumReducer,
    tracks: tracksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;