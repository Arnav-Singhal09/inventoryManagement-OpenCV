import HomeNavbar from '@/components/dashboard/homeNavbar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className=''>
        <HomeNavbar/>
        {children}
    </div>
  )
}
