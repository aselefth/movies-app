import React from "react";
import {ShortMovie, ShortMovieProps} from "../components/ShortMovie";
import {useGetMoviesBySearchQuery} from "../store/fake.api";
import {useParams} from "react-router-dom";

export const SearchMovies: React.FC = () => {
    const {movieName} = useParams();
    const {data, isError, isLoading} = useGetMoviesBySearchQuery(`${movieName}`);

    return (
        <div>
            {isLoading &&
                <h1>
                    Loading...
                </h1>}

            {(isError) &&
                <h1>
                    Error...
                </h1>}

            <div
                className={'w-full h-full flex gap-14 flex-wrap mx-auto mt-4 px-5 justify-center'}
            >


                {data && data.Search.map((movie: ShortMovieProps) => (
                    <ShortMovie
                        movieName={`${movieName}`}
                        imdbID={movie.imdbID}
                        Title={movie.Title}
                        Poster={movie.Poster}
                        key={movie.imdbID}
                    />
                ))}
            </div>
        </div>
    )
}