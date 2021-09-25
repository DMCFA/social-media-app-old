import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './features/UserSlice';

export default configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});
