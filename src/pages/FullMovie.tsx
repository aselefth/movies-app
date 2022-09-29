import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useGetMovieByIdQuery} from "../store/fake.api";
import '../assets/styles/FullMovie.scss';
import '../assets/styles/ShortMovie.scss';
import {useChangeRequestValueMutation, useDeleteFavMovieMutation, useGetRequestValueQuery} from "../store/request.api";
import {IShortMovie} from "../types/MovieTypes";
import redHeart from "../assets/icons/heart.svg";
import whiteHeart from "../assets/icons/whiteHeart.svg";

export const FullMovie: React.FC = () => {
    const {id} = useParams();
    const {data: movie, isLoading} = useGetMovieByIdQuery(`${id?.slice(1, id?.length)}`);
    const [addToFavs] = useChangeRequestValueMutation();
    const [isDisabled, setIsDisabled] = useState(false);
    const [removeFromFavs] = useDeleteFavMovieMutation();
    const {data} = useGetRequestValueQuery(undefined);
    const [isFav, setIsFav] = useState(false);
    const searchedMovie = data && data.find((item: IShortMovie) => item.imdbID === `${id?.slice(1, id?.length)}`);
    const toggleFavMovie = async() => {
        if (searchedMovie === undefined) {
            movie && await addToFavs({Title: movie.Title, Poster: movie.Poster, imdbID: `${id}`, id: ''});
            setIsFav(true);
        } else {
            await removeFromFavs(searchedMovie.id);
            setIsFav(false);
        }
    }

    useEffect(() => {
        searchedMovie === undefined ? setIsFav(false) : setIsFav(true);
    }, [movie]);

    useEffect(() => {
        setIsDisabled(false);
    }, [data]);


    return (
        <div
            className={'wrapper'}
        >
            {isLoading &&
                <h1
                    className={'text-2xl'}
                >
                    Loading...
                </h1>}
            {isDisabled &&
                <div
                    className={'alert top-16'}
                >
                    <div
                        className={'alert__loading'}
                    >
                        <p>Loading...</p>
                    </div>
                </div>}
            {movie &&
                <div
                    className={' top-info'}
                >
                <img src={movie.Poster}/>
                <div
                    className={'top-info__right'}
                >
                    <h1
                        className={'text-3xl font-bold'}
                    >
                        {movie.Title}
                    </h1>
                    <h3>
                        {movie.Actors}
                    </h3>
                    <h3>
                        <span
                            className={'font-bold'}
                        >
                            imdb Rating:
                        </span>
                         {` ${movie.imdbRating}`}
                    </h3>
                    {movie.Ratings.map(rating => (
                        <h3
                            key={rating.Source}
                        >
                            <span
                                className={'font-bold'}
                            >
                                {`${rating.Source}`}:
                            </span>
                            {` ${rating.Value}`}
                        </h3>)
                    )}
                    <h3>
                        <span
                            className={'font-bold'}
                        >
                            box office:
                        </span>
                        {`${movie.BoxOffice}`}
                    </h3>
                    <button
                        onClick={() => {
                            toggleFavMovie();
                            setIsDisabled(true);
                        }}
                        disabled={isDisabled}
                        className={'px-4 py-2 text-center bg-yellow-700 text-white text-xl rounded h-[45px] w-[70px] flex justify-center items-center'}
                    >
                        <div>
                            <img src={isFav ? redHeart : whiteHeart} alt={'favourites'} className={'w-[25px]'}/>
                        </div>
                    </button>
                </div>
            </div>}
            {movie &&
                <div
                    className={'movie-plot'}
                >
                    <p>{movie.Plot}</p>
                </div>}
        </div>
    )
}