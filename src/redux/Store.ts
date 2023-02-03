import {configureStore} from '@reduxjs/toolkit';
// import authSlice from './slice/authSlice';
// import newUserSlice from './slice/newUserSlice';
import themeSlice from './slice/themeSlice';

export const Store = configureStore({
  reducer: {
    // auth: authSlice,
    // newUser: newUserSlice,

    theme: themeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
