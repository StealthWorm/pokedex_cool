import { useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';
import './styles.css';
import iconPokemon from '../../assets/icons/icon.svg';

function NavBar() {
   const { shiny, setPokemon, setShiny, filterPokemon } = useContext(MainContext);

   function handleSubmit(e) {
      filterPokemon(e)
   }

   return (
      <header>
         <nav className="container-nav">
            <img src={iconPokemon} alt="pokemon" style={{opacity: 0.5}}/>
            <div className="nav-content">
               <form className="nav-input" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Enter Pokémon name..." onChange={e => setPokemon(e.target.value.toLowerCase())} />
               </form>
            </div>
         </nav>

         <button onClick={() => setShiny(!shiny)}>SHINY</button>
      </header>
   );
}

export default NavBar;
