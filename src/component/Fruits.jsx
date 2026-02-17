import React from 'react'
import Categorypage from './Categorypage'
import BgFruits from '../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
        <Categorypage title="Fruits & Veggies" bgImage={BgFruits} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default Fruits