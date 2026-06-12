'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
  {
    tag: 'Custom-fit Mouthguard',
    headline: 'Bảo vệ chuẩn xác.',
    headline2: 'Thiết kế riêng cho bạn.',
    sub: 'Scan 3D miễn phí · Ship toàn quốc · 2–3 ngày sản xuất',
    cta: { label: 'Đặt hàng ngay', href: '/order' },
    cta2: { label: 'Xem sản phẩm', href: '/products' },
    bg: 'from-[#0A1628] via-[#0F1F38] to-[#0A1628]',
    accent: '#1CA6DF',
  },
  {
    tag: '🎉 Khuyến mãi',
    headline: 'Ưu đãi tháng này.',
    headline2: 'Giảm 10% tất cả sản phẩm.',
    sub: 'Áp dụng khi đặt qua Zalo hoặc Instagram · Hết 31/07',
    cta: { label: 'Nhận ưu đãi ngay', href: '/order' },
    cta2: null,
    bg: 'from-[#0A1628] via-[#1a1020] to-[#0A1628]',
    accent: '#f59e0b',
  },
  {
    tag: 'Guard & Protection PRO',
    headline: 'Dành cho combat sports.',
    headline2: 'Boxing · MMA · Muay Thái.',
    sub: '3 lớp EVA · Hơn 10 màu · Chế tác riêng theo hàm của bạn',
    cta: { label: 'Khám phá PRO', href: '/products' },
    cta2: { label: 'Xem gallery', href: '/gallery' },
    bg: 'from-[#0A1628] via-[#081410] to-[#0A1628]',
    accent: '#22c55e',
  },
]

export default function Hero() {
  const [cur, setCur] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setCur((c) => (c + 1) % slides.length), 5000)
    return () => clearTimeout(t)
  }, [cur])

  const slide = slides[cur]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-700`} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-2xl">

          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-6 border"
            style={{ color: slide.accent, borderColor: slide.accent + '55', backgroundColor: slide.accent + '18' }}
          >
            {slide.tag}
          </span>

          <h1 className="font-heading font-black text-5xl md:text-7xl text-white leading-tight mb-2">
            {slide.headline}
          </h1>
          <h1
            className="font-heading font-black text-5xl md:text-7xl leading-tight mb-6"
            style={{ color: slide.accent }}
          >
            {slide.headline2}
          </h1>

          <p className="text-[#94A3B8] text-lg mb-10">{slide.sub}</p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href={slide.cta.href}
              className="font-bold px-8 py-3 rounded-lg text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: slide.accent }}
            >
              {slide.cta.label}
            </Link>
            {slide.cta2 && (
              <Link
                href={slide.cta2.href}
                className="font-bold px-8 py-3 rounded-lg border text-[#F1F5F9] hover:bg-white/10 transition-all"
                style={{ borderColor: slide.accent + '88' }}
              >
                {slide.cta2.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCur(i)}
            className={`h-2 rounded-full transition-all ${
              i === cur ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}