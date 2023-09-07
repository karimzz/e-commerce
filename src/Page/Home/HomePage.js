import React from 'react'
import LandingSection from '../../Component/Home/LandingSection'
import "./home.css"
import ProductSection from '../../Component/Home/ProductSection'
import ChooseUs from '../../Component/Home/ChooseUs'
import AfterLanding from '../../Component/Home/AfterLanding'
import CardInfoSection from '../../Component/Home/CardInfoSection'
import BlogSection from '../../Component/Home/BlogSection'

const HomePage = () => {
  return (
    <div>
      <LandingSection  />
      <ProductSection />
      <ChooseUs />
      <AfterLanding />
      <CardInfoSection />
      <BlogSection />
    </div>
  )
}

export default HomePage
