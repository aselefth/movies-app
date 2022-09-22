import React, {useEffect, useState} from "react";
import {ShortMovie, ShortMovieProps} from "../components/ShortMovie";
import {useInput} from "../hooks/useInput";
import {useGetMoviesBySearchQuery} from "../store/fake.api";
import {IShortMovie} from "../types/MovieTypes";
import {useChangeRequestValueMutation, useGetRequestValueQuery} from "../store/request.api";
import {Link, useNavigate, useParams} from "react-router-dom";

const Home: React.FC = () => {

    const {value, handleValueChange: onSearchChange, setValue} = useInput();
    const navigate = useNavigate();

    return (
        <div
            className={'flex flex-col items-center gap-4 mt-4'}
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    navigate(`/:${value}`)
                }}
            >
                <input
                    value={value}
                    onChange={onSearchChange}
                    className={'outline-none border p-2 mr-[-1px] rounded'}
                />
                <button
                    type={'submit'}
                    className={'px-4 py-3 bg-amber-400 rounded'}
                >
                        find
                </button>
            </form>

        </div>
    )
}

export default Home;