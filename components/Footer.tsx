import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-[#1E3350] py-14 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/brand/logo-icon.png"
                alt="TGG"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="font-heading font-black text-white text-lg tracking-wide">
                THE GUARD GUY
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              Custom-fit sports mouthguard được thiết kế riêng cho bạn — từ dữ liệu scan 3D thực tế, không dùng khuôn chung.
            </p>
            <p className="text-[#94A3B8]/60 text-xs mt-3">
              Sub-brand của Khai Nguyên Dental Lab
            </p>

            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/theguardguy.official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#152035] border border-[#1E3350] flex items-center justify-center text-[#94A3B8] hover:text-[#1CA6DF] hover:border-[#1CA6DF]/50 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/theguardguy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-[#152035] border border-[#1E3350] flex items-center justify-center text-[#94A3B8] hover:text-[#1CA6DF] hover:border-[#1CA6DF]/50 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@theguardguy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-[#152035] border border-[#1E3350] flex items-center justify-center text-[#94A3B8] hover:text-[#1CA6DF] hover:border-[#1CA6DF]/50 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.29 6.29 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.76a4.85 4.85 0 01-1.02-.07z"/>
                </svg>
              </a>
              <a
                href="https://zalo.me/0975580253"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo"
                className="w-9 h-9 rounded-lg bg-[#152035] border border-[#1E3350] flex items-center justify-center text-[#94A3B8] hover:text-[#1CA6DF] hover:border-[#1CA6DF]/50 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.46-4.54-1.26l-.32-.19-3.02.8.81-2.96-.21-.34A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Trang</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Sản phẩm', href: '/products' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Quy trình', href: '/#how-it-works' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Đặt hàng', href: '/order' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Liên hệ</h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <a href="https://zalo.me/0975580253" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Zalo: 0975 580 253
                </a>
              </li>
              <li>
                <a href="mailto:theguardguy.official@gmail.com" className="hover:text-white transition-colors">
                  theguardguy.official@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">
                10/40 Xuân Diệu, P. Tân Sơn Nhất,<br />Q. Tân Bình, TP.HCM
              </li>
              <li className="pt-1">
                <span className="text-[#94A3B8]/60">T2–T7: 8:00 – 17:30</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E3350] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94A3B8]/60">
          <p>© 2025 The Guard Guy. All rights reserved.</p>
          <p>
            Made in Vietnam by{' '}
            <span className="text-[#94A3B8]">Khai Nguyên Dental Lab</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
