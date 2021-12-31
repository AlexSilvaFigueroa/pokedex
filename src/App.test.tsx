import React from 'react'
import { render, screen } from '@testing-library/react'
import Pokedex from './views/Pokedex'

test('renders learn react link', () => {
  render(<Pokedex />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
