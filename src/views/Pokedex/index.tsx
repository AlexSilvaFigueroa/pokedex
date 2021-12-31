import React, { useState } from 'react'
import { Div, Button, Notification } from 'atomize'

const Pokedex = () => {
  const [onClick, setOnClick] = useState(false)
  const showSnackbar = () => {
    setOnClick(true)
  }
  const closeSnackbar = () => {
    setOnClick(false)
  }
  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Soon</h2>
      <Button bg="danger700" onClick={showSnackbar}>
        Click on me please
      </Button>
      <Notification bg="danger700" isOpen={onClick} onClose={closeSnackbar}>
        Thank you!
      </Notification>
    </div>
  )
}

export default Pokedex
