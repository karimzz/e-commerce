import React from 'react'
import ShopLanding from '../../Component/Shop/ShopLanding'
import "./cart.css" ; 
import CartSection from '../../Component/Cart/CartSection';
import CartFooter from '../../Component/Cart/CartFooter';

const CartPage = () => {
  return (
    <div>
        <ShopLanding title={"Cart"} />
        <CartSection />
        <CartFooter />
    </div>
  )
}

export default CartPage
