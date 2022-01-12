import { path } from '../models/settings'
import client from '../api'
import { Helper } from '../../domain/interfaces/RequestInterface'

export const getAllPokemons = () =>
  client({
    url: path.getPokemons,
    method: 'GET',
  })

export const getPokemonByName: Helper<any> = ({ pokemonName }) =>
  client({
    url: `${path.getPokemons}/${pokemonName}`,
    method: 'get',
  })
