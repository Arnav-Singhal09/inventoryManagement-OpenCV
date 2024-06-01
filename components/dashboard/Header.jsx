import { Bell, ChevronDown, Grid3X3, History, LayoutGrid, Plus, Settings, User2, Users } from 'lucide-react'
import React from 'react'
import SearchInput from './SearchInput'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='bg-gray-200 h-12 flex items-center justify-between px-8 border-b border-slate-200 shadow-sm'>
      
        <div className="flex gap-3">
          {/* recent Activities*/}
          <button>
            <History className='w-8 h-8'/>
          </button>
          <SearchInput/>
          {/* search */}
        </div>
        <div className="flex items-center gap-3">
          {/* plus button*/}
          <div className="pr-2 border-r border-gray-500">
            <button className='p-1 rounded-lg bg-blue-600'>
              <Plus className='w-4 h-4 text-slate-50'/>
            </button>
          </div>
          {/* settings and notif */}
          <div className="flex pr-2 border-r border-gray-500 space-x-2">
            <button className='p-1 rounded-lg hover:bg-slate-200'>
              <Users className='w-4 h-4 text-slate-900'/>
            </button>
            <button className='p-1 rounded-lg hover:bg-slate-200'>
              <Bell className='w-4 h-4 text-slate-900'/>
            </button>
            <button className='p-1 rounded-lg hover:bg-slate-200'>
              <Settings className='w-4 h-4 text-slate-900'/>
            </button>
          </div>
          {/* user profile */}
          <div className="flex gap-3">
            <button className='flex items-center'>
              <span>Piyush</span>
              <ChevronDown className='w-5 h-5'/>
            </button>
            <button>
              <Image
                src = "/image.png"
                alt="user image"
                width={225} 
                height={225} 
                className="w-8 h-8 rounded-full border border-slate-800"/>
            </button>
            <button>
              <Grid3X3 className='w-6 h-6 text-slate-900'/>
            </button>
          </div>

        </div>
    </div>
  )
}
