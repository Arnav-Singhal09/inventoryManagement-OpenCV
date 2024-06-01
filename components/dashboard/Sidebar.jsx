"use client"
import { BarChart4, Boxes, Cable, ChevronLeft, Files, Home, PlusCircle, ShoppingBag, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import CollapsableLink from './CollapsableLink';
import SidebarDropdownLink from './SidebarDropdownLink';
  

export default function Sidebar() {
    const inventoryLinks=[
        {
            title: "Items",
            href:"/dashboard/inventory"
        },
        {
            title: "Categories",
            href:"/dashboard/inventory/categories/new"
        },
        {
            title: "Brands",
            href:"/dashboard/inventory/brands/new"
        },
        {
            title: "Units",
            href:"/dashboard/inventory/units/new"
        },
        {
            title: "Warehouse",
            href:"/dashboard/inventory/warehouse/new"
        },
        {
            title: "Inventory Adjustments",
            href:"#"
        },

    ];
    const salesLinks=[
        {
            title: "Customers",
            href:"#"
        },
        {
            title: "Sales orders",
            href:"#"
        },
        {
            title: "Packages",
            href:"#"
        },
        {
            title: "Shipments",
            href:"#"
        },
        {
            title: "Invoices",
            href:"#"
        },
        {
            title: "Sales Receipts",
            href:"#"
        },
        {
            title: "Payment recieved",
            href:"#"
        },
        {
            title: "Sales returns",
            href:"#"
        },
        {
            title: "Credit Note",
            href:"#"
        },

    ];
  return (
    <div className='w-60 min-h-screen bg-slate-800 text-slate-50 justify-between fixed'>
        {/*Top Part */}
        <div className="flex flex-col">
            {/*logo */}
            <Link href="#"className="flex space-x-2 items-center bg-slate-900 py-4 px-2">
                <Boxes />
                <span className='font-semibold text-2xl'>Inventory</span>
            </Link>
            {/* links*/}
            <nav className='flex flex-col gap-8 px-3 py-5'>
                <Link className="flex items-center space-x-2 bg-blue-500
                 text-slate-50 p-2 rounded-md" href="/dashboard/home/overview">
                    <Home className='w-5 h-5'/>
                    <span>Home</span>
                </Link>
                <SidebarDropdownLink title="Inventory" links={inventoryLinks} icon={Boxes}/>
                <SidebarDropdownLink title="Sales" links={salesLinks} icon={ShoppingCart}/>
                <button className="flex items-center space-x-2 p-2">
                    <ShoppingBag className='w-5 h-5'/>
                    <span>Purchases</span>
                </button>
                <Link className="flex items-center space-x-2 p-2" href="#">
                    <Cable className='w-5 h-5'/>
                    <span>Integration</span>
                </Link>
                <Link className="flex items-center space-x-2 p-2" href="#">
                    <BarChart4 className='w-5 h-5'/>
                    <span>Reports</span>
                </Link>
                <Link className="flex items-center space-x-2 p-2" href="#">
                    <Files className='w-5 h-5'/>
                    <span>Documents</span>
                </Link>
            </nav>
        </div>


        {/*bottom parts */}
        <div className="flex flex-col">
            <button className="flex space-x-2 items-center justify-center bg-slate-900 py-4 px-2">
                <ChevronLeft />
            </button>
        </div>
        {/*footer icon */}

      </div>
  )
}
