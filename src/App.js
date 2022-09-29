import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const App = () => {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => setPokemon(response.data.results))
  }, [])

  return (
    <div>
      <ul>
        { pokemon.map( (item, index) =>
          <li key={index}>{item.name}</li>
        )}
      </ul>
    </div>
  )
}
