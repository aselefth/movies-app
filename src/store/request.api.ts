import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const requestApi = createApi({
    reducerPath: 'requestApi',
    tagTypes: ['Request'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (build) => ({
        getRequestValue: build.query({
            query: () => ({
                url: 'request'
            }),
            providesTags: ['Request']
        }),
        changeRequestValue: build.mutation({
            query: (body) => ({
                url: `request/`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Request']
        })
    })
})

export const {useGetRequestValueQuery, useChangeRequestValueMutation} = requestApi;