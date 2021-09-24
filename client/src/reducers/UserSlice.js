import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'api/users';

export const register = createAsyncThunk(
    'register',
    async ({ username, email, password }, thunkAPI) => {
        try {
            const res = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });
            let data = await res.json();
            console.log('data', data);

            if (res.status === 200) {
                localStorage.setItem('token', data.token);
                return { ...data, username: username, email: email };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.res.data);
            return thunkAPI.rejectWithValue(e.res.data);
        }
    }
);

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
    extraReducers: {
        [signupUser.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.user.email;
            state.username = payload.user.name;
        },
        [signupUser.pending]: (state) => {
            state.isFetching = true;
        },
        [signupUser.rejected]: (state, { payload }) => {},
    },
});

export const userSelector = (state) => state.user;
