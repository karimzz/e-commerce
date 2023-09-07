import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const CartFooter = () => {


    // For Access Global State
    const {products} = useSelector(state=>state.cartSlice) ; 
    
    // For Get SubTotal
    const subTotal = products.reduce((acc , current)=>{
        return acc += current.qun * current.price ; 
    } , 0)

  return (
    <div className='cart-footer'>
        <div className='container'>
            <div className='left'>
                <div className='btn-group'>
                    <button>update cart</button>
                    <NavLink to={"/shop"}><button>continue shopping</button></NavLink>
                </div>
                <div className='copon'>
                    <h2>Coupon</h2>
                    <p>Enter your coupon code if you have one.</p>
                    <div className='copon-input'>
                        <input placeholder='coupon code' />
                        <button>Apply Coupon</button>
                    </div>
                </div>
            </div>

            <div className='right'>
                <h2>CART TOTALS</h2>
                <div className='sub-total'>
                    <p>Subtotal</p>
                    <p className='sub-total-price'>$ {subTotal }</p>
                </div>
                <div className='total'>
                    <p>Total</p>
                    <p className='total-price'>$ {subTotal === 0 ? 0  : subTotal + 400}</p>
                </div>
                <button>Proceed To Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default CartFooter
