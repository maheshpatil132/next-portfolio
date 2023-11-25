import About from '@/components/About'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Image from 'next/image'


export default function index() {
  return (
    <>
      
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  )
}
