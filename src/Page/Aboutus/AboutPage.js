import React from 'react'
import "./about.css" ; 
import ChooseUs from '../../Component/Home/ChooseUs';
import ShopLanding from '../../Component/Shop/ShopLanding';
import OurTeamSection from '../../Component/About/OurTeamSection';

const AboutPage = () => {
  return (
    <div>
        <ShopLanding title = "About" />
        <ChooseUs />
        <OurTeamSection />
    </div>
  )
}

export default AboutPage
