import Image from 'next/image'
import Link from 'next/link'
import { photo, type Photo } from '@/data/photos'
import { ZALO_URL } from '@/lib/site'
import PhotoSlot from './ring/PhotoSlot'
import { ArrowIcon, ZaloIcon } from './ring/icons'

type Step = {
  title: string
  desc: string
  shot?: Photo
  slot?: string
}

const steps: Step[] = [
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

// Quy trình: năm bước đọc từ trái sang phải, một sợi dây nối các số bước
export default function HowItWorks() {
  return (
    <section id="quy-trinh" aria-labelledby="steps-title" className="relative scroll-mt-20 bg-arena py-24 md:py-32">
      <span aria-hidden="true" className="rope rope-white absolute inset-x-0 top-0 rounded-none opacity-80" />
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <h2 id="steps-title" className="apron t-headline text-arena-ink">
              5 bước.
              <span className="block text-corner">Từ tin nhắn đến tay bạn.</span>
            </h2>
            <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-arena-mute">
              Khai Nguyên Dental Lab lo phần kỹ thuật. Bạn chỉ cần nhắn tin, đi scan và chọn thiết kế.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 self-end">
            <Link href="/quy-trinh" className="rope-link placard inline-flex min-h-11 items-center gap-2 text-lg text-arena-ink">
              Xem chi tiết quy trình <ArrowIcon />
            </Link>
            <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="corner-pad hidden lg:inline-flex">
              <ZaloIcon />
              Nhắn Zalo để bắt đầu
            </a>
          </div>
        </div>

        <ol className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-x-5">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col">
              {/* Số bước + dây nối sang bước kế tiếp */}
              <div className="flex items-center gap-4" aria-hidden="true">
                <span className="apron tabular text-5xl leading-none text-corner">{i + 1}</span>
                <span className={`rope flex-1 ${i === steps.length - 1 ? 'rope-blue' : 'rope-white opacity-25'}`} />
              </div>
              {s.shot ? (
                <div className="relative mt-5 aspect-[3/2] overflow-hidden rounded-[6px] bg-black">
                  <Image
                    src={s.shot.src}
                    alt={s.shot.alt}
                    fill
                    placeholder="blur"
                    blurDataURL={s.shot.blurDataURL}
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <PhotoSlot label={s.slot ?? ''} className="mt-5 aspect-[3/2] !gap-2 !p-4" />
              )}
              <h3 className="placard mt-5 text-2xl text-arena-ink">
                <span className="sr-only">Bước {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-arena-mute">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
