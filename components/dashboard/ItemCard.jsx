import { BookAIcon } from 'lucide-react'
import React from 'react'

export default function ItemCard({title,stock,amount,icon:Icon}) {
  return (
    <div className="shadow-xl bg-slate-100 flex flex-col items-center justify-center m-1 rounded">
            <div className="items-center py-4">
              <Icon strokeWidth="0.5px" className='w-36 h-36'/>
            </div>
            <h2 className='uppercase text-sm'>{title}</h2>
            <p className="line-clamp-1 uppercase text-sm">
              item in stock :
              <span className='font-semibold pl-1'> {stock}</span>
            </p>
            <p className='line-clamp-1 py-3 text-sm uppercase'>
              <span> Selling price :</span>
              <span className='font-semibold'> Rs {amount}</span>
            </p>
          </div> 
  )
}
