import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import NavList from './NavList';
import PokemonDetails from './PokemonDetails';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <NavList />
        <Switch>
          <Route exact path="/" component={(props) => <Pokedex {...props} pokemons={pokemons} />} />
          <Route exact path="/pokemons/:id" component={(props) => <PokemonDetails {...props} data={ pokemons } /> } />
          <Route path="/about" component={ About } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;