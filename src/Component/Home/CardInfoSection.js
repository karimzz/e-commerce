import React from 'react'
import SmallProductCard from '../Utility/SmallProductCard'
import one from "./../../image/product-1.png"
import two from "./../../image/product-2.png"
import three from "./../../image/product-3.png"


const CardInfoSection = () => {

    const porducts = [
        {
            name : "Nordic Chair" , 
            img : one , 
            p : "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio"
        },{
            name : " Kruzo Aero Chair" , 
            img : two , 
            p : "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio"
        },{
            name : "Ergonomic Chair" , 
            img : three , 
            p : "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio"
        },
    ]

  return (
    <div className='card-info-section'>
        <div className='container'>
            {
                porducts.map((element , index)=>{
                    return<SmallProductCard key={index} img = {element.img} name = {element.name} des = {element.p} />
                })
            }
        </div>
    </div>
  )
}

export default CardInfoSection
