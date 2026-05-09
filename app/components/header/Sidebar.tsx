'use client'

import { useEffect } from 'react'
import { navLinks } from '@/utils/constants'
import { ArrowUpRight, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SidebarProps = {
  isOpen: boolean
  handleSidebar: () => void
}

const Sidebar = ({
  isOpen,
  handleSidebar,
}: SidebarProps) => {
  const pathname = usePathname()

  // LOCK BODY SCROLL
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={handleSidebar}
        className={`
          fixed top-20 left-0 right-0 bottom-0 z-998
          bg-black/40 backdrop-blur-sm
          transition-all duration-500
          lg:hidden
          ${
            isOpen
              ? 'visible opacity-100'
              : 'invisible opacity-0'
          }
        `}
      />

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-20 left-0 z-999
          flex h-screen w-[85%] max-w-sm flex-col
          bg-[#FAF9F6]
          shadow-2xl
          transition-transform duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          lg:hidden
          ${
            isOpen
              ? 'translate-x-0'
              : '-translate-x-full'
          }
        `}
      >
        <div className='flex items-center justify-between border-b border-gray-200 p-6'>
          <h3 className='text-lg font-bold text-gray-900'>
            Navigation
          </h3>

          
        </div>

        {/* NAVIGATION */}
        <div className='flex-1 overflow-y-auto p-6'>
          <ul className='grid gap-3'>
            {navLinks.map((link, index) => {
              const { id, name, href } = link

              const isActive =
                pathname === href

              return (
                <li
                  key={id}
                  className={`
                    transition-all duration-500
                    ${
                      isOpen
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-8 opacity-0'
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  <Link
                    href={href}
                    onClick={handleSidebar}
                    className={`
                      flex items-center rounded-2xl px-4 py-4
                      text-sm font-semibold transition-all duration-300
                      ${
                        isActive
                          ? 'bg-[#0f7a3d] text-white shadow-lg'
                          : 'bg-green-50 text-gray-700 hover:bg-green-100'
                      }
                    `}
                  >
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className='mt-8'>
            <button
              className='group flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f7a3d] via-[#146c43] to-[#0b5d33] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:-translate-y-[1px] hover:shadow-2xl'
            >
              <span>Demander un audit</span>

              <span className='grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45'>
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar