import React, {useEffect, useState} from "react";
import {IShortMovie} from "../types/MovieTypes";
import {Link} from "react-router-dom";
import {useChangeRequestValueMutation, useDeleteFavMovieMutation, useGetRequestValueQuery} from '../store/request.api';
import whiteHeart from '../assets/icons/whiteHeart.svg';
import redHeart from '../assets/icons/heart.svg';
import '../assets/styles/ShortMovie.scss';

export interface ShortMovieProps extends IShortMovie{
    movieName: string;
}

export const ShortMovie: React.FC<ShortMovieProps> = ({Title, Poster, imdbID, movieName}) => {
    const [addToFavs] = useChangeRequestValueMutation();
    const [isDisabled, setIsDisabled] = useState(false);
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
    useEffect(() => {
        setIsDisabled(false);
    }, [data]);



    return (
        <div
            className={'movie-wrapper'}
        >
            {isDisabled &&
                <div
                    className={'alert'}
                >
                    <div
                        className={'alert__loading'}
                    >
                        <p>Loading...</p>
                    </div>
                </div>
            }
            <div
                className={'movie__top'}
            >
                <img src={Poster}/>
                <p
                    className={'movie__top__title'}
                >
                    {Title}
                </p>
            </div>
            <div className={'movie__bottom'}>
                <button
                    onClick={() => {
                        toggleFavMovie();
                        setIsDisabled(true);
                    }}
                    disabled={isDisabled}
                    className={'px-4 py-2 text-center text-white text-xl rounded'}
                >
                    <div>
                        <img src={isFav ? redHeart : whiteHeart} alt={'favourites'} className={'w-[25px]'}/>
                    </div>
                </button>
                <button
                >
                    <Link to={`/${movieName}/:${imdbID}`}
                        className={''}
                    >
                        show more
                    </Link>
                </button>
            </div>

        </div>
    )
}