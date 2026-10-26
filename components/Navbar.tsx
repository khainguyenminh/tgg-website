'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, ZALO_URL } from '@/lib/site'
import { ZaloIcon } from './ring/icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Khoá cuộn + Esc để đóng khi menu mobile mở
  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color] duration-300 ${
        solid ? 'bg-arena/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-4 md:h-[72px] md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="The Guard Guy, trang chủ">
          <Image src="/brand/logo-icon.png" alt="" width={29} height={34} priority />
          <span className="placard text-[1.05rem] text-arena-ink">
            The <span className="text-corner">Guard</span> Guy
          </span>
        </Link>

        <nav aria-label="Chính" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`placard relative py-2 text-[0.95rem] transition-colors ${
                  active ? 'text-arena-ink' : 'text-arena-mute hover:text-arena-ink'
                }`}
              >
                {link.label}
                {active && <span className="rope rope-blue absolute inset-x-0 -bottom-0.5" aria-hidden="true" />}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="corner-pad corner-pad-sm hidden sm:inline-flex">
            <ZaloIcon className="h-[18px] w-[18px]" />
            Nhắn Zalo
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] rounded-md text-arena-ink lg:hidden"
          >
            <span className={`rope rope-white w-6 transition-transform duration-200 ${menuOpen ? 'translate-y-[10px] rotate-45' : ''}`} />
            <span className={`rope rope-blue w-6 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`rope rope-red w-6 transition-transform duration-200 ${menuOpen ? '-translate-y-[10px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Dây đài trên cùng: logo và menu đứng trên sợi dây này */}
      <span aria-hidden="true" className="rope rope-blue anim-rope absolute inset-x-0 bottom-0 rounded-none" />

      {menuOpen && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 flex flex-col overflow-y-auto bg-arena px-4 pb-8 pt-4 lg:hidden">
          <nav aria-label="Chính (di động)" className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`apron border-b-[3px] border-white/10 py-4 text-[3.25rem] ${
                  pathname === link.href ? 'text-corner' : 'text-arena-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="corner-pad corner-pad-lg mt-8 w-full">
            <ZaloIcon className="h-6 w-6" />
            Nhắn Zalo tư vấn
          </a>
        </div>
      )}
    </header>
  )
}
