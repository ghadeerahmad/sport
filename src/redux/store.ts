import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { fixtureSlice } from "./slice/fixtures";
import { leagueSlice } from "./slice/leagues";

const store = configureStore({
    reducer: {
        [fixtureSlice.reducerPath]: fixtureSlice.reducer,
        [leagueSlice.reducerPath]: leagueSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        fixtureSlice.middleware,
        leagueSlice.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store