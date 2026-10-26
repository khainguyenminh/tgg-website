'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CrossSection from '@/components/ring/CrossSection'
import { ArrowIcon } from '@/components/ring/icons'
import { photo, type Photo } from '@/data/photos'
import { PRICE_FROM, TIERS, type LineKey, type Tier } from '@/lib/packages'
import EvaPalette from './EvaPalette'

// ── Dữ liệu ──────────────────────────────────────────────────────────────────

type Line = {
  key: LineKey
  name: string
  forWho: string
  lede: string
  sports: string[]
  layers: 2 | 3
  strengths: { title: string; desc: string; palette?: boolean }[]
  shots: { p: Photo; caption: string }[]
  baseNote: string
}

const LINES: Record<LineKey, Line> = {
  pro: {
    key: 'pro',
    name: 'PRO',
    forWho: 'Cho các môn đối kháng',
    lede: 'Dành cho các môn đối kháng. 3 lớp EVA dày chịu lực tác động trực tiếp từ nắm đấm và đòn đá. 16 màu, cá nhân hóa tự do.',
    sports: ['Boxing', 'Muay Thái', 'MMA', 'Kickboxing', 'Jiu-Jitsu', 'Judo', 'Grappling'],
    layers: 3,
    strengths: [
      { title: '3 lớp EVA dày', desc: 'Hấp thụ lực va chạm khi tập và thi đấu đối kháng.' },
      { title: 'Giữ chắc khi va chạm', desc: 'Làm theo khuôn răng, giữ chắc kể cả khi chịu cú đấm bất ngờ.' },
      { title: 'Cá nhân hóa tự do', desc: 'Tên, số, logo, artwork theo yêu cầu, có bản thiết kế xem trước khi sản xuất.' },
      { title: '16 màu EVA', desc: 'Thể hiện cá tính hoặc màu đồng phục đội, không còn máng trắng nhàm chán.', palette: true },
    ],
    shots: [
      { p: photo('kien-cuong'), caption: 'KIÊN CƯỜNG · Đen bóng đêm' },
      { p: photo('tfcmma'), caption: 'TFCMMA · Đỏ chiến binh' },
      { p: photo('dvn'), caption: 'DVN · Xanh hoàng gia' },
    ],
    baseNote: '1 trong 16 màu EVA',
  },
  light: {
    key: 'light',
    name: 'LIGHT',
    forWho: 'Cho thể thao vận động',
    lede: 'Dành cho thể thao vận động. 2 lớp EVA mỏng: nhẹ, thoáng, ít cản thở. Trong suốt, gần như không thấy khi đeo.',
    sports: ['Bóng rổ', 'Bóng đá', 'Gym / Fitness', 'Bóng chuyền', 'Trượt ván', 'Xe đạp'],
    layers: 2,
    strengths: [
      { title: 'Mỏng và nhẹ', desc: '2 lớp EVA mỏng, không cảm giác cồng kềnh, dễ quen ngay từ buổi đầu.' },
      { title: 'Thoáng khí', desc: 'Ít cản thở và giao tiếp khi thi đấu, tập trung vào hiệu suất.' },
      { title: 'Vừa khít', desc: 'Làm theo khuôn răng, không phải cắn giữ như máng đại trà.' },
      { title: 'Trong suốt', desc: 'Một màu trong suốt, không thay đổi ngoại hình khi đeo.' },
    ],
    shots: [
      { p: photo('lab-light-on-model'), caption: 'LIGHT trong suốt trên mẫu hàm' },
      { p: photo('lab-light-clear'), caption: 'LIGHT sau khi ép nhiệt' },
      { p: photo('lab-glove-check'), caption: 'Kiểm tra mép guard trước khi giao' },
    ],
    baseNote: 'Màu trong suốt',
  },
}

const ORDER: LineKey[] = ['pro', 'light']

// Gói Base theo từng dòng; gói sau liệt kê "tất cả gói trước" rồi phần thêm vào
function includesFor(tier: Tier, i: number, line: Line) {
  if (tier.id === 'base') return ['Scan 3D miễn phí', 'Làm riêng theo khuôn răng', line.baseNote, 'Không in chữ hay hình']
  return [`Tất cả trong gói ${TIERS[i - 1].name}`, ...tier.includes]
}

