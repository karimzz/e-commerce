import React from 'react'
import LandingSection from '../../Component/Home/LandingSection'
import "./home.css"
import ProductSection from '../../Component/Home/ProductSection'
import ChooseUs from '../../Component/Home/ChooseUs'

const HomePage = () => {
  return (
    <div>
      <LandingSection  />
      <ProductSection />
      <ChooseUs />
    </div>
  )
}

export default HomePage
