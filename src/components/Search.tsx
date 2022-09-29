import React, {useEffect, useState} from "react";
import {useInput} from "../hooks/useInput";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {addRecentSearch} from "../store/SearchSlice";
import find from '../assets/icons/magnifyingGlass.svg';
import '../assets/styles/Search.scss'

export const Search: React.FC = () => {
    const {value, handleValueChange: onSearchChange, setValue} = useInput();
    const [isSearches, setIsSearches] = useState(false);
    const dispatch = useAppDispatch();
    const searches = useAppSelector(state => state.search.previousRequests);
    const navigate = useNavigate();
    useEffect(() => {
         setValue('')
    }, []);


    return (
        <div
            className={'search-wrapper'}
        >
            <form
                className={'search'}
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addRecentSearch(value));
                    navigate(`/:${value}`);
                    // setValue('')
                }}
            >
                <div
                    className={'search__top'}
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
                    >
                        <img src={find} alt={'find'} className={'w-full'}/>
                    </button>
                </div>
                {isSearches &&
                    <div
                        className={' search__bottom'}
                    >
                        {searches.map(searchedMovie =>
                            searchedMovie.toLowerCase().includes(value.toLowerCase()) && value.length > 2 &&
                            <p
                                onClick={() => {
                                    console.log(value)
                                    setValue(searchedMovie)
                                    navigate(`/:${searchedMovie}`);
                                    // setValue('')
                                }}
                                className={'search__bottom__item'}
                                key={searchedMovie}
                            >
                                {searchedMovie}
                            </p>

                        )}
                    </div>}
            </form>
        </div>
    )
}