import { getAllPokemons, getPokemonByName } from '../sources/PokemonSource'

export const onGetPokemons = async () => {
  const response = { data: [] }
  try {
    const url = await getAllPokemons()
    return url
  } catch (e) {
    throw new Error(
      `Ups! We had a problem trying to show you the users list. Details: ${e}`
    )
  }
}

export const onGetPokemonByName = async (pokemonName: string): Promise<any> => {
  try {
    const pokemonResponse = getPokemonByName({
      pokemonName,
    })
    console.log(pokemonResponse)
    return pokemonResponse
  } catch (e) {
    throw new Error("Ups! We had a problem with product's fetch. Details: " + e)
  }
}
