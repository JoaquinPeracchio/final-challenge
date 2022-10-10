import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from '../../api'

const commentsApi = createApi({
    reducerPath: "commentsApi",

    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        getComment: builder.query({
            query: (id) => ({
                url: `/comments/product/${id}`,
                method: 'GET'
            }),
            transformResponse: (response) => response.response
        }),
        getCommentById: builder.query({
            query: (id) => ({
                url: `/comments/${id}`,
                method: 'GET'
            }),
            transformResponse: (response) => response.response
        }),
        postComment: builder.mutation({
            query: (newComment) => ({
                url: '/comments/',
                method: 'POST',
                body: newComment,
            }),
        }),
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `/comments/product/${id}`,
                method: 'DELETE'
            }),
        }),
    })
})

export default commentsApi
export const { useGetCommentQuery, usePostCommentMutation, useGetCommentByIdQuery, useDeleteCommentMutation } = commentsApi