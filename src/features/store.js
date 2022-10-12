import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from './slices/commentsSlice'
import carritoSlice from './slices/carritoSlice'
import ApiMethod from './actions/ApiMethod'

export const store = configureStore({
  reducer: {
     [ApiMethod.reducerPath]: ApiMethod.reducer,
    comments: commentsReducer,
    carrito : carritoSlice
  },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiMethod.middleware),
})

