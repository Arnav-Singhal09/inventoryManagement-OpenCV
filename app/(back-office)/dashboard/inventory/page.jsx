import FixedHeader from '@/components/dashboard/FixedHeader'
import ItemCard from '@/components/dashboard/ItemCard'
import { Album, BookAIcon, BookType, BookUser, LibraryBig } from 'lucide-react'
import React from 'react'

export default function inventory() {
  return (
    <div>
        <FixedHeader newLink="/dashboard/inventory/items/NewItems"/>
        <div className="grid grid-col-1 lg:grid-cols-4 m-3">
          <ItemCard title="Mathematics" stock={3} amount={2000} icon={BookAIcon}/>
          <ItemCard title="Phyics" stock={10} amount={23000} icon={BookType}/>
          <ItemCard title="Chemistry" stock={7} amount={6000} icon={Album}/>
          <ItemCard title="Harry Potter" stock={20} amount={200000} icon={BookUser}/>  
          <ItemCard title="rich dad poor dad" stock={2} amount={1000} icon={LibraryBig}/>
        </div>
    </div>
  )
}
