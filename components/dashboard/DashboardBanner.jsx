"use client"
import { CreditCard, XIcon } from 'lucide-react'
import React , {useState}from 'react'

export default function DashboardBanner() {
    const [hidden, setHidden] = useState(false);
  return (
    <div className={`${hidden?"hidden":"grid grid-cols-12 items-center py-6 px-16 bg-white gap-4 relative"}`}>
       {/** Icon */}
       <div className="col-span-2">
        <CreditCard className='w-16 h-16 text-slate-500'/> 
       </div>
       
       {/** Text */}
       <div className="col-span-6">
        <h2 className='fonts-bold text-2xl'>
            Start accepting online payments
        </h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nam pariatur blanditiis quo, voluptates tenetur autem, 
            earum expedita ut nihil aliquid sint vel veritatis? 
            Qui commodi laudantium enim ut? Vero, necessitatibus?
        </p>
       </div>
       {/** button */}
       <div className="col-span-3">
        <button className="bg-blue-500 py-2 px-8 text-sm
        uppercase text-white rounded-lg"> 
            Enable 
       </button>
       </div>
       
       {/** close button */}
       <button onClick={() => setHidden("true")} className="absolute top-4 right-8">
        <XIcon className='text-slate-600'/>
       </button>
    </div>
  )
}
