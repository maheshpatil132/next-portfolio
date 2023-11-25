import React from 'react'
import Image from 'next/image'
import mahesh from '../app/assets/mahesh.png'

const Skills = () => {
  return (
    <div className=' min-h-screen mt-10 md:px-16 py-10 px-4'>
        <h1 className=' text-center font-bold text-3xl mb-10'>ABOUT</h1>

        {/* <!--contailer--> */} 
        <div className='  flex-col md:flex justify-center items-center md:justify-between gap-12  md:items-start w-full'>
            {/* <!== left part> */}
            <div className=' p-5 w-4/5 mx-auto'>
              <Image src={mahesh} width={350} className=' mx-auto rounded-full ' alt='image'/>
            </div>
            {/* <!== left part> */}

            {/* <!== Right part> */}
            <div className=' px-8 flex gap-2  items-start flex-col'>
               <h1 className=' font-medium text-4xl my-4 text-blue-500'>Mahesh Patil</h1>
               <p className=' text-gray-500  text-lg'>
                 Hi, There 👋
                 <br/>
                 My name is Mahesh Patil. I am in my 4th Year in B.E Pursing my degree from L.D College of Engineering. I like to build the complex Full stack developer and always try to learn New things through the project.I have started my Development Journey from First Year of My Engineering.
                 Also i am Practicing DSA Problem for Practice purpose.It makes me a better developer.
               </p>
               <div>
               {/* <p className=' text-gray-500'>
                 <span className=' text-lg font-semibold'>Contact : </span>
                  (+91) 8780195685
               </p> */}
               <p className='text-gray-500'>
                 <span className=' text-lg font-semibold'>Email : </span>
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