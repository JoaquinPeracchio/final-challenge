import {
    createApi,
    fetchBaseQuery
  } from '@reduxjs/toolkit/query/react'
  import APIurl from '../APIBack'
  
  const ApiMethod = createApi({
    reducerPath: "citiesAPI",
  
    baseQuery: fetchBaseQuery({
      baseUrl: `${APIurl}`,
    }),
    ////////////////////////////////////////Get methods//////////////////////////////////////////////////
  
  
    endpoints: (builder) => ({

    }),

})

export default ApiMethod
