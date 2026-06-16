import React, { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(id)
      if (el) {
        const offset = 72 // header height
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_18px_48px_rgba(15,23,42,0.06)] border-slate-200/50'
          : 'bg-white'
      }`}
      style={{ height: '72px' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo + Brand */}
        <button
          onClick={() => scrollTo('top')}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Back to top"
        >
          {/* Logo mark */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm transition-transform duration-200 group-hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #6B9FD4 0%, #4DC9A8 100%)',
            }}
          >
            A
          </div>
          {/* Brand name */}
          <span className="text-[15px] font-semibold tracking-tight text-slate-800">
            AZURA{' '}
            <span style={{ color: '#6B9FD4' }}>AI</span>{' '}
            <span className="font-normal text-slate-500">Systems</span>
          </span>
        </button>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {[
            { label: 'Home', target: 'top' },
            { label: 'Product', target: 'product' },
            { label: 'Contact', target: 'contact' },
          ].map(({ label, target }) => (
            <button
              key={label}
              onClick={() => scrollTo(target)}
              className="relative px-4 py-3 text-sm font-medium text-slate-600 rounded-2xl transition-colors duration-150 hover:text-slate-900 hover:bg-slate-50 focus:outline-none group"
            >
              {label}
              {/* Mint green underline on hover */}
              <span
                className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                style={{ background: '#4DC9A8' }}
              />
            </button>
          ))}

          {/* CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="ml-3 px-6 py-3 text-sm font-semibold text-white rounded-full shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-px focus:outline-none"
            style={{
              background: 'linear-gradient(135deg, #6B9FD4 0%, #4DC9A8 100%)',
            }}
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  )
}