import { User, ValidationError } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { register } from './userThunk.ts';

interface UserState {
  user: User | null;
  registerLoading: boolean;
  registerError: ValidationError | null;
}

const initialState: UserState = {
  user: null,
  registerLoading: false,
  registerError: null,
}

export const selectUser = (state: RootState) => state.users.user
export const selectUserLoading = (state: RootState) => state.users.registerLoading
export const selectUserError = (state: RootState) => state.users.registerError

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers:{},
  extraReducers: (build) =>{
    build
      .addCase(register.pending, (state) =>{
        state.registerLoading = true;
        state.registerError = null;
      })
      .addCase(register.fulfilled, (state, {payload: regosterResponse}) =>{
        state.user = regosterResponse.user;
        state.registerError = null;
      })
      .addCase(register.rejected, (state, {payload: error}) =>{
        state.registerLoading = false;
        state.registerError = error || null
      })
  }
});

export const userReducer = userSlice.reducer