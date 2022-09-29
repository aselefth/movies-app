import React from "react";
import {useGetRequestValueQuery} from "../store/request.api";
import {ShortMovie} from "../components/ShortMovie";
import {IShortMovie} from "../types/MovieTypes";


const Favorites: React.FC = () => {
    const {data} = useGetRequestValueQuery(undefined);
    return (
        <div>
            <div
                className={'w-full h-full flex gap-14 flex-wrap mx-auto mt-4 px-5 justify-center mb-8'}
            >
                {data && data.length > 0 ? data.map((movie: IShortMovie) => (
                    <ShortMovie
                        key={movie.imdbID}
                        movieName={movie.Title}
                        Title={movie.Title}
                        imdbID={movie.imdbID}
                        Poster={movie.Poster}
                    />
                ))
                : <h1>No movies here...</h1>}
            </div>
        </div>
    )
}

export default Favorites;