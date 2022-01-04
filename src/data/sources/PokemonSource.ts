import { path } from '../models/settings'
import client from '../api'

export const getAllPokemons = async () =>
  client({
    url: path.getPokemons,
    method: 'GET',
  })
