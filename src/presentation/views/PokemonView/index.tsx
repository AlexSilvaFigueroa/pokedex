import React, { useEffect, useState } from 'react'
import { onGetPokemonByName } from '../../../data/storage/PokemonStorage'
import Card from '../../molecules/PokemonCard'

const PokemonView = () => {
  const [response, setResponse] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const pokemonResponse: any = await onGetPokemonByName('charizard')
        setResponse(pokemonResponse)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return (
    <>
      {response && (
        <Card
          front_default={response.sprites.front_default}
          back_default={response.sprites.back_default}
        />
      )}
    </>
  )
}

export default PokemonView
