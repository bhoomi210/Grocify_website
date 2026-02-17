import React from 'react'
import Categorypage from './Categorypage'
import BgSeaFood from '../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
        <Categorypage title="Meat & SeaFood" bgImage={BgSeaFood} categories={['Meat' , 'SeaFood']} />
    </div>
  )
}

export default SeaFood