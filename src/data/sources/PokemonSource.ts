import { path } from '../models/settings'
import client from '../api'

export const getAllPokemons = () =>
  client({
    url: path.getPokemons,
    method: 'GET',
  })

export const getPokemonByName = ({ pokemonName }) => {
  client({
    url: `${path.getPokemons}/${pokemonName}`,
    method: 'get',
  })
}
