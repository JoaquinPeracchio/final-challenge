import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from './slices/commentsSlice'
import commentsApi from './actions/commentsApi'
// import ApiMethod from './actions/ApiMethod'

export const store = configureStore({
  reducer: {
    [commentsApi.reducerPath]: commentsApi.reducer,
    comments: commentsReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentsApi.middleware),
})

