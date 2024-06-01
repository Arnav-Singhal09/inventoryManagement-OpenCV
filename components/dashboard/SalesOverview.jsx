import { Check, CheckCircle2, CheckIcon } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import SalesActivityCard from './SalesActivityCard';
import InventorySummaryCard from './InventorySummaryCard';

export default function SalesOverview() {
    const salesActivity=[
        {
            title: "To be packed",
            number: 10,
            unit:"Qty",
            href:"#",
            color:"text-blue-600"
        },
        {
            title: "To be shipped",
            number: 20,
            unit:"Pkgs",
            href:"#",
            color:"text-red-600"
        },
        {
            title: "To be Delivered",
            number: 21,
            unit:"Pkgs",
            href:"#",
            color:"text-green-600"
        },
        {
            title: "To be Invoiced",
            number: 1,
            unit:"Qty",
            href:"#",
            color:"text-yellow-600"
        },
    ];
    const inventorySummary=[
        {
            title:"Quantity at hand ",
            numebr:23,
        },
        {
            title:"Quantity to be recieved ",
            numebr:3,
        },
    ];
  return (
    <div className="bg-blue-50 border-b border-slate-400 p-8 grid grid-cols-12 gap-4">
        {/**sales activity */}
        <div className="col-span-8 border-r border-slate-300 p-8">
            <h2 className='mb-6 text-xl'>Sales Activity</h2>
            <div className="pr-8  grid grid-cols-4 gap-4">
                {/* Card */}
                {
                    salesActivity.map((item,i) => {
                        return(
                            <SalesActivityCard item ={item} key={i}/>
                        )
                    })
                }
                
            </div>
        </div>
        {/**Inventory summary */}
        <div className='col-span-4 p-8'>
            <h2 className='mb-6 text-xl'>Inventory Summary</h2>
            <div className="">
                {
                    inventorySummary.map((item,i) =>{
                        return(
                            <InventorySummaryCard item={item} key={i}/>
                            
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
