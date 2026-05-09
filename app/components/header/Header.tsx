'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSidebar = () => {
    setIsOpen((prev) => !prev)
  }

  return (
      <header className='w-full fixed top-0 left-0 right-0 bg-[#FAF9F6] h-20 z-99 shadow-lg'>
      <Navbar isOpen={isOpen} handleSidebar={handleSidebar} />
        <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
    </header>
  )
}

export default Header