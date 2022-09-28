import React, {useState} from "react";
import {useInput} from "../hooks/useInput";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {addRecentSearch} from "../store/SearchSlice";

export const Search: React.FC = () => {
    const {value, handleValueChange: onSearchChange, setValue} = useInput();
    const [isSearches, setIsSearches] = useState(false);
    const dispatch = useAppDispatch();
    const searches = useAppSelector(state => state.search.previousRequests);
    const navigate = useNavigate();

    return (
        <div
            className={'flex flex-col items-center gap-4 mt-4 relative'}
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addRecentSearch(value));
                    navigate(`/:${value}`);
                }}
            >
                <input
                    value={value}
                    onChange={onSearchChange}
                    onBlur={() => setTimeout(() => setIsSearches(false), 100)}
                    onFocus={() => setIsSearches(true)}
                    className={'outline-none border p-2 mr-[-1px] rounded'}
                />
                <button
                    type={'submit'}
                    className={'px-4 py-3 bg-amber-400 rounded'}
                >
                    find
                </button>
            </form>

            {isSearches &&
                <div
                    className={'absolute w-full top-[100%] grid grid-cols-1 bg-white z-10 rounded'}
                >
                    {searches.map(searchedMovie =>
                            searchedMovie.toLowerCase().includes(value.toLowerCase()) && value.length > 2 &&
                                <p
                                    onClick={() => {
                                        navigate(`/:${searchedMovie}`);
                                        setValue('');
                                    }}
                                    className={'px-2 py-1 hover:bg-gray-100 w-full h-full border'}
                                    key={searchedMovie}
                                >
                                    {searchedMovie}
                                </p>

                    )}
                </div>}

        </div>
    )
}