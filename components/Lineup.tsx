import Image from 'next/image'
import Link from 'next/link'
import { photo, type Photo } from '@/data/photos'
import { ArrowIcon } from './ring/icons'

// Chiếc đầu tiên đứng lớn, tám chiếc còn lại xếp quanh nó
const PICKS = ['raymond', 'tiboom', 'kevin', 'wave', 'thanh-phong', 'mikey', 'rabbit', 'tfcmma', 'anh-khiem'].map(photo)

function Tile({ p, lead }: { p: Photo; lead?: boolean }) {
  return (
    <li className={lead ? 'col-span-2 lg:row-span-2' : ''}>
      <Link href="/gallery" className={`group relative block overflow-hidden rounded-[6px] bg-black ${lead ? 'aspect-[3/2] lg:aspect-auto lg:h-full' : 'aspect-[3/2]'}`}>
        <Image
          src={p.src}
          alt={p.alt}
          fill
          placeholder="blur"
          blurDataURL={p.blurDataURL}
          sizes={lead ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.04]"
        />
        {/* Tên in trên guard nằm trên phần phản chiếu tối của mặt kính */}
        <span className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-3 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2.5 pt-8 md:px-4 md:pb-3">
          <span className={`placard truncate text-arena-ink ${lead ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
            {p.lettering || 'Fully Design'}
          </span>
          <span className="hidden shrink-0 text-sm text-arena-mute sm:inline">{p.color}</span>
        </span>
      </Link>
    </li>
  )
}

// Lineup: một bức tường nhỏ những chiếc đã làm, mỗi chiếc một cái tên
export default function Lineup() {
  const [lead, ...rest] = PICKS
  return (
    <section aria-labelledby="lineup-title" className="bg-arena py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <h2 id="lineup-title" className="apron t-headline text-arena-ink">
              174+ chiếc.
              <span className="block text-arena-mute">Mỗi chiếc một cái tên.</span>
            </h2>
            <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-arena-mute">
              Tên, số, cờ, logo câu lạc bộ hay hình vẽ tay: tất cả theo ý bạn, từ trong suốt tối giản đến full custom. Đây là
              những chiếc đã rời lab Khai Nguyên.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 lg:flex-col lg:items-end">
            <Link href="/gallery" className="rope-link placard inline-flex items-center gap-2 text-lg text-arena-ink">
              Mở toàn bộ gallery
              <ArrowIcon />
            </Link>
            <Link href="/customize" className="rope-link placard inline-flex items-center gap-2 text-lg text-corner hover:text-arena-ink">
              Thiết kế chiếc của bạn
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          <Tile p={lead} lead />
          {rest.map((p) => (
            <Tile key={p.id} p={p} />
          ))}
        </ul>
      </div>
    </section>
  )
}
