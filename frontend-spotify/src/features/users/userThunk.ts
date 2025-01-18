import { createAsyncThunk } from '@reduxjs/toolkit';
import { GlobalError, LogInMutation, RegisterMutation, RegisterResponse, User, ValidationError } from '../../types';
import axiosApi from '../../axiosApi.ts';
import { isAxiosError } from 'axios';

export const register = createAsyncThunk<RegisterResponse, RegisterMutation, {rejectValue: ValidationError}>(
  'users/register',
  async (registerMutation : RegisterMutation, {rejectWithValue}) =>{
    try{
      const response = await axiosApi.post<RegisterResponse>('/users/register', registerMutation);
      return response.data;
    }catch(error){
      if (isAxiosError(error) && error.response) {
        const { data } = error.response;
        if (error.response.status === 400 && data.errors) {
          return rejectWithValue(data as ValidationError);
        }
      }
      throw error;
    }
  }
)

export const login = createAsyncThunk<User, LogInMutation, {rejectValue: GlobalError}>(
  'users/login',
  async (LogInMutation, {rejectWithValue}) =>{

    try{
      const response = await axiosApi.post<RegisterResponse>('/users/sessions', LogInMutation);
      return response.data.user;

    }catch(error){
      if (isAxiosError(error) && error.response) {
        const { status, data } = error.response;
        if (status === 400 && data.error) {
          return rejectWithValue(data as GlobalError);
        }
      }
      throw error;
    }
  }
)