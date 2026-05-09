import React from 'react'
import Hero from './components/Hero'
import Domains from './components/Domains'
import ServicesSection from './components/ServicesSection'
import SectorsSection from './components/SectorsSection'

const HomePage = () => {
  return (
    <main className=' mt-20'>
      <Hero />
      <Domains />
      <ServicesSection />
      <SectorsSection />
    </main>
  )
}

export default HomePage