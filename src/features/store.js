import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from './slices/commentsSlice'
import carritoSlice from './slices/carritoSlice'
import commentsApi from './actions/commentsApi'
import userApi from './actions/userApi'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    comments: commentsReducer,
    carrito: carritoSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(commentsApi.middleware)
})

