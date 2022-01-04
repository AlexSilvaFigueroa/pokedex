import { getAllPokemons } from '../sources/PokemonSource'

export const onGetAllPokemons = async (): Promise<any> => {
  try {
    const response = await getAllPokemons()
    return response
  } catch (e) {
    throw new Error(
      'Ups! We had a problem trying to show you the users list. Details: ' + e
    )
  }
}
