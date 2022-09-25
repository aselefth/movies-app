import React, {useState} from "react";
import {ShortMovie, ShortMovieProps} from "../components/ShortMovie";
import {useGetMoviesBySearchQuery} from "../store/fake.api";
import {Link, useParams} from "react-router-dom";
import {Pagination} from "../components/Pagination";

export const SearchMovies: React.FC = () => {
    const [page, setPage] = useState(1);
    const {movieName} = useParams();
    const {data, isLoading} = useGetMoviesBySearchQuery(`s=${movieName}&page=${page}`);
    const response = data !== undefined && data.Response === 'True';

    const handlePreviousPage = () => {
        if (page < 2) return;
        setPage(prev => prev - 1)
    }
    const handleNextPage = () => {
        if (Math.ceil(data?.totalResults / 10) === page ) return;
        setPage(prev => prev + 1)
    }
    return (
        <div
            className={'flex flex-col items-center mt-4'}
        >
            {isLoading &&
                <h1>
                    Loading...
                </h1>}

            <div
                className={'w-full h-full flex gap-14 flex-wrap mx-auto px-5 justify-center'}
            >
                {response && data?.Search.map((movie: ShortMovieProps) => (
                    <ShortMovie
                        movieName={`${movieName}`}
                        imdbID={movie.imdbID}
                        Title={movie.Title}
                        Poster={movie.Poster}
                        key={movie.imdbID}
                    />
                ))
                }
                {!isLoading && !response && (
                    <div className={'flex flex-col items-center gap-4'}>
                        <h1>No such a movie...</h1>
                        <button className={'px-4 py-3 bg-amber-400 rounded'}>
                            <Link to={'/'}>Go back</Link>
                        </button>
                    </div>
                )}
            </div>
            {response &&
                <Pagination page={page} handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} />}
        </div>
    )
}