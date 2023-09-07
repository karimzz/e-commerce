import React from 'react'
import ShopLanding from "./../../Component/Shop/ShopLanding" ; 
import "./shop.css"
import AllProductSection from '../../Component/Shop/AllProductSection';

const ShopPage = () => {
  return (
    <div>
        <ShopLanding title = {"Shop"} />
        <AllProductSection  />
    </div>
  )
}

export default ShopPage
