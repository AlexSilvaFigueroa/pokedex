import React, { useState, useEffect } from 'react'
import Card from '../../atoms/Card'
import ImageBox from '../../atoms/ImageBox'
import { ReloadOutlined } from '@ant-design/icons'

const PokemonCard = ({ front_default, back_default }) => {
  const [rotate, setRotate] = useState(false)

  const hanldeRotateImage = () => {
    setRotate(!rotate)
  }
  return (
    <>
      <Card>
        <ReloadOutlined onClick={hanldeRotateImage} />

        {!rotate ? (
          <ImageBox front_image={front_default} />
        ) : (
          <ImageBox front_image={back_default} />
        )}
      </Card>
    </>
  )
}

export default PokemonCard
