import React from 'react'
import ProductCard from '../Utility/ProductCard'

import product1 from "./../../image/product-2.png"
import product2 from "./../../image/product-3.png"

const ProductSection = () => {
    return (
        <section className='product-section'>
            <div className='container'>
                <div className='info'>
                <h2>Crafted with excellent material.</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <button className='btn'>Explore</button>
                </div>
                <ProductCard  title = "Chair Nordic" price = {"$50.00"} />
                <ProductCard img = {product1} title = "Chair Nordic" price = {"$800.00"}  />
                <ProductCard img = {product2} title = "Couch" price = {"$300.00"}  />
            </div>
        </section>
    )
}

export default ProductSection
