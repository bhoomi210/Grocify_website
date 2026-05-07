import React from 'react'
import Hero from './Hero'
import Category from './Category'
import Products from './products'
import Discount from './Discount'
import Process from './Process'
import Testimonials from './Testimonials'
import Values from './values'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Category/>
        <Values />
        <Products/>
        <Discount/>
        <Process/>
        <Testimonials/>
    </div>
  )
}

export default Home






