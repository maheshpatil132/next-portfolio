import React from 'react'


const projects = [
    {
        "title": "Tailwind Practice",
        "stack": ["React", "Tailwind"],
        "type": "Frontend"
    },
    {
        "title": "Apna Bazar",
        "stack": ["HTML", "CSS", "Javascript"],
        "type": "Frontend"
    },
    {
        "title": "Quora Clone",
        "stack": ["React", "Firebase", "CSS"],
        "type": "Frontend"
    },
    {
        "title": "Chat App",
        "stack": ["React", "Firebase", "CSS"],
        "type": "Frontend"
    },
    {
        "title": "Blog App",
        "stack": ["React", "Node js", "Express", "Mongo DB"],
        "type": "Full stack"
    },
    {
        "title": "Zoom Clone",
        "stack": ["React", "Node js", "Express", "Shocket Io"],
        "type": "Full stack"
    },
    {
        "title": "Chakra UI Practice",
        "stack": ["React", "Chakra Ui"],
        "type": "Frontend"
    },
    {
        "title": "Flipkart Clone",
        "stack": ["React", "Node js", "Express", "MongoDB", "Redux"],
        "type": "Full stack"
    },
    {
        "title": "Reverse Auction",
        "stack": ["React", "Node js", "Express", "MongoDB", "Redux"],
        "type": "Full stack"
    },
]

const Projects = () => {
    return (
        <div className=' px-16'>
            <h1 className='text-center font-bold text-3xl mb-12'>Projects</h1>
            <div className=' py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4'>
                {
                    projects.map((elem, index) => {
                        return (

                            <div className='border w-72 flex flex-col rounded-lg'>
                                <div className=' h-44 w-full rounded-t-lg bg-slate-300'>Image</div>
                                <div className=' p-3'>
                                    <h1 className=' font-medium text-lg mb-4'>{elem.title}</h1>
                                    <h1 className=' font-medium mb-2 text-base'>Tech Stack</h1>
                                    <div className=' flex flex-wrap gap-2'>
                                        {
                                            elem.stack.map((skills , ind)=>{
                                                return(

                                                    <div className=' px-4 border-purple-400 bg-purple-50 py-1 rounded-full border'>
                                                        <p className=' text-sm'>{skills}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                        )
                    })

                }
            </div>
        </div>
    )
}

export default Projects