import React from 'react'
import ProductCard from '../Utility/ProductCard'
import product1 from "./../../image/product-1.png" 
import product2 from "./../../image/product-2.png" 
import product3 from "./../../image/product-3.png" 
import product4 from "./../../image/ii.png" 
import product5 from "./../../image/iphone.png" 
import product6 from "./../../image/iphone13.webp" 
import "./../../Page/Home/home.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../RTK/Slice/cartSlice'

const AllProductSection = () => {

    const dispatch = useDispatch() ; 

    //img title price

    const products = [
        {
            id : 0 , 
            title : "Chair Nordic" , 
            price : 2000 ,
            img : product1 
            
        } ,
        {
            id : 1 , 
            title : "Couch" , 
            price : 3000 ,
            img : product2  
        } , 
        {
            id : 2 ,
            title : "Chair" , 
            price : 5000 ,
            img : product3
        } , 
        {
            id : 3 , 
            title :"Iphone 12"  ,
            price : 10000 ,
            img : product4
        } , 
        {
            id: 4 , 
            title : "Iphone 11" , 
            price : 4000 ,
            img : product5
        } ,
        {
            id : 5 , 
            title : "iphone 14" ,
            price : 4000 ,
            img : product6
        }
        
    ] ; 


    const addToCartHandler = (product)=>{
        console.log("Invoked 2")
        dispatch(addToCart(product)) ; 
    }

  return (
    <div className='all-product'>
        <div className='container'>
            {
                products.map((element , idx)=>{
                    return <ProductCard key={idx} addToCartHandler ={addToCartHandler} element = {element} title = {element.title} img = {element.img} price = {element.price} />
                })
            }
        </div>
    </div>
  )
}

export default AllProductSection
