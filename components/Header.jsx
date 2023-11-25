"use client"

import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Icon } from '@mui/material';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import Link from 'next/link';

const Header = () => {
  const str = "< M / P >"



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
    <div className=' bg-white z-50 fixed top-0 w-full pt-5 px-2 md:px-[3rem]'>
    <div className=' flex border p-3 px-6 rounded-full w-full items-center justify-between' >
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
        <DarkModeIcon className=' ml-6' />
        <HiOutlineMenuAlt3 className=' sm:hidden ml-4 ' fontSize={'24px'} />
      </nav>
    </div>
    </div>
  )
}

export default Header