import React from "react";
import {Search} from "../components/Search";
import '../assets/styles/Home.scss';

const Home: React.FC = () => {

    return (
        <div
            className={'container'}
        >
            <Search />
        </div>
    )
}

export default Home;