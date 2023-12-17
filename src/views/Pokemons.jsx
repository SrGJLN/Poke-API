import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PokeContext } from '../context/PokeContext';
import Form from 'react-bootstrap/Form';

const Pokemons = () => {
  const {pokemons, selectPokemon, setSelectPokemon} = useContext(PokeContext)
  const navigate = useNavigate()

  const goToDetails = () => {
    if(selectPokemon){
      navigate(`/pokemons/${selectPokemon}`)
    }else{
      Swal.fire('Selecciona a un Pokemon')
    }
  }

  return (
    
    <div className='pokemons'>
      <h2>Selecciona a un Pokemon</h2>
      <section className='poke_section'> 
        <Form.Select 
        className="pokeselect" 
        value={selectPokemon} 
        onChange={({target}) => setSelectPokemon(target.value)}>
          <option value="" disabled>
            Selecciona a un Pokemon
          </option>
          {pokemons.map(({name}) => (
            <option 
            key={name} 
            value={name}>
              {name}
            </option>
          ))}
        </Form.Select>
        
          <button 
          className='btn btn-primary' 
          onClick={goToDetails}>
          Ver detalles
          </button>
        
      </section>
    </div>
  )
}

export default Pokemons
