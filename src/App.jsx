import React, { useContext } from 'react';
// import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Pagination from './components/Pagination';
import Card from './components/Card';
import loadingGif from './assets/gif/loading2.gif';
import { MainContext } from './contexts/MainContext';

function App() {
  const { pokemonData, loading } = useContext(MainContext)

  return (
    <div className="App">
      <NavBar />
      <Pagination />

      {loading
        ?
        <div className="loading">
          <img src={loadingGif} alt="LOADING..." />
          <h1>Loading...</h1>
        </div>
        :
        <div className={pokemonData.length > 1 ? "grid-container" : "grid-container-unique"} >
          {pokemonData.map(pokemon => {
            return (
              <Card key={pokemon.id} pokemon={pokemon} />
            )
          })}
        </div>
      }

    </div>
  );
}

export default App;
