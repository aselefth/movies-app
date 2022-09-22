import React from "react";
import {Link} from "react-router-dom";

export const Navigation: React.FC = () => {
    return (
        <nav
            className={'flex w-full justify-around py-2 bg-gray-600 text-white'}
        >
            <Link to={'/'}>Cinema</Link>
            <Link to={'/favourites'}>Favourites</Link>
        </nav>
    )
}