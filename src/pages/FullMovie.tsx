import React from "react";
import {useParams} from "react-router-dom";
import {useGetMovieByIdQuery} from "../store/fake.api";
import '../assets/styles/FullMovie.scss'

export const FullMovie: React.FC = () => {
    const {movieName, id} = useParams();

    const {data: movie, isLoading} = useGetMovieByIdQuery(`${id?.slice(1, id?.length)}`);
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
                        imdb Rating: {movie.imdbRating}
                    </h3>
                    {movie.Ratings.map(rating => (
                        <h3
                            key={rating.Source}
                        >
                            {`${rating.Source}: ${rating.Value}`}
                        </h3>)
                    )}
                    <h3>
                        box office: {movie.BoxOffice}
                    </h3>
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