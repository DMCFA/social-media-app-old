import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './reducers/users';

export default configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});
