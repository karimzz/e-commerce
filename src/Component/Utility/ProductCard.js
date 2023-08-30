import React from 'react'
import productPic from "./../../image/product-1.png" ; 


const ProductCard = ({title , price , img}) => {
  return (
        <div className='card'>
            <div className='image'>
                <img alt='pho' src={img ?? productPic} />
            </div>
            <div className='product-info'>
                <p className='title'>{title}</p>
                <p className='price'>{price}</p>
            </div>
            <div className='add-icons'>+</div>
        </div>
  )
}

export default ProductCard
