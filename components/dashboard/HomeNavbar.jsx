"use client"
import { Building2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function HomeNavbar() {
    const pathname = usePathname();
    console.log(pathname)
    const navLinks = [
        {
            title:"Dashboard",
            href:"/dashboard/home/overview"
        },
        {
            title:"Getting Started",
            href:"/dashboard/home/gettingStarted"
        },
        {
            title:"Annoouncements",
            href:"/dashboard/home/announcement"
        },

    ];
  return (
    <div className='h-32 p-5 header-bg bg-slate-50 border-b border-slate-300'>
        <div className="flex space-x-3">
            <div className="flex w-12 h-12 bg-white items-center justify-center rounded-md">
                <Building2/>
            </div>
            <div className="flex flex-col">
                <p className='text-slate-700 font-semibold'>Hello, Piyush</p>
                <span className='text-sm'>Welcome to this inventory</span>
            </div>
        </div>
        <nav className='sticky mt-6 flex space-x-4'>
            {
                navLinks.map((item,i) => {
                    return (
                        <Link key={i} href={item.href} 
                        className={`${pathname===item.href?'py-1 border-b-2 border-blue-600':"py-1"}`}>
                            {item.title}
                        </Link>
                    );
                })
            }
        </nav>
    </div>
  )
}
