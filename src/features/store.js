import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from './slices/commentsSlice'
// import ApiMethod from './actions/ApiMethod'

export const store = configureStore({
  reducer: {
    // [ApiMethod.reducerPath]: ApiMethod.reducer,
    comments: commentsReducer
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(ApiMethod.middleware),
})

