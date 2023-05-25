import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL, FIXTURES } from '../../config/urls'
import { HEADERS } from '../../config/config'

export const fixtureSlice = createApi({
    reducerPath: 'fixtureSlice',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getLeagueFixtures: builder.mutation({
            query: (leagueId: number) => ({
                url: `${FIXTURES}?league=${leagueId}`,
                headers: HEADERS,
                method: 'GET'
            })
        })
    })
})

export const { useGetLeagueFixturesMutation } = fixtureSlice