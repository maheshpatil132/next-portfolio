"use client"


import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import icon from '../app/assets/icon.png'
import { Icon } from '@mui/material'

const About = () => {
  

  let skills = [
    {
      "skill": "Html",
      "img":'https://img.icons8.com/?size=512&id=20909&format=png',
       "type" : "Frontend"
    },
    {
      "skill": "CSS",
      "img":"https://pics.freeicons.io/uploads/icons/png/9114856761551941711-512.png",
      "type" : "Frontend"
    },
    {
      "skill": "Javascript",
      "img":'https://img.icons8.com/?size=512&id=108784&format=png',
      "type" : "Frontend"
    },
    {
      "skill": "Tailwind Css",
      "img":'https://img.icons8.com/?size=512&id=CIAZz2CYc6Kc&format=png',
      "type" : "Frontend"
    },
    {
      "skill": "React",
      "img":'https://img.icons8.com/?size=512&id=123603&format=png',
      "type" : "Frontend"
    },
    {
      "skill": "Node js",
      "img":"https://img.icons8.com/?size=512&id=54087&format=png",
      "type" : "Backend"
    },
    {
      "skill": "Express js",
      "img":'https://img.icons8.com/?size=512&id=SDVmtZ6VBGXt&format=png',
      "type" : "Backend"
    },
    {
      "skill": "Mongo DB",
      "img":"https://img.icons8.com/?size=512&id=74402&format=png",
       "type" : "Backend"
    },
    {
      "skill": "My SQL",
      "img":'https://img.icons8.com/?size=512&id=UFXRpPFebwa2&format=png',
       "type" : "Backend"
    },
    {
      "skill": "Redux",
      "img":'https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png',
       "type" : "Frontend"
    },
    {
      "skill": "Shocket Io",
      "img":"https://pics.freeicons.io/uploads/icons/png/9114856761551941711-512.png",
       "type" : "Backend"
    },
    {
      "skill": "Material UI",
      "img":'https://img.icons8.com/?size=1x&id=gFw7X5Tbl3ss&format=png',
       "type" : "Frontend"
    },
    {
      "skill": "GitHub",
      "img":'https://img.icons8.com/?size=1x&id=63777&format=png',
       "type" : "Frontend"
    },
    {
      "skill": "PostMan",
      "img":"https://pics.freeicons.io/uploads/icons/png/9114856761551941711-512.png",
       "type" : "Backend"
    },
    {
      "skill": "NextJs",
      "img":'https://pics.freeicons.io/uploads/icons/png/9114856761551941711-512.png',
       "type" : "Frontend"
    },

  ]

  
  const [skiilset, setSkiilSet] = useState(skills)
  const [type, setType] = useState(1)

  const All = ()=>{
    setSkiilSet(skills)
    setType(1)

  }

  const frontend = () => {
    setSkiilSet( skills.filter((elem)=>{
      return elem.type === 'Frontend';
    }))
    setType(2)
  }

  const backend = () => {
    setSkiilSet(skills.filter((elem)=>{
      return elem.type === 'Backend';
    }))
    setType(3)

  }
  


  return (
    <div id='about' className=' bg-purple-200 mx-6 lg:mx-12 rounded-3xl shadow-xl min-h-screen md:px-16 py-24 px-4'>
      <h1 className='text-center text-3xl font-bold mb-14'>SKILLS</h1>
      <div className=' w-full border sm:gap-8  gap-3  xl:w-[40%] mb-20 flex bg-white  justify-between px-3 md:px-3 py-2 mx-auto rounded-2xl'>
        <button 
        onClick={All} 
        className={` flex-1  ${type === 1 ? 'bg-code-secondary' : 'hover:bg-slate-100' }  px-2 md:px-6 py-2 rounded-md`}>
          All
        </button>
        <button 
        onClick={frontend} 
        className={` flex-1 ${type === 2 ?'bg-code-secondary' : 'hover:bg-slate-100' } px-2 md:px-6 py-2 rounded-md`}>
          Frontend
        </button>
        <button 
        onClick={backend} 
        className={`flex-1 ${type === 3 ?'bg-code-secondary' : 'hover:bg-slate-100' } px-2 md:px-6 py-2 rounded-md`}>
          Backend
        </button>
      </div>
      <div className="grid grid-cols-2 sm:place-items-center sm:grid-cols-3 gap-6  lg:grid-cols-6  sm:text-lg">

        {
          skiilset.map((elem, index) => {
            return (
              <div key={index} className=' hover:-translate-y-3 gap-2 hover:shadow-lg transition-all bg-white flex-col flex justify-center items-center py-4 sm:w-32 rounded-3xl  border border-slate-200 shadow-sm'>
                
                <Image src={`${elem.img}`} alt='image' height={50} width={50}/>
                <h6 className=' text-sm font-medium'>{elem.skill}</h6>
              </div>
            )
          }) 
        }

      

      </div>
    </div>
  )
}

export default About