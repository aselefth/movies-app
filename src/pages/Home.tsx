import React from "react";
import {Search} from "../components/Search";

const Home: React.FC = () => {

    return (
        <div
            className={'w-full h-full relative min-h-[90vh]'}
        >
            <Search />
        </div>
    )
}

export default Home;