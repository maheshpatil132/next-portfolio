"use client"

import React, { useEffect } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Sun } from 'lucide-react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import Link from 'next/link';
import { useTheme } from 'next-themes'

const Header = () => {
  const str = "< M / P >"

  const { theme, setTheme } = useTheme()

  // Menus List //
  const menus = [
    {
      menu: 'Home',
      to: '#home'
    },
    {
      menu: 'About',
      to: '#about'
    },
    {
      menu: 'Skills',
      to: '#skills'
    },
    {
      menu: 'Projects',
      to: '#proects'
    },
    {
      menu: 'Contact',
      to: '#contact'
    },]
    
  

  return (
    <div className=' header z-50 fixed top-0 w-full pt-5 px-2 md:px-[3rem]'>
    <div className='bg-white dark:bg-[#121212] flex border p-3 px-6 rounded-full w-full items-center justify-between' >
      <div className="logo">
        <h1 className=' font-medium text-2xl'> {str}  </h1>
      </div>
      <nav className=' flex items-center'>
        <ul className=' hidden sm:flex items-center gap-6'>
          {
            menus.map((elem, id) => {
              return (
                <Link href={elem.to} key={id} className=' cursor-pointer p-1 px-4 hover:text-blue-500 rounded-md'>
                  {elem.menu}
                  </Link>
              )
            })
          }


        </ul>
        {/* <WbSunnyIcon/> */}
        {
          theme === 'light' ?

           <DarkModeIcon onClick={() => setTheme('dark')}  className=' ml-6 cursor-pointer' />
            :
            <Sun onClick={() => setTheme('light')} className=' cursor-pointer ml-6'/>
        }

          <HiOutlineMenuAlt3  className=' sm:hidden ml-4 ' fontSize={'24px'} />


      </nav>
    </div>
    </div>
  )
}

export default Header