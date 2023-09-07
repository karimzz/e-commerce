import React from 'react' ;
import imageOne from "./../../image/img-grid-1.jpg" ;
import imageTwo from "./../../image/img-grid-2.jpg" ;
import imageThree from "./../../image/img-grid-3.jpg" ;

const AfterLanding = () => {
  return (
    <div className='after-landing'>
        <div className='container'>
                <div className='images'>
                    <img src={imageOne} className='one' alt='phot' loading='lazy' />
                    <img src={imageTwo} className='two' alt='phot' loading='lazy' />
                    <img src={imageThree} alt='phot' className='three' loading='lazy' />
                </div>
                <div className='info'>
                    <h2 className='title'>We Help You Make Modern Interior Design</h2>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                    <ul className='list'>
                        <li>Donec vitae odio quis nisl dapibus malesuada</li>
                        <li>Donec vitae odio quis nisl dapibus malesuada</li>
                        <li>Donec vitae odio quis nisl dapibus malesuada</li>
                        <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    </ul>
                    <button className='btn'>Explore</button>
                </div>
        </div>
    </div>
  )
}

export default AfterLanding
