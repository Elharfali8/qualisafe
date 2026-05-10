import React from 'react'
import Hero from './components/Hero'
import Domains from './components/Domains'
import ServicesSection from './components/ServicesSection'
import SectorsSection from './components/SectorsSection'
import ContactSection from './components/ContactSection'

const HomePage = () => {
  return (
    <main className=' mt-20'>
      <Hero />
      <Domains />
      <ServicesSection />
      <SectorsSection />
      <ContactSection />
    </main>
  )
}

export default HomePage