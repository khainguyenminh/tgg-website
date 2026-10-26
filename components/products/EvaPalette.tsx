'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PRO_COLORS } from '@/components/MouthguardDesigner/constants'
import { ArrowIcon } from '@/components/ring/icons'

// Bảng 16 màu EVA của dòng PRO: chạm hoặc rê vào ô màu để xem tên
export default function EvaPalette() {
  const [index, setIndex] = useState(2)
  const color = PRO_COLORS[index]

  return (
    <div className="mt-5">
      <p className="flex flex-wrap items-baseline gap-x-3" aria-live="polite">
        <span className="placard text-xl">{color.name}</span>
        <span className="placard text-sm text-arena-mute">{color.nameEn}</span>
      </p>
      <div role="group" aria-label="16 màu EVA của dòng PRO" className="mt-3 grid max-w-[17rem] grid-cols-4 gap-2 sm:max-w-[34rem] sm:grid-cols-8">
        {PRO_COLORS.map((c, i) => (
          <button
            key={c.hex}
            type="button"
            aria-label={c.name}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
            onMouseEnter={() => setIndex(i)}
            onFocus={() => setIndex(i)}
            className="aspect-square min-h-11 rounded-[6px] transition-transform duration-200 motion-safe:hover:-translate-y-0.5"
            style={{
              backgroundColor: c.hex,
              boxShadow:
                i === index
                  ? '0 0 0 3px var(--color-arena), 0 0 0 6px var(--color-arena-ink)'
                  : 'inset 0 0 0 1.5px rgb(255 255 255 / 0.18)',
            }}
          />
        ))}
      </div>
      <Link href="/customize" className="rope-link placard mt-6 inline-flex min-h-11 items-center gap-2 text-base text-arena-ink">
        Thử màu này trên guard <ArrowIcon className="h-4 w-4" />
      </Link>
    </div>
  )
}
