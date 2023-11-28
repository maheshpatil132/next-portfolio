"use client"

import { ThemeProvider, useTheme } from 'next-themes'
import { useState , useEffect } from 'react'

const Provider = ({children}) => {

    const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])
 
  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  )
}

export default Provider