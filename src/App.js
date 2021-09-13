import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import NavList from './NavList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <NavList />
        <Route exact path="/" component={(props) => <Pokedex {...props} pokemons={pokemons} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;