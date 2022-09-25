import React from "react";
import {ShortMovie, ShortMovieProps} from "../components/ShortMovie";
import {useGetMoviesBySearchQuery} from "../store/fake.api";
import {Link, useNavigate, useParams} from "react-router-dom";

export const SearchMovies: React.FC = () => {
    const {movieName} = useParams();
    const {data, isLoading} = useGetMoviesBySearchQuery(`${movieName}`);
    let response = data !== undefined && data.Response === 'True';
    return (
        <div>
            {isLoading === undefined &&
                <h1>
                    Loading...
                </h1>}

            <div
                className={'w-full h-full flex gap-14 flex-wrap mx-auto mt-4 px-5 justify-center'}
            >
                {response ? data?.Search.map((movie: ShortMovieProps) => (
                    <ShortMovie
                        movieName={`${movieName}`}
                        imdbID={movie.imdbID}
                        Title={movie.Title}
                        Poster={movie.Poster}
                        key={movie.imdbID}
                    />
                ))
                : (
                    <div className={'flex flex-col items-center gap-4'}>
                        <h1>No such a movie...</h1>
                        <button className={'px-4 py-3 bg-amber-400 rounded'}>
                            <Link to={'/'}>Go back</Link>
                        </button>
                    </div>
                    )}

            </div>
        </div>
    )
}