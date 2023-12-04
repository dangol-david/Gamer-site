import React, { useEffect, useState } from 'react'
import ProductData from '../../data/ProductData'

function NewProducts() {
  let [data, setData] = useState([])
  useEffect(()=>{
    fetch(`https://dummyjson.com/products`).then((a)=>a.json()).then((res)=>setData(res.products))
  },[])
  return (
    <section>
    <div className='container mx-auto py-3'>
      <h2 className='text-3xl font-semibold'></h2>
      <div className="flex row">
        {data.slice(0,10).map((a)=>(
          <div className=' col'>
          <img className='w-100' src={a.thumbnail} alt="" />
          <h4 className='p-3'>{a.title}</h4>
          
        </div>
        ))}
        
      </div>
    </div>
    </section>
  )
}

export default NewProducts
