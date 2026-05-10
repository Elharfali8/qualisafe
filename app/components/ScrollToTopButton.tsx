'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label='Retour en haut'
      className={`
        fixed bottom-6 right-6 z-50
        flex h-11 w-11 items-center justify-center
        rounded-full bg-[#0f7a3d] border border-white text-white shadow-lg
        transition-all duration-300
        hover:bg-[#0b6633] hover:-translate-y-1 hover:shadow-xl
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <ArrowUp size={18} />
    </button>
  )
}

export default ScrollToTopButton