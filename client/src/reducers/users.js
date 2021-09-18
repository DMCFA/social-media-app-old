import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {},
});

export const userSelector = (state) => state.user;
