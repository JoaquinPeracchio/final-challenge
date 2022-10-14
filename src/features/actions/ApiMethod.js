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

    GetProductsUser: builder.query({
      query: (id) => ({
        url: `/products/user/${id}`,
        method: 'GET'
      }),
      transformResponse: (response) => response.response
    }),


    ////////////////////////////////////////MUTATION////////////////////////////////////////////////////////////

    UpdateProduct: builder.mutation({
      query: (payload) => ({
        url: `/products/${payload.id}`,
        method: 'PATCH',
        body: payload,
      }),
    }),



    RemoveProduct: builder.mutation({
      query: (payload) => ({
        url: `/products/${payload}`,
        method: 'DELETE',
      }),
    }),



    CreateProduct: builder.mutation({
      query: (payload) => ({
        url: `/products/`,
        method: 'POST',
        body: payload
      }),
    }),

    SellProduct: builder.mutation({
      query: (payload) => ({
        url: `/auth/sell/${payload.seller}`,
        method: 'POST',
        body: payload
      }),
    }),

    BuyProduct: builder.mutation({
      query: (payload) => ({
        url: `/auth/buy/${payload.buyer}`,
        method: 'POST',
        body: payload
      }),
    }),

  }),

})
export const { useGetAllProductsQuery, useCreateProductMutation, useGetProductsUserQuery, useBuyProductMutation, useSellProductMutation, useUpdateProductMutation, useRemoveProductMutation } = ApiMethod
export default ApiMethod