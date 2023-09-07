import React from 'react'
import whyChoosePic from "./../../image/why-choose-us-img.jpg" ;

import carPic from "./../../image/truck.svg" ; 
import returnPic from "./../../image/return.svg" ; 
import supportPic from "./../../image/support.svg" ; 
import cartPic from "./../../image/bag.svg" ; 

const ChooseUs = () => {
    return (
        <div className='chooseus'>
            <div className='container'>
                    <div className='text'>
                    <h2>Why Choose Us</h2>
                    <p className='title-section'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique</p>
                    <div className='cards'>
                        <div className='card'>
                            <div className='image'>
                                <img alt='phot' src={carPic}/>
                            </div>
                            <div className='info'>
                                <p className='title'>Fast & Free Shipping</p>
                                <p className='des'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>
                            <div className='card'>
                                <div className='image'>
                                    <img alt='phot' src={cartPic}/>
                                </div>
                                <div className='info'>
                                    <p className='title'>Fast & Free Shipping</p>
                                    <p className='des'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='image'>
                                    <img alt='phot' src={supportPic}/>
                                </div>
                                <div className='info'>
                                    <p className='title'>Fast & Free Shipping</p>
                                    <p className='des'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='image'>
                                    <img alt='phot' src={returnPic}/>
                                </div>
                                <div className='info'>
                                    <p className='title'>Fast & Free Shipping</p>
                                    <p className='des'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='image big-image'>
                    <img alt='pho' loading='lazy' src={whyChoosePic}  />
                </div>
            </div>
        </div>
    )
}

export default ChooseUs
