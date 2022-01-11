import { AxiosResponse } from 'axios'
import React, { useState, useEffect } from 'react'
import {
  onGetPokemons,
  onGetPokemonByName,
} from '../../../data/storage/PokemonStorage'

const Pokedex = () => {
  const [response, setResponse] = useState<AxiosResponse | null | void>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const pokemonResponse: any = await onGetPokemonByName('charmander')
        setResponse(pokemonResponse)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return (
    <div>
      <h1>Pokedex</h1>
    </div>
  )
}
export default Pokedex
