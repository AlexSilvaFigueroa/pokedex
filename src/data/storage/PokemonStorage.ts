import { getAllPokemons, getPokemonByName } from '../sources/PokemonSource'

export const onGetPokemons = async () => {
  const response = { data: [] }
  try {
    const url = await getAllPokemons()
    return url
  } catch (e) {
    throw new Error(`Ups! We had a problem. Details: ${e}`)
  }
}

export const onGetPokemonByName = async (pokemonName: string): Promise<any> => {
  try {
    const { data } = await getPokemonByName({
      pokemonName,
    })
    const parsedData = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      abilities: data.abilities,
      stats: data.stats,
      dimensions: {
        weight: data.weight,
        height: data.height,
      },
      types: data.types,
    }
    return parsedData
  } catch (e) {
    throw new Error('Ups! We had a problem: ' + e)
  }
}
