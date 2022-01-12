import React from 'react'
import styled from 'styled-components'

const ImageBox = ({ front_image }) => {
  return <StyledImgBox src={front_image} />
}

const StyledImgBox = styled.img`
  display: flex;
  width: 100%;
`

export default ImageBox
