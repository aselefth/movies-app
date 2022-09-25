import React from "react";

import {Navigation} from "./components/Navigation";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import {FullMovie} from "./pages/FullMovie";
import {SearchMovies} from "./pages/SearchMovies";

const App: React.FC = () => {


  return (
    <div>
      <Navigation />
      <Routes>
        <Route path={'/'} element={<Home />} />
          <Route path={'/favourites'} element={<Favourites />} />
          <Route path={'/:movieName/:id'} element={<FullMovie/>} />
          <Route path={'/:movieName'} element={<SearchMovies/>}/>
      </Routes>
    </div>
  );
};

export default App;
