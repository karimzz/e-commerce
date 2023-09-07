import React from 'react'
import BlogCard from '../Utility/BlogCard'
import post1 from "./../../image/post-1.jpg" ; 
import post2 from "./../../image/post-2.jpg" ; 
import post3 from "./../../image/post-3.jpg" ; 

const BlogSection = () => {
  return (
    <div className='blog-section'>
        <div className='container'>
            <div className='blog-title'>
                <h2>Recent Blog</h2>
                <a href='/allproduct'> View All Posts</a>
            </div>
            <div className='cards'>
                <BlogCard img = {post1} name ={"First Time Home Owner Ideas"} />
                <BlogCard img = {post2} name={"How To Keep Your Furniture Clean"} />
                <BlogCard img = {post3} name = {"Small Space Furniture Apartment Ideas"} />
            </div>
        </div>
    </div>
  )
}

export default BlogSection
