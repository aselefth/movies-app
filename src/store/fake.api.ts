import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {IMovie} from "../types/MovieTypes";

 

export const moviesApi = createApi({
    reducerPath: 'fakeReducer',
     tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.omdbapi.com/'}),
    endpoints: (builder) => ({
        getMovieById: builder.query<IMovie, string>({
            query: (id: string) => ({url: `?apikey=abf49470&i=${id}&plot=full`}),
            providesTags: [{type: 'Products', id: 'LIST'}]
        }),
        getMoviesBySearch: builder.query<any, string>({
            query: (search) => ({url: `?apikey=abf49470&${search}`}),
            providesTags: ['Products']
        })
    })
})


export const { useGetMoviesBySearchQuery, useGetMovieByIdQuery } = moviesApi;