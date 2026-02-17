import React from 'react'
import Category from './Category'
import BgDairy from '../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <Category title="Dairy & Eggs" bgImage={BgDairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy

