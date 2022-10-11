import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

const ApiMethod = createApi({
  reducerPath: "citiesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: `https://localhost:3000`,
  }),
  ////////////////////////////////////////Get methods//////////////////////////////////////////////////


  endpoints: (builder) => ({

    getAllProducts: builder.query({ query: (params) => `/product/${params}` }),

  }),

})

export default ApiMethod