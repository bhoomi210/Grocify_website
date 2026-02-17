import React from 'react'
import Category from './Category'
import BgAll from '../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
       <Category title="All Products" bgImage={BgAll} categories={['All']} />
    </div>
  )
}

export default AllProducts