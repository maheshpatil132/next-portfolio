import React from 'react'
import Image from 'next/image'
import mahesh from '../app/assets/mahesh.png'

const Skills = () => {
  return (
    <div className=' min-h-screen mt-20 my-10 md:px-16 py-10 px-2'>
        <h1 className=' text-center font-bold text-3xl mb-12'>ABOUT</h1>

        {/* <!--contailer--> */} 
        <div className='  flex-col md:flex justify-center items-center md:justify-between gap-12  md:items-start w-full'>
            {/* <!== left part> */}
            <div className=' p-5 w-4/5 mx-auto'>
              <Image src={mahesh} width={350} className=' shadow-2xl mx-auto rounded-full ' alt='image'/>
            </div>
            {/* <!== left part> */}

            {/* <!== Right part> */}
            <div className=' px-2 flex gap-2  items-start flex-col'>
               <h1 className=' font-semibold text-4xl my-4 text-[#6c5bf0]'>Mahesh Patil</h1>
               <p className=' text-gray-500  text-base'>
               Hello there! <span className=' text-xl'>👋 </span>
                 <br/>
                 I'm Mahesh Patil, currently in my 4th year pursuing a degree in B.E. at L.D College of Engineering. I thrive on constructing intricate Full Stack applications and continually seek to expand my knowledge through engaging projects. My journey in development began in the first year of my engineering studies, and I consistently challenge myself by delving into Data Structures and Algorithms problems for practice. This commitment not only hones my skills but propels me towards becoming a more proficient developer. Excited about the limitless possibilities that lie ahead! 🚀
               </p>
               <div>
               {/* <p className=' text-gray-500'>
                 <span className=' text-lg font-semibold'>Contact : </span>
                  (+91) 8780195685
               </p> */}
               <p className='text-gray-500'>
                 <span className=' text-base font-semibold'>Email : </span>
                  maheshpatilkg132@gmail.com
               </p>
               </div>
               <button className=' my-4 w-28 bg-[#8577ec] rounded-md hover:w-32 text-white px-6 py-2 hover:bg-[#6f5fe6] transition-all'>Resume</button>
            </div>
            {/* <!== Right part> */}
          </div>
        {/* <!- container--> */}
    </div>
  )
}

export default Skills