'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Quy trình', href: '/order' },
  { label: 'Tự thiết kế', href: '/customize' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#0A1628]/95 backdrop-blur-md border-b border-[#1E3350]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/brand/logo-icon.png"
              alt="TGG"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="font-heading font-black text-white text-base tracking-wide hidden sm:block">
              THE GUARD GUY
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#1CA6DF] bg-[#1CA6DF]/10'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://zalo.me/0975580253"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-[#1CA6DF] hover:bg-[#1590C2] text-white font-bold text-sm px-4 py-2 rounded-lg transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.46-4.54-1.26l-.32-.19-3.02.8.81-2.96-.21-.34A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              Nhắn Zalo
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-all"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#1E3350] bg-[#0A1628]/98 backdrop-blur-md px-5 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#1CA6DF] bg-[#1CA6DF]/10'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-2 border-t border-[#1E3350] mt-2">
              <a
                href="https://zalo.me/0975580253"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1CA6DF] hover:bg-[#1590C2] text-white font-bold text-sm px-4 py-3 rounded-xl transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.46-4.54-1.26l-.32-.19-3.02.8.81-2.96-.21-.34A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                Nhắn Zalo ngay
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
