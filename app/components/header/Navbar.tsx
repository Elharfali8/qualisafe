'use client'

import { navLinks } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className='sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl'>
      <nav className='mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 lg:px-8'>
        
        {/* LOGO */}
        <Link
          href='/'
          className='flex items-center justify-center transition-opacity duration-300 hover:opacity-80 '
        >
          <Image
            src='/assets/main-logo.png'
            alt='QSA Logo'
            width={85}
            height={85}
            priority
            className='object-contain'
          />
        </Link>

        {/* RIGHT SIDE */}
        <div className='flex items-center gap-4'>
          
          {/* NAV LINKS */}
          <ul className='hidden items-center gap-1 lg:flex'>
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href))

              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`
                      relative flex items-center rounded-xl px-4 py-2 text-[15px]
                      font-medium tracking-tight transition-all duration-300
                      ${
                        isActive
                          ? 'bg-green-50 text-[#0f7a3d]'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                      }
                    `}
                  >
                    {link.name}

                    {/* ACTIVE INDICATOR */}
                    <span
                      className={`
                        absolute -bottom-[6px] left-1/2 h-[3px]
                        -translate-x-1/2 rounded-full bg-[#0f7a3d]
                        transition-all duration-300
                        ${
                          isActive
                            ? 'w-8 opacity-100'
                            : 'w-0 opacity-0'
                        }
                      `}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA BUTTON */}
          <button
            className='group hidden items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f7a3d] via-[#146c43] to-[#0b5d33] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:-translate-y-[1px] hover:shadow-2xl lg:flex cursor-pointer'
          >
            <span>Demander un audit</span>

            <span className='grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45'>
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar