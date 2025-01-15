import { Artists } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchArtists, getArtistById } from './artistsThunk.ts';
import { RootState } from '../../app/store.ts';

interface ArtistsState {
  artists: Artists[];
  fetchingLoading: boolean;
  fetchError: boolean;
}

const initialState: ArtistsState = {
  artists: [],
  fetchingLoading: false,
  fetchError: false,
}

export const selectArtists = (state: RootState) => state.artists.artists
export const selectArtistsLoading = (state: RootState) => state.artists.fetchingLoading

export const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers:{},
  extraReducers: (builder) =>{
    builder
      .addCase(fetchArtists.pending, (state) =>{
         state.fetchingLoading = true
      })
      .addCase(fetchArtists.fulfilled, (state, {payload: artists}) =>{
        state.fetchingLoading = false;
        state.artists = artists;
      })
      .addCase(fetchArtists.rejected, (state) =>{
        state.fetchError = true
      })
      .addCase(getArtistById.pending, (state) =>{
        state.fetchingLoading = true
      })
      .addCase(getArtistById.fulfilled, (state, {payload: artists}) =>{
        state.fetchingLoading = false;
        state.artists = artists;
      })
      .addCase(getArtistById.rejected, (state) =>{
        state.fetchError = true
      })
  }
})

export const artistsReducer = artistsSlice.reducer;