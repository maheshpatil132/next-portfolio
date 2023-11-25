import React from 'react'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { Github } from 'lucide-react'
import { Instagram } from 'lucide-react'
const Home = () => {
  return (
    <>

      <div className=' min-h-screen lg:mt-14 justify-center flex-col-reverse lg:flex-row flex   lg:justify-between  gap-10 items-center md:px-16 sm:py-2 px-4 '>
        {/* <!--left part> */}
        <div className=' lg:w-1/2  flex gap-4 flex-col'>
          <h1 className=' text-2xl md:text-3xl font-medium '>Hey <span className='text-3xl'>👋,</span></h1>
          <h2 className=' text-5xl md:text-6xl capitalize font-bold'>I'm Mahesh Patil</h2>
          <p className='  text-xl'>A passionate <span className='text-blue-500'>Frontend Developer</span></p>
          <p>I'm Focusing to build the befutiful website with the MERN stack technology and always staying up to date with the Latest technology. </p>
          <div className=' flex items-center gap-4'>
            {/* <button className=' w-fit bg-[#5b49df]  text-white rounded-md px-4 py-2'>Get In Touch</button> */}
            <div className=' flex items-center gap-3'>
              <div className='cursor-pointer border p-2 border-blue-500 bg-blue-500 rounded-full'>
                <Linkedin size={18} strokeWidth={2} color='white' />
              </div>
              <div className='cursor-pointer border p-2 bg-gray-800 rounded-full'>
                <Github size={18} strokeWidth={2} color='white' />
              </div>
              <div className=' cursor-pointer border p-2 bg-pink-500 rounded-full'>
                <Instagram size={18} strokeWidth={2} color='white' />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- left part> */}

        {/* <!-- right part> */}

        <Image src={'/coders.gif'} alt='Image' placeholder='blur' blurDataURL={'/coders.gif'} width={500} height={500} />

        {/* <!-- right part> */}
      </div>

    </>
  )
}

export default Home