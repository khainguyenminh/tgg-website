'use client'

import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1F38] via-[#0A1628] to-[#0F1F38]" />
      {/* Accent glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-[#1CA6DF]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold text-[#1CA6DF] uppercase tracking-widest">
          Bắt đầu ngay hôm nay
        </span>

        <h2 className="font-heading font-black text-4xl md:text-6xl text-white mt-4 mb-6 leading-tight">
          Sẵn sàng có<br />
          <span className="text-[#1CA6DF]">bộ bảo vệ của riêng bạn?</span>
        </h2>

        <p className="text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
          Scan 3D miễn phí · Ship miễn phí toàn quốc · Nhận hàng trong 2–3 ngày
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://zalo.me/0975580253"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1CA6DF] hover:bg-[#1590C2] text-white font-bold px-8 py-4 rounded-xl transition-all text-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.46-4.54-1.26l-.32-.19-3.02.8.81-2.96-.21-.34A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            Nhắn Zalo ngay
          </a>

          <Link
            href="/order"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#1CA6DF] text-[#1CA6DF] hover:bg-[#1CA6DF] hover:text-white font-bold px-8 py-4 rounded-xl transition-all text-lg"
          >
            Đặt hàng online
          </Link>
        </div>

        <p className="text-[#94A3B8]/60 text-sm mt-8">
          Hoặc nhắn qua{' '}
          <a href="https://instagram.com/theguardguy.official" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white underline underline-offset-2 transition-colors">
            Instagram
          </a>
          {' '}·{' '}
          <a href="https://facebook.com/theguardguy" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white underline underline-offset-2 transition-colors">
            Facebook
          </a>
        </p>
      </div>
    </section>
  )
}
