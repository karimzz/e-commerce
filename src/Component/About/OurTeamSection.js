import React from 'react'
import personPic1 from "./../../image/person-1.jpg" ; 
import personPic2 from "./../../image/person_1.jpg" ; 
import personPic3 from "./../../image/person_3.jpg" ; 
import personPic4 from "./../../image/person_4.jpg"

const OurTeamSection = () => {

    // Person Array 
    const persons = [
        {
            name : "Lawson Arnold" , 
            jobTitle : "CEO, Founder, Atty" , 
            des : "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." ,
            img : personPic1
        } , 
        {
            name : "Jeremy Walker" , 
            jobTitle : "CEO, Founder, Atty" , 
            des : "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." ,
            img  :personPic2
        } , 
        {
            name : "Patrik White" , 
            jobTitle : "CEO, Founder, Atty" , 
            des : "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." ,
            img  :personPic3
        } ,
        {
            name : "Kathryn Ryan" , 
            jobTitle : "CEO, Founder, Atty" , 
            des : "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." ,
            img  :personPic4
        } ,
    ]

  return (
    <div className='our-team'>
        <h2 style={{textAlign : "center" , fontSize : "30px" , fontWeight : 500} }>Our Team</h2>
        <div className='container'>
            
            {
                persons.map((item , idx)=>{
                    return (
                        <div className='card'>
                        <div className='image'>
                            <img alt='phot' loading='lazy' src={item.img} />
                        </div>
                        <div className='info'>
                            <h2 className='name'><a href='/'>{item.name}</a></h2>
                            <p className='job-title'>{item.jobTitle}</p>
                            <p className='des'>
                            {item.des}
                            </p>
                            <a href='/' className='learn'>Learn More</a>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default OurTeamSection
