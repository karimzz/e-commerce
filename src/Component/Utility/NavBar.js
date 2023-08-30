import React, { useState } from 'react'
import "./utility.css";





const NavBar = () => {

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
                        <li><a className='active' href='/'>Home</a></li>
                        <li><a href='/'>Shop</a></li>
                        <li><a href='/'>About us</a></li>
                        <li><a href='/'>Service</a></li>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Contact us</a></li>
                    </ul>
                    <div className='account'>
                        <a href='/'><span className="material-symbols-outlined">
                        person
                        </span></a>

                        <a href='/cart' className='cart-bag'><div className='count-cart'>10</div> <span className="k-cart-icon material-symbols-outlined">
                        shopping_cart
                        </span></a>
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
                        <li><a href='/'>Shop</a></li>
                        <li><a href='/'>About us</a></li>
                        <li><a href='/'>Service</a></li>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Contact us</a></li>
                    </ul>
                </div>
                
            )
        }
    </nav>
  )
}

export default NavBar
