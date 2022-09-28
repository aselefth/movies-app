import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./fake.api";
import {requestApi} from "./request.api";
import SearchSlice from "./SearchSlice";

const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        [requestApi.reducerPath]: requestApi.reducer,
        search: SearchSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware).concat(requestApi.middleware)
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;