import { configureStore } from "@reduxjs/toolkit";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { moviesApi } from "./fake.api";
import {requestApi} from "./request.api";

const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        [requestApi.reducerPath]: requestApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware).concat(requestApi.middleware)
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;