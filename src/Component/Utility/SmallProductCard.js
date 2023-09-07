import React from 'react'
import pic from "./../../image/product-2.png" ; 

const SmallProductCard = ({name , img , des}) => {
  return (
    <div className='small-card'>
        <div className='image'>
            <img src={img} alt='ptoho' loading='lazy' />
        </div>
        <div className='text'>
            <h4 className='title'>{name}</h4>
            <p className='des'>{des}</p>
            <p className='more'>Read More</p>
        </div>
    </div>
  )
}

export default SmallProductCard
