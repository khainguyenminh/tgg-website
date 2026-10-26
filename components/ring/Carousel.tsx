'use client'

import { Children, useCallback, useEffect, useRef, useState } from 'react'
import { ArrowIcon } from './icons'

// Băng ảnh bấm mũi tên: mỗi lần qua một trang, tới cuối thì quay về đầu (và ngược lại).
// Dưới băng là một sợi dây cho biết đang xem tới đâu. Vuốt ngang vẫn dùng được trên điện thoại.
export default function Carousel({
  label,
  tone = 'arena',
  itemClassName,
  children,
}: {
  label: string
  tone?: 'arena' | 'canvas'
  itemClassName: string
  children: React.ReactNode
}) {
  const track = useRef<HTMLUListElement>(null)
  const [progress, setProgress] = useState({ start: 0, size: 1 })

  const measure = useCallback(() => {
    const el = track.current
    if (!el) return
    const size = el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1
    const start = el.scrollWidth > 0 ? el.scrollLeft / el.scrollWidth : 0
    setProgress({ start, size: Math.min(1, size) })
  }, [])

  useEffect(() => {
    measure()
    const el = track.current
    if (!el) return
    el.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      el.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  // Đích cuộn gần nhất: bấm liên tục khi băng còn đang trượt thì tính tiếp từ đích, không từ vị trí dở dang
  const pending = useRef({ left: 0, at: 0 })

  const go = (dir: 1 | -1) => {
    const el = track.current
    const items = el?.children
    if (!el || !items || items.length < 2) return
    const stride = (items[1] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft
    const perView = Math.max(1, Math.floor((el.clientWidth + 16) / stride))
    const max = el.scrollWidth - el.clientWidth
    const base = performance.now() - pending.current.at < 700 ? pending.current.left : el.scrollLeft
    const index = Math.round(base / stride)

    // Vòng lặp: ở cuối bấm "tiếp" về đầu, ở đầu bấm "trước" ra cuối
    let left: number
    if (dir === 1) left = base >= max - 4 ? 0 : Math.min(max, (index + perView) * stride)
    else left = base <= 4 ? max : Math.max(0, (index - perView) * stride)

    pending.current = { left, at: performance.now() }
    const smooth = window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    el.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' })
  }

  const arena = tone === 'arena'
  const button = `flex h-12 w-12 items-center justify-center rounded-[6px] transition-colors duration-200 ${
    arena ? 'bg-arena-lift text-arena-ink hover:bg-corner hover:text-canvas-ink' : 'bg-canvas-ink text-canvas hover:bg-ink-lift'
  }`

  return (
    <div>
      <ul
        ref={track}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <li className={`shrink-0 snap-start ${itemClassName}`}>{child}</li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-6">
        {/* Dây tiến độ: đoạn sáng là phần đang hiện trên màn hình */}
        <div aria-hidden="true" className={`relative h-[3px] flex-1 overflow-hidden rounded-[3px] ${arena ? 'bg-white/15' : 'bg-canvas-deep'}`}>
          <span
            className={`absolute inset-y-0 rounded-[3px] transition-[left] duration-200 ${arena ? 'bg-corner' : 'bg-canvas-ink'}`}
            style={{ left: `${progress.start * 100}%`, width: `${progress.size * 100}%` }}
          />
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(-1)} aria-label="Xem ảnh trước" className={button}>
            <ArrowIcon className="h-5 w-5 rotate-180" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Xem ảnh tiếp" className={button}>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
