import React from 'react'

export default function InventorySummaryCard({item}) {
  return (
    
    <div className="mb-4 shdow rounded-lg border-slate-200
         hover:border-blue-50 px-4 py-2 cursor-pointer flex items-center gap-3 justify-between
         bg-white transition-all duration-300">
            <h2 className='uppercase text-sm text-slate-500'>{item.title}</h2>
            <h4 className='text-2xl'>{item.numebr}</h4>

       </div>
  )
}
