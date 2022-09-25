import React, {useEffect, useState} from "react";
import {IShortMovie} from "../types/MovieTypes";
import {Link} from "react-router-dom";
import {useChangeRequestValueMutation, useDeleteFavMovieMutation, useGetRequestValueQuery} from '../store/request.api';
export interface ShortMovieProps extends IShortMovie{
    movieName: string;
}

export const ShortMovie: React.FC<ShortMovieProps> = ({Title, Poster, imdbID, movieName}) => {
    const [addToFavs] = useChangeRequestValueMutation();
    const [removeFromFavs] = useDeleteFavMovieMutation();
    const {data} = useGetRequestValueQuery(undefined);
    const [isFav, setIsFav] = useState(false);
    const movie = data && data.find((item: IShortMovie) => item.imdbID === imdbID);

    const toggleFavMovie = async() => {
        if (movie === undefined) {
            await addToFavs({Title, Poster, imdbID, id: ''});
            setIsFav(true);
        } else {
            await removeFromFavs(movie.id);
            setIsFav(false);
        }
    }
    useEffect(() => {
        movie === undefined ? setIsFav(false) : setIsFav(true);

    }, [movie]);



    return (
        <div
            className={'flex flex-col gap-4 bg-pink-900 px-3 py-3 text-white rounded-lg items-center justify-between w-[280px]'}
        >
            <div
                className={'flex flex-col gap-4 items-center'}
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
            </div>
            <div className={'flex items-center gap-4'}>
                <button
                    onClick={toggleFavMovie}
                    className={'px-4 py-2 text-center bg-yellow-700 text-white text-xl rounded h-[45px]'}
                >
                    <div
                        className={`w-[25px] h-[25px] rounded-xl border ${isFav ? 'bg-red-400' : 'bg-transparent'}`}
                    >
                    </div>
                </button>
                <Link to={`/${movieName}/:${imdbID}`}
                    className={'px-4 py-2 text-center bg-yellow-700 text-white text-xl rounded h-[45px]'}
                >
                    show more
                </Link>
            </div>

        </div>
    )
}