import React from 'react'
import couchPic from "./../../image/couch.png" ;
import { motion } from 'motion/react';


const LandingSection = ({title}) => {

  return (
    <section className='landing'>
      <div className='container'>
          <motion.div className='text'
          initial={{opacity : 0 , x : -100}}
          animate={{opacity : 1 , x: 0}}
          transition={{duration : 0.6}}
          >
            <motion.h2>{title ?? "Modern Interior Design Studio"}</motion.h2>
            <motion.p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</motion.p>
            <div className='btn-group'>
              <button> Shop Now</button>
              <button> Explore</button>
            </div>
          </motion.div>
          <motion.div className='image'
          initial={{opacity : 0 , x :100}}
          animate= {{x :0 , opacity :1}}
          transition={{duration : 0.6}}
          >
            <img src={couchPic} alt='phot' loading='lazy' />
          </motion.div>
      </div>
    </section>
  )
}

export default LandingSection
