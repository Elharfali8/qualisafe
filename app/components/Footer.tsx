import { navLinks } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ArrowRight } from 'lucide-react'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

const Footer = () => {
  const services = [
    {
      id: 1,
      name: 'Audit & Analyse',
    },
    {
      id: 2,
      name: 'Conseil',
    },
    {
      id: 3,
      name: 'Formation',
    },
    {
      id: 4,
      name: 'Accompagnement',
    },
    {
      id: 5,
      name: 'Certification',
    },
  ]

  const normes = [
    {
      id: 1,
      name: 'HACCP',
    },
    {
      id: 2,
      name: 'ISO 22000',
    },
    {
      id: 3,
      name: 'BRC',
    },
    {
      id: 4,
      name: 'IFS',
    },
    {
      id: 5,
      name: 'Réglementations locales',
    },
  ]

  return (
    <footer className='relative overflow-hidden rounded-t-[40px] bg-gradient-to-br from-[#052e1b] via-[#0b3d26] to-[#041b11] py-16 text-white'>
      
      {/* LEAVES */}
      <Image
        src='/assets/leaf-1.svg'
        alt=''
        width={240}
        height={240}
        className='pointer-events-none absolute bottom-0 left-0 z-0 opacity-[0.05]'
      />

      <Image
        src='/assets/leaf-2.svg'
        alt=''
        width={300}
        height={300}
        className='pointer-events-none absolute bottom-0 right-0 z-0 opacity-[0.08]'
      />

      {/* LIGHT EFFECT */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.15),_transparent_35%)]' />

      <div className='relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8'>
        
        {/* GRID */}
        <div className='grid gap-12 border-b border-white/10 pb-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-[1.2fr_1fr_1fr_1fr]'>
          
          {/* LOGO */}
          <div className='flex flex-col items-center justify-center md:items-start md:justify-start'>
            <Image
              src='/assets/white-logo.png'
              alt='QSA Logo'
              width={180}
              height={180}
              className='h-auto w-auto object-contain'
            />

            {/* SOCIALS */}
            <div className='mt-8 flex items-center justify-center gap-3 md:justify-start'>
              
              <Link
                href='/'
                className='grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f7a3d]'
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href='/'
                className='grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f7a3d]'
              >
                <FaLinkedinIn size={18} />
              </Link>

              <Link
                href='/'
                className='grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f7a3d]'
              >
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>

          {/* LIENS */}
          <div className='text-center md:text-left'>
            <h4 className='text-lg font-bold text-white'>
              Liens utiles
            </h4>

            <ul className='mt-6 grid place-items-center gap-y-3 md:place-items-start'>
              {navLinks.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className='text-sm text-green-50/80 transition-all duration-300 hover:translate-x-1 hover:text-white'
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* SERVICES */}
          <div className='text-center md:text-left'>
            <h4 className='text-lg font-bold text-white'>
              Nos services
            </h4>

            <ul className='mt-6 grid place-items-center gap-y-3 md:place-items-start'>
              {services.map((item) => {
                return (
                  <li
                    key={item.id}
                    className='text-sm text-green-50/80 transition-all duration-300 hover:translate-x-1 hover:text-white'
                  >
                    {item.name}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* NORMES + NEWSLETTER */}
          <div className='text-center md:text-left'>
            <h4 className='text-lg font-bold text-white'>
              Normes
            </h4>

            <ul className='mt-6 grid place-items-center gap-y-3 md:place-items-start'>
              {normes.map((item) => {
                return (
                  <li
                    key={item.id}
                    className='text-sm text-green-50/80 transition-all duration-300 hover:translate-x-1 hover:text-white'
                  >
                    {item.name}
                  </li>
                )
              })}
            </ul>

            {/* NEWSLETTER */}
            <div className='mt-10 text-center md:text-left'>
              <h4 className='text-lg font-bold text-white'>
                Newsletter
              </h4>

              <p className='mt-3 text-sm leading-7 text-green-50/70'>
                Recevez nos conseils et actualités.
              </p>

              <div className='mt-5 flex overflow-hidden rounded-2xl border border-white/10 bg-white'>
                
                <input
                  type='email'
                  placeholder='Votre email'
                  className='h-14 flex-1 bg-transparent px-5 text-sm text-gray-800 outline-none'
                />

                <button className='grid h-14 w-16 place-items-center bg-[#6faa36] text-white transition-all duration-300 hover:bg-[#0f7a3d]'>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className='flex flex-col items-center justify-center gap-4 pt-8 text-center text-sm text-green-50/60 lg:flex-row lg:justify-between lg:text-left'>
          
          <p>
            © {new Date().getFullYear()} Q.S.A — Qualité & Sécurité Alimentaire
          </p>

          <p>
            Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer