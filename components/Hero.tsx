'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SLIDES = [
  {
    label: 'Custom-fit Mouthguard',
    h1: 'Bảo vệ đỉnh cao.',
    h1b: 'Cá nhân hóa hoàn toàn.',
    sub: 'Từ scan 3D đến sản phẩm hoàn chỉnh trong 2–3 ngày làm việc.',
    cta1: { label: 'Đặt hàng ngay', href: '/order' },
    cta2: { label: 'Xem sản phẩm', href: '/products' },
    trust: 'Scan 3D miễn phí · Ship toàn quốc · 2–3 ngày sản xuất',
  },
  {
    label: 'Guard & Protection PRO',
    h1: 'Dành cho chiến binh.',
    h1b: '3 lớp EVA — hấp thụ lực tối đa.',
    sub: 'Boxing, Muay Thái, MMA — thiết kế full custom với hơn 10 màu tùy chọn.',
    cta1: { label: 'Xem Guard PRO', href: '/products' },
    cta2: { label: 'Đặt ngay', href: '/order' },
    trust: 'Bảo hành fit 1 đổi 1 · Upper arch · Combat-grade EVA',
  },
  {
    label: 'LIGHT & Comfort',
    h1: 'Nhẹ nhàng hơn.',
    h1b: 'Bảo vệ không kém.',
    sub: 'Bóng rổ, bóng đá, gym — 2 lớp EVA mỏng, thoải mái suốt buổi tập.',
    cta1: { label: 'Xem LIGHT', href: '/products' },
    cta2: { label: 'Đặt ngay', href: '/order' },
    trust: 'Trong suốt · Siêu nhẹ · Vừa vặn như đúc',
  },
]

const INTERVAL = 5000

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [entered, setEntered] = useState(false)
  const [textIn, setTextIn] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Entrance animation on mount
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80)
    return () => clearTimeout(t)
  }, [])

  // Auto-advance slides
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setTextIn(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % SLIDES.length)
        setTextIn(true)
      }, 350)
    }, INTERVAL)
  }, [])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const goTo = (next: number) => {
    if (next === idx) return
    setTextIn(false)
    setTimeout(() => {
      setIdx(next)
      setTextIn(true)
    }, 300)
    resetTimer()
  }

  const slide = SLIDES[idx]

  const enter: React.CSSProperties = {
    opacity: entered ? 1 : 0,
    transform: entered ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 800ms ease, transform 800ms ease',
  }

  const textFade: React.CSSProperties = {
    opacity: textIn ? 1 : 0,
    transform: textIn ? 'translateY(0)' : 'translateY(10px)',
    transition: 'opacity 350ms ease, transform 350ms ease',
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0A1628]">

      {/* Full-bleed background image */}
      <div className="absolute inset-0" style={enter}>
        <Image
          src="/brand/hero-image.png"
          alt="TGG Custom Mouthguard"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Diagonal scrim — dark left for text legibility, fades right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(10,22,40,0.96) 0%, rgba(10,22,40,0.78) 38%, rgba(10,22,40,0.30) 65%, transparent 100%)',
          }}
        />
      </div>

      {/* Site container — text stays within max-w-6xl, image bleeds full */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 flex flex-col min-h-screen" style={enter}>

        {/* Text block — left aligned, top */}
        <div className="flex flex-col gap-5 pt-36 max-w-lg">

          {/* Slide label */}
          <span
            className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#60C8F3]"
            style={textFade}
          >
            {slide.label}
          </span>

          {/* Headline */}
          <div style={textFade}>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-tight">
              {slide.h1}
            </h1>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-[#1CA6DF] leading-tight">
              {slide.h1b}
            </h1>
          </div>

          {/* Sub */}
          <p className="text-[#CBD5E1] text-sm leading-relaxed max-w-sm" style={textFade}>
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap" style={textFade}>
            <Link
              href={slide.cta1.href}
              className="font-bold px-7 py-3 rounded-lg bg-[#1CA6DF] text-white hover:bg-[#1590C2] transition-all hover:scale-105"
            >
              {slide.cta1.label}
            </Link>
            <Link
              href={slide.cta2.href}
              className="font-bold px-7 py-3 rounded-lg border border-white/20 text-[#F1F5F9] hover:bg-white/10 transition-all"
            >
              {slide.cta2.label}
            </Link>
          </div>

          {/* Trust signals */}
          <p className="text-[#94A3B8] text-xs tracking-wide" style={textFade}>
            {slide.trust}
          </p>
        </div>

      </div>

      {/* Slide dot indicators — bottom center */}
      <div
        className="absolute bottom-10 left-0 right-0 z-10 flex justify-center items-center gap-2"
        style={enter}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === idx ? '28px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === idx ? '#1CA6DF' : 'rgba(255,255,255,0.25)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 400ms ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  )
}
