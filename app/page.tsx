import React from 'react'
import Hero from './components/Hero'
import Domains from './components/Domains'
import ServicesSection from './components/ServicesSection'

const HomePage = () => {
  return (
    <main className=' mt-20'>
      <Hero />
      <Domains />
      <div>
        <ServicesSection />
      </div>
    </main>
  )
}

export default HomePage