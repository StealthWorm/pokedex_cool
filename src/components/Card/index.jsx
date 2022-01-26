import { useEffect, useState, useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';
import Tilt from 'react-parallax-tilt';
import './styles.css';

import shinyEffect from '../../assets/gif/shiny.gif'

const typeColor = {
   bug: "#93BB3A",
   dark: "#595761",
   dragon: "#176CC5",
   electric: "#F1D85A",
   fairy: "#ED93E4",
   fighting: "#D14461",
   fire: "#F9A555",
   flying: "#A2BCEA",
   grass: "#63BC5D",
   ground: "#D87C52",
   ghost: "#606FBA",
   ice: "#79D0C1",
   normal: "#A0A29F",
   poison: "#B667CD",
   psychic: "#F88684",
   rock: "#C9BB8D",
   water: "#579EDD",
   steel: "#5995A2"
}

function Card({ pokemon }) {
   const { shiny, classic } = useContext(MainContext);
   const [colorCard, setColorCard] = useState("yellow");

   useEffect(() => {
      setColorCard(typeColor[pokemon.types[0].type.name])
   }, [pokemon]);

   function BackGroundGif({ type }) {
      return <img src={require(`../../assets/gif/${type}.gif`)} alt={`${type}`} className="bkgBox" />
   }

   return (
      <Tilt>
         <div className="container" style={!shiny
            ? { border: `10px solid ${colorCard}` }
            : {
               border: `10px solid ${colorCard}`,
               boxShadow: "rgb(255, 255, 255) 0px -1px 4px, rgb(248, 248, 35) 0px -2px 10px, rgb(235, 238, 64) 0px -2px 15px"
            }
         }>
            <BackGroundGif type={pokemon.types[0].type.name} />

            <div className="card" style={{ background: `radial-gradient(circle at 50% 0%, ${colorCard} 36%, #2020208c 38%, transparent 50%, black 95%)` }}>
               <p className="hp">
                  <span>HP</span>
                  {pokemon.stats[0].base_stat}
               </p>

               {classic
                  ? <img src={shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt="img" className="card-pokemon-img" />
                  : <img src={shiny ? pokemon.sprites.other.home.front_shiny : pokemon.sprites.other.home.front_default} alt="img" className="card-pokemon-img" />
               }

               <h2 className="name">{pokemon.name}</h2>
               <div className="types">
                  {pokemon.types.map((type, i) => {
                     return (
                        <span key={i} style={{ background: `${typeColor[type.type.name]}` }}>
                           <img src={require(`../../assets/icons/${type.type.name}.svg`)} alt={`${type.type.name}`} />
                           <strong>{type.type.name}</strong>
                        </span>
                     )
                  })}
               </div>

               {shiny &&
                  <div>
                     <img src={shinyEffect} alt="teste" style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        left: 0,
                        top: 0,
                        zIndex: 1,
                        filter: 'brightness(2.0) contrast(0.8)',
                        backgroundSize: "cover",
                        justifyContent: "center",
                        alignItems: "center",
                     }} />
                     <img src={shinyEffect} alt="teste" style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        left: 0,
                        top: 0,
                        zIndex: 1,
                        filter: 'brightness(2.0) contrast(0.8)',
                        transform: 'translateX(-50%)',
                     }} />
                  </div>
               }

               <div className="stats">
                  <div>
                     <h3>{pokemon.stats[1].base_stat}</h3>
                     <p>Attack</p>
                  </div>
                  <div>
                     <h3>{pokemon.stats[2].base_stat}</h3>
                     <p>Defense</p>
                  </div>
                  <div>
                     <h3>{pokemon.stats[5].base_stat}</h3>
                     <p>Speed</p>
                  </div>
               </div>
            </div>

            <div className="card-back" >
               <div className="card-info-container">
                  <div className="card-info">
                     <p>Weight</p>
                     <h3>{Math.round(pokemon.weight / 4.3)} lbs</h3>
                  </div>
                  <div className="card-info">
                     <p>Height</p>
                     <h3>{Math.round(pokemon.height * 3.9)}</h3>
                  </div>
               </div>
            </div>
         </div>
      </Tilt >
   );
}

export default Card;
