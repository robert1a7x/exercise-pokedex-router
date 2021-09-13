import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import NavList from './NavList';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <NavList />
        <Route exact path="/" component={(props) => <Pokedex {...props} pokemons={pokemons} />} />
        <Route exact path="/pokemons/:id" component={(props) => <PokemonDetails {...props} data={ pokemons } /> } />
      </div>
    </BrowserRouter>
  );
}

export default App;