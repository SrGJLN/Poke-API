import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokeContext = createContext();

const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=50'

const PokeProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [selectPokemon, setSelectPokemon] = useState('');

  const getPokemos = async () => {
    try {
      const response = await axios.get(URL);
      if (!response.status){
        throw new Error('Data not found');
      }
      setPokemons(response.data.results);
      
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() =>{
    getPokemos();
  }, []);

  return (
    <PokeContext.Provider value={{ pokemons, setPokemons, selectPokemon, setSelectPokemon }}>
      {children}
    </PokeContext.Provider>
  );
};
export default PokeProvider;
