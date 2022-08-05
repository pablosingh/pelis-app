import React from "react";

import Favorites from "./components/Favorites";
import Buscador from "./components/Buscador";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie";

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
          <NavBar />
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
    </Provider>
  );
}

export default App;
