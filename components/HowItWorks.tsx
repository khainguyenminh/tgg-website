'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { photo, type Photo } from '@/data/photos'
import { ZALO_URL } from '@/lib/site'
import PhotoSlot from './ring/PhotoSlot'
import { ZaloIcon } from './ring/icons'

type Round = {
  title: string
  desc: string
  shot?: Photo
  slot?: string
}

const rounds: Round[] = [
  {
    title: 'Tư vấn',
    desc: 'Nhắn Zalo, Instagram hoặc Facebook. TGG tư vấn dòng LIGHT hay PRO hợp với môn bạn tập.',
    slot: 'Kỹ thuật viên tư vấn khách tại lab',
  },
  {
    title: 'Scan 3D miễn phí',
    desc: 'Scan tại TGG (Q. Tân Bình) hoặc tại nha khoa gần nhà, chỉ 10–15 phút. Khách ở tỉnh được hỗ trợ tìm điểm scan.',
    shot: photo('lab-model-arch'),
  },
  {
    title: 'Duyệt thiết kế',
    desc: 'Với gói Custom Text và Fully Design, TGG gửi bản thiết kế 2D trong 24 giờ để bạn xem và chỉnh.',
    shot: photo('lab-eva-sheets'),
  },
  {
    title: 'Sản xuất tại lab',
    desc: '2–3 ngày làm việc sau khi chốt thiết kế, theo quy trình của Khai Nguyên Dental Lab.',
    shot: photo('lab-glove-hold'),
  },
  {
    title: 'Nhận hàng',
    desc: 'Ship miễn phí toàn quốc, kèm hộp đựng và hướng dẫn vệ sinh.',
    shot: photo('case-box'),
  },
]

// Đội góc của bạn: 5 hiệp từ lúc nhắn tin đến lúc nhận guard
export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const items = useRef<(HTMLLIElement | null)[]>([])

  // Hiệp hiện tại = bước cuối cùng đã vượt qua giữa màn hình; phía trên bước 1 luôn là Hiệp 1
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const mid = window.innerHeight / 2
      let next = 0
      items.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < mid) next = i
      })
      setActive(next)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="quy-trinh" aria-labelledby="corner-title" className="relative scroll-mt-20 bg-arena py-24 md:py-32">
      <span aria-hidden="true" className="rope rope-white absolute inset-x-0 top-0 rounded-none opacity-80" />
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Cột trái ghim lại: đồng hồ hiệp */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="corner-title" className="apron text-[clamp(3rem,8vw,7rem)] text-arena-ink">
              Đội góc
              <span className="block text-corner">của bạn.</span>
            </h2>
            <p className="mt-6 max-w-[30rem] text-lg leading-relaxed text-arena-mute">
              Giữa hiệp, đội góc giữ mouthguard cho bạn. Trước trận, Khai Nguyên Dental Lab làm ra nó: năm hiệp, từ tin nhắn đầu
              tiên đến lúc guard nằm trong tay bạn.
            </p>

            <div className="mt-10 hidden lg:block" aria-hidden="true">
              <p className="placard tabular text-arena-mute">
                <span className="apron text-[5.5rem] text-arena-ink">Hiệp&nbsp;{active + 1}</span>
                <span className="ml-3 text-2xl">/ 5</span>
              </p>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {rounds.map((r, i) => (
                  <span
                    key={r.title}
                    className={`rope transition-[background-color,opacity] duration-500 ${i <= active ? 'rope-blue' : 'rope-white opacity-25'}`}
                  />
                ))}
              </div>
              <p className="placard mt-4 text-2xl text-arena-ink">{rounds[active].title}</p>
            </div>

            <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="corner-pad mt-10">
              <ZaloIcon />
              Bắt đầu hiệp 1
            </a>
          </div>

          <div>
          {/* Đồng hồ hiệp gọn cho điện thoại, ghim dưới menu */}
          <div className="sticky top-16 z-20 -mx-4 mb-8 bg-arena/95 px-4 pb-3 pt-3 backdrop-blur-sm lg:hidden" aria-hidden="true">
            <div className="flex items-baseline justify-between">
              <p className="placard tabular text-xl text-arena-ink">Hiệp {active + 1} / 5</p>
              <p className="placard text-base text-arena-mute">{rounds[active].title}</p>
            </div>
            <div className="mt-2 grid grid-cols-5 gap-1.5">
              {rounds.map((r, i) => (
                <span key={r.title} className={`rope transition-opacity duration-500 ${i <= active ? 'rope-blue' : 'rope-white opacity-25'}`} />
              ))}
            </div>
          </div>
          <ol className="flex flex-col gap-16 md:gap-24">
            {rounds.map((r, i) => (
              <li key={r.title} data-round={i} ref={(el) => { items.current[i] = el }}>
                {r.shot ? (
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
                    <Image
                      src={r.shot.src}
                      alt={r.shot.alt}
                      fill
                      placeholder="blur"
                      blurDataURL={r.shot.blurDataURL}
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <PhotoSlot label={r.slot ?? ''} className="aspect-[3/2]" />
                )}
                <div className="mt-6 grid gap-3 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                  <p className="apron text-5xl text-rope-red">Hiệp&nbsp;{i + 1}</p>
                  <div>
                    <h3 className="placard text-3xl text-arena-ink">{r.title}</h3>
                    <p className="mt-2 max-w-[34rem] text-lg leading-relaxed text-arena-mute">{r.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          </div>
        </div>

        {/* Ô chờ cho ảnh máy móc lab */}
        <div className="mt-24 grid gap-4 sm:grid-cols-3">
          <PhotoSlot label="Máy scan 3D trong miệng" className="aspect-[4/3]" />
          <PhotoSlot label="Máy ép nhiệt EVA" className="aspect-[4/3]" />
          <PhotoSlot label="Bàn làm việc và đồ nghề của kỹ thuật viên" className="aspect-[4/3]" />
        </div>
      </div>
    </section>
  )
}
