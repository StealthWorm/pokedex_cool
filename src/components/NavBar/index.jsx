import { useContext, useState } from 'react';
import { MainContext } from '../../contexts/MainContext';
import './styles.css';
import iconPokemon from '../../assets/icons/icon.svg';

function NavBar() {
   const { shiny, setShiny, classic, setClassic, setPokemon, filterPokemon } = useContext(MainContext);
   const [text, setText] = useState("GO STYLE");

   function handleSubmit(e) {
      filterPokemon(e)
   }
   function handleClick() {
      setClassic(!classic)

      if (classic) {
         setText("CLASSIC STYLE")
      } else {
         setText("GO STYLE")
      }
   }

   return (
      <header>
         <nav className="container-nav">
            <img src={iconPokemon} alt="pokemon" style={{ opacity: 0.5 }} />
            <div className="nav-content">
               <form className="nav-input" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Enter Pokémon name..." onChange={e => setPokemon(e.target.value.toLowerCase())} />
               </form>
            </div>
            <div className="options">
               <button onClick={() => handleClick()}>{text}</button>
               <button onClick={() => setShiny(!shiny)}>SHINY</button>
            </div>
         </nav>
      </header>
   );
}

export default NavBar;
