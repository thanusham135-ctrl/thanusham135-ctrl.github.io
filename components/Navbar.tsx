'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How It Works' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#pricing', label: 'Pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] h-[68px]
        bg-bg/85 backdrop-blur-md border-b border-gray-200/60
        transition-shadow duration-300 ${scrolled ? 'shadow-[0_2px_20px_rgba(79,70,229,.08)]' : ''}`}
    >
      {/* Logo */}
      <Link href="#hero" className="flex items-center gap-2.5 font-display font-black text-xl tracking-tight text-ink no-underline">
        <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
        </div>
        StudySphere
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map(l => (
          <li key={l.href}>
            <a href={l.href} className="text-sm font-medium text-muted hover:text-accent transition-colors no-underline">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex gap-3 items-center">
        <a href="#" className="hidden md:inline-flex btn-ghost">Login</a>
        <a href="#" className="btn-primary">Sign Up Free</a>
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-ink rounded transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink rounded transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink rounded transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[68px] left-0 right-0 bg-bg border-t border-gray-200/60 px-[5vw] py-6 flex flex-col gap-4 md:hidden z-50">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-lg font-medium text-ink no-underline hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#" className="btn-primary w-full text-center mt-2">Sign Up Free</a>
        </div>
      )}
    </nav>
  )
}
