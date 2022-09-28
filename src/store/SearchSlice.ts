import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
    previousRequests: string[];
}

const initialState: InitialState = {
    previousRequests: [],
}

export const SearchSlice = createSlice({
    name: 'SearchSlice',
    initialState,
    reducers: {
        addRecentSearch: (state, action: PayloadAction<string>) => {
            if (state.previousRequests.includes(action.payload)) {
                state.previousRequests = state.previousRequests.filter(movie => movie !== action.payload);
            }
            state.previousRequests.unshift(action.payload);
        }
    }
});

export default SearchSlice.reducer;
export const {addRecentSearch} = SearchSlice.actions;