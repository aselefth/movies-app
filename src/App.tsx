import React from "react";

import {Navigation} from "./components/Navigation";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import {FullMovie} from "./pages/FullMovie";
import {SearchMovies} from "./pages/SearchMovies";

const App: React.FC = () => {


  return (
    <div className={'relative w-full min-h-[100vh] pt-12'}>
      <Navigation />
          <Routes>
            <Route path={'/'} element={<Home />} />
              <Route path={'/favorites'} element={<Favorites />} />
              <Route path={'/:movieName/:id'} element={<FullMovie/>} />
              <Route path={'/:movieName'} element={<SearchMovies/>}/>
          </Routes>
    </div>
  );
};

export default App;
