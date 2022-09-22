import React from "react";
import {IShortMovie} from "../types/MovieTypes";
import {Link, useParams} from "react-router-dom";
import {movies} from "../data/data";
export interface ShortMovieProps extends IShortMovie{
    movieName: string
}

export const ShortMovie: React.FC<ShortMovieProps> = ({Title, Poster, imdbID, movieName}) => {
    return (
        <div
            className={'flex flex-col gap-4 bg-pink-900 px-3 py-3 text-white rounded-lg items-center w-[280px]'}
        >
            <img
                className={'rounded-md w-[16rem] h-[26rem] object-cover'}
                src={Poster}
            />
            <p
                className={'w-[80%] text-center'}
            >
                {Title}
            </p>
            <Link to={`/${movieName}/:${imdbID}`}
                className={'px-4 py-2 text-center bg-yellow-700 text-white text-xl rounded'}
            >
                show more
            </Link>
        </div>
    )
}