
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { Track } from '../../types';

interface TracksState {
  tracks: Track[];
  fetchingLoading: boolean;
  fetchError: boolean;
}

const initialState: TracksState = {
  tracks: [],
  fetchingLoading: false,
  fetchError: false,
}

export const selectTracks = (state: RootState) => state.tracks.tracks
export const selectTracksLoading = (state: RootState) => state.tracks.fetchingLoading

export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers:{},
  extraReducers: (builder) =>{
  }
})

export const tracksReducer = tracksSlice.reducer;