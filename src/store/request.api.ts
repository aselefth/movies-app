import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const requestApi = createApi({
    reducerPath: 'requestApi',
    tagTypes: ['Request'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://632988e24c626ff832c37bc9.mockapi.io/api/v1/favourites'}),
    endpoints: (build) => ({
        getRequestValue: build.query({
            query: () => ({
                url: ''
            }),
            providesTags: ['Request']
        }),
        changeRequestValue: build.mutation({
            query: (body: {Title: string, imdbID: string, Poster: string, id: string}) => ({
                url: ``,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Request']
        }),
        deleteFavMovie: build.mutation({
            query: (id: string) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Request']
        })
    })
})

export const {useGetRequestValueQuery, useChangeRequestValueMutation, useDeleteFavMovieMutation} = requestApi;