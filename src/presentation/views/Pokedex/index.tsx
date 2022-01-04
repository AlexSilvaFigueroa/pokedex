import React, { useState, useEffect } from 'react'
import { Div, Button, Notification } from 'atomize'
import { onGetAllPokemons } from '../../../data/storage/PokemonStorage'

const Pokedex = () => {
  const [onClick, setOnClick] = useState(false)
  const [response, setResponse] = useState(null)

  const onGetPokemons = async () => {
    const {
      data: { results },
    } = await onGetAllPokemons()
    setResponse(results)
    console.log(response)
  }

  useEffect(() => {
    onGetPokemons()
  }, [])

  const showSnackbar = () => {
    setOnClick(true)
  }
  const closeSnackbar = () => {
    setOnClick(false)
  }
  return (
    <Div>
      <h1>Pokedex</h1>
      <h2>Soon</h2>
      <Button bg="danger700" onClick={showSnackbar}>
        Click on me please
      </Button>
      <Notification bg="danger700" isOpen={onClick} onClose={closeSnackbar}>
        Thank you!
      </Notification>
      <ul>
        {response &&
          response.map((element, index) => (
            <li key={`pokemon-${index}`}>{element.name}</li>
          ))}
      </ul>
    </Div>
  )
}

export default Pokedex
