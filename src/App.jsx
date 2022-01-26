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
          <img src={loadingGif} alt="Loading..." />
          <h1>Loading...</h1>
        </div>
        :
        <div className="grid-container" style={pokemonData.length > 1 ? { gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))" } : { padding: "0.6rem 0 1rem 0", overflow: "hidden" }}>
          {pokemonData.map((pokemon, i) => {
            return (
              <Card key={i} pokemon={pokemon}/>
            )
          })}
        </div>
      }

    </div>
  );
}

export default App;
