"use client"

import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Icon } from '@mui/material';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const Header = () => {
  const str = "< M / P >"
  return (
    <div className=' fixed top-0 w-full border-b flex items-center justify-between py-4 px-12 md:px-[5rem]'>
        <div className="logo">
            <h1 className=' font-medium text-2xl'> {str}  </h1>
        </div>
        <nav className=' flex items-center'>
            <ul className=' hidden md:flex items-center gap-6'>
                <li className=' cursor-pointer p-1 px-4 hover:text-blue-500 rounded-md'>Home</li>
                <li className=' cursor-pointer p-1 px-4 hover:text-blue-500 rounded-md'>About</li>
                <li className=' cursor-pointer p-1 px-4 hover:text-blue-500 rounded-md'>Projects</li>
                <li className=' cursor-pointer p-1 px-4 hover:text-blue-500 rounded-md'>Contact</li>
                  <WbSunnyIcon/>
                  <DarkModeIcon/>
            </ul>
            <HiOutlineMenuAlt3 className=' md:hidden ' fontSize={'24px'} />
        </nav>
    </div>
  )
}

export default Header