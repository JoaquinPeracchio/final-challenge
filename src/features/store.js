import { configureStore } from '@reduxjs/toolkit'
import ApiMethod from './actions/ApiMethod'
import authReducer from './authSlice'

export default configureStore({
  reducer: {
    [ApiMethod.reducerPath] : ApiMethod.reducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(ApiMethod.middleware),
})

