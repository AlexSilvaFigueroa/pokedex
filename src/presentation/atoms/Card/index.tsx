import React from 'react'
import styled from 'styled-components'

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>
}

const StyledCard = styled.div`
  width: 200px;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0.5px 1.5px #e4e4e4;
  border-radius: 8px;
`
export default Card