// ── Tab chọn dòng ────────────────────────────────────────────────────────────

export default function ProductTabs() {
  const [active, setActive] = useState<LineKey>('pro')
  const bar = useRef<HTMLDivElement>(null)
  const tabs = useRef<Record<LineKey, HTMLButtonElement | null>>({ pro: null, light: null })

  // #pro / #light trên URL mở thẳng đúng tab
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1)
      if (h === 'pro' || h === 'light') {
        setActive(h)
        bar.current?.scrollIntoView({ block: 'start' })
      }
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [])

  const choose = (k: LineKey, focus = false) => {
    setActive(k)
    history.replaceState(null, '', `#${k}`)
    if (focus) tabs.current[k]?.focus()
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    e.preventDefault()
    choose(active === 'pro' ? 'light' : 'pro', true)
  }

  const line = LINES[active]

  return (
    <div>
      {/* Thanh tab ghim dưới menu; vạch xanh trượt theo tab đang chọn */}
      <div ref={bar} className="sticky top-16 z-30 scroll-mt-16 bg-arena/95 backdrop-blur-sm md:top-[72px] md:scroll-mt-[72px]">
        <div className="mx-auto max-w-[1400px] px-4 pt-4 md:px-8">
          <div role="tablist" aria-label="Chọn dòng sản phẩm" className="relative grid max-w-[44rem] grid-cols-2 gap-3" onKeyDown={onKey}>
            {ORDER.map((k) => {
              const on = k === active
              return (
                <button
                  key={k}
                  ref={(el) => { tabs.current[k] = el }}
                  role="tab"
                  id={`tab-${k}`}
                  aria-selected={on}
                  aria-controls={`panel-${k}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => choose(k)}
                  className={`flex min-h-16 flex-col items-start justify-center px-1 pb-3 text-left transition-colors duration-200 ${on ? 'text-arena-ink' : 'text-arena-mute hover:text-arena-ink'}`}
                >
                  <span className="flex w-full items-baseline justify-between gap-3">
                    <span className="apron text-4xl leading-none">{LINES[k].name}</span>
                    <span className="placard tabular hidden text-base normal-case sm:inline">từ {PRICE_FROM[k]}</span>
                  </span>
                  <span className="placard mt-1 text-sm">{LINES[k].forWho}</span>
                </button>
              )
            })}
            <span
              aria-hidden="true"
              className="rope rope-blue absolute bottom-0 left-0 w-[calc(50%-0.375rem)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: active === 'pro' ? 'translateX(0)' : 'translateX(calc(100% + 0.75rem))' }}
            />
          </div>
        </div>
        <span aria-hidden="true" className="rope rope-white block rounded-none opacity-20" />
      </div>

      {/* key đổi theo tab để nội dung mới chạy lại hiệu ứng vào */}
      <div key={active} id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} className="anim-panel">
        <section className="bg-arena py-16 text-arena-ink md:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-4 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <h2 className="apron t-headline">{line.name}</h2>
              <p className="placard text-xl text-corner">{line.forWho}</p>
              <p className="mt-5 max-w-[34rem] text-lg leading-relaxed text-arena-mute">{line.lede}</p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2" aria-label="Phù hợp cho">
                {line.sports.map((s) => (
                  <li key={s} className="placard flex items-center gap-2 text-base">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-corner" />
                    {s}
                  </li>
                ))}
              </ul>

              {/* Điểm mạnh: danh sách chia bằng dây; mục 16 màu có bảng màu ngay bên dưới */}
              <dl className="mt-10 border-t-[3px] border-arena-ink">
                {line.strengths.map((s) => (
                  <div key={s.title} className="border-b-[3px] border-white/10 py-5">
                    <dt className="placard text-2xl">{s.title}</dt>
                    <dd className="mt-1.5 text-base leading-relaxed text-arena-mute">
                      {s.desc}
                      {s.palette && <EvaPalette />}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div className="grid gap-4">
                <figure>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
                    <Image src={line.shots[0].p.src} alt={line.shots[0].p.alt} fill placeholder="blur" blurDataURL={line.shots[0].p.blurDataURL} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="placard mt-2 text-sm text-arena-mute">{line.shots[0].caption}</figcaption>
                </figure>
                <div className="grid grid-cols-2 gap-4">
                  {line.shots.slice(1).map((s) => (
                    <figure key={s.p.id}>
                      <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
                        <Image src={s.p.src} alt={s.p.alt} fill placeholder="blur" blurDataURL={s.p.blurDataURL} sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                      </div>
                      <figcaption className="placard mt-2 text-sm text-arena-mute">{s.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <div className="mt-10 grid items-center gap-6 border-t-[3px] border-white/10 pt-8 sm:grid-cols-[minmax(0,16rem)_1fr]">
                <CrossSection layers={line.layers} tone="arena" />
                <p className="text-base leading-relaxed text-arena-mute">
                  <span className="placard block text-xl text-arena-ink">Mặt cắt {line.layers} lớp EVA</span>
                  {line.layers === 3
                    ? 'Ba lớp EVA ép nhiệt ôm sát hàm trên, dày hơn để chịu va chạm mạnh.'
                    : 'Hai lớp EVA mỏng ép nhiệt ôm sát hàm trên, nhẹ và thoáng.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ba gói trên canvas, chia bằng dây dọc */}
        <section aria-labelledby="pkg-title" className="on-canvas bg-canvas py-20 text-canvas-ink md:py-28">
          <div className="mx-auto max-w-[1400px] px-4 md:px-8">
            <h3 id="pkg-title" className="apron t-sub">Chọn gói {line.name}.</h3>
            <ol className="mt-10 grid gap-12 border-t-[3px] border-canvas-ink pt-10 lg:grid-cols-3 lg:gap-0">
              {TIERS.map((t, i) => {
                const recommended = t.id === 'custom'
                return (
                  <li key={t.id} className={`flex flex-col ${i > 0 ? 'lg:border-l-[3px] lg:border-canvas-deep lg:pl-10' : ''} ${i < 2 ? 'lg:pr-10' : ''}`}>
                    <p className="flex flex-wrap items-baseline gap-x-3">
                      <span className="placard text-2xl">{t.name}{line.key === 'pro' ? ' PRO' : ''}</span>
                      {recommended && <span className="placard rounded-[3px] bg-canvas-ink px-2 py-1 text-xs text-canvas">Khuyên dùng</span>}
                    </p>
                    <p className="placard tabular mt-3 text-4xl normal-case">{t[line.key].price}</p>
                    <ul className="mt-6 flex-1 space-y-3 text-base leading-snug">
                      {includesFor(t, i, line).map((item) => (
                        <li key={item} className="flex gap-3">
                          <span aria-hidden="true" className="mt-[0.6em] h-[3px] w-4 shrink-0 rounded bg-canvas-ink" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        href={`/order?line=${line.key}&pkg=${t[line.key].id}#order-form`}
                        className={recommended ? 'ink-pad' : 'rope-link placard inline-flex min-h-11 items-center gap-2 text-lg'}
                      >
                        Đặt gói này <ArrowIcon />
                      </Link>
                    </div>
                  </li>
                )
              })}
            </ol>

            {/* Lúc đang phân vân gói in chữ hay thiết kế toàn phần: cho xem trước */}
            <div className="mt-16 grid gap-6 border-t-[3px] border-canvas-ink pt-8 md:grid-cols-[1fr_auto] md:items-center md:gap-12">
              <div>
                <p className="placard text-2xl">Muốn xem guard của bạn trước khi đặt?</p>
                <p className="mt-2 max-w-[40rem] text-base leading-relaxed text-canvas-mute">
                  Chọn màu, thêm ảnh, thêm chữ và xem ngay kết quả. Tải preview về rồi gửi cho TGG qua Zalo để đặt hàng.
                </p>
              </div>
              <Link href="/customize" className="ink-pad justify-self-start">
                Tự thiết kế <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
