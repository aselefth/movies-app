import React from "react";
import {Link} from "react-router-dom";
import '../assets/styles/Navigation.scss';

export const Navigation: React.FC = () => {
    return (
        <nav
            className={'navigation'}
        >
            <Link to={'/'}>Cinema</Link>
            <Link to={'/favorites'}>Favorites</Link>
        </nav>
    )
}