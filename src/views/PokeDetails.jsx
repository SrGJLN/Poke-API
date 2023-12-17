import React from "react";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokeDetails = () => {
  const { name } = useParams();
  const [pokemonStats, setPokemonStats] = useState(null);

  useEffect(() => {
    const fetchPokemonStats = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
      
        );
        console.log(name);
        setPokemonStats(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPokemonStats();
  }, [name]);

  return (
    

    // <div>
     
    //   {pokemonStats && (
    //     <div>
    //       <h2>{selectPokemon} Stats</h2>
    //       <ul>
    //         {pokemonStats.map((stat) => (
    //           <li key={stat.stat.name}>
    //             {stat.stat.name}: {stat.base_stat}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </div>
    <>
    {pokemonStats && (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {pokemonStats.sprites.map((sprite) => (
            <div className="card">
              <img
                src={`${sprite.other.dream_world.front_default}`}
                alt="pokemon"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{selectPokemon}</h5>
                <ul>
                  {pokemonStats.stats.map((stat) => (
                    <li key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default PokeDetails;
