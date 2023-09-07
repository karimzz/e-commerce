import React from 'react'

const BlogCard = ({img , name , des}) => {
  return (
    <div className='card'>
        <div className='image'>
            <img src={img} alt='poster' loading='lazy'/>
        </div>
        <div className='info'>
            <h3>{name}</h3>
            <p>by <a href='/'>Kristin Watson</a> on Dec 19, 2021</p>
        </div>
    </div>
  )
}

export default BlogCard
