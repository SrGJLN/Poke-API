import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokeDetails = () => {
  const { name } = useParams();
  const [detailsPokemons, setDetailsPokemons] = useState({
    name: "",
    stats: [],
    sprites: {},
  });

  useEffect(() => {
    const fetchPokemonStats = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );

        setDetailsPokemons({
          name: response.data.forms[0].name,
          stats: response.data.stats,
          sprites: response.data.sprites,
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPokemonStats();
  }, [name]);

  return (
    <>
      {(detailsPokemons.stats.length >= 1 && (
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <img
                  style={{ width: "18rem" }}
                  src={detailsPokemons.sprites.other.dream_world.front_default}
                  alt="pokemon"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{detailsPokemons.name}</h5>
                  <ul>
                    {detailsPokemons.stats.map((stat) => (
                      <li key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PokeDetails;
