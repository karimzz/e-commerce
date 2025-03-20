import React, { useState } from 'react'
import "./utility.css";
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';





const NavBar = () => {


    const cartItem = useSelector(state=>state.cartSlice.products);

    const numOfProducts = cartItem.reduce((acc , current)=> acc += current.qun, 0)
    
     


    const [showMenu , setShowMenu] = useState(false) ;


    const showMenuHandler = ()=>{
        setShowMenu(!showMenu) ; 
    }

  return (
    <nav>
        <div className='container'>
                <div className='logo'>
                    <h1>Furni.</h1>
                </div>
                <div className='links'>
                    <ul className='meny'>
                        <li><NavLink end to='/e-commerce'>Home</NavLink></li>
                        <li><NavLink to='/e-commerce/shop'>Shop</NavLink></li>
                        <li><NavLink to='/e-commerce/about'>About us</NavLink></li>
                        <li><NavLink to='/e-commerce/services'>Service</NavLink></li>
                        <li><NavLink to='/e-commerce/blog'>Blog</NavLink></li>
                        <li><NavLink to='/e-commerce/contact'>Contact us</NavLink></li>
                    </ul>
                    <div className='account'>
                        <NavLink href='/profile'><span className="material-symbols-outlined">
                        person
                        </span></NavLink>

                        <NavLink to='/e-commerce/cart' className='cart-bag'><div className='count-cart'>{numOfProducts}</div> <span className="k-cart-icon material-symbols-outlined">
                        shopping_cart
                        </span></NavLink>
                    </div>
                    
                </div>
                <div className='menu' onClick={showMenuHandler}>
                        <span className="material-symbols-outlined">
                        menu
                        </span>
                    </div>
        </div>
        
        {
            showMenu &&(
                
                <div className='hidden-menu'>
                    <ul>
                        <li><a className='active' href='/'>home</a></li>
                        <li><NavLink to={"/shop"}>Shop</NavLink></li>
                        <li><Link to={"/shop"} >About us</Link></li>
                        <li><a href="/service">Service</a></li>
                        <li><a href='/blog'>Blog</a></li>
                        <li><a href='/contactus'>Contact us</a></li>
                    </ul>
                </div>
                
            )
        }
        
    </nav>
  )
}

export default NavBar
