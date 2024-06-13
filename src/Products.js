import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <>
    
        <div>Products</div>
        <input type='search'/>
        <nav>
            <Link to='featured'>Featured</Link>
            <Link to='new'>New</Link>
        </nav>
        
        {/* This is to render or mount the child component of Product component into the DOM */}
        <Outlet/>   
    </>
  )
}
