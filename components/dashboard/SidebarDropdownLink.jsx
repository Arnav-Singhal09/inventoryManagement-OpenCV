"use client"
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import CollapsableLink from './CollapsableLink'
import { ArrowRight, Boxes, ChevronRight } from 'lucide-react'

export default function SidebarDropdownLink({title,links, icon:Icon}) {
    // const Item = icon;
  return (
    <Collapsible>
                    <CollapsibleTrigger className='flex justify-between items-center w-full'>
                        <div className="flex items-center space-x-2 p-2">
                        <Icon className='w-5 h-5'/>
                        <span>{title}</span>
                        </div>
                        <ArrowRight className='w-5 h-5'/>
                    </CollapsibleTrigger>
                     <CollapsibleContent>
                     {
                        links.map((item,i) =>{
                            return(
                                <CollapsableLink key={i} href={item.href} title={item.title}/>
                            )
                            
                        })
                     }
                    </CollapsibleContent>
                </Collapsible>
  )
}
