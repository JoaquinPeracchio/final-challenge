import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

const ApiMethod = createApi({
  reducerPath: "ApiMethod",

  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4000`,
  }),
  ////////////////////////////////////////Get methods//////////////////////////////////////////////////


  endpoints: (builder) => ({

    GetAllProducts: builder.query({ query: () => `/products/` }),
 
  }),

})
export const {useGetAllProductsQuery}=ApiMethod
export default ApiMethod