'use client'

import { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PRO_COLORS } from './MouthguardDesigner/constants'
import { photos, photo } from '@/data/photos'
import { ZALO_URL } from '@/lib/site'
import { ArrowIcon, ZaloIcon } from './ring/icons'

const sheets = photo('lab-eva-sheets')

function inkFor(hex: string) {
  const n = parseInt(hex.slice(1), 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b
  // So độ tương phản với đen và trắng, chọn bên cao hơn
  return (L + 0.05) / 0.05 > 1.05 / (L + 0.05) ? '#0D0D0D' : '#F2F4F5'
}

// Sàn đổi màu: chọn 1 trong 16 màu EVA PRO, cả mặt sàn đổi theo
export default function ColorFloor() {
  const [index, setIndex] = useState(() => PRO_COLORS.findIndex((c) => c.name === 'Cam lửa cháy'))
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  const color = PRO_COLORS[index]
  const ink = inkFor(color.hex)
  const matches = useMemo(() => photos.filter((p) => p.kind === 'guard' && p.color === color.name).slice(0, 3), [color.name])

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]
    if (!step) return
    e.preventDefault()
    const next = (i + step + PRO_COLORS.length) % PRO_COLORS.length
    setIndex(next)
    buttons.current[next]?.focus()
  }

  return (
    <section
      aria-labelledby="floor-title"
      className="floor-flood relative py-24 md:py-32"
      style={{ backgroundColor: color.hex, color: ink }}
    >
      <div className="mx-auto grid max-w-[1400px] gap-14 px-4 md:px-8 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div>
          <h2 id="floor-title" className="sr-only">Chọn màu EVA cho dòng PRO</h2>
          <p className="apron min-h-[2em] t-page" aria-live="polite">
            {color.name}
          </p>
          <p className="placard mt-2 text-lg opacity-80">{color.nameEn}</p>

          <div role="radiogroup" aria-label="Chọn màu EVA" className="mt-10 grid max-w-[30rem] grid-cols-8 gap-2">
            {PRO_COLORS.map((c, i) => {
              const checked = i === index
              return (
                <button
                  key={c.hex}
                  ref={(el) => { buttons.current[i] = el }}
                  type="button"
                  role="radio"
                  aria-checked={checked}
                  aria-label={c.name}
                  tabIndex={checked ? 0 : -1}
                  onClick={() => setIndex(i)}
                  onKeyDown={(e) => onKey(e, i)}
                  className="aspect-square min-h-11 rounded-[6px] transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: c.hex,
                    boxShadow: checked
                      ? `0 0 0 3px ${color.hex}, 0 0 0 6px ${ink}`
                      : `inset 0 0 0 1px ${ink === '#0D0D0D' ? 'rgb(0 0 0 / 0.25)' : 'rgb(255 255 255 / 0.3)'}`,
                  }}
                />
              )
            })}
          </div>

          <p className="mt-8 max-w-[28rem] text-base leading-relaxed opacity-90">
            Dòng PRO có 16 màu EVA, màu nằm trong chính tấm EVA chứ không phải lớp sơn phủ. Chưa chắc chọn màu nào? Nhắn Zalo để được tư vấn trước khi chốt.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="corner-pad"
              style={{ outline: `3px solid ${ink}`, outlineOffset: 0 }}
            >
              <ZaloIcon />
              Hỏi màu qua Zalo
            </a>
            <Link href="/customize" className="rope-link placard inline-flex items-center gap-2 text-lg">
              Thử màu trong công cụ thiết kế
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {matches.length > 0 ? (
            <>
              <figure>
                <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
                  <Image
                    key={matches[0].id}
                    src={matches[0].src}
                    alt={matches[0].alt}
                    fill
                    placeholder="blur"
                    blurDataURL={matches[0].blurDataURL}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="placard mt-2 text-base">{matches[0].lettering || 'Fully Design'}</figcaption>
              </figure>
              {matches.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {matches.slice(1).map((p) => (
                    <figure key={p.id}>
                      <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
                        <Image src={p.src} alt={p.alt} fill placeholder="blur" blurDataURL={p.blurDataURL} sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                      </div>
                      <figcaption className="placard mt-2 text-base">{p.lettering || 'Fully Design'}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </>
          ) : (
            <figure>
              <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
                <Image src={sheets.src} alt={sheets.alt} fill placeholder="blur" blurDataURL={sheets.blurDataURL} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-base">
                Chưa có ảnh guard màu {color.name.toLowerCase()} trên site. Đây là các tấm EVA thật trong lab.
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  )
}
