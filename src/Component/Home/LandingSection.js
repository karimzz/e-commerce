import React from 'react'
import couchPic from "./../../image/couch.png" ;


const LandingSection = ({title}) => {

  console.log(title) ;
  return (
    <section className='landing'>
      <div className='container'>
          <div className='text'>
            <h2>{title ?? "Modern Interior Design Studio"}</h2>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <div className='btn-group'>
              <button> Shop Now</button>
              <button> Explore</button>
            </div>
          </div>
          <div className='image'>
            <img src={couchPic} alt='phot' loading='lazy' />
          </div>
      </div>
    </section>
  )
}

export default LandingSection
