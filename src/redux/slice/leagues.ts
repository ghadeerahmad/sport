import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL, LEAGUES } from '../../config/urls'
import { HEADERS } from '../../config/config'

export const leagueSlice = createApi({
    reducerPath: 'leagueSlice',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        fetchLeague: builder.mutation({
            query: (id: number) => ({
                url: `${LEAGUES}/${id}`,
                method: 'GET',
                headers: HEADERS
            })
        })
    })
})

export const { useFetchLeagueMutation } = leagueSlice