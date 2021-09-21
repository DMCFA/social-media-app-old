import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './reducers/UserSlice';

export default configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});
