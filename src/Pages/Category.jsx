

import React, { useEffect, useState } from 'react'
import ProductData from '../../data/ProductData'
import { useParams } from 'react-router-dom'
import Catdata from '../../data/Catdata'

function Category() {
  let {cid}=useParams()
  let abc = ProductData.filter((a)=>a.category==cid)
 
   
  return (
    <>
    {cid}
    <section>
    <div className='container mx-auto py-3'>
      <h2 className='text-3xl font-semibold'></h2>
      <div className="flex row">
        {abc.map((a)=>(
          <div className=' col'>
          <img className='w-100' src={a.image} alt="" />
          <h4 className='p-3'>{a.title}</h4>
          
        </div>
        ))}
        
      </div>
    </div>
    </section>
    
    
      
    </>
  )
}

export default Category
