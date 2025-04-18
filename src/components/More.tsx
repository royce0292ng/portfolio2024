import { NAV_MORE } from '@/constants'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react"
import React from 'react'

const More = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="ghost" className='bg-gradient-to-br from-emerald-600 via-sky-500 to-blue-800 text-white' >
          More ▼
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Custom item styles" itemClasses={{
          base: [
            "rounded-md",
            "text-black",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-blue-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}>
        {NAV_MORE.map((item)=>(
            <DropdownItem key={item.key} href={item.href}>{item.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default More